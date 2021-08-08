import React, { useState } from 'react';

function UseStateDemo() {
    const intial=0;
    const [count, setcount] = useState(intial);
    return (
        <div>
           <h1>{count}</h1> 
           <button onClick={()=>setcount(count+1)}>Inc</button>
           <br/>
           <button  onClick={()=>setcount(count+1)}>Dec</button>
           <br/>
           <button  onClick={()=>setcount(intial)}>Reset</button>
        </div>
    )
}

export default UseStateDemo
