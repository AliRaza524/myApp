import { Field,ErrorMessage } from 'formik'
import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextError from './TextError'
function DatePicker(props) {
    const {name,label,...rest}=props
  return (
    <div className='form-control'>
        <label htmlFor={name} > {label} </label>
        <Field name={name} id={name} >
            {
                ( {form,field} )=>{
                    const {setFieldValue}=form
                    const {value}=field
                    return <DateView
                            name={name} 
                            {...rest} 
                            {...field}
                            onChange={val=>setFieldValue(name,val)} 
                            selected={value} />
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError}   />

    </div>
  )
}

export default DatePicker