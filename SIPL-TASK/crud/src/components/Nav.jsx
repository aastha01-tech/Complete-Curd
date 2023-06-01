import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const auth = window.localStorage.getItem('student')
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/login')
  }
  
  return (
    <div>
     <nav class="navbar navbar-expand-lg nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b style={{color:"darkcyan"}} >Aastha Creative</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/create">Create</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/register">Register</Link>
        </li>
        <>
        {auth ?
        <li class="nav-item">
        <Link class="nav-link" aria-current="page" onClick={logout} to="/register">Logout</Link>
      </li>:
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/login">Login</Link>
        </li>}
        </>  
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
