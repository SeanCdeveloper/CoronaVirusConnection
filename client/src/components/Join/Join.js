import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import { Container, Header, Input, Button, Form, Image } from 'semantic-ui-react';


const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <Header as="h1" color="yellow" className='heading'>Join</Header>
                <Container><Input
                    placeholder='Name'
                    className='joinInput'
                    type='text'
                onChange={(event) => setName(event.target.value)}
                /></Container>
                <Container><Input
                    placeholder='Zip code'
                    className='joinInput'
                    type='text'
                onChange={(event) => setRoom(event.target.value)}
                /></Container>
                <Link 
                onClick={e => (!name || !room) ? e.preventDefault() : null} 
                to={`/chat?name=${name}&room=${room}`}>
                <Button className='button' type='submit' color="green">Sign In</Button>
                </Link>
            </div>
        </div>
    )
}

export default Join;