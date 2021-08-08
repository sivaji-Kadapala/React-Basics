import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    render() {
        // if(true){
        //     throw new Error('Custom error');
        // }
        return (
            <div>
                <h1>User Component</h1>
            </div>
        )
    }
}
