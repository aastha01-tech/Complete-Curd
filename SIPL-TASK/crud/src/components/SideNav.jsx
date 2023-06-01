import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt}from "react-icons/fa";
import {AiFillHome} from 'react-icons/ai';
import {IoIosCreate} from 'react-icons/io';
import {SiTheregister} from 'react-icons/si';
import {HiOutlineLogin} from 'react-icons/hi';
import {BiLogOut} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Create from './Create';
import Login from './Login';
import Table from './Table';
import Register from './Register';


const SideNav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<AiFillHome/>,
            page:<Table/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
           
        },
        {
            path:"/create",
            name:"Create",
            icon:<IoIosCreate/>
        },
        {
            path:"/register",
            name:"Register",
            icon:<SiTheregister/>
        },
        {
            path:"/login",
            name:"Login",
            icon:<HiOutlineLogin/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<BiLogOut/>
        }
    ]
    return (
        <div className="container-nav">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>
           {children}
           </main>
        </div>
    );
};

export default SideNav;