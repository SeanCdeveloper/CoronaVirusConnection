import React, { useState } from 'react';
import { Container, Header, Button, Form } from 'semantic-ui-react'

export default function LogInForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();  
        console.log("Username is: " + username + ", and " + "Password is: " + password)
    };

  return (
    <Container>
    <Header as='h1'>Login Page</Header>
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Username</label>
        <input style={{ marginTop: "150px", height: "40px", width: "50em" }}
                type="text"
                name="username"
                onChange={(event) => setUserName(event.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </Container>
  )
};

// const handleInputChange = event => {
//     console.log(event.target.value)
//     event.preventDefault();
//     const {name, value} = event.target;
//     setLogInInfo({...login, [name]: value})
// }

{/* <div className="Container">
            <form>
                <input style={{ marginTop: "150px", height: "40px", width: "50em" }}
                type="text"
                name="username"
                onChange={e => setUsername(e.target.value)}
                />
                <br />
                <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button onClick={handleSubmit} style={{ width: "10em", height: "4em", marginTop: "4em" }} type="button">Button</button>
            </form>
        </div> */}


// import React, { useState } from "react";
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Row from "../../components/Row";

// const Signup = () => {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("username is " + username);
//     console.log("password is " + password);
//   };

//   return (
//     <div>
//       <div className="mt-4">
//         <h2>Welcome to Wikipedia Searcher!</h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <Container className="mt-3 px-5">
//           <Row className="form-group">
//             <Col size="12">
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 onChange={e => setUsername(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <Row className="form-group">
//             <Col size="12">
//               <input
//                 className="form-control"
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={e => setPassword(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <button className="btn btn-success" type="submit">
//             Submit
//           </button>
//         </Container>
//         <Container className="mt-4">
//           <h3>Hello {username}!</h3>
//           <p>I probably shouldn't tell you this, but your password is {password}!</p>
//         </Container>
//       </form>
//     </div>
//   );
// };

// export default Signup;
