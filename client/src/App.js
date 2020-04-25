import React from "react";
import "./App.css";
// import LogInForm from './components/LogInForm';
// import SignUpForm from './components/SignUpForm';
import NavTabs from './components/NavTabs/NavTabs';
import LoginPage from './components/pages/LoginPage';
import SignInPage from './components/pages/SignInPage';
import MainPage from './components/pages/MainPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from "./components/Logo";

const App = () => {
    return (
      <Router>
      <div className="App">
        <logo></logo>
        <NavTabs/>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/signup" component={SignInPage}/>
        <Route exact path="/main" component={MainPage}/>
      </div>
      </Router>
    );
}

export default App;
