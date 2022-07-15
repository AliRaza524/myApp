import React ,{useState} from 'react'

function ConditionalRendering() {
    const [display,setdisplay]=useState(false)
    const handler=()=>{
        setdisplay(!display)
    }
  return (
    <div>
        {display?
        <h3>ALI RAZA</h3>:
        <h1>Not display</h1>
           }

           {
            display && <h3>My favourite method</h3>
           }
           <button onClick={handler} >change boolean</button>
    </div>
  )
}

export default ConditionalRendering