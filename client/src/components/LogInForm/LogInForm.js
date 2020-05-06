import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../images/cclogo.png";
import axios from 'axios';
import "./LogInForm.css"
import { Container, Header, Button, Form, Image } from 'semantic-ui-react';
import API from '../../utils/API';
import { useHistory } from "react-router-dom";

export default function LogInForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();  
  
        var userData = {
          username, 
          password
        }
        if (!userData.username || !userData.password) {
          return;
        }
        signUpUser(userData.username, userData.password);
    };

    let history = useHistory();
    const signUpUser = () =>  {
     
     const signInData = {username, password};
    
     API.login(signInData)
     .then((data) => {
       console.log(data.isAuthenticated);
       if (data.isAuthenticated === true) {
       history.push("/join");
       console.log(data);
       } else {
         alert("Your username and password are incorrect.")
         return
       }
     })
     .catch(err=>console.log(err))
   }

  return (
    <Container className="container">
     <Image src={Logo} centered/>
    <Header as='h1'>Login Page</Header>
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Username</label>
        <input
                type="text"
                name="username"
                onChange={(event) => setUserName(event.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input 
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                />
      </Form.Field>


      <Button type='submit'>Login</Button>



      <Button className="button" type='submit' color='green' content='Green'>Login</Button>


      <Link to="/signup">Need to Sign-Up?</Link>
    </Form>
    </Container>
  )
};


