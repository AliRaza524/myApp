import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inpuRefs =React.createRef()    
    }
    componentDidMount(){
        this.inpuRefs.current.focus();
        }
        clickHandler=()=>{
            alert(this.inpuRefs.current.value);
        }
  render() {
    return (
      <div>
          <input type="text" ref={this.inpuRefs}/>
          <button onClick={this.clickHandler}>Try</button>
      </div>
    )
  }
}

export default RefsDemo