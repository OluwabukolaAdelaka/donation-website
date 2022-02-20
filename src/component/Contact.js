import React from 'react';
import Logo from '../assets/logoDonation2.png';
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div class="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className='img-fluid'/>
          <small className='logoName'>BOUNTIQUEDEALS</small>
        </Link>
      </div>
      <h2>Contact Page</h2>
    </div>
  )
}

export default Contact;