import React from 'react'

function MemoFun({name}) {
    console.log("****memo****");
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoFun);