import React,{useState} from 'react'
import UseCustomeTitle from './UseCustomeTitle'
function DocTitleOne() {
    const [count,setCount]=useState(0)
    UseCustomeTitle(count)
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count+1)}>Try it</button>
    </div>
  )
}

export default DocTitleOne