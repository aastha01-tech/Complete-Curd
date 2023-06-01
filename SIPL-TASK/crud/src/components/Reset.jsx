import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Reset() {
    const [data,setData] = useState([])
    const [vemail,setVemail] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        password();
    },[])
    const password = () => {
        console.log(data.email)
         fetch(`http://localhost:5000/showuser`).then((result)=>{
            result.json().then((resp)=>{
                resp.map((item) => {
                    
                    if (vemail === item.email) {
                        console.log(item.email,item._id);
                       window.localStorage.setItem('userid',JSON.stringify(item._id))
                        navigate('/reset_password');
                      } 
                 
                  });
            
            })
        })
       }
  return (
    <div className='container-fluid'>
    <div className='reset'>
      <input type="email" placeholder='Enter Your Email' value={vemail} onChange={(e)=>{setVemail(e.target.value)}} className='form-control' /><br/>
      <button className='btn btn-success' onClick={password}>Reset Password</button>
    </div>
    </div>
  )
}
