import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
      <div className="footer">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <div className="footer-form">
            <p>Contact Us</p>
            <form className="row g-">
                <div className="col-md-6">
                    <label /*for="inputFirstName"*/ className="form-label">FirstName</label>
                    <input type="text" className="form-control" id="inputFirstName"/>
                </div>
                <div className="col-md-6">
                    <label /*for="inputLastName"*/ className="form-label">LastName</label>
                    <input type="Text" className="form-control" id="inputLastName"/>
                </div>
                <div className="col-md-6">
                    <label /*for="inputEmail4"*/ className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label /*for="inputPhoneNumber"*/ className="form-label">Phone Number</label>
                    <input type="digit" className="form-control" id="inputPhoneNumber"/>
                </div>
                <div className="col-md-12">
                    <label /*for="textarea"*/ className="form-label">Message</label>
                    <textarea className="form-control" aria-label="With textarea" id='textarea'></textarea>
                </div>                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>           
        </div>
        <div className="footer-links">
            <div className="footer-logo">
                <img src="" alt="" />
            </div>
            <div className="footer-socials">
            <img src="icons/facebook.png" alt="" />
            <img src="icons/linkedin.png" alt="" />
            <img src="icons/twitter.png" alt="" />
            <img src="icons/instagram.png" alt="" />
            </div>
        </div>
      </div>
  )
}
