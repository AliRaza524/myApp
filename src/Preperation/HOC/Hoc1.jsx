
import React ,{Component} from 'react'
import UpdateComponent from './Hoc3'
class Hoc1 extends Component {
    
    render(){
      const {increment,count,name}=this.props
      return (
        <div>
         <h5>{count} {this.props.hero} </h5>
          <button onClick={increment} >try {name}</button>
        </div>
      )
    }
    
    }
    export default UpdateComponent(Hoc1,1)
 