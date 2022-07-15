import React from 'react'

function Error({name}) {
    if(name==="Cat"){
        throw new Error("Not vegetable")
    }
  return (
    <div>{name}</div>
  )
}

export default Error