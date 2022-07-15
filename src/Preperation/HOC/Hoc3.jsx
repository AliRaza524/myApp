// A pattern where a function takes a component as an argument and return a
// new component
//  const NewComponent=higherOrderComponent(originalComponent)  
//  const EnhancedComponent=higherOrderComponent(originalComponent) 

import React from "react"

const UpdateComponent=(WrappedComponent,incrementNum)=>{
class NewComponent extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      handler=()=>{
        this.setState(pre=>{
        return{  count:pre.count+ incrementNum }
        })
      }
    render(){
        return <WrappedComponent name="Ali Raza" count={this.state.count}
         increment={this.handler} {...this.props} />
    }
}
return NewComponent
}
export default UpdateComponent