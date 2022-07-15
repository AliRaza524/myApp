import React, { Component } from 'react'

export class Components extends Component {
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
    console.log('****Component render****')
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default Components