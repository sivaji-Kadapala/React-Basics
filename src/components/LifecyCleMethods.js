import React, { Component } from 'react'

export default class LifecyCleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hello:"React.Js"
            
        }
         this.changeState=this.changeState.bind(this)
    }
   changeState(){
       this.setState({hello:"js"})
   }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log(' componentDidMount');
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(nextProps, nextState) {
       return true;
   }
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
    render() {
        return (
            <div>
                <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button> 
            </div>
        )
    }
}
