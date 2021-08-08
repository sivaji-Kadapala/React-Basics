import React from "react";
import {BrowserRouter as Router,Link,Switch,Route,useHistory} from 'react-router-dom'
export default function RouterDemo2(){
    return(
        <Router>
            <Link to="/Home">Home</Link>
             <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
               <Link to="/Login">Login</Link>
               <Switch>
                   <Route exact path="/Home"><Home/></Route>
                    <Route path="/Contact"><Contact/></Route>
                     <Route  path="/About"><About/></Route>
                      <Route path="/Login"><Login/></Route>
               </Switch>
        </Router>
    )
}
function Home(){
    return(
        <h1>Komati palli</h1>
    )
}
function Contact(){
    return(
        <h1>8106492316</h1>
    )
}
function About(){
    return(
        <h1>Sivaji</h1>
    )
}
function Login() {
     let history=useHistory();
  const handleclick=()=>{
       
    history.push('/Home')
   }
    return (
        <div>
            <h1 style={{color:"Yellow"}}> Login Page</h1>
           Email:<input type="text" placeholder="Email"/>
          Password <input type="password" placeholder="Password"/>
          <button onClick={handleclick}>Login</button>
           
        </div>
    )
}