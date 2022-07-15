import React ,{useState} from 'react'

function User({render}) {
  const [state,setState]=useState(0)
    const handler=()=>{
        setState(count=>count+1)
        
    }
  return (
    <div>
        {render(state,handler)}

    </div>
  )
}

export default User;