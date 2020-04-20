import React, { Component } from "react";
import "./App.css";
// import LogInForm from './components/LogInForm';
// import SignUpForm from './components/SignUpForm';
import NavTabs from './components/NavTabs/NavTabs';
import LoginPage from './components/pages/LoginPage';
import SignInPage from './components/pages/SignInPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavTabs/>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/signup" component={SignInPage}/>
      </div>
      </Router>
    );
  }
}

export default App;

{/* <LogInForm/>
        <SignUpForm/> */}