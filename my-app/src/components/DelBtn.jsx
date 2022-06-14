import { useState } from "react";
import Svg2 from "../components/SvgFunc/Svg2"
import Popup3 from "./Popup/Popup3";
import "./delbtn2.css" 

function DelBtn(){
    const [buttonPopup2, sBtn2] = useState(false);
    return(
        
        <div>
            
             <button onClick={() => sBtn2(true)} className="spc2 spc3"><Svg2></Svg2></button>
             <Popup3 trigger={buttonPopup2} setTrigger={sBtn2}>
                    <h3>Are you sure you want to delete this Post</h3>
                    <button className="btn del-btn">Delete</button>
                  </Popup3>
        </div>
    )
}

export default DelBtn