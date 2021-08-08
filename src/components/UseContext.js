import React from 'react'
//Creare context
const NumberContext=React.createContext();

function UseContext() {
    return (
        <div>
            <NumberContext.Provider value={"sivaji kadapala"}>
<DisplayB/>
            </NumberContext.Provider>
        </div>
    )
}

export default UseContext
function DisplayB() {
    return (
        <div>
            
           <DisplayC/>
        </div>
    )
}

function DisplayC() {
    return (
        <div>
            <NumberContext.Consumer>
                 {value=><div>the answer is {value}</div>}
            </NumberContext.Consumer>
           
        </div>
    )
}



