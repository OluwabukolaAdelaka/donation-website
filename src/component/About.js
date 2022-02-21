import React from 'react';
import Logo from '../assets/logoDonation2.png';
import {Link} from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className='container container-fluid'>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className='img-fluid'/>
          <small className='logoName'>BOUNTIQUEDEALS</small>
        </Link>
      </div>
      <div className="aboutSection">
        <div className="aboutPart">
          <h2 className="aboutHeroText">About Us</h2>
          <p className="aboutHeroMsg">The collection of funds allows to contribute money to colleagues for a special infrequent occasion which include
          both joyous events like weddings, and personal tragedies like fires, floods, illnesses and deaths. </p>
          <p className="aboutHeroMsg">The contribution is voluntary, and given freely without pressure or coercion. The donor determines the amount of the contribution. </p>
        </div>
      </div>
      {/* footer section */}
      <footer>
        <span> &copy; 2022</span><small className='logoNameFooter'>BOUNTIQUEDEALS</small>
        </footer>
    </div>
  )
}

export default About;