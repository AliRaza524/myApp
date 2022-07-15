// useEffect() call at every render of component
import React ,{useState,useEffect} from 'react'

function Counter1() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log(`useEffect render!!!`)
        document.title=`count ${count}`
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <input type='text' value={name} onChange={e=>{setName(e.target.value)}} />
        <button onClick={()=>setCount(count=>count+1)}>count</button>

    </div>
  )
}

export default Counter1