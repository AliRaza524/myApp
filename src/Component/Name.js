import React from 'react'
// import Nameperson from './Nameperson';


const Namee=()=> {
    // const personnames=[
    //     { name:"Ali",age:20,id:1},
    //     { name:"M Rafiq",age:50,id:2},
    //     { name:"Umer",age:20,id:3}
        
    // ];
    const names=["Ali","Umer","Rafiq"];
    // const list=personnames.map(person=><Nameperson key={person.id} person={person}/>);
     const Namelist=names.map((name,index)=><h2 key={index}>{index},{name}</h2>)
  return (
    <div>
        {/* {list} */}
        {Namelist}
    </div>
  )
}

export default Namee;