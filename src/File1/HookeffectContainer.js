import React,{useState} from 'react'
import HookEffectMouse from './Context/HookEffectMouse'

export default function HookeffectContainer() {
    const [display,setdisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>setdisplay(!display)}>Toggle display</button>
        {display && <HookEffectMouse/>}

    </div>
  )
  }
