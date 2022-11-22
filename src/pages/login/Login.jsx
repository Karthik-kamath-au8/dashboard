import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { connect } from "react-redux";
import {useNavigate } from "react-router-dom";
import "./login.scss"

const Login = ({login}) => {
  const [email,setEmail] =useState('');
  const [password,setPassword] = useState('');
  const history = useNavigate();
  const handleSubmit = () =>{
    if (login.Username === email && login.password === password){
      history('/home')
    }
    else{
      console.log('email or password is wrong!')
    }
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className="login">
      <h2>Login </h2>
      <TextField
        required
        id="outlined-required"
        label="Required"
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
        <TextField
        required
        id="outlined-required"
        label="Required"
        type='password'
        name='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained">SignIn</Button>
    </div>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    login: state.login.login,
  };
};

export default connect (mapStateToProps) (Login)