import React,{useState,useEffect,useRef} from 'react'

function My() {
    const [timer,setTimer]=useState(0)
    const interval= useRef()
    useEffect(()=>{
        interval.current=setInterval(()=>{
            setTimer(preState=>preState+1)
        },1000)
        return()=>{
            clearInterval(interval.current)
        }
    },[])

  return (
    <div>My
        {timer}
        <button onClick={()=>clearInterval(interval.current)}>Close</button>
    </div>
  )
}

export default My