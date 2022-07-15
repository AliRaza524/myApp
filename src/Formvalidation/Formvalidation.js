
import React,{useState} from "react";
import './Formvalidation.css'


const Formvalidation=()=>{
    const[fstate,lstate] = useState({
        firstname:"",
        lastname:"",
        email:""
    })
    const [submitted,setsubmitted]=useState(false);
    const[valid,setValid]=useState(false)
    const lnamehandler=(e)=>{
        lstate({...fstate, lastname:e.target.value});
        
    }
    const fnamehandler=(e)=>{
        lstate({...fstate,firstname: e.target.value});
    }
    const emailhandler=(e)=>{
        lstate({...fstate,email:e.target.value});
    }
   
    const formValidation=(e)=>{ 
        e.preventDefault(); 
        setsubmitted(true);   
        if(fstate.firstname&&fstate.lastname&&fstate.email){
            setValid(true);
        }
       

    }
    return(
        <div className="container">
             {submitted &&valid?  <div className="from-success">Thank you fro submitted form</div> :null}
                
            <h1 className="heading">Login</h1>
            <form onSubmit={formValidation}>
            <div className="index">
             
            <input type="text" value={fstate.firstname} className="inp"
            placeholder="Enter Your Name" onChange={fnamehandler}/>
            {submitted&& !fstate.firstname? <span >**Enter your name</span> :null}

            <input type="text" value={fstate.lastname} className="inp" name="lastname"
            placeholder="Enter Your Name"onChange={lnamehandler}/>
            {submitted&& !fstate.lastname?<span >**Enter your lastname</span>:null}

            <input type="text" value={fstate.email} className="inp" 
            placeholder="Enter Your Name" onChange={emailhandler}/>
            {submitted&& !fstate.email?<span>**Enter your email</span>:null}

             <div className="btn-div">
            <button className="btn" >Submit</button>
            </div>
        </div></form>
        </div>
    )
}
export default Formvalidation;