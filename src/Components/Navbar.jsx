import React from 'react'
import '../index.css'

function Navbar(){
    return(
        <div className="Lognavbar">
            <div className='LoginsideContainerNav'> 
                <div className="Lognav1">Corrus Cloud</div>
                <div className="Lognav2">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Contact Us</div>
                </div>
                <div className="Lognav3">
                  <button className="LogloginButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
