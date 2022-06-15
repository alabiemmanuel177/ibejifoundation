import React from 'react'
import "./admininfo.css"

export const AdminInfo = () => {
  return (
    <div className='fullpage'>
        <div className='holder'>
        <div className='adminImage'>
           <img src='/images/staticStaff.jpg' className='admin-pic' alt=''/> 
        </div>
        <div className='admin-info'>
            <p className='head'>Name: Nasiru Iyidemilade</p>
            <p className='head'>Email: Ladenas202@gmail.com</p>
           
          
            <button className='edit-btn'>Edit Profile</button>
          
            
        </div>
        </div>
    </div>
  )
}
