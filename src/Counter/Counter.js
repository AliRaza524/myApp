import './Counter.css';
import React,{useState} from 'react';

const Counter = () => {
const[count,setcount]=useState(0);
const incre=()=>{
    setcount(count=>count+1);
}
const decre=()=>{
    setcount(count=>count-1);
}
const reset=()=>{
    setcount(0);
}
    return (

        <div className = "index">
            <div className='output'>
                <p>{count}</p>
            </div>
           <div className='input'>
               <button onClick={incre}>Inc</button>
               <button onClick={reset}>Reset</button>
               <button onClick={decre}>Dec</button>
           </div>

        </div>

    );
}
export default Counter;