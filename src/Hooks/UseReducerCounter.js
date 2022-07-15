import React,{useReducer} from 'react'

const initialState={
fValue:0,
   
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return{fValue:state.fValue+action.value};

            case 'decrement':
            return {fValue:state.fValue-action.value};

            case 'reset':
            return initialState;
            default:
                return 0;
    }

}
function useReducerCounter() {
 
  const [count,dispatch]=  useReducer(reducer,initialState)
    return (
    <div>
        <h4>{count.fValue}</h4>        
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})} >Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>decrement5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>decrement5</button>

    </div>
  )
}

export default useReducerCounter