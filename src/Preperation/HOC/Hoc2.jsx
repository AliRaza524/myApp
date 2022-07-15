// import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React ,{Component} from 'react'
import UpdateComponent from './Hoc3'
class Hoc2 extends Component {

    render(){
      const {increment,count,name}=this.props
      return (
        <div>
         <h1>heading {count}</h1>
          <button onMouseOver={increment} >try {name}</button>
        </div>
      )
    }
    
    }
    export default UpdateComponent(Hoc2,5)
 