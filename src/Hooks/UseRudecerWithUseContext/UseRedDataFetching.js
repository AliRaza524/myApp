import React,{useEffect,useReducer} from 'react'
import axios from 'axios'
const initialValue={
    loading:false,
    error:"",
    post:{}
}
const reducer=(state,action)=>{
switch(action.type){
    case "Success":
        return {
            loading:false,
            post:action.payload,
            error:""
        }
        case "Failure":
            return {
                error:"someThing Wrong!!",
                loading:false,
                post:{}
            }
            default:
                return state;
}
}
function UseRedDataFetching() {
   const [state,dispatch]= useReducer(reducer,initialValue)
   useEffect(()=>{
       axios
       .get('https://jsonplaceholder.typicode.com/posts/1')
       .then(response=>{
           dispatch({type:"Success",payload:response.data})    
           .catch(error=>{
               dispatch({type:"Failure"})
           })       
    })
   },[])
  return (
    <div>
        { state.loading ? "loading":state.post.title}
        {state.error?"Wronge":null}
    </div>
  )
}

export default UseRedDataFetching