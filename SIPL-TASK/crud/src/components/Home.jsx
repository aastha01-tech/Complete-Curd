import React from 'react';

export default function Home() {
  return (
   <div className='container-fluid'>
    <h2 style={{color:"darkcyan"}} >About Me</h2>
    <div className="row">
      <div className="col-sm-6">
        </div>
      <div className="col-sm-6">
        <h4>About Our Services </h4>
        <p className='text-justify'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className='btn btn-outline-dark' >Go For More...</button>
      </div>
    </div>
   </div>
  )
}
