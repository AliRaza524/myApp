import React from 'react'
import './Form.css'
function Error(props) {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}

export default Error