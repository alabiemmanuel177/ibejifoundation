import React from 'react'
import { useState } from 'react';
import Popup5 from './Popup/Popup5';
import "./delbtn2.css"



function PasswordChange() {
    const [passwordPopup, setPasswordPopup] = useState();
  return (
    <div>
         <button className='password-btn' onClick={() => setPasswordPopup(true)}>Change Password</button>
                  <Popup5 trigger={passwordPopup} setTrigger={setPasswordPopup}>
        <form>
          <h2>Change Password</h2>
          <div className="form-row">
            <div className="form-group form-edit">
              <label>Old Password</label>
              <input
               className="form-control input-edit"
                placeholder="Old Password"
                type="password"
               
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
               className="form-control"
               placeholder="New Password"
               type="password"
                
               
              />
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder='Confirm Password'
              
            
            ></input>
          </div>
         
          <button
            type="submit"
       
            className="btn btn-primary save-btn"
          >
            Save
          </button>
        </form>
      </Popup5>
    </div>
  )
}

export default PasswordChange;