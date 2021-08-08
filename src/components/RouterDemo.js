
import React from 'react';
import { BrowserRouter as Router, Route, Link ,Switch,useHistory} from 'react-router-dom'

export default function RouterDemo() {
    return (
        <div>
            <Router>
                <Link to='/Home'>home</Link>
                 <Link to='/About'>about</Link>
                  <Link to='/Contact'>contact</Link>
                  <Link to='/Login'>Login</Link>
                  <Switch>
                <Route exact path='/Home'><Home/></Route>
                  <Route  path='/About'><About/></Route>
                  <Route  path='/Contact'><Contact/></Route>
                  <Route  path='/Login'><Login/></Route>
                  </Switch>
                  
            </Router>
        </div>
    )
}


 function Home() {
    return (
        <div>
           
            <h1 style={{color:"red"}}> Home page</h1>
        </div>
    )
}
function About() {
    return (
        <div>
            <h1 style={{color:"green"}}>About Page</h1>
            
        </div>
    )
}
function Contact() {
    return (
        <div>
            <h1 style={{color:"blue"}}> Contact Page</h1>
           
        </div>
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


