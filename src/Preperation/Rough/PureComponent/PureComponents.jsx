import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ali'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:'Ali'})
        },2000)
    }
    
  render() {
    console.log('****PureComponent***')
    
    return (
      <div>
         {this.state.name}
      </div>
    )
  }
}

export default PureComponents