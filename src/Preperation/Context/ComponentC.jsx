import React from 'react'
import { MyConsumer } from './UserContext'
function ComponentC() {
  return (
    <div>
        <MyConsumer>{
            (name)=>{
                return <div>{name}</div>

            }


        }

        </MyConsumer>
    </div>
  )
}

export default ComponentC