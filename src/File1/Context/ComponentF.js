import React, { Component } from 'react'
import  {UserConsumer } from './UserContext'
class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
          {
              (name)=>{
                  return <div>Hello <b>{name}</b>  i am last component</div>
              }
          }
      </UserConsumer>
    )
  }
}

export default ComponentF