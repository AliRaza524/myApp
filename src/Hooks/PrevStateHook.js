import React ,{useState} from 'react'

function PrevStateHook() {
    const [count,setCount]=useState(0);
   const increment =()=>{
       setCount(count+1);
    }
    const decrement =()=>{
        setCount(count-1);
     }
     const reset =()=>{
        setCount(0);
     }
     const inc5=()=>{
         setCount(count+5)
     }
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={inc5}>Increment5</button>
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default PrevStateHook