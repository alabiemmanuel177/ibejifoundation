import React from 'react'
import Popup4 from '../Popup/Popup4'
import {useState} from 'react';

import {AiOutlineUserAdd} from 'react-icons/ai'

const Add = () => {
    const [buttonPopup3, sBtn3] = useState(false);
  return (
    <div className='add-btn'>
        <button onClick={() => sBtn3(true)} className="spc"><AiOutlineUserAdd/></button>
        <Popup4 trigger={buttonPopup3} setTrigger={sBtn3}>
                  <form>
            <h2>Add Employee</h2>
        <div className="form-row">
         <div className="form-group form-edit">
              <label /*for="post-header"*/>Post Header</label>
              <input type="text" className="form-control input-edit" id="inputAddress" placeholder="Post Header"></input>
          </div>
          <div className="form-group">
            <label /*for="inputPassword4"*/>Post Summary</label>
            {/* <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"></input> */}
            <textarea className="txt-area " id="exampleFormControlTextarea1"></textarea>
          </div>
      </div>
    <div className="form-group">
            <label /*for="inputAddress2"*/>Beneficiary</label>
            <input type="text" className="form-control" id="inputAddress2"></input>
        </div>
        <div className="form-row">
           <div className="input-group mb-3 mt-2">
          <div className="custom-file">
            <label>Post Image</label><br></br>
            <input type="file" className="custom-file-input" id="inputGroupFile01"></input>
          </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary save-btn">Save</button>
      </form>
                  </Popup4>
    </div>
  )
}

export default Add