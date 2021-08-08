import React, { useReducer} from 'react'
//#3
const intialState=0
//#4
const reducer=(state,action)=>{
    //#5
    switch(action){
        //#6
        case 'increment':return state+1
         case 'decrement':return state-1
         case 'reset':return intialState;
         default:return state;
    }
}
export default function UseReducer() {
    //#2
    // useReducer(reducer,intialState)
    //#7 destructuring
    const [count,dispatch]=useReducer(reducer,intialState)
    return (
        <div>
            {/* #8 */}
            <div>UseReducer count-{count}</div>
            {/* #1 */}
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button  onClick={()=>dispatch('decrement')}>Decrement</button>
            <button  onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}