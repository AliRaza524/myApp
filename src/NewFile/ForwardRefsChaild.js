import React from 'react'

const ForwardRefsChaild=React.forwardRef((props,parentRef)=>{
    return(
    <div>
        <input type="text" ref={parentRef}/>
    </div>
    )
})

export default ForwardRefsChaild