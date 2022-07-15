import React, { Component } from 'react'

class InputRefs extends Component {
    constructor(props) {
      super(props)
    
      this.InputRefs=React.createRef();
    }
    inputFocus(){
        this.InputRefs.current.focus();
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.InputRefs}/>
      </div>
    )
  }
}

export default InputRefs 