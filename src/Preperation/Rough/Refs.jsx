
import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef =  React.createRef()            
    } 
    componentDidMount(){
        this.inputRef.current.focus()
    }
    handler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.handler}>Try me</button>
      </div>
    )
  }
}
