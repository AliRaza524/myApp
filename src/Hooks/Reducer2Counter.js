import React ,{useReducer} from 'react'

const initialValue={
fValue:0,
};
const reducer=(state,action)=>{
switch(action.type){
    case 'increment':
        return {fValue:state.fValue+action.value};

        case 'decrement':
            return {fValue: state.fValue-action.value};

            case 'reset':
                return initialValue;
                
                // case 'increment5':
                //     return state+5;

                //     case 'decrement5':
                //         return state-5

                default :
                return 0
}
}
function Reducer2Counter() {
  const [count,dispatch] =  useReducer(reducer,initialValue)
  return (
    <div>
        <h2>{count.fValue}</h2>
        <button onClick={()=>dispatch({type:'increment', value:1})}>increment1</button>
        <button onClick={()=>dispatch({type:'decrement', value:1})}>decrement1</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        <button onClick={()=>dispatch({type:'increment', value:5})}>increment5</button>
        <button onClick={()=>dispatch({type:'decrement', value:5})}>decrement5</button>

    </div>
  )
}

export default Reducer2Counter
