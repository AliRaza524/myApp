import React,{Component} from 'react'

class Binde extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Hello"
        }
    }
    myHamndler(){
        // this.setState("Goodbye");
        console.log(this);
    }   
    render(){
        const a={
            textAlign:"center"
        }
      

        return(
            <div style={a}>
            <div>{this.state.message}</div>
           <button onClick={this.myHamndler.bind(this)}>Try</button>
    
        </div>
        )
    }
}

export default Binde;