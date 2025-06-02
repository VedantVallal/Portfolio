import React, { useEffect } from 'react';
import './header.css';
import gsap from 'gsap';

const Header = () => {



  
  useEffect(() => {
    // Animate the element when the component mounts
    let t1 = gsap.timeline()
    t1.to('.ved', 
      { 
        x: -60,
      opacity: 1,
      duration: 0.5,
       
      });


  },[]);


  return (
   <div className="main">
    <div className="loader" >
        <div className="topheading">
            <h5 className='revel'>Web Designer</h5>
            <h5 className='revel'>Create | Inspire | Elevate</h5>
        </div>
        <h1 className='revel ved' > Vedant <span>Vallal </span> is a </h1>
    </div>
    <div className="green"></div>
   </div>
  );
};

export default Header;
