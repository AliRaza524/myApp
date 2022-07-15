import React, { Component } from 'react'
import ForwardRefsChaild from './ForwardRefsChaild';
class ForwardRefsParent extends Component {
    constructor(props) {
      super(props)
    
      this.InputRefs=React.createRef();
    }
    parentHandler=()=>{
      this.InputRefs.current.focus();
    }
  render() {
    return (
      <div>
          <ForwardRefsChaild ref={this.InputRefs}/>
          <button onClick={this.parentHandler}>ParentRef</button>
      </div>
    )
  }
}

export default ForwardRefsParent