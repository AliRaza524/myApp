// A class component that implement either one or both of lifecycle methods
// getDerivedStateFromError or componentDidCatch becoms an error boundry
import React from 'react'

function Error({name}) {
    if(name==='Lion'){
        throw new Error('King');
    }
  return (
    <div>{name}</div>
  )
}

export default Error