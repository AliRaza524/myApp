import React,{useState} from 'react'
import UseCustomeTitle from './UseCustomeTitle'
function DoctiltleTwo() {
    const [count,setCount]=useState(0)
    UseCustomeTitle(count)
    
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count+1)}>Try it</button>
    </div>
  )
}

export default DoctiltleTwo