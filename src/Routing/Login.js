import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
  var [fname,setFname]=useState('');
  var [mail,setMail]=useState('');
  var go=useNavigate();
var handleSubmit=(event)=>{
  event.preventDefault();
  if(fname && mail)
  {
    setUser({fname,mail});
    go('/dashboard');
  }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="fname" name="fname" onChange={(e)=>{setFname(e.target.value)}}/>
        <label>Email</label>
        <input type="email" id="mail" name="mail" onChange={(e)=>{setMail(e.target.value)}}/>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login