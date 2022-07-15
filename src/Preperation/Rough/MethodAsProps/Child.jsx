import React from 'react'

function Child(props) {

  return (
    <div>
        <button  onClick={()=>props.handler('M Rafique ')} >greet parent</button>
    </div>
  )
}

export default Child