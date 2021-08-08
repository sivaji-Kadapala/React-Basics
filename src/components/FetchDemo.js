
import React, { useState,useEffect } from 'react'

function FetchDemo() {
    const [data, setdata] = useState([])
   useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        result.json().then((res)=>{
            // console.log(res);
            setdata(res)
        })
    })
   })
   console.log(data);
    return (
        <div>
            <table border="1">
                <tr border="1">
                <td>USERID</td> <td>ID</td><td>titel</td>
               <td>BODY</td>
                </tr>
                {
                data.map((item)=>
                <tr border="1">
                <td >{item.userId}</td>
                <td >{item.id}</td>
                 <td >{item.title}</td>
                <td >{item.body}</td>
                
                </tr>
                )}
            </table>
        </div>
    )
}

export default FetchDemo
