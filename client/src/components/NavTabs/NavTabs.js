import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const NavTabs = () => {
    const location = useLocation();
    
    return (
        <div>
            <ul>
                <li>
                    <Link to="/" className={location.pathname === "/"}>
                    Login
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className={location.pathname === "/signup"}>
                    Sign Up
                    </Link>
                </li>
                <li>
                    <Link to="/main" className={location.pathname === "/main"}>
                    Main Page
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavTabs; 

