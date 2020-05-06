import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import LoginPage from './components/Pages/LoginPage';
import SignUpPage from './components/Pages/SignUpPage';
import API from './components/APIcall/APIcall';

const App = () => (
    <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/join" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/apicall" exact component={API} />
    </Router>
)

export default App;

