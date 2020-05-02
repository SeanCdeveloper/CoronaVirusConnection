 import React from 'react';
 import { useHistory } from "react-router-dom";

 import './InfoBar.css'

const InfoBar = ({room}) => {
    let history = useHistory();

    function handleClick() {
        history.push("/join");
    }

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                {/* <img className='onlineIcon' src={onlineIcon} alt='online image'/> */}
             <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a onClick={handleClick}>
                    {/* <img src={closeIcon} alt='close icon'/> */}
                    Leave Chat
                </a>
            </div>
        </div>
    )
    }
export default InfoBar;

/* <a> changed from '/' to '/join' */