import React, { Component } from 'react'
import Memo from './Memo'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ali'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:'Ali'})
        },2000)
    }
    
  render() {
    console.log('****Parent Component***')
    return (
      <div>
        <Memo name={this.state.name}/>
      </div>
    )
  }
}

export default Parent