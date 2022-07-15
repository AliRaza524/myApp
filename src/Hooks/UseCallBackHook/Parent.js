import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import MyButton from '../MyButton' 
function Parent() {
    const [age,setAge]=useState(0)
    const [salary,setSalary]=useState(50000)

    const incrementAge=useCallback( ()=>{
        setAge(age+1)
  },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+10000)
    },[salary]) 
  return (
    <div>
        <Title/>
        <Count text="age" count={age}/>
        <MyButton handleClick={incrementAge}>incrementAge</MyButton>
        <Count text="salary" count={salary}/>
        <MyButton handleClick={incrementSalary}>incrementSalary</MyButton>
    </div>
  )
}

export default Parent