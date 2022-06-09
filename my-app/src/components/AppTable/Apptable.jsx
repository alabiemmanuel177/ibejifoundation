import React from "react";
import "./apptable.css"

function Apptable(){
    return(
     
            <div className='post'>
        <h1 className='page-head'>Applicants</h1>
        <div className='table-holder2'>
        <table class="table table-bordered table-width">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Phone Number </th>
      <th scope="col">Home Address</th>
      <th scope="col">Types of Application</th>
      
    </tr>
  </thead>
  <tbody>
    <tr className='wrap'>
      <th scope="row">1</th>
      <td>Alabi Emmanuel</td>
      <td className="hold">mekoemma3003@gmail.com</td>
      <td>08188102756</td>
      <td className="hold">Ibeji Foundation Ibeji Foundation Ibeji Foundation Ibeji Foundation Ibeji Foundation</td>
      <td>Loan</td>
      
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>January to december stuff </td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td></td>
    
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>January to december stuff</td>
      <td>Senior</td>
      <td>Remote</td>           
      <td>2019</td>
      <td></td>
      
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td></td>
     
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td></td>
      
    </tr>
  </tbody>
</table>
</div>
      </div>
     
    )
}

export default Apptable;