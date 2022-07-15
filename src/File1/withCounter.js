import React from "react";

const UpdateComponent=(OriginalComponent,num)=>{
    class  NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
  increment=()=>{
    this.setState(prevState=>{
        return {count:prevState.count+num}
    })
 }
        render(){
        
            return <OriginalComponent count={this.state.count} increment={this.increment} {...this.props}/>
        }
    }
    return NewComponent
}
export default UpdateComponent