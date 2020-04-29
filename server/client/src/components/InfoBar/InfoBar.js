 import React from 'react';
 import './InfoBar.css'

const InfoBar = ({room}) => (
        <div className="infoBar">
            <div className="leftInnerContainer">
                {/* <img className='onlineIcon' src={onlineIcon} alt='online image'/> */}
             <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href='/join'>
                    {/* <img src={closeIcon} alt='close icon'/> */}
                    Leave Chat
                </a>
            </div>
        </div>
    )

export default InfoBar;

/* <a> changed from '/' to '/join' */