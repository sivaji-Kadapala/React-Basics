import React, { useState,useEffect } from 'react'



function UseEffectDemo() {
    
    const [count, setcount] = useState(0);
    useEffect(() => {
       document.title=`you clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=>{setcount(count+1)}}> Click !</button>
        </div>
    )
}

export default UseEffectDemo
