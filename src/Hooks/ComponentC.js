import React,{useContext} from 'react'
import {firstContext,secondContext} from  '../App'
function ComponentC() {
    const a= useContext(firstContext)
    const b= useContext(secondContext)
  return (

    <div>
        {a}============{b}
    </div>
  )
}

export default ComponentC