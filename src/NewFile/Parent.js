import React, { Component} from 'react'
// import SimpleComponent from './SimpleComponent'
// import PureCom from './PureComponent' 
import MemoFun from './Memo'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ali Raza"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Ali Raza"
            })
        },2000)
    }
  render() {
      console.log("*****Parent Component****")
    return (
      <div>Parent
          {/* <SimpleComponent name={this.state.name}/>
         <PureCom name={this.state.name}/>  */}
         <MemoFun name={this.state.name}/>
      </div>
    )
  }
}

export default Parent