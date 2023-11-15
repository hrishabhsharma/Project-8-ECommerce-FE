import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./signup.css"
import axios from 'axios';

const Signup = () => {
  const nav = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  }
  const [User, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  })
  const handleUser = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value })
  }
  const [Message, setMessage] = useState("")
  const register = (e) => {
    e.preventDefault();
    axios.post("https://hrishabh-e-commerce.onrender.com/signup", User)
      .then(res => {
        setMessage(res.data.msg)
        if (res.data.token) {
          localStorage.setItem("userToken", res.data.token)
          localStorage.setItem("user", res.data.user)
          setTimeout(() => {
            nav("/")
            window.location.reload(true)
          }, 1000)
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='Page'>
      <h1>SignUp Page<br /> Hrep</h1>
      <form onSubmit={register}>
        <TextField
          name='name'
          label="Username"
          placeholder='your name'
          type='text'
          onChange={handleUser}
          required
        />
        <TextField
          name='phone'
          label="Mobile Number"
          placeholder='your mobile number'
          type='tel'
          onChange={handleUser}
          required
          inputProps={{
            inputMode: 'numeric',
            maxLength: 10,
            minLength: 10,
          }}
        // helperText={`${User.phone.length}/11`}
        />
        <TextField
          name='email'
          label="Email Address"
          placeholder='name@example.com'
          type='email'
          onChange={handleUser}
          required
        />
        <TextField
          name='password'
          label="password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleUser}
          InputProps={{
            endAdornment:
              <IconButton
                aria-label="toggle password visibility"
                onMouseEnter={handleToggleShowPassword}
                onMouseLeave={handleToggleShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
          }}
          required
        />
        <Button variant="contained" type='submit'>Submit</Button>
      </form>
      {
        Message ? <Typography mt={2}>{Message}</Typography> : ""
      }
      <p className='bottom_msg' onClick={() => nav("/")}>Already have an account? Go to Login</p>
    </div>
  )
}

export default Signup