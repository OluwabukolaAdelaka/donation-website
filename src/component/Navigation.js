import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {BsFillPersonFill} from 'react-icons/bs';
import {FaMoneyCheckAlt} from 'react-icons/fa';
import {HiGift} from 'react-icons/hi';
import Logo from '../assets/logoDonation2.png';
import { PaystackButton } from 'react-paystack';
import '../styles/Nav.css';



const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [email, setEmail] = useState('');
    const [amountd, setAmountD] = useState('');

    const config = {
        reference: (new Date()).getTime().toString(),
        publicKey: 'pk_test_e66c082fa2ce37c4432020c36d29268727b458fd',
        amount: amountd * 100
    };
   
   const handleSubmit = (e) => {
    e.preventDefault();
   }

   const handleRedirect = () => {
    toast("Please fill the donation form!");
   }

   // you can call this function anything
   const handlePaystackSuccessAction = (reference) => {
    setEmail("");
    setAmountD("");
    toast("Received with a grateful heart!");
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    setEmail("");
    setAmountD("");
    console.log('closed')
  }

  const componentProps = {
      ...config,
      email,
      text: 'DONATE',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

   
  return (
    <div className='container container-fluid'>
        <Navbar color="light" expand="md" fixed="top" light>
            <NavbarBrand to="/" className='ms-4'>
                <img src={Logo} alt="logo" className='img-fluid'/>
                <small className='logoName'>BOUNTIQUEDEALS</small>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
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
            <button type="button" onClick={handleRedirect} className='navBtn me-4'>DONATE</button>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='formPartInput'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount" className="formlabel">
                            Amount
                            </Label>
                            <Input
                            id="amount"
                            name="amount"
                            type="text"
                            value={amountd}
                            onChange={(e) => setAmountD(e.target.value)}
                            className='formPartInput'
                            />
                        </FormGroup>
                        <PaystackButton  {...componentProps}  className='formBtn me-4'/>
                    </Form>
                </div>
            </div>
            <ToastContainer />
        </div>

        {/* Benefits Section */}
                <div className='benefitHeroCon'>
                    <h2 className='benefitHero'>It is not how much we give, but how much love we put into giving.</h2>
                </div>
        <div className='row benefitSection'>
            <div className="col">
                <h2 className='benefitText'><BsFillPersonFill className='icon'/>Be Kind</h2>
                <p className='benefitMsg'> Your donation would bring smile on the faces of the recipients.</p>
            </div>
            <div className="col">
                <h2 className='benefitText'><FaMoneyCheckAlt className='icon'/>Give</h2>
                <p className='benefitMsg'>It makes you the most beautiful in the world no matter what you look like.</p>
            </div>
            <div className="col">
                <h2 className='benefitText'><HiGift className='icon'/>Be a Blessing</h2>
                <p className='benefitMsg'>Light a lamp for someone and it will also brighten your path.</p>
            </div>
        </div>

        {/* footer section */}
        <footer>
        <span> &copy; 2022</span><small className='logoNameFooter'>BOUNTIQUEDEALS</small>
        </footer>
    </div>
  )
}

export default Navigation;

