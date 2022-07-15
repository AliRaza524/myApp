import React  ,{useState}  from 'react'

function UseSTate() {
    const [count,setCount]=useState(0)
    const handler=(count)=>{
        setCount(count=>count+1)
    }
    const handler5=(pre)=>{
        for(var i=0;i<5;i++){
            setCount(pre=>pre+1)
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handler} >count1</button>
        <button onClick={handler5} >count5</button>
    </div>
  )
}

export default UseSTate