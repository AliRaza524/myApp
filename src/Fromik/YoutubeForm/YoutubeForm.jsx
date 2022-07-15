// FastField used for not changing state of form when any one field is typing

import React ,{useState} from 'react'
import './Form.css'
import {Formik ,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik'
import * as Yup from 'yup' 
import Error from './Error'

const initialValues={
    name:'',
    email:'',
    channel:'',
    comment:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNums:['',''],
    phoneNumbers:['']
}

const loadSavedValues={
    name:'Ali raza',
    email:'a@123gmail.com',
    channel:'034841',
    comment:'Welcome',
    address:'Talat park babu sabu Lahore ',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNums:['',''],
    phoneNumbers:['']
}


const onSubmit=(values,onSubmitProps)=>{
    // console.log(values)
    console.log(onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

    const validationSchema=Yup.object({
        name: Yup.string().required('Required!!!'),
        email: Yup.string().email('invalid format').required('Required!!!'),
        channel: Yup.string().required('Required!!!')
    })
// field validation
const validationComment=value=>{
    let error;
    if(!value){
        error='Required'
    }
    if(value.length>5){
        error='length maximum 5'
    }
    return error
}


function YoutubeForm() {
   const [savedValues,setSavedValues] =useState(null)
    
  return (
    
    <Formik id='main'
     initialValues={ savedValues||initialValues}
    onSubmit={onSubmit}
      validationSchema={ validationSchema}
      enableReinitialize
    //   validateOnMount
    // validateOnBlur={false}
    // validateOnChange={false}>
    >
        {
            formik =>{
                console.log('formik$',formik)
                return (
                    <div id='form'>
                    <Form>
                        <div className="form-control">
                        <label htmlFor='name'>Name</label><br />
                        <Field type='text' name='name'
                         id='name'   />
                         <ErrorMessage name='name' component={Error}>
                            
                         </ErrorMessage>
                          
                         </div>
                          <div className="form-control">
                        <label htmlFor='email'>Email</label><br />
                        <Field type='email' name='email'
                        id='email'  /> 
                        <ErrorMessage name='email' >
                            {
                                (errorMsg)=> <div className='error'>
                                    {errorMsg}
                                </div>
                            }
                            </ErrorMessage>
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='channel'>Channel</label><br />
                        <Field type='text' name='channel'            
                        id='channel'  /> 
                        <ErrorMessage name='channel' component={Error} />
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='comment'>Comment</label><br />
                        <Field as='textarea'  type='text' name='comment'            
                        id='comment'  validate={validationComment} /> 
                        <ErrorMessage name='comment' component={Error}/>
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='facebook'>Facebook profile</label><br />
                        <Field   type='text' name='social.facebook'            
                        id='facebook'  /> 
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='twitter'>Twitter profile</label><br />
                        <Field   type='text' name='social.twitter'            
                        id='twitter'  /> 
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='phoneNums[0]'>Primary ph# </label><br />
                        <Field   type='text' name='phoneNums[0]'            
                        id='phoneNums[0]'  /> 
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='phoneNums[1]'>Twitter profile</label><br />
                        <Field   type='text' name='phoneNums[1]'            
                        id='phoneNums[1]'  /> 
                        </div>
            
                        <div className="form-control">
                        <label htmlFor='address'>address</label><br />
                        <FastField  name='address' id='address'           
                         >
                            
                        {
                            props=>{
                                const {field,form,meta}=props
                                console.log('field render')
                                return(
                                <div>
                                    
                                 <input  id='address' {...field}/>
                                 {meta.touched && meta.error   ?<div>{meta.error}</div> :null}              
                                </div>
                                )
                            }
                        }     
                         </FastField> 
                         </div>
            
                         <div className="form-control">
                        <label htmlFor='comment'>Lists of phone numbers</label><br />
                        <FieldArray name='phoneNumbers'>
                            {
                                (fieldArrayProps)=>{
                                    const {push,remove,form}=fieldArrayProps
                                    const {values}=form
                                    const {phoneNumbers}=values
                                    return (
                                    <div>{
                                        phoneNumbers.map((item,index)=>(
                                            <div key={index}>
                                                <Field type='text'  name={`phoneNumbers${index}`}/>
                                                <button type='button' onClick={()=>push('')}>+</button>
                                                {index>0 &&
                                                <button type='button' onClick={()=>remove(index)} >-</button>
                                                  }  </div>
                                                
            
                                                ))                           
                                        
                                        
                                        
                                        }</div>
              )}
                            }
                        </FieldArray>
                        </div>
                        {/* <button  type='submit' onClick={()=>formik.validateField('comment')}>validate field</button>
                        <button  type='submit' onClick={()=>formik.validateForm()}>validate all</button> */}
                        {/* <button  type='submit' onClick={()=>formik.setFieldTouched('comment')}>Touched field</button>
                        <button  type='submit' onClick={()=>formik.setTouched({ */}
                            {/* name:true,
                            email:true,
                            channel:true,
                            comment:true
            })}>Touched all</button> */}
                        <button id='btn' type='submit' onClick={()=>setSavedValues(loadSavedValues)}>
                        Load saved data</button>
                        <button id='btn' type='submit' disabled={!formik.isValid||formik.isSubmitting }>
                            Submit</button>
                        <button id='btn' type='reset' >
                        reset</button>


                    </Form>
                    </div>

                )
            }
        }



    </Formik>
  )
}

export default YoutubeForm;

//  value={formik.values.name}      all
//onBlur={formik.handleBlur}        ===  {...formik.getFieldProps('name/email/password')}
//onChange={formik.handleChange}