import React from 'react'
import './FormikContainer.css'
import { Formik ,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer ()  {

    const dropDownOption=[
        {key:'select any option',value:''},
        {key:' option 1',value:'option1'},
        {key:' option 2',value:'option2'},
        {key:' option 3',value:'option3'},
        {key:' option 4',value:'option4'},
        {key:' option 5',value:'option5'},
    ]
    const radioOption=[
        
        {key:' option 1',value:'18-20'},
        {key:' option 2',value:'21-29'},
        {key:' option 3',value:'30-40'},
       
    ]

    const checkBoxOption=[
        
        {key:' option 1',value:'coding'},
        {key:' option 2',value:'gaming'},
        {key:' option 3',value:'listening'},
       
    ]



    const initialValues={
        email:'',
        description:'',
        selectOption:'',
        radioOption:'',
        checkBoxOption:[],
        birthDay:null
    }
    const onSubmit=(values)=>
    {
    console.log(`values` ,values)
    }
    const validationSchema=Yup.object({
        email: Yup.string().email('invalid format').required('Required!!!'),
        description: Yup.string().required('Required!!!'),
        selectOption: Yup.string().required('Required!!!'),
        radioOption: Yup.string().required('Required!!!'),
        checkBoxOption: Yup.array().required('Required!!!'),
        birthDay: Yup.date().required('Required!!!').nullable(),
    })
  return (
    <Formik id='main'  initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
        {
            formik=> <Form id='form'>
                
                    <FormikControl control='input' name='email' label='email' type='email' />
                    <FormikControl control='textarea' name='description'
                     label='description'/>

                     <FormikControl  control='select' label='select a topic'
                     name='selectOption' options={dropDownOption}/>

                     <FormikControl control='radio' label='pick your age' name='radioOption'
                     options={radioOption}/>

                    <FormikControl control='checkbox' label='pick your hobbies' name='checkBoxOption'
                     options={checkBoxOption}/>

                    <FormikControl control='date' label='Date picker' name='birthDay'
                     options={checkBoxOption}/>


                    <button type='submit' id='btn'>submit</button>
                </Form>
                
            
        }
    </Formik>
  )
}
export default FormikContainer;