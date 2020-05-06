import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import './Chat.css'
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    const [message, setMessage] = useState('');
    
    const [messages, setMessages] = useState([]);
    
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

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages,message]);

        },[messages])
    })

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return(
        <div className='outerContainer'>
            <div className='container'>
                <Link to="/apicall">
                <Button className="button" type="submit" color="yellow" content="Green">Click Here for Covid-19 News</Button>
                </Link>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            
        </div>
    )
}

export default Chat;