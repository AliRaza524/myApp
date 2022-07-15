import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [loading,setLoading]=useState(true)
    const [myerror,setError]=useState=("")
    const [post ,setPost]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError("")
        }).catch(error=>{
            setLoading(false)
            setPost({})
            setError("something wrong")

        })

    },[])
  return (
    <div>
        {loading?"Laoding":post.title}
        {myerror?myerror:null}
        <h1>hhhh</h1>
    </div>
  )
}

export default DataFetching