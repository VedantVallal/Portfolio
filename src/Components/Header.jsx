import React, { useEffect } from 'react';
import './header.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from './assets/img1.jpg';
import skillback from './assets/back.jpeg';
// import { runHeaderAnimations } from './gsapAnimations';







const Header = () => {



useEffect(() => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1️⃣ LOADER + PAGE LOAD ANIMATION
  const tl = gsap.timeline();

  tl.to(".topheading .revel", {
    opacity: 1,
    y: -30,
    duration: 0.7,
    stagger: 0.3,
    ease: "circ.inOut"
  })
    .to(".name", {
      x: "-100",
      stagger: 0.3,
      opacity: 1,
      duration: 1.5,
      ease: "circ.easeInOut"
    })
    .to(".spinner", {
      opacity: 1,
      duration: 1.5,
      ease: "circ.easeInOut"
    })
    .to(".topheading .revel", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.3,
      ease: "circ.inOut"
    })
    .to(".block", {
      y: "-100",
      stagger: 0.3,
      opacity: 0,
      duration: 0.5,
      ease: "circ.easeInOut"
    })
    .to(".spinner", {
      opacity: 0,
      duration: 1,
      ease: "circ.easeInOut"
    })
    .to(".loader", {
      height: 0,
      duration: 1
    })
    .to(".green", {
      height: 900,
      top: 0,
      duration: 0.5,
      delay: -0.99,
      ease: "circ.easeInOut"
    })
    .to(".green", {
      height: 0,
      duration: 0.6,
      delay: -0.4
    })
    .to(".s", {
      y: -20,
      opacity: 1,
      duration: 1
    })
    .to(".row1 h1 , .row2 h1", {
      opacity: 1,
      y: -60,
      duration: 0.9,
      ease: "circ.inOut"
    })
    .to(".row1 .text", {
      opacity: 1,
      y: 60,
      duration: 1,
      ease: "circ.inOut"
    })
    .to(".web h2", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out"
    });

  // 2️⃣ SCROLL ANIMATION USING ScrollTrigger
  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      // markers: true,
      start: "50% 50%",
      end: "150% 50%",
      scrub: 2,
      pin: true
    }
  });

  scrollTl
    .to("#center", { height: "100vh" }, "a")
    .to("#top", { top: "-50%" }, "a")
    .to("#bottom", { bottom: "-50%" }, "a")
    .to("#top-h1", { top: "60%" }, "a")
    .to("#bottom-h1", { bottom: "-30%" }, "a")
    .to("#center-h1", { top: "-30%" }, "a")
    .to(".content", { delay: -0.2, marginTop: "0%" });

  // Clean up ScrollTrigger when component unmounts
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
   <div className="main">
      {/* this is the Loader Section  */}
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


          {/* loading effect  */}
<div class="spinner">
</div>



    </div>
    <div className="green"></div>
    {/* this is the Hero Section  */}
    <div className="home">
        <div class="nav">
            <a href="" class="sec1 s">Home
              <span id="l1" class="line"></span>
              </a>
            <a href="" class="sec2 s">About Me <span class="line"></span></a>
            <a href="" class="sec3 s">Projects <span class="line"></span></a>
            <a href="" class="sec4 s">Contact Me <span class="line"></span></a>
          </div>
        {/* this is Hero Section  */}
          <div className="row1">
            <h1>Creative</h1>
            <div className="text">
              <h5>Crafting websites that</h5>
              <h5>Speak louder than words</h5>
            </div>
            <div className="text">
              <h5>Turning pixels into </h5>
              <h5>purposeful Beautiful design.</h5>
            </div>
          </div>


           <div className="row2">
            <div className="web">

            <h2>W</h2>
            <h2>e</h2>
            <h2>b</h2>
            </div>
            <h1>Designer</h1>

          </div>
    </div>

    {/* this is ABout section  */}
    <div className="about">   
       <div id="main">
        <div id="top">
            <h1 id="top-h1">ABOUT</h1>
        </div>
        <div id="center">
            <div class="content">
                <div className="about">
     


     
       <div className="r">

      <div className="data">
        <div className="txt">
          <h1>About <span className='color1'>Me</span></h1>

        <p>
          <h3></h3>
        <span className='color2'>  Hey! I’m Vedant —</span> a passionate web designer who loves crafting visually <br /> appealing and  smooth user experiences. I believe a great website <br /> isn't just about how it looks, but how it feels.
          <br />
          <br />
          My approach combines creativity with clean code. Whether it’s <br /> a landing page, a portfolio, or a full-blown UI design, I focus on simplicity,<br /> structure, and speed.
          <br />
          <br />
        
          Designing intuitive, user-friendly websites is more than just a skill for me — it’s <br />something I genuinely enjoy. Every project is a new canvas, and I put my best <br />into making it pixel-perfect and responsive across all screens.
          <br />
          <br />
          I’m constantly learning, improving, and staying up-to-date <br /> with the latest design trends.<br />

        </p>

        </div>
          <div className="photo">
            <img src={img1} alt="My image" />
         </div>


      </div>

      </div>
    </div>
            </div>
        </div>
        <div id="bottom">
            <h1 id="bottom-h1">ABOUT</h1>
        </div>    
    </div>
   </div>

    {/* THis is Skills Section  */}
    <div className="skills">
       <img src={skillback} alt="My image" />
    </div>

   
   </div>

  );
};

export default Header;
