import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../images/cclogo.png";
// import axios from 'axios';
import "./SignUpForm.css"
import { Container, Header, Button, Form, Image } from 'semantic-ui-react';
import API from '../../utils/API';

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

     const signUpUser = () =>  {
      const signInData = {username, password};
      console.log(signInData);
      API.register(signInData)
      .then(data=> {
      if (data.message.msgError === true) {
        alert("Username Is Already Taken.") 
      } else {
        alert("Username Successfully Created.")
      }
    })
      .catch(err=>console.log(err))

    }

  return (
    <Container className="container2">
    <Image src={Logo} centered/>
   <Header as='h1'>Sign-in Page</Header>
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

     <Button className="button" type='submit' color='green' content='Green'>Login</Button>

     <Link to="/">Need to Sign-Up?</Link>
   </Form>
   </Container>
  )
};

