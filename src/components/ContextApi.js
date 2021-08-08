
import React, { Component } from 'react'
const Context=React.createContext();
export default class ContextApi extends Component {
    render() {
        return (
            <div>
                <Context.Provider value={42}>
                   <Text/> 
                </Context.Provider>
            </div>
        )
    }
}



function Text() {
    return (
        <div>
            
            <ButtonDemo/>
        </div>
    )
}



 
 
 class ButtonDemo extends Component {
     render(){
return (
         <Context.Consumer>
             {value=><h1>The answer is {value}</h1>}
         </Context.Consumer>
             
         
     )
     }
     
 }
 

 
 
 