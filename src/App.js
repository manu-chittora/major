import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import UserSignup from'./components/UserSignup';
import UserLogin from'./components/UserLogin';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/usersignup" component={UserSignup}/>
        <Route exact path="/userlogin" component={UserLogin}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <Route path={"/profile/:email"} component={Profile} />
        <Redirect to="/"/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
