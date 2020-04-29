// import React, { useEffect, useState } from 'react';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import AppLogo from "../Logo/index";
// import { Container, Header, Grid, List, Button, Form, Input, Item } from 'semantic-ui-react'
// // import DataFetcher from '../DataFetcher/DataFetcher'
// import axios from 'axios';

// export default function ChatPage() {
//     const [messages, setMessages] = useState([]);
//     const [formObject, setFormObject] = useState({});
//     const [news, setNews] = useState([]);

//     // useEffect(async() => {
//     //     const response = await fetch('http://newsapi.org/v2/everything?q=coronavirus&apiKey=3cb25d8241014e44a94861a91d73f1f4');
//     //     const data = await response.json();
//     //     const {articles} = data;
//     //     console.log(articles);
//     //     // console.log("old",data);
//     //     // console.log(data.articles);
//     //         // .then((data) => {
//     //         //     console.log("new",data)
//     //         // });
//     //     // const [item] = data.results;
//     //     // setNews(item);
//     // }, [])

//     useEffect(() => {
//         // const response = await fetch('http://newsapi.org/v2/everything?q=coronavirus&apiKey=3cb25d8241014e44a94861a91d73f1f4');
//         // const data = await response.json();
//         // console.log("old",data);
//         // console.log(data.articles);
//         getNews()        
//     }, [])

//     const getNews = () => {
//         axios.get("http://newsapi.org/v2/everything?q=coronavirus&apiKey=3cb25d8241014e44a94861a91d73f1f4")
//         .then(data => {
//         // console.log(data.data.articles);
//         const {articles} = data.data;
//         setNews(articles);
//         })
//         .catch(err => console.log(err));
//     }

//     /* Load all messages to store inside `setMessage` */

//     // useEffect(() => {
//     //     loadMessages()
//     // }, {})

//     /* Load all messages and set them to `message` */

//     const loadMessages = () => {
//         API.getMessages()
//             .then(res => setMessages(res.data))
//             .catch(err => console.log(err))
//     }

//     /* Delete a `message` with given 'id', then reload Messages */

//     // const deleteMessage = (id) => {
//     //     API.deleteMessage(id)
//     //     .then(res => loadMessages())
//     //     .catch(err => console.log(err));
//     // }

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormObject({ ...formObject, [name]: value })
//         console.log(event.target);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         console.log(event.target);
//         console.log(formObject.title);
//         console.log(formObject.author);
//         console.log(formObject.message);

//         if (formObject.title && formObject.author) {
//             API.saveMessage({
//                 title: formObject.title,
//                 author: formObject.author,
//                 message: formObject.message
//             })
//                 .then(res => loadMessages())
//                 .catch(err => console.log(err));
//         }
//     }

//     return (
//         <Container>
//             <AppLogo/>
//             <Header as='h1'>Title</Header>
//             <div className="NewsAreaWrap">
//             <Header as='h1'>News Area</Header>

//                 <Container fluid style={{border: "1px solid black", height: "200px", margin: "0 100px 0 100px"}}className="newsWell">
//                 {
//                     news.map(news => (
//                         <div key={news.id}>
//                             <h2>{news.title}</h2>
//                             <p>{news.author}</p>
//                             <p>{news.content}</p>
//                             <a href={news.url}>Read Article</a>
//                         </div>
//                     )
//                 )}
//                 </Container>
//             </div>
//             <div className="ChatAreaWrap">
//             <Header as='h1'>Chat Area</Header>
//                 <div style={{border: "1px solid black", height: "200px", margin: "0 100px 0 100px"}}className="messageWell"></div>
//                 <Form>
//                     <Input
//                         onChange={handleInputChange}
//                         name="title"
//                         placeholder="Title"
//                         style={{width: "30em", height: "3em", marginTop: "1em"}}
//                     />
//                     <br/>
//                     <Input
//                         onChange={handleInputChange}
//                         name="author"
//                         placeholder="Author"
//                         style={{width: "30em", height: "3em", marginTop: "1em"}}
//                     />
//                     <br/>
//                     <textarea
//                         onChange={handleInputChange}
//                         name="message"
//                         placeholder="Enter Message"
//                         style={{width: "30em", height: "6em", marginTop: "1em"}}
//                     />
//                     <br/>
//                     <Button
//                         onClick={handleFormSubmit}
//                         type="button"
//                         style={{width: "10em", height: "4em", marginTop: "1em"}}
//                     >
//                         Submit
//                     </Button>
//                 </Form>
//                 <Grid.Column width={8}>
//                     {messages.length ? (
//                         <List>
//                             {messages.map(message => (
//                                 <li key={message._id}>
//                                     <Link to={"/messages/" + message._id}>
//                                         <strong>{message.title} by {message.author}</strong>
//                                     </Link>
//                                     <Button></Button>
//                                 </li>
//                             ))}
//                         </List>
//                     ) : (
//                             <Header as='h3'>No results</Header>
//                         )}
//                 </Grid.Column>
//             </div>
//         </Container>
//     )
// }


// /*

// Organize by ip address to location.
// How to find a person's IP address?
// Check to see how zip-code works, too.
// Four different mini-rooms to go into and communicate.

// */