import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, TextField } from '@mui/material'


const Login = ({ onClose }) => {
  const nav = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [User, setUser] = useState({
    email: "",
    password: "",
  })
  const handleUser = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value })
  }
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/login", User)
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("userToken", (res.data.token))
          localStorage.setItem("userName", res.data.username)
          setTimeout(() => {
            nav('/')
            window.location.reload(true)
          }, 1500)
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="popup-container">
      <div className='popup'>
        <FontAwesomeIcon icon={faCircleXmark} size='2xl' onClick={onClose} className='closeButton' />
        <h1>Welcome <br /> Hrep</h1>
        <form onSubmit={login}>
          <TextField
            name='email'
            label="Email Address"
            type={'Email'}
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
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            }}
            required
          />
          <Button variant="contained" type='submit'>Submit</Button>
        </form>
        <p className='bottom_msg' onClick={() => { onClose(); nav("/signup") }}>Don't have an account? Sign Up</p>
      </div>
    </div >
  )
}

export default Login