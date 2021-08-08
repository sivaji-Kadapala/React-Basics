//componentDidMount;-Api calls integrating,the only executed in immediadte render,it is called once component mounted 
//update:-state update,called once component updated
//unmount:-actions are deleted from dom,cart products removed,called right before compomemt is unmounted

import React, { Component } from 'react'

export default class LifeCyle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show:false,
             count:0
        }
    }
   
    componentDidMount() {
        console.log("ComponentDidMount");
    }
    componentDidUpdate() {
        console.log("componetDidupdate")
    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    
    render() {
        return (
            <div>
                <h1>componentWillMount</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState( { count:this.state.count+1})
                }>Incremet</button>
                {this.state.show?<Child/>:null}
                <button onClick={()=>{this.setState( { show:!this.state.show})
                }}>Toggle child</button>
            </div>
        )
    }
}
 class Child extends Component {
     componentWillUnmount() {
         console.log("componentWillUnmount")
     }
    render() {
        return (
            <div>
                <h1>Child component</h1>
            </div>
        )
    }
}
