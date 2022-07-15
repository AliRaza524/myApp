import React ,{useState}from 'react'

function UseStateHookCounterObject() {
    const [name,setName]=useState({fname:"",lname:""})
  return (
    <div>
        <input type="text"
         value={name.fname}
         onChange={e=> setName({ ...name ,fname:e.target.value})}></input>
         <input value={name.lname}
         onChange={e=>setName({...name,lname:e.target.value})}/>
         <h5>{name.fname}</h5>
         <h3>{name.lname}</h3>
    </div>
  )
}

export default UseStateHookCounterObject