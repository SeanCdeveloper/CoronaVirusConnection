import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
// import './Chat.css'
import { Container, Header, Button, Form, Image } from 'semantic-ui-react';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    /* Every single message will be stored below. */
    const [message, setMessage] = useState('');
    /* All messages will be stored in the array below, containing all the messages in `state`. */
    const [messages, setMessages] = useState([]);
    
    /* Super hacky way to route socket messages 
       to the correct destination whether in production 
       or development mode. Will break locally if the 
       port numbers change, so leave them as 3000 & 3001
    */
    const origin = window.location.origin;
    const ENDPOINT = origin === 'http://localhost:3000' ? 'localhost:3001' : origin;
    
    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, () => {
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])

    /* This useEffect Hook handles the 'Admin' Messages in 'server.js' file. 
    This pushes 'messages' through the 'messages' array. 
    */
    useEffect(() => {
        socket.on('message', (message) => {
              /* This sends messages from admin or anyone else to 'messages' Array.  
            We are spreading out all messages and then adding a new message to the `state`.
            */
            setMessages([...messages,message]);
             /* We only want to run this useEffect() Hook when 'messages' array changes. */
        },[messages])
    })

    /* This useEffect Hook is used to send messages to the server.js file.  
    The 'sendMessage' can be seen in a 'socket.on()' statement. 
    */
    
    // useEffect(() => {
    //     socket.on('sendMessage', message => {    
    //         setMessages(messages => [...messages,message]);
           
    //     },[])
    // })

    /* Event handler for Seding Messages */
    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
            /* The 'sendMessage is also in 'index.js' of 'server'.  
            In 'index.js', the emmitter is listening for sendMessage and then emits 'io.to'. 
            */
        }
    }

    /* Looking at Data */
    console.log(message,messages);

    return(
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            
        </div>
    )
}

export default Chat;