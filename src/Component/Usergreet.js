import React,{Component} from 'react'

class Usergreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         loged:false
      }
    }
    render(){
  return (   
       this.state.loged?
      <div>Logned</div> :
      <div>Not loged</div>
  )
   
  
}
}
export default Usergreet;