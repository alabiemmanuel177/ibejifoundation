import React from "react";
import { DelBtn } from "../DelBtn";
import "./contacttable.css";

export const ContactTable = () => {
  return (
   
          <div className='post'>
        <h1 className='page-head'>Contacts</h1>
        <div className='table-holder1' >
        <table class="table table-bordered table-width fixed">
  <thead>
    <tr>
 
      <th scope="col"> First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No</th>
      <th scope="col">Message</th>
      <th scope="col">Control</th>
      
    </tr>
  </thead>
  <tbody>
    <tr className='wrap'>
    
      <td className="hold1">Nasiru Iyidemilade </td>
      <td className="hold1"></td>
      <td className="hold1"></td>
      <td className="hold1">yu</td>
      <td className="hold1">ou'l</td>
       <td className="hold1"><DelBtn/></td>
      
    </tr>

  </tbody>
</table>
</div>
      </div>
    </div>
  );
};
