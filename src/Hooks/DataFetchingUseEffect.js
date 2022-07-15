import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingUseEffect() {
    const [post,setpost]=useState({})
    const [id,setid]=useState(1)
    const [button,setButton]=useState(0)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response)
            setpost(response.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[button])

    const handler=()=>{
        setButton(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
        <button onClick={handler}>Fetch</button>
        <div>{post.title}</div>
        {/* <ul>{
            post.map(post=><li id={post.id}>{post.title}</li>)
        }</ul> */}
    </div>
  )
}

export default DataFetchingUseEffect