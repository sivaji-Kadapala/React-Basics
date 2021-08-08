import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
     return (
<div>
    {
        this.state.isLoggedIn?<h1>helllloo</h1>:<h2>hiiiii</h2>
    }
</div>)
              
       
        // {
        //     return  <div>Welcome Siva</div>
        // }else{
        //     return  <div>Welcome Sivaji</div>
        // }
        
}
}
