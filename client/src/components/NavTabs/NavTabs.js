import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Header, Menu } from 'semantic-ui-react'

const NavTabs = () => {
    const location = useLocation();
    // state = {}

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    return (
        <Container>
            <Menu>
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
            </Menu>
        </Container>
    )
}

export default NavTabs;

