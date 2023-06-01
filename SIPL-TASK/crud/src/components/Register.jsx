import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

export default function Register() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[mobile,setMobile] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const register=async()=>{
        console.log({name,email,mobile,password})
        let result =await fetch('http://localhost:5000/register',{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name,email,mobile,password})
        })
        result = await result.json()
        window.localStorage.setItem('student',JSON.stringify(result))
        toast("Register Successfully Done ...! :)");
        login()
    }
    const login=()=>{
      navigate('/login')
    }
  return (
    <div>
      <div className="row">
      <div className="col-sm-6">
          </div>
        <div className="col-sm-6">
            <form action="" className='register'>
                <h3 style={{textAlign:"center"}}>Register Here</h3><hr/>
                <input type="text" className='form-control input_register' placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <input type="email" className='form-control input_register' placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                <input type="number" className='form-control input_register' placeholder='Enter Your Number' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /><br/>
                <input type="password" className='form-control input_register' placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                <button className='btn btn-success w-25' onClick={register} >Register</button>&nbsp; &nbsp; &nbsp;
                <button className='btn btn-primary w-25' onClick={login} >Login</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}
