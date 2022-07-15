import React, { Component } from 'react'
import Childcomponent from './Childcomponent'


class Parentcomponent extends Component {
    constructor(props){
        super(props)
        this.state={
            parent:"M Rafique",
        }
        // this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`Hello ${this.state.parent} from ${childName}`)
    }
  render() {
    return (
      <Childcomponent greetMethod={this.greetParent.bind(this)}/>
    )
  }
}

export default Parentcomponent