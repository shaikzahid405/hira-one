import React,{useState} from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import "./CreateReply.css";
import {useDataLayerValue} from "./DataLayer"
function CreateReply({parentId,key,text,createdBy, createdTime,id}) {
    const [replyText, setReplyText] = useState("");
    const [{discussions,user,index,triggerDiscussion},dispatch] = useDataLayerValue();
    const [discussionContent, setDiscussionContent] = useState({})
    const handleClick =async(e) => {
        e.preventDefault();
        console.log(replyText,parentId);
        const discussionItem= discussions[parentId-1];
        discussionItem.replies = discussionItem.replies+1;
        console.log(discussionItem.replies);
        if(discussionItem.replies!==1){
            discussionItem.repliesInfo = [...discussionItem.repliesInfo ,{
                createdTime: new Date().toUTCString(),
                 createdBy:user,
                 text : replyText,
                 id : discussionItem.replies
             }]

        }
        else{
            discussionItem.repliesInfo = [{
                createdTime: new Date().toUTCString(),
                 createdBy:user,
                 text : replyText,
                 id : discussionItem.replies
             }]

        }
        
        console.log(discussionItem.repliesInfo);
        discussions[parentId-1] = discussionItem;
        console.log(discussions);
        dispatch({
            type: "SET_REPLY",
            discussions:discussions
        })

        
       // console.log(discussionContent);
       

            

        
        setReplyText("");
        const replyViewExitter =  await setTimeout(()=> {console.log("Reply View is about to exist")},10000);
        

    }
   
   
    return (
       
            <Container component="main" className ="createReply-container">
            <CssBaseline />
            <form className="replyItem" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="discussionItem"
            label="New Reply"
            name="replyItem"
            autoComplete="replyItem"
            autoFocus 
            value ={replyText}
            className = "createReply-text"
            onChange ={(e)=> setReplyText(e.target.value)}
          />
          
          
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className="replySubmit"
            onClick = {handleClick}
          >
            Add Reply
          </Button>
          </form>
          </Container>
            
       
    )
}

export default CreateReply
