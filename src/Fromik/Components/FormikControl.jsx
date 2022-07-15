import React from 'react'
import  Input from './Input'
import Select from './Select'
import TextArea from './TextArea';
import RadioButtons from './RadioButtons';
import Checkboxs from './Checkboxs';
import DatePicker from './DatePicker';

 function FormikControl(props)  {
    const {control,...rest}=props
    switch(control){

        case 'input': 
        return <Input {...rest} />

            case 'textarea':
                return <TextArea  {...rest} />

                case 'select':
                    return <Select {...rest} />
                case 'radio':
                    return <RadioButtons {...rest}/>
                    case 'checkbox':
                        return <Checkboxs {...rest} />
                        case 'date':
                            return <DatePicker {...rest} />
                            default:
                                return null
    }

}

export default FormikControl