
import axios from 'axios'
import React, {useState ,useEffect } from 'react'

function AxiosDemo() {
    const [data, setdata] = useState([])
    useEffect(() => {
       fetch.get("https://jsonplaceholder.typicode.com/posts")
       .then(res=>{
           console.log(res.data)
           setdata(res.data)
       })
    })
    return (
        <div>
            
               {data.map((item)=><li key={item.id}>{item.title}</li>)} 
            
            
        </div>
    )
}

export default AxiosDemo
