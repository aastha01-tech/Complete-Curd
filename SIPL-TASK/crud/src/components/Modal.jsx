import React, { useState } from 'react'

export default function Modal() {
    const[aws,setAws] = useState('')
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[order,setOrder] = useState('')
    const[stype,setStype] = useState('')
    const[country,setCountry] = useState('')
    const[couriers,setCouriers] = useState('')
    const[mobile,setMobile] = useState('')
    // const[company,setCompany] = useState('')

    const addShipment=()=>{
        var data = ({aws,name,email,order,stype,country,couriers,mobile})
        console.log(data)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Register Page</h1>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Register Here
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Shipments</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>(fields marked with <span style={{ color: "red" }} >*</span> are mendatory)</p>
                            <div className="row" >
                                <div className="col-sm-6">
                                    <label>AWS Number <span style={{ color: "red" }} >*</span></label>
                                    <input type="number" value={aws} onChange={(e)=>{setAws(e.target.value)}} className='form-control' /><br />
                                    <label>Customer Name <span style={{ color: "red" }} >*</span></label>
                                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control' /><br />
                                    <label>Email <span style={{ color: "red" }} >*</span></label>
                                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control' /><br />
                                    <label>Order ID <span style={{ color: "red" }} >*</span></label>
                                    <input type="text" value={order} onChange={(e)=>{setOrder(e.target.value)}} className='form-control' /><br />
                                    <label>Shipments Type <span style={{ color: "red" }} >*</span></label>
                                    <select className='form-control mt-2' value={stype} onChange={(e)=>{setStype(e.target.value)}} style={{ "-webkitAppearance": "push-button" }} >
                                        <option value="all">Choose Shipments Type</option>
                                        <option value="road">By Road</option>
                                        <option value="train">By Train</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label>Choose Couriers <span style={{ color: "red" }} >*</span></label>
                                    <select className='form-control mt-2' value={couriers} onChange={(e)=>{setCouriers(e.target.value)}} style={{ "-webkitAppearance": "push-button" }} >
                                        <option value="all">Choose Couriers</option>
                                        <option value="pending">Pending Couriers</option>
                                        <option value="success">Success Couriers</option>
                                        <option value="done">Done Couriers</option>
                                    </select><br />
                                    <label>Mobile Number <span style={{ color: "red" }} >*</span></label>
                                    <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className='form-control' /><br />
                                    <label>Choose Country <span style={{ color: "red" }} >*</span></label>
                                    <select className='form-control mt-2' value={country} onChange={(e)=>{setCountry(e.target.value)}} style={{ "-webkitAppearance": "push-button" }} >
                                        <option value="all">Choose Country</option>
                                        <option value="india">India</option>
                                        <option value="japan">Japan</option>
                                        <option value="nepal">Nepal</option>
                                    </select>
                                    <br />
                                    <label>Company Name <span style={{ color: "red" }} >*</span></label>
                                    <input type="number" readOnly placeholder='Sager Informatics Pvt Ltd' className='form-control' /><br /><br />
                                    <button type="button" onClick={addShipment} class="btn btn-primary">Add Shipment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
