import React from "react";
import "./apptable.css"
import DelBtn from "../DelBtn";

function Apptable(){
    return(
     
            <div className='post'>
        <h1 className='page-head'>Applicants</h1>
        <div className='table-holder3'>
        <table class="table table-bordered table-width fixed">
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Phone Number </th>
      <th scope="col">Home Address</th>
      <th scope="col">Types of Application</th>
      <th scope="col">Control</th>
      
    </tr>
  </thead>
  <tbody>
    <tr className='wrap'>
      <th scope="row">1</th>
      <td className="hold1">jkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkk</td>
      <td className="hold1">jkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkjkkk</td>
      <td className="hold1"></td>
      <td className="hold1">yu</td>
      <td className="hold1">ou'l</td>
       <td className="hold1"><DelBtn/></td>
      
    </tr>

  </tbody>
</table>
</div>
      </div>
     
    )
}

export default Apptable;