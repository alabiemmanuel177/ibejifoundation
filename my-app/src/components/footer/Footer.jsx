import React from 'react'
import "./footer.css"
import { TextField } from '../TextField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextArea } from '../TextArea'


export const Footer = () => {
    const validate2 = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is Invalid')
        .required('Required'),
        phoneno:Yup.number()
        .min(11,'Phone No must be at least 11 digit')
        .max(11, 'Phone No must not be more then 11 digits')
        .required('required')
        .integer('Phone No cannot have decimal')
        .typeError('Not a number'),
        message:Yup.string()
        .required('required')
        
      })
  return (
<div className="footer">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>

          <Formik  
               initialValues = {{
                FirstName: "",
                LastName: "", 
                Email:"",
                PhoneNo:"",
                Message:"",
             }} 
             validationSchema={validate2}
             onSubmit={values => {
                console.log(values)
             }}
           >
            {formik => (

  
      
      
        <div className="footer-form">
            <p>Contact Us</p>
            
            <Form className="row g-">
            <div className="col-md-6">
                  <TextField label='First Name' name="firstName" type="text  "/>
                  </div>
                  <div className="col-md-6">
                  <TextField label='Last Name' name="lastName" type="text  "/>
                  </div>
                  <div className="col-md-6">
                  <TextField label='Email Address' name="email" type="email"/>
                  </div>
                  <div className="col-md-6">
                  <TextField label='Phone Number' name="phoneno" type="number"/>
                  </div>
                  <div className='label-txt'>
                  <TextArea  label='Message' name="message" type="text" />
                  </div>
                  <div className='col-md-6'>
                  <button className="  btn signUp-btn ">Submit</button>
                  </div>
                </Form>
               
        </div>
        )}
         </Formik>
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
