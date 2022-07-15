import React, { Component } from 'react'

class SimpleComponent extends Component {
   render() {
    console.log("*****Simple Component****")
    return (
      <div>SimpleComponent {this.props.name}</div>
    )
  }
}

export default SimpleComponent