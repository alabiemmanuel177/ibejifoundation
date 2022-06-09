import React from 'react'
import "./posttable.css"
import {MdArrowDropDown} from 'react-icons/md'
import FullBtn from '../SvgFunc/FullBtn'
import {BsPeople} from 'react-icons/bs'
import {AiOutlineTable} from 'react-icons/ai'


function PostTable(){
    return(
      <div>
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

export default PostTable;