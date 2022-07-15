import React ,{useState} from 'react'
import { MousePosition } from './MousePosition'

export const MouseCleanupCode = () => {
    const [display,setDisplay]=useState(true)
  return (
    <div>
        
        { display && <MousePosition/> }
        <button onClick={()=>setDisplay(!display)} >try</button>
    </div>
  )
}
