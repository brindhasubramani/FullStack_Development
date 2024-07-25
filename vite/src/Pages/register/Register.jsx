// import React from 'react'

// export default function Register() {
//   return (
//     <div>Register</div>
//   )
// }
// import React from 'react'

// export default function Login() {
//   return (
//     <div>Login</div>
//   )
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography,Button } from '@mui/material';
import { useRef } from 'react';

export default function Register() {
    let name=useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const[error,setError]=React.useState({name:false,email:false,password:false})
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    
    if(name.current.value && email.current.value&& password.current.value ){
        if(! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value)){
            setError((prev)=>{
                return{...prev,email:true,password:false,name:false}
            })
        }
        else{
            setError((prev)=>{
                return{...prev,email:false,password:false,name:false}
            })
        
        console.log(name.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
        }
    }
    else {
        if(!name.current.value && !password.current.value && !email.current.value){
            setError((prev)=>{
                return{...prev,name:true,email:true,password:true};
            })
        }
    
        else if(!name.current.value)
        {
            setError((prev)=>{
                return{...prev,name:true};
            })
        }
        else if(!email.current.value)
        {
                setError((prev)=>{
                return{...prev,email:true};
            })
        }
        else if(!password.current.value)
        {
            setError((prev)=>{
            return{...prev,password:true};
        })
        }
    console.log("Error")
    }
}
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"column",
        width:'100%',
        height:'100vh'
      }}
      noValidate
      autoComplete="off"
    >
        <Typography sx={{textAlign:'center'}} variant='h4'>REGISTER</Typography>
        <Box>
      <TextField inputRef={name} id="outlined-basic" label="Name" variant="outlined" />
      {error.name&&(<Typography  color={"red"} fontSize={"10px"}>
        Fill the name
         </Typography>)}
      </Box>
       <Box>
      <TextField inputRef={email} id="filled-basic" label="Email" variant="filled" />
      {error.email&&(
      <Typography  color={"red"} fontSize={"10px"}>Fill the Email </Typography>)}
      </Box> 
      <Box>
      <TextField inputRef={password} id="standard-basic" type="password" label="Password" variant="standard" />
    {error.password&&(<Typography  color={"red"} fontSize={"10px"}>Fill the password </Typography>)}
    </Box>
    <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
    </Box>
  );
}