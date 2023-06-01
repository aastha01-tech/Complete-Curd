import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Table from './components/Table';
import Update from './components/Update';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import ResetPassword from './components/ResetPassword';
import Reset from './components/Reset';
import Nav from './components/Nav';

function App() {
  const auth = localStorage.getItem('student');
  if (auth) {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/home' element={<Home/>} />
             <Route path='/register' element={<Register />} />
            <Route path='/users' element={<Table />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update/:id' element={<Update />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/reset_password' element={<ResetPassword />} />
            <Route path='/reset' element={<Reset />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
