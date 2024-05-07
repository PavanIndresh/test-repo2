import React, { useState } from 'react';
import '../index.css';
import image1 from '../assets/a.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  const[email, setEmail]=useState('');
  const[password,setPassword]=useState('');

  const handleLogin= () => {
    if(email==='pavanindresh15@gmail.com' && password==='pavan'){
      navigate('/Home');
    }
    else{
      alert("Not Authorized")
    }
  }
  return (
    <div className='Logfir'>
      <div className='Logbanner1'>
        <div className='Logasd'>
          <img src={image1} className='Logimage1' />
          <div className="Logoverlay1"></div>
        </div>
      </div>
      <div className='Logbanner2'>
      <div className='LoginsideContainer'>
            <h1 className="LogWelcomeMessage">Welcome To The New Age Of Development</h1>
            <div className="Logform">
            <div className="Logfrm">
              <div className="Logfrm1">
                <p className="p1">Talk to us</p>
                <p className="p2">Our team will get in touch with you as soon as possible</p>
              </div>
              
              <div className="frm3">
                <p className="p5">Email</p>
                <input className="p6" type="text" placeholder="Tell us your Email ID" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="frm2">
                <p className="p3">Password</p>
                <input className="p4" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="frm5">
                <button onClick={handleLogin} className="p9">Login</button>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Banner;
