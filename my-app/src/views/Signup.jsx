import { TextField } from "../components/TextField";
import "./signup.css"
import { Formik, Form } from 'formik'
import * as Yup from 'yup'


 export const Signup = () =>{
    const validate1 = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8')
        .required('Password is Required'),
     confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Password must match")
        .required("Confirm Pasword required")

    
      


    })
    return(
        <div>
           
   <Formik  
               initialValues = {{
                firstName: "",
                lastName: "",
                password:"",
                confirmPassword:"",
             }} 
             validationSchema={validate1}
             onSubmit={values => {
                console.log(values)
             }}
           >
           {formik => (  
            <div className="body">
           <div className="form-holder">
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <img src="images/ibeji.jpg" alt="ibeji" className="logo-size"/>
              
                <Form className="form-width">
                  <TextField label='First Name' name="firstName" type="text  "/>
                  <TextField label='Last Name' name="lastName" type="text  "/>
                  <TextField label='Password' name="password" type="password"/>
                  <TextField label='Confirm Password' name="confirmPassword" type="password"/>
                 
                  <button className="mt-3 btn signUp-btn">Sign Up</button>
                </Form>
            </div> 
            </div>  
            )}
            </Formik>
          
        </div>
    )
}

