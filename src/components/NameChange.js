import React, { useState } from 'react';

function NameChange() {
    const [name, setname] = useState("Sivaji");
    return (
        <div>
            <h1>Updated name is "{name}"</h1>
            <button onClick={()=>setname("siva")}>Update</button>
        </div>
    )
}

export default NameChange
