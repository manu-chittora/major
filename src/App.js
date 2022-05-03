import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <>
      <Router>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/userlogin">Cusotmer Login</Link></div>
      <div><Link to="/usersignup">Customer Signup</Link></div>
      <div><Link to="/ownerlogin">Loging to Business Dashboard</Link></div>
      <div><Link to="/ownersignup">Register Your Business</Link></div>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
