import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import {firstContext,secondContext} from '../App'
function ComponentB() {
  const a=useContext(firstContext)
  const b=useContext(secondContext)
  return (
    <div>
      {a}======{b}
        <ComponentC/>
    </div>
  )
}

export default ComponentB