import React,{useState} from 'react'

function UseStateArray() {
    const [item,setItem]=useState([]);

    const addItem=()=>{
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add item</button>
        <ul>
            {item.map(item=>(
               <li key={item.id}>{item.value}</li> 
            ))}
        </ul>

    </div>
  )
}

export default UseStateArray