import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Apptable from '../components/AppTable/Apptable'
import "./Applicants.css"

export const Applicants = () => {
  return (
   <div>
     <div className='side'>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>
       <div className='sidebar'><Sidebar/></div>
       <div className='table'><Apptable/></div>
        
        
     </div>
    

   </div>
  )
}
