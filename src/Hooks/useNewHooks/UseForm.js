import React ,{useState} from 'react'

function UseForm() {
const[fname,setfname]=useState('')
const[lname,setlname]=useState('')
const submitHandler=(e)=>{
    e.preventDefault();
    alert(`Hello ${fname}  ${lname}`)
}
    return (
    <div>
        <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input type="text" value={fname} onChange={e=>setfname(e.target.value)}/>
        <br></br>
        <label>last Name</label>
        <input type="text" value={lname} onChange={e=>setlname(e.target.value)}/>

        <button value="submit">submit</button>
        </form>
    </div>
  )
}

export default UseForm