import React ,{useReducer} from 'react'

const initialValue=0;
const reducer=(state,action)=>{
switch(action){
    case 'increment':
        return state+1;

        case 'decrement':
            return state-1;

            case 'reset':
                return initialValue;
                  default :
                return 0
}
}
function useReducerCounter3() {
  const [count,dispatch] =  useReducer(reducer,initialValue)
  const [count2,dispatch2]=useReducer(reducer,initialValue)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch('increment')}>increment1</button>
        <button onClick={()=>dispatch('decrement')}>decrement1</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
        <h1>Counter 2</h1>

        <h2>{count2}</h2>
        <button onClick={()=>dispatch2('increment')}>increment1</button>
        <button onClick={()=>dispatch2('decrement')}>decrement1</button>
        <button onClick={()=>dispatch2('reset')}>reset</button>
       

    </div>
  )
}

export default useReducerCounter3
