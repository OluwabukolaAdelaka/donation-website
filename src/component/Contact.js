import React, {useState} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../assets/logoDonation2.png';
import '../styles/Contact.css';

const Contact = () => {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
     }

     const handleSave = () => {
      setFname("");
      setEmail("");
      setMessage("");
      toast("Every big change in the world starts with one person!");
     }
  return (
    <div className='container container-fluid'>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className='img-fluid'/>
          <small className='logoNameContact'>BOUNTIQUEDEALS</small>
        </Link>
      </div>
      <h2 className='heroText text-center'>Contact Us</h2>
      <p className='heroMsg text-center'>Please fill this form in a decent manner.</p>
      <div className="col formPartSection">
        <div className="formPart">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fname" className="formlabel">Full Name</Label>
                <Input
                  id="fname"
                  name="fname"
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className='formPartInput'
                />
            </FormGroup>
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
              <Label for="message" className="formlabel">
                Message
              </Label>
              <Input
              id="message"
              name="message"
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='formPartInput'
              />
            </FormGroup>
            <button type="button" onClick={handleSave} className='navBtn me-4'>SUBMIT</button>
          </Form>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Contact;