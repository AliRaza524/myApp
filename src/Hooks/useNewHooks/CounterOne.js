import React from 'react'
import UseCounter from './UseCounter'
function CounterOne() {
    const [increment,decrement,reset,count]=UseCounter(1,2)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne