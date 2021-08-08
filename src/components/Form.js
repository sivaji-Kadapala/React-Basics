import React, { Component } from 'react'

export default class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             count:0
        }
    }
    handleChange=(event) => {
        this.setState({ username:event.target.value});
    }
     increment=() => {
        this.setState({ count:this.state.count+1});
    }
    decrement=() => {
        this.setState({ count:this.state.count-1});
    }
    
    
    render() {
        return (
            <div>
                <h1> {this.state.username}</h1>
           <h1> {this.state.count}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.increment}>Increment:{this.state.count}</button>
                 <button onClick={this.decrement}>Decrement:{this.state.count}</button>
             
            </div>
        )
    }
}
