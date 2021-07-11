import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from './components/ForgotPassword';
import Loginsuccess from './components/Loginsuccess';

function App() {
  return (<Router>
    <div className="App">
       <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
      <Route exact path="/" ><Login/></Route>
      <Route path="/signup" ><SignUp/></Route>
      <Route path="/forgotpass" ><ForgotPassword/></Route>
      <Route path="/login" ><Loginsuccess/></Route>
      
    </Switch>
        </div>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
