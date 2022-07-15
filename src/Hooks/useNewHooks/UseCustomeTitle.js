import {useEffect} from 'react'

function UseCustomeTitle(count) {
    useEffect(()=>{
        document.title=`count${count}`

    },[count])
}

export default UseCustomeTitle