import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./DiscussionItem.css";
import { useDataLayerValue } from './DataLayer';
import { useHistory } from 'react-router';
import "./ReplyItem.css"
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

export default function ReplyItem({text,createdBy,createdTime,replies,id}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [{triggerDiscussion,index},dispatch] = useDataLayerValue();
  
  

  return (
    <Card className= {classes.root} className ="replyItemCard"  variant="outlined">
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
        
      </CardContent>
      
    </Card>
  );
}