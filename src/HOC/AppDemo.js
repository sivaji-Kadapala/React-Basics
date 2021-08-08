import React, { Component } from 'react';  
import Hoc from './HOC';  
  
class AppDemo extends Component {  
  render() {  
    return (  
      <div>  
        <h2>HOC Example</h2>  
      
      </div>  
    )  
  }  
}  
AppDemo = Hoc(AppDemo);  
export default AppDemo;  