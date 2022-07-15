import React, { Component } from 'react'
import UpdateComponent from './withCounter'
class  Counter extends Component {
  render(){
//  const {count,increment}=this.props
  return (
    <div>
        <button onMouseOver= {this.props.increment}>{this.props.name} click {this.props.count} times</button>
    </div>
  )
}
}

export default UpdateComponent(Counter,3);