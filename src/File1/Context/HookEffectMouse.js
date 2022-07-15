import React ,{useState,useEffect} from 'react'

function HookEffectMouse() {
    const[xCor,setXcor]=useState(0);
    const[yCor,setYcor]=useState(0);
    const logMousePosition=(e)=>{
        console.log("mouse position")
        setXcor(e.clientX);
        setYcor(e.clientY);
    }
    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
        X-{xCor}
        Y-{yCor}
    </div>
  )
}

export default HookEffectMouse