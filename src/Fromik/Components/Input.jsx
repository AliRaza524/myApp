import React from 'react'
import { Field,ErrorMessage} from 'formik'
import TextError from './TextError'
import './FormikContainer.css'

function Input(props)  {
  console.log("hello git")
    const {label,name,...rest}=props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label} </label>
        <Field name={name} id={name} {...rest} className='input'/>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input