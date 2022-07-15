import React,{useContext} from 'react'
import {CountContext} from '../../App' 
function ComponentF() {
    const countContext=useContext(CountContext)
  return (
    <div>
      <h5>{countContext.CountValue}</h5>
      <button onClick={()=>countContext.CountDispatch('increment')}>increment1</button>
        <button onClick={()=>countContext.CountDispatch('decrement')}>decrement1</button>
        <button onClick={()=>countContext.CountDispatch('reset')}>reset</button>
       
    </div>
  )
}

export default ComponentF