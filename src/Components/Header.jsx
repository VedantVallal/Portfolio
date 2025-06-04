import React, { useEffect } from 'react';
import './header.css';
import gsap from 'gsap';
// import { runHeaderAnimations } from './gsapAnimations';

const Header = () => {



  
  useEffect(() => {
    // Animate the element when the component mounts
 {
  const tl = gsap.timeline();

      tl.to(".topheading .revel", {
        opacity: 1,
        y: -30,
        duration: 1.2,
        stagger: 0.3,
        ease: "circ.inOut"
     })   
       .to(".name", {
        x: '-100',
        stagger: 0.3,
        opacity: 1,
        duration: 2,
        ease:"circ.easeInOut"
         })
      .to(".topheading .revel", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        stagger: 0.3,
        ease: "circ.inOut"
     }) 
        .to(".block", {
        y: '-100',
        stagger: 0.3,
        opacity: 1,
        duration: 0.5,
        ease:"circ.easeInOut"
         })
         .to(".loader",{
          height:0,
          duration:1,
        
         })
          .to(".green",{
          height:900,
          top:0,
          duration:.6,
          delay:-.9,
          ease:"circ.easeInOut"
          
        })
        .to(".green",{
          height:0,
          duration:.6,
          delay:-.4,
          
         })


}
},[]);


  return (
   <div className="main">
    <div className="loader" >
        <div className="topheading">
            <h5 className='revel'>Web Designer</h5>
            <h5 className='revel'>Create | Inspire | Elevate</h5>
        </div>
        <h1 className='revel'>
          <div className="block">
           <span className='name'>Vedant</span>
            <span className='name color' >Vallal </span> 
            <span className='name'>is </span> 
            <span className='name'>a </span> 
          </div>
            
           
          </h1>
    </div>
    <div className="green"></div>
   </div>
  );
};

export default Header;
