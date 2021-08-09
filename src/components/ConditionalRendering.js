import React, { Component } from 'react'

export default class ConditionalRendering extends Component {constructor(props) {
    super(props)

    this.state = {
         isLogged:false
    }
}

    render() {
        if(this.state.isLogged){
            return(
                <div>Welcome sivaji</div>
            )
        }else{
            return(
                <div>Welcome jagadheesh</div>
            )
        }
        
    }
}
