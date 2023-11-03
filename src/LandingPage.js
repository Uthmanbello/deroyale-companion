import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {

  return (
    <div className="landing-page">
      <div className='landing'>
        <h2 className='landing-page-heading'><span style={{ fontWeight: 600, fontFamily: 'Josefin Sans, sans-serif', color: 'rgb(145, 194, 156)' }}>DeRoy<span style={{ color: '#ffb267' }} className="deroyale-at">@</span>l&#233; Lodge</span></h2>
        <div className='lang-btns'>
          <Link to="/home/chat" className='lang-btn english-btn'>Get Started</Link>
        </div>    
        <div className='landing-footer'>
          <p style={{ color: 'rgb(145, 194, 156)' }}>&copy; {new Date().getFullYear()} <span style={{ fontWeight: 500, fontFamily: 'Josefin Sans, sans-serif', color: 'rgb(145, 194, 156)' }}>DeRoy<span style={{ color: '#ffb267' }} className="deroyale-at">@</span>l&#233;</span></p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;