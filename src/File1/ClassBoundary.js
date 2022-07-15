import React, { Component } from 'react'

class ClassBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
      return {
        hasError:true
      }
    }
  render() {
    if(this.state.hasError){
      return <h1>Some error</h1>
    }
    return this.props.children
  }

}

export default ClassBoundary