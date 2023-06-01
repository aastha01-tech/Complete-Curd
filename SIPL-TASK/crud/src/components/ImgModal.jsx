import React from 'react';
import {BsCloudArrowUp} from 'react-icons/bs'

export default function ImgModal() {
  return (
    <div>
      
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Bulk Upload</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{marginLeft:"20px",marginTop:"10px"}} className="modal-body img-upload">
        <input type="file" multiple ></input>
            <h2 className='txt' style={{textAlign:"center"}} >Drop file here or click to upload Bulk Upload</h2><BsCloudArrowUp className='file-icon' />
        
      </div>
      <h5 style={{color:"gray",marginTop:"20px",marginLeft:"5px"}} >Sample Preview</h5><hr/>
      <table className='table table-hover' >
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>AWS NO</th>
                    <th>Carrier Name</th>
                    <th>Customer Email</th>
                    <th>Customer Phone</th>
                    <th>Customer Name</th>
                    <th>Shipment Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>TEST1</td>
                    <td>TESTAWBI1</td>
                    <td>FEDEX</td>
                    <td>Customer@gmail.com</td>
                    <td>7398005662</td>
                    <td>Customer</td>
                    <td>1(for customer)</td>
                </tr>
            </tbody>
        </table>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
