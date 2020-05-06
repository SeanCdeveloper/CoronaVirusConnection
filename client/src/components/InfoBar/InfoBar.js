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
             <h3 style={{color: "#ffa62b"}}>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a style={{cursor:"pointer", color:"#ffa62b"}} onClick={handleClick}>
                    Leave Chat
                </a>
            </div>
        </div>
    )
    }
export default InfoBar;

