import React,{useState} from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import "./CreateDiscussion.css";
import {useDataLayerValue} from "./DataLayer"
function CreateDiscussion() {
    const [discussionText, setDiscussionText] = useState("");
    const [{discussions,user,index},dispatch] = useDataLayerValue();
    const [discussionContent, setDiscussionContent] = useState({})
    const handleClick =(e) => {
        e.preventDefault();
        console.log(discussionText,"hii")
        
        console.log(discussionContent);
        dispatch({
            type: "SET_DISCUSSION",
            discussions : [...discussions,{
                id : discussions.length+1,
                createdTime : new Date().toUTCString(),
                createdBy :user,
                text : discussionText,
                replies: 0
    
            }], 
            index: index+1

            

        })
        setDiscussionText("");
    }
   
   
    return (
       
            <Container component="main" className ="createDiscussion-container">
            <CssBaseline />
            <form className="discussionItem" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="discussionItem"
            label="New Discussion"
            name="discussionItem"
            autoComplete="discussionItem"
            autoFocus 
            value ={discussionText}
            className = "createDiscussion-text"
            onChange ={(e)=> setDiscussionText(e.target.value)}
          />
          
          
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className="discusssionSubmit"
            onClick = {handleClick}
          >
            Add Discussion
          </Button>
          </form>
          </Container>
            
       
    )
}

export default CreateDiscussion
