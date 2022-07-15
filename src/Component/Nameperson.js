import React from 'react'

function Nameperson({person}) {
  return (
    <div>
        <h2>
        My Name is{person.name} And i am {person.age} yaer old and id is {person.id}
        </h2>
    </div>
  )
}

export default Nameperson