import React, { Component } from 'react'

export default class ForceUpadte extends Component {
update=() => {
    this.forceUpdate();
}
    render() {
        console.log("component is re-rendered");
        return (
            <div>
                <h1>TutorialsPoint</h1>
                <button onClick={this.update}>Render</button>
            </div>
        )
    }
}
