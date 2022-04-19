import {
    Navbar,
    Nav,
} from 'react-bootstrap';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

import './StyleSheets/Navbar.css';

export default function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-4 w-100">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>

                <div className="user-icon-container">
                    <Nav.Link href="/login">
                        <FontAwesomeIcon icon={faUserCircle} fontSize={"x-large"} color={"white"} className={"user-icon"}/>
                    </Nav.Link>  
                </div>
            </Nav>
            
        </Navbar>
    )
}