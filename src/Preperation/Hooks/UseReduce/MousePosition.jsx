import React ,{useState,useEffect} from 'react'

export const MousePosition = () => {
    const [X,setX]=useState(null)
    const [Y,setY]=useState(null)
    const logmouseMove=(e)=>{
        console.log('mouse moved ')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log(`useEffect Render`)
        window.addEventListener('mousemove',logmouseMove)

        return ()=>{
            console.log('component removed ')
            window.removeEventListener('mousemove',logmouseMove)
        }
    },[])
  return (
    <div>
        <h4>Position X-{X} ... Y-{Y}</h4>
    </div>
  )
}
