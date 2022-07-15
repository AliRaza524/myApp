import React from 'react'

function MyButton({handleClick,children}) {
    console.log(`button rendering`)
  return (
    <div>
        <button onClick={handleClick}>
            {children}
        </button>
    </div>
  )
}

export default React.memo(MyButton)