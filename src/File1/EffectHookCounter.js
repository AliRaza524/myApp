import React, { useState,useEffect} from 'react'

function EffectHookCounter() {
    const [count,setCount]=useState(0);
    const[name,setName]=useState("")
    useEffect(()=>{
        console.log('update use effect');
        document.title=`you clicked ${count} times`
    },[count])
    const handler=(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <input type="text" value={name} onChange={handler}/>
        <button onClick={()=>setCount(count+1)}>you clicked {count} times</button>
    </div>
  )
}

export default EffectHookCounter