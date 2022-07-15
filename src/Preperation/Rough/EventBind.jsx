import React from 'react'
import { Component } from 'react';

class EventBind extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello!!!'
        }
    }
    // ClickHandler(){
    //     this.setState({
    //         message:'Good bye!!!'})
    // }
     ClickHandler=()=>{
        this.setState({
            message:'Good bye!!!'})
    }
    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                {/* <button onClick={this.ClickHandler.bind(this)} >try it</button> */}
                <button onClick={this.ClickHandler} >Try it</button>
            </div>
        )
    }
    
}
export default EventBind