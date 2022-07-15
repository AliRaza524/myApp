import React,{useState} from "react";

const Bind=()=>{
    const[fstate,lstate]=useState("Hello");
    const a={
        textAlign:"center"
    }

    const myHamndler=()=>{
        lstate("Goodbye")
    }
    return(
    <div style={a}>
        <div>{fstate}</div>
       <button onClick={myHamndler}>Try</button>

    </div>
  );
}

export default Bind;