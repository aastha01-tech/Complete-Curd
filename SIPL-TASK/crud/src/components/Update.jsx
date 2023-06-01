import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Create() {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const[branch,setBranch] = useState('');
  const[mobile,setMobile] = useState('');
  const[contact,setContact] = useState('');
  const[technology,setTechnology] = useState('');
  const[gender,setGender] = useState('');
  const params = useParams()
  const navigate = useNavigate()

 
  const reset=()=>{
    setName('');
    setAddress('');
    setEmail('');
    setBranch('');
    setContact('');
    setGender('');
    setMobile('');
    setTechnology('');
  }

  useEffect(()=>{
    getPrifillData();
    console.log(params)
  },[])

  const getPrifillData=async()=>{
    let result = await fetch(`http://localhost:5000/show/${params.id}`)
    result = await result.json()
    console.log(result)
        setName(result.name)
        setAddress(result.address)
        setContact(result.contact)
        setMobile(result.mobile)
        setTechnology(result.technology)
        setBranch(result.branch)
        setGender(result.gender)
        setEmail(result.email)
  }

  const update=async()=>{
   var result = await fetch(`http://localhost:5000/show/${params.id}`,{
      method:"put",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,email,technology,gender,branch,contact,mobile,address})
    })
    result = await result.json()
    console.log(result)
    navigate('/')
  }

  return (
    <>
      <div className="row">
        <h2 style={{textAlign:"center"}} >Create User Details</h2><hr/>
        <div className="col-sm-6">
            Name <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' className='form-control' />
            Branch <input type="text" value={branch} onChange={(e)=>{setBranch(e.target.value)}} placeholder='Enter Your Branch' className='form-control' />
            Address <textarea type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='Enter Your Address' className='form-control' />
            Email <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' className='form-control' />
        </div>
        <div className="col-sm-6">
           Mobile <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder='Enter Your Number' className='form-control' />
           Emergency Contact <input type="number" value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder='Enter Your Number' className='form-control' />
          Technology <select className='form-control' value={technology} onChange={(e)=>{setTechnology(e.target.value)}} >
            <option>--select--</option>
            <option>Computer Science</option>
            <option> Science</option>
            <option>Information </option>
           </select><br/>
          <input name='a' value='male' onChange={(e)=>setGender(e.target.value)} type="radio" />Male
           <input name='a' value='female' onChange={(e)=>setGender(e.target.value)} type="radio" />Female
            <div className="">
              <button className='btn btn-primary w-25' onClick={update} >Update</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btn btn-success w-25' onClick={reset} >Reset</button>
            </div>
            </div>
      </div>
</>
  )
}
