import Svg1 from "./Svg1"
import Svg2 from "./Svg2"
import "./fullbtn.css"
import Popup1 from "../Popup/Popup1";
import Popup2 from "../Popup/Popup2";
import {useState} from 'react';
import React from "react";

function FullBtn (){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, sBtn] = useState(false);
    return(
        <div>
            <div className="fullbtn">
                  <button onClick={() => setButtonPopup(true)} className="spc"><Svg1></Svg1></button>
                  <Popup1 trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <form>
            <h2>Edit Employee Info</h2>
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
                  </Popup1>
                  <button onClick={() => sBtn(true)} className="spc2"><Svg2></Svg2></button>
                  <Popup2 trigger={buttonPopup1} setTrigger={sBtn}>
                    <h3>Are you sure you want to delete this Post</h3>
                    <button className="btn del-btn">Delete</button>
                  </Popup2>
            </div>
        </div>
    )

}

export default FullBtn;