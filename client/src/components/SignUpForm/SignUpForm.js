import React, { useState } from 'react';
import { Container, Header, Button, Form, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Logo from "../../images/cclogo.png";
import axios from 'axios';
// import API from '../utils/API';
import API from '../../utils/API';

console.log(API);

export default function LogInForm() {
    const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    // const [formObject, setFormObject] = useState({});

    const handleFormSubmit = e => {
        e.preventDefault();  
        // console.log("Username is: " + username + ", and " + "Password is: " + password)
        var userData = {
          username, 
          password
        }
        // console.log('++++++',userData);
        if (!userData.username || !userData.password) {
          return;
        }
        signUpUser(userData.username, userData.password);
    };

     const signUpUser = () =>  {
      // console.log("------>",email,password);
      const signInData = {username, password};
      console.log(signInData);
      API.register(signInData)
      .then(data=>console.log("register-return===>",data))
      .catch(err=>console.log(err))
      // }).catch(err => console.log(err))
      
    }

    return (
    <Container centered>
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
      {/* <Link to="/join"> */}
      <Button type='submit'>Login</Button>
      {/* </Link> */}
      <Link to="/">Need to Sign-Up?</Link>
    </Form>
    </Container>
  )
};

// const [username, setUserName] = useState('');
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('');

// // const [formObject, setFormObject] = useState({});

// const handleFormSubmit = e => {
//     e.preventDefault();  
//     // console.log("Username is: " + username + ", and " + "Password is: " + password)
//     var userData = {
//       email, 
//       password
//     }
//     // console.log('++++++',userData);
//     if (!userData.email || !userData.password) {
//       return;
//     }
//     signUpUser(userData.email, userData.password);
// };

//  const signUpUser = () =>  {
//   console.log("------>",email,password);
//   const signInData = {email, password};
//   console.log(signInData);
//   API.register(signInData)
//   .then(data=>console.log("register-return===>",data))
//   .catch(err=>console.log(err))
//   // }).catch(err => console.log(err))
  
// }




  /* <Button/> '/' changed from '/login' to '/' */

  /* <Link/> goes to '/' instead of '/login'.  */


  //Below is what I had when i was trying to make a call to the api with signup -Adrian
//   const handleFormSubmit = e => {
//     e.preventDefault();  
//     console.log("Username is: " + username + ", and " + "Password is: " + password)
//     axios({
//       method: 'POST',
//       url: 'https://localhost:3001/users',
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//       data: {
//         username: username,
//         password: password
//       }
//     }). then(function (response) {
//       console.log(response.data);
//       console.log("Test1",response)
//     }).catch(err => console.log(err));
// };

    // axios.post('/login', {signInData}).then(data => {
    // const signUpUser = () =>  {
    //   console.log("------>",email,password);
    //   const signInData = {email, password};
    //   console.log(signInData);
    //   axios.post('/login', {signInData}).then(data => {
    //     console.log(data);
    //   }).catch(err => console.log(err))
// axios.post('http://localhost:3001/api/signup', {email,password});
