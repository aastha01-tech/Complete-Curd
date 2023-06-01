import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'


export default function Table() {
    //const PAGE_SIZE = 2;
    const[data,setData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
  
    useEffect(()=>{
        getDetails();
    },[])

    const getDetails=async()=>{
        let result = await fetch('http://localhost:5000/show',{
            method:"get"
        })
        result = await result.json()
        setData(result)
       // setTotalPages(Math.ceil(result.totalCount / PAGE_SIZE));
        
    }
    // const handlePrevClick = () => {
    //   setCurrentPage(currentPage - 1);
    // };
  
    // const handleNextClick = () => {
    //   setCurrentPage(currentPage + 1);
    // };
    const deleteData=(id)=>{
      if(window.confirm("Are You Sure To Delete Record...?")){
       fetch(`http://localhost:5000/show/${id}`,{
        method:"delete"
      }).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          getDetails();
        })
      })
      
      }
    }
    const searchHandle=async(event)=>{
      console.log(event.target.value)
      let key = event.target.value;
      if(key){
        
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json()
      if(result){
        setData(result)
      }else{
        getDetails();
      }
      }
    }
  return (
    <div>  
   <div className="row" style={{stack:"overFlowX"}} >
    <div className="col-sm-12">
      <form class="d-flex" role="search">
        <input class="form-control me-2 w-25 m-auto text-center" type="search" onChange={searchHandle} placeholder="Search Your Data" aria-label="Search"  /><FaSearch className='search' />
       </form>
      {data.length>0 ? <table className='table table-hover' >
    <thead>
      <tr>
        <th>Edit</th>
        <th>Delete</th>
        <th>S.NO</th>
        <th>Profile</th>
        <th>Name</th>
        <th>Branch</th>
        <th>Address</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Emergency Contact</th>
        <th>Technology</th>
        <th>Gender</th>
        
      </tr>
    </thead>
    <tbody>
        {
           data.map((item,index)=>
            <tr key={item._id}>
             
              <td><Link to={'/update/'+item._id}><button className='btn btn-warning'>Edit</button></Link></td>
              <td><button className='btn btn-danger' onClick={()=>deleteData(item._id)} >Delete</button></td>
                <td><b style={{fontSize:"20px"}} >{index+1}</b></td>
                <td><img src={`./uploads/${item.image}`} height='40px' width={40} style={{borderRadius:"5px"}} alt='...'/></td>
                <td>{item.name}</td>
                <td>{item.branch}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.contact}</td>
                <td>{item.technology}</td>
                <td>{item.gender}</td>
            </tr>
            )
        }
    </tbody>
  </table> :
  <h1>No Data Found</h1>
  }
    </div>
   </div>
   {/* <div>
      {Table()}
      <button onClick={handlePrevClick} disabled={currentPage === 1}>Prev</button>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
    </div> */}

    </div>
  )
}
