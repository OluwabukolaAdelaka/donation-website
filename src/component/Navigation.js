import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../assets/logoDonation2.png';
import '../styles/Nav.css';


const Navigation = () => {
   const handleSubmit = (e) => {
    e.preventDefault();
   }
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
            <button type="button" className='navBtn me-4'>DONATE</button>
            </Collapse>
        </Navbar>

        {/* Hero Section */}
        <div className="row heroSection">
            <div className="col textPart">
                <h1 className="col textPartTitle">Love begins by taking care of the closest ones.</h1>
                <p className="col textPartMsg">Giving is not just about making a donation.
                    It is about making a difference.</p>
            </div>
            <div className="col formPartSection">
                <div className="formPart">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email" className="formlabel">Email</Label>
                            <Input
                            id="email"
                            name="email"
                            type="email"
                            className='formPartInput'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount" className="formlabel">
                            Amount
                            </Label>
                            <Input
                            id="amount"
                            name="number"
                            type="text"
                            className='formPartInput'
                            />
                        </FormGroup>
                        <button type="button" className='formBtn me-4'>DONATE</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation;

