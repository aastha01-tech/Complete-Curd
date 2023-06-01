import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Radio} from 'antd';

export default function Create() {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const[branch,setBranch] = useState('');
  const[mobile,setMobile] = useState('');
  const[contact,setContact] = useState('');
  const[technology,setTechnology] = useState('');
  const[gender,setGender] = useState('');
  const[image,setImage] = useState('');
  const navigate = useNavigate()

  const save=async()=>{
    
    // var data = {name,email,address,branch,mobile,contact,technology,gender,image}
    // console.log(data)
    let formData = new FormData();
    formData.append('name',name)
    formData.append('email',email)
    formData.append('address',address)
    formData.append('branch',branch)
    formData.append('mobile',mobile)
    formData.append('contact',contact)
    formData.append('technology',technology)
    formData.append('gender',gender)
    formData.append('image',image)
    let result =await fetch('http://localhost:5000/create',{
      method:"post",
      body:formData
    })
    result = await result.json()
    
    setName('');
    setAddress('');
    setEmail('');
    setBranch('');
    setContact('');
    setGender('');
    setMobile('');
    setTechnology('');
    navigate('/')
  }
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

  return (
    <>
      <div className="row create">
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
           <input type="file" className='form-control'  onChange={(e)=>{setImage(e.target.files[0])}} />
           <Radio name='a' value='female' onChange={(e)=>setGender(e.target.value)}>Female</Radio>
           <Radio name='a' value='male' onChange={(e)=>setGender(e.target.value)}>Male</Radio>
           <Radio name='a' value='other' onChange={(e)=>setGender(e.target.value)}>Other</Radio>
           <div className="">
                <button className='btn btn-danger w-25' onClick={reset} >Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='btn btn-success w-25' onClick={save} >Save</button>
             </div>
            </div>
      </div>
</>
  )
}
