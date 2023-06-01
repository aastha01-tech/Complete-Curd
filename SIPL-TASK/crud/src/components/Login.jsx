import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import {FcGoogle} from 'react-icons/fc';
import {CiLinkedin} from 'react-icons/ci';
import {AiFillGithub} from 'react-icons/ai'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password,setC_password] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem("student");
        if (auth) {
            navigate("/");
        }
    })
    const loginData = async () => {
        console.log(email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password,c_password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.log(result)
        if (result.name) {
            localStorage.setItem("student", JSON.stringify(result));
            toast("Login Successfully Done ...! :)");
            navigate("/");
        } else {
            alert("Please Enter correct details...")
        }
    }

    const resetData=()=>{
       navigate('/reset')
    }
    return (
        <div className="login-back">
            <div className='row'>
                <div className='col-sm-4' ></div>
                <div className='col-sm-4' >
                    <div className="login-here">
                        <div className="login-logo" >
                            <h1>Creative</h1>
                        </div>
                        <div className='login-input'>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text" style={{borderRadius:"5px 0px 0px 5px"}} >Email</div>
                                </div>
                                <input className="form-control" type="text" value={email} style={{borderRadius:"0px 5px 5px 0px"}} required onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend" >
                                    <div class="input-group-text" style={{borderRadius:"5px 0px 0px 5px"}}>Password</div>
                                </div>
                                <input className="form-control" type="password" style={{borderRadius:"0px 5px 5px 0px"}} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br />
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend" >
                                    <div class="input-group-text" style={{borderRadius:"5px 0px 0px 5px"}}>Confirm Password</div>
                                </div>
                                <input className="form-control" type="password" style={{borderRadius:"0px 5px 5px 0px"}} value={c_password} onChange={(e) => setC_password(e.target.value)} placeholder="Enter Password" /><br />
                            </div>
                            <button className="btn btn-success w-25" onClick={loginData}>Login</button>&nbsp; &nbsp;&nbsp;
                            <button className="btn btn-secondary w-25" onClick={resetData}>Reset</button><br/><br/>
                                <div class="line">
                                <p className='login-p' >or</p>
                                </div>
                                <div>
                                   <center>
                                   <FcGoogle className='icon' />
                                    <CiLinkedin className='icon'/>
                                    <AiFillGithub className='icon'/>
                                   </center>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4' ></div>

            </div>
        </div>
    )
}
export default Login;