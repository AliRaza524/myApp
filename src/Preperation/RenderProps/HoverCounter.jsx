import React from 'react'

function HoverCounter(render) {
  const {count,increment}=render
  return (
    <div>
        
          <button  onMouseOver={increment}>count {count} </button>
    </div>
  )
}

export default HoverCounter;