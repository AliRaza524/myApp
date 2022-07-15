import React ,{useState} from 'react'
import Child from './Child'
function Parent() {
    const [state, ststate] = useState('Ali')
    const greetHandler=(parameter)=>{
        ststate(`Aslam o Alaikum ${parameter}`)
    }
  return (
    <div>
        <h4>{state}</h4>
        <Child handler={greetHandler}/>
    </div>
  )
}

export default Parent