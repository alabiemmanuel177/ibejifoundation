import {AiOutlineLock, AiOutlineUser} from 'react-icons/ai'
// import { Button,  Form } from "react-bootstrap";
import "./login.css"
import {BsPersonCircle} from 'react-icons/bs'



function Login(){
    return(
        <div className="color">
        
        <div className="form-arr">
        <div className='login-div'><BsPersonCircle className='login-icon'/></div>
       
  <form>
    <label>
    <div className="field-holder">
      <input type="text" name="name" placeholder="Username" className="field" />
      <div className="icon-holder"> <AiOutlineUser className="icon-pos"/> </div>
      </div>
    </label>
    <label>
    <div className="field-holder">                    
      <input type="password" name="password" placeholder="Password" className="field" />
      <div className="icon-holder"> <AiOutlineLock className="icon-pos"/></div>
      </div>
    </label>
    
    <input type="submit" value="Sign in" className="signin-btn" />
  
  </form>
      </div>
      </div>
    )
}

export default Login;
