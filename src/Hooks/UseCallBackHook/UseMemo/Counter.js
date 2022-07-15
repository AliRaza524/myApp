import React,{useState,useMemo} from 'react'

function Counter() {
    const [Counter1,setCounter1]=useState(0)
    const [Counter2,setCounter2]=useState(0)
    const incrementOne=()=>{
        setCounter1(Counter1+1);
    }
    const incremenTwo=()=>{
        setCounter2(Counter2+1);
    }
    const isEven=useMemo (()=>{
        let i=0
        while(i<2000000000)i++
        return Counter1%2===0
    },[Counter1] )
  return (
      <>
    <div>
        <button onClick={incrementOne}>incrementOne {Counter1}</button>
        {isEven?"even":"odd"}
    </div>

    <div>
        <button onClick={incremenTwo}>incrementTwo {Counter2}</button>
    </div>
    </>
  )
}

export default Counter