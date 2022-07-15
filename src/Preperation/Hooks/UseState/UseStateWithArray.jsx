import React,{useState} from 'react'

export const UseStateWithArray = () => {
    const [setter,setSetter]=useState([])
    const handler=()=>{
        setSetter([...setter,{
            id:setter.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={handler}>Press me please</button>
<ul>
        {
            setter.map(item=>(
                <li key={item.id}>{item.value}</li>
           ))
        }
</ul>        
    </div>
  )
}
