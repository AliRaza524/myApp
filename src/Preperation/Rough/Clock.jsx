import React from 'react'

function Clock(props) {
    function tick(){return <h4>{new Date().toLocaleTimeString()}</h4>}
    const {name,clock,children}=props
  return (
    <div>
        <h5>{clock} {tick()} {name}</h5>
        <h6>{children}</h6>
        
        
            
    </div>
  )
}

export default Clock