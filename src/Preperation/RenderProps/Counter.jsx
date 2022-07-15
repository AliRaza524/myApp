import React  from 'react'

function Counter(render) {
  const {count,increment}=render

  return (
    <div>

        <button  onClick={increment}>count {count} </button>
    </div>
  )
}

export default Counter