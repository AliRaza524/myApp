import {useState}from 'react'

function UseCounter(initialValue=0,value) {
    const [count ,setCount]=useState(initialValue)
    const increment=()=>{
        setCount(count=>count+value)
    }
    const decrement=()=>{
        setCount(count=>count-value)
    }
    const reset=()=>{
        setCount(0)
    }
  return [increment,decrement,reset,count]
      
  
}

export default UseCounter