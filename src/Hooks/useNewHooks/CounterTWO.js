import React from 'react'
import UseCounter from './UseCounter'

function CounterTWO() {
   const [increment,decrement,reset,count]=UseCounter(5,3)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterTWO