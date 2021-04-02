import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  { useDataLayerValue } from  './DataLayer'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
       HIRA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
    const db  =['shaik','abhinay'];
    const  [state,dispatch] = useDataLayerValue();
    const [input, setInput] =  useState("");
    const [password,setPassword] = useState("")
    const [authentication,setAuthentication] = useState(true);
    const [validation,setValidation] = useState(false);
  const classes = useStyles();
  const handleValidation  =(e) =>{
    e.preventDefault();
    if(input !== 'shaik@hira.one') {
      setValidation(true);
      console.log(validation)

    }
  }
  const handleSubmit  = (e)=> {
    e.preventDefault();
    console.log(input);
    console.log(db);
    if (input === 'shaik@hira.one' && password === 'secret1' || input === 'abhinay@hira.one' && password === 'secret2') {
         
       
        dispatch({
            type : "SET_USER",
            user : input,
            password: password
        })
        setInput("")
        setPassword("")
        

    }
    else{
        
        setAuthentication(false);
        
        
       
       
        

        dispatch({
            type : "SET_USER",
            user : null,
            password: null,
            
        })
        
        setInput("");
        setPassword("");
       

    }
   
    
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus 
            value ={input}
            onChange ={(e)=> setInput(e.target.value)}
          />
           <Grid container>
            <Grid item xs>
              
                  {input && input.length>8 &&  (input !== 'abhinay@hira.one' && input !=='shaik@hira.one')?
                  <Typography variant="body2" color="textSecondary" align="center">
                  Please check your email
                    </Typography>
                   
                   :""}
            </Grid>
            </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            inputProps={{ minLength: 5 }}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value ={password}
            onChange ={(e)=> setPassword(e.target.value)}

            

          />
          <Grid container>
            <Grid item xs>
            { input && password && password.length>6 && ((password !== 'secret1' && input === 'shaik@hira.one' ) || (password !== 'secret2' && input === 'abhinay@hira.one' ))  ?
                 <Typography variant="body2" color="textSecondary" align="center">
                        Please check your password
                 </Typography>
                 
                  :""}
            </Grid>
            </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit} onClick ={handleSubmit} 
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
            { validation  ?
                 <Typography variant="body2" color="textSecondary" align="center">
                        Please check your credentials
                 </Typography>
                 
                  :""}
              
                
                  
  
              
             
                 
                  
                
              
            </Grid>
            
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}