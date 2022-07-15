import React, { Component } from 'react'

class CounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:""
      }
    }
    componentDidMount(){
        document.title=`CLicked ${this.state.count} times`
    }
    componentDidUpdate(preProps,prevState){
        if(! prevState.count===this.state.count){
        console.log("update")
        document.title=`CLicked ${this.state.count} times`
    }
}
    
  render() {
    return (
      <div>
          <input type="text" value={this.state.name}
          onChange={e=>this.setState({name:e.target.value})}/>
          <button onClick={()=>this.setState({count:this.state.count+1})}>
              clicked  {this.state.count} times
          </button>
      </div>
    )
  }
}

export default CounterOne