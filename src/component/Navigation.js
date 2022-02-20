import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem ,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../assets/logoDonation2.png';
import '../styles/Nav.css';


const Navigation = () => {
  return (
    <div className='container container-fluid'>
        <Navbar color="light" expand="md" fixed="top" light>
            <NavbarBrand to="/" className='ms-4'>
                <img src={Logo} alt="logo" className='img-fluid'/>
                <small className='logoName'>BOUNTIQUEDEALS</small>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="ms-auto"
                navbar
            >
                <NavItem>
                    <Link to="/about" className='mylinks'>
                        ABOUT US
                    </Link>
                </NavItem>
                <NavItem className="me-5">
                    <Link to="/contact" className='mylinks'>
                        CONTACT
                    </Link>
                </NavItem>
            </Nav>
            <Button className='navBtn me-4'>DONATE</Button>
            </Collapse>
        </Navbar>
    </div>
  )
}

export default Navigation;

