import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useDataLayerValue } from './DataLayer';
import ReplyItem from "./ReplyItem"
import CreateReply from './CreateReply';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 350
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function DiscussionEntity({index}) {
    const [{discussions}, dispatch] = useDataLayerValue()
    const classes = useStyles();
    const  discussion =discussions.filter(discussion => discussion.id===index)[0];
    console.log(discussion)
    const {createdBy,createdTime,text,replies, repliesInfo} = discussion
    let repliesExist = false;
    if(replies>0) {
        repliesExist = true;
        
    }
    return (
        <div>
           <Card className= {classes.root} className ="discussionItem"  variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {createdBy}
        </Typography>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <small>{createdTime}</small>
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
         Replies :{replies}
        </Typography>
      </CardContent>
      
    </Card>
    {repliesExist && 
        repliesInfo.map(({text,createdBy,createdTime,replies,id})=>
        <ReplyItem   key ={id} parentId = {index}  text ={text}  createdBy = {createdBy} createdTime ={createdTime} replies ={replies} id ={id} />
        )

        
    }
    <CreateReply   parentId = {index}/>

        </div>
    )
}

export default DiscussionEntity
