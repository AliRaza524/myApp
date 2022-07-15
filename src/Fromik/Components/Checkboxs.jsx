import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'
import './FormikContainer.css'

function Checkboxs(props) {
    const {label,name,options,...rest}=props
    
  return (
    <div className='form-control'>
        <label htmlFor={name} > {label} </label>
        <Field name={name} id={name} {...rest} >
            {
                ( {field} )=>{
                    return options.map(option=>{
                        return (
                            <React.Fragment key={option.key} >
                                <input type='checkbox'  id={option.key}                               
                                {...field} value={option.value}
                                checked={ field.value.includes(option.value)  }
                                />
                                <label htmlFor={option.value} > {option.value} </label>
                            </React.Fragment>
                        )
                    })

                }
            }
            
        </Field>
        <ErrorMessage  name={name} component={TextError} />
    </div>
  )
}

export default Checkboxs