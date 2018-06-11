import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';
import { Link } from 'react-router-dom';


function Navigation(props) {

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">OMDB Film database</NavbarBrand>

            <Nav className="ml-auto" navbar>
                <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
                </NavItem>
                <NavItem>
                    <NavLink>Settings</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>About</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
     
}

export default Navigation