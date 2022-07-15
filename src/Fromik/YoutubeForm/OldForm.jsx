import React from 'react'
import './Form.css'
import { useFormik } from 'formik'

const initialValues={
    name:'',
    email:'',
    channel:''
}
const onSubmit=values=>{
    console.log(values)
}
const validate=values=>{
    let errors={}
    if(!values.name){
        errors.name='Required'
    }

    if(!values.email){
        errors.email='Required'
    }

    if(!values.channel){
        errors.channel='Required'
    }

    return errors
    }


function OldForm() {
    const formik=useFormik({
        initialValues,
        onSubmit,
        
        validate
        
    })
    // console.log(formik.values)
        // console.log(formik.errors)
     console.log(formik.touched)
  return (
    
    <div id='main'>
        <div id='form'>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
            <label htmlFor='name'>Name</label><br />
            <input type='text' name='name'
             id='name' value={formik.values.name}
             onBlur={formik.handleBlur}
              onChange={formik.handleChange}/> 
              {formik.touched.name&&  formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}<br />
              </div>


              <div className="form-control">
            <label htmlFor='email'>Email</label><br />
            <input type='email' name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id='email'/> 
             {formik.touched.name&&formik.errors.email?(<div className='error'>{formik.errors.email}</div>):null}<br />
            </div>

            <div className="form-control">
            <label htmlFor='channel'>Channel</label><br />
            <input type='text' name='channel' 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
            id='channel'/> 
            {formik.touched.name&&formik.errors.channel?<div className='error'> {formik.errors.channel} </div>:null}<br />
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default OldForm