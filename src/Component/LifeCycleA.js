import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"ALi Raza"
      }
      console.log("Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps");
        return null
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate A");
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate A");
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate A")
    }

    handler=()=>{
        this.setState({
            name:"rafiq"
        })
    }

  render() {
    console.log("render ")
    return (
        <div>        
      <div>LifeCycleA</div>
      <button onClick={this.handler}>Click</button>
      <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA