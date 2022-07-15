// We don't recommend using indexes for keys if the order 
// of items may change. This can negatively impact performance
//  and may cause issues with component state. Check out Robin
//   Pokorny's article for an in-depth 
// explanation on the negative impacts of using an index as a key.


import React from 'react'

function List() {
    // const num=[1,2,3,4,5]
    const person=[
        {name:"ALI",age:20,id:1},
        {name:"ALI Raza",age:50,id:2},

    ]
  return (
    <div>
    {/* <ul>
        {
            num.map((num,index)=>{
                return <li key={index} >{num}</li>
            })
        }
    </ul> */}
    <h2>Array of objects</h2>

    {
        person.map((person,index)=>{
            return <h5 key={person.id}>i am {person.name} & my age is {person.age  } </h5>
        })
    }

    </div>
  )
}

export default List