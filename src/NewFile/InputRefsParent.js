import React, { Component } from 'react';
import InputRefs from './InputRefs';
class InputRefsParent extends Component {
  
      constructor(props) {
        super(props)
        this.parentRefs=React.createRef();
      }
      parentHAndler=()=>{
          this.parentRefs.current.inputFocus();
      }
      render() {
    return (
        <React.Fragment>
            <InputRefs ref={this.parentRefs}/>
            <button onClick={this.parentHAndler}>Parent</button>
        </React.Fragment>    
      
    )
  }
}

export default InputRefsParent