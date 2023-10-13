// import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./hrep.css"

const Login = ({ onClose }) => {
    const nav = useNavigate()
    const [User,setUser] = useState({
        email:    "",
        password: "",
    })
    const handleUser = (e)=>{
        setUser({...User,[e.target.name]:e.target.value})
    }
  return (
    <div className="popup-container">
      <div className='popup'>
      <h1>Welcome <br/> Hrep</h1>
      <button onClick={onClose}>Close</button>
      <form onSubmit="#">
        <div className="form-floating mb-3">
          <input name='email' onChange={handleUser} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input name='password' onChange={handleUser} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        {/* {
          Message ? <div id="emailHelp" className="form-text">{Message}</div> : ""
        } */}
        <button type='submit'>Submit</button>
      </form>
      <p className='bottom_msg' onClick={()=>nav("/signup")}>Don't have an account? Sign Up</p>
    </div>
    </div>
  )
}

export default Login