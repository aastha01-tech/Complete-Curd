import React,{useState} from 'react'

export default function ResetPassword() {
    const [oldPassword,setOldPassword] = useState('')
     const [newPassword,setNewPassword] = useState('')

    const reset=()=>{
        let data=({oldPassword,newPassword})
        let id = JSON.parse(window.localStorage.getItem('userid'))
        console.log(id)
        fetch(`http://localhost:5000/showadmin/${id}`,{
          method : 'put',
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(data)
        })
    }
  return (
    <div className='container-fluid'>
      <div className="reset-password">
      <input type="password" value={oldPassword} placeholder='Enter Your Old Password' className='form-control' onChange={(e)=>{setOldPassword(e.target.value)}} /><br/>
      <input type="password" value={newPassword} placeholder='Enter Your New password' className='form-control' onChange={(e)=>{setNewPassword(e.target.value)}} /><br/>
        <button className='btn btn-success w-25' onClick={reset} >Save</button>
      </div>
    </div>
  )
}
