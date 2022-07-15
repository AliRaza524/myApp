import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Raza"
      }
      console.log("Constructor B")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps B");
        return null
    }
    componentDidMount(){
        console.log("componentDidMount B");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate B");
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate B")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate B")
    }

  render() {
    console.log("render B")
    return (
        
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB