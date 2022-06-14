import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { TextField } from "../components/TextField";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import "../views/appform.css"


 export const AppForm = () =>{
    const validate = Yup.object({
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
        address:Yup.string()
        .max(150, 'address must be more then 150 characters')


    })
    return(
        <div>
           <Navbar/>
           <Formik  
               initialValues = {{
                firstName: "",
                lastName: "",
                email:"",
                phoneno:"",
                address:"",
             }} 
             validationSchema={validate}
             onSubmit={values => {
                console.log(values)
             }}
           >
           {formik => (   
           <div className="form-holder">
                <h1 className='my-4 font-weight-bold-display-4'>Apply Here</h1>
              
                <Form className="form-width">
                  <TextField label='First Name' name="firstName" type="text  "/>
                  <TextField label='Last Name' name="lastName" type="text  "/>
                  <TextField label='Email' name="email" type="email"/>
                  <TextField label='Phone No' name="phoneno" type="number"/>
                  <TextField label='address' name="address" type="text"/>
                  <button className="mt-3 btn signUp-btn">Register</button>
                </Form>
            </div>  
            )}
            </Formik>
           <Footer/>
        </div>
    )
}

