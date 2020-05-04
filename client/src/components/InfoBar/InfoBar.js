 import React from 'react';
 import { useHistory } from "react-router-dom";
 import './InfoBar.css'
 import { Container, Header, Button, Form, Image } from 'semantic-ui-react';

const InfoBar = ({room}) => {
    let history = useHistory();

    function handleClick() {
        history.push("/join");
    }

    return (
        <Container className="infoBar">
            <Container className="leftInnerContainer">
                {/* <img className='onlineIcon' src={onlineIcon} alt='online image'/> */}
             <Header as="h3">{room}</Header>
            </Container>
            <Container className='rightInnerContainer'>
                <a onClick={handleClick}>
                    {/* <img src={closeIcon} alt='close icon'/> */}
                    Leave Chat
                </a>
            </Container>
        </Container>
    )
    }
export default InfoBar;

/* <a> changed from '/' to '/join' */