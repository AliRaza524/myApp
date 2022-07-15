import React ,{useState} from 'react'

function FormHandling() {
    const [state,setState]=useState({
        name:'',
        email:'',
        password:'',
        topic:''
    })
    const nameHandler=(event)=>{
        setState({...state,name:event.target.value})
    }
    const emailHandler=(event)=>{
        setState({...state,email:event.target.value})
    }
    const passwordHandler=(event)=>{
        setState({...state,password:event.target.value})
    }
    const topicHandler=(event)=>{
        setState({...state,topic:event.target.value})
    }
    const submitHandler=(event)=>{
        alert(`${state.name} ${state.email}  ${state.password}`)
        event.preventDefault()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <b>Enter your Name</b>
            <input type='text' value={state.name}  onChange={nameHandler}/><br/>

            <b>Enter your email</b>
            <input type='email' value={state.email}  onChange={emailHandler} /><br/>

            <b>Enter your password</b>
            <input type='password' value={state.password}  onChange={passwordHandler}/><br/>
            
            <select onChange={topicHandler}  value={state.topic}>
                <option>React</option>
                <option>Vue js</option>
                <option>Angular</option>
            </select>
            <br/>

            <button type='submit'>Submit</button>
        </form>
        <h4>{state.name}</h4>
        <h4>{state.email}</h4>
        <h4>{state.password}</h4>
    </div>
  )
}

export default FormHandling