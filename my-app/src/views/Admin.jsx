import React from 'react'
import "./admin.css"
import {MdArrowDropDown} from 'react-icons/md'
import FullBtn from '../components/SvgFunc/FullBtn'
import {BsPeople} from 'react-icons/bs'
import {AiOutlineTable} from 'react-icons/ai'




export const Admin = () => {
  return (
    <div className='admin-holder'>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>

      <div className='sidebar1'>
        <div className='user1'>
        <h4>Ibeji Foundation</h4>
        <img src='images/icon.png' className='user-icon' alt='icon'/>
        <div class="dropdown">
        <div className='logout-dropdown'><p>Mike Myers <MdArrowDropDown className="aIcon-pos"/></p></div>
        <div class="dropdown-content">
          <a>Logout</a>
          <a>Change Password</a>
        </div>
        </div>
       </div>
       <hr></hr>
       <div className='options'>
          
          <p className='option'><BsPeople className="o-icon"/><a>Applicants</a></p>
          <p className='option'><AiOutlineTable className="o-icon"/><a>Posts</a></p>
          <p className='option'><BsPeople className="o-icon"/><a>Applicants</a></p>
          <p className='option'><AiOutlineTable className="o-icon"/><a>Posts</a></p>
       </div>
     
      </div>
      <div className='posts'>
        <h1 className='page-head'>Post Configuration</h1>
        <div className='table-holder2'>
        <table class="table table-bordered table-width">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Post Header</th>
      <th scope="col">Post Summary</th>
      <th scope="col">Post Image </th>
      <th scope="col">Beneficiary</th>
      <th scope="col">Controls</th>
      
    </tr>
  </thead>
  <tbody>
    <tr className='wrap'>
      <th scope="row">1</th>
      <td>January to December 2012 PROJECTS</td>
      <td className='hold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum autem quaerat,
         repellendus perspiciatis accusantium lo</td>
      <td>Farm.jpg</td>
      <td>Ibeji Foundation</td>
      <td><FullBtn></FullBtn></td>
      
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>January to december stuff </td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td><FullBtn></FullBtn></td>
    
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>January to december stuff</td>
      <td>Senior</td>
      <td>Remote</td>           
      <td>2019</td>
      <td><FullBtn></FullBtn></td>
      
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td><FullBtn></FullBtn></td>
     
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td><FullBtn></FullBtn></td>
      
    </tr>
  </tbody>
</table>
</div>
      </div>
    </div>
  )
}
