import React, { useEffect } from "react";
import "./header.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "./assets/myimg.png";

import gsph from "./assets/gsapback.jpg";
import figmaph from "./assets/figma.png";
import redux from "./assets/redux.png";

import skillback from "./assets/steel.webp";
// import { runHeaderAnimations } from './gsapAnimations';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import TechIcon from "./Tech";

// Import in your component file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
// import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
// import { faJs } from '@fortawesome/free-brands-svg-icons';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faPython,
  faGitAlt,
  faBootstrap,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Use this as SQL icon

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
      ease: "circ.inOut",
    })
      .to(".name", {
        x: "-100",
        stagger: 0.3,
        opacity: 1,
        duration: 1.5,
        ease: "circ.easeInOut",
      })
      .to(".spinner", {
        opacity: 1,
        duration: 1.5,
        ease: "circ.easeInOut",
      })
      .to(".topheading .revel", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        stagger: 0.3,
        ease: "circ.inOut",
      })
      .to(".block", {
        y: "-100",
        stagger: 0.3,
        opacity: 0,
        duration: 0.5,
        ease: "circ.easeInOut",
      })
      .to(".spinner", {
        opacity: 0,
        duration: 1,
        ease: "circ.easeInOut",
      })
      .to(".loader", {
        height: 0,
        duration: 1,
      })
      .to(".green", {
        height: 900,
        top: 0,
        duration: 0.5,
        delay: -0.99,
        ease: "circ.easeInOut",
      })
      .to(".green", {
        height: 0,
        duration: 0.6,
        delay: -0.4,
      })
      .to(".s", {
        y: -20,
        opacity: 1,
        duration: 1,
      })
      .to(".row1 h1 , .row2 h1", {
        opacity: 1,
        y: -60,
        duration: 0.9,
        ease: "circ.inOut",
      })
      .to(".row1 .text", {
        opacity: 1,
        y: 60,
        duration: 1,
        ease: "circ.inOut",
      })
      .to(".web h2", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      });

    // 2️⃣ SCROLL ANIMATION USING ScrollTrigger
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true,
      },
    });

    scrollTl
      .to("#center", { height: "100vh" }, "a")
      .to("#top", { top: "-50%" }, "a")
      .to("#bottom", { bottom: "-50%" }, "a")
      .to("#top-h1", { top: "60%" }, "a")
      .to("#bottom-h1", { bottom: "-30%" }, "a")
      .to("#center-h1", { top: "-30%" }, "a")
      .to(".content", { delay: -0.2, marginTop: "0%" });

    const spinnerRotation = gsap.to(".back", {
      rotate: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
      paused: true,
      transformOrigin: "center center",
    });

    let scrollTimeout;

    const handleScroll = () => {
      spinnerRotation.play(); // Start rotating
      clearTimeout(scrollTimeout); // Clear any existing timeout
      scrollTimeout = setTimeout(() => {
        spinnerRotation.pause(); // Pause when scrolling stops
      }, 150); // Adjust this delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    // CLEANUP
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="main">
      {/* this is the Loader Section  */}
      <div className="loader">
        <div className="topheading">
          <h5 className="revel">Web Designer</h5>
          <h5 className="revel">Create | Inspire | Elevate</h5>
        </div>
        <h1 className="revel">
          <div className="block">
            <span className="name">Vedant</span>
            <span className="name color">Vallal </span>
            <span className="name">is </span>
            <span className="name">a </span>
          </div>
        </h1>

        {/* loading effect  */}
        <div class="spinner"></div>
      </div>
      <div className="green"></div>
      {/* this is the Hero Section  */}
      <div className="home">
        <div class="nav">
          <a href="" class="sec1 s">
            Home
            <span id="l1" class="line"></span>
          </a>
          <a href="" class="sec2 s">
            About Me <span class="line"></span>
          </a>
          <a href="" class="sec3 s">
            Projects <span class="line"></span>
          </a>
          <a href="" class="sec4 s">
            Contact Me <span class="line"></span>
          </a>
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

                      <h4>KNOW ABOUT ME</h4>


                      <h1>
                        Web Designer and <br /> a little bit of <span className="text-colorfull animate-gradient-x"> everything</span> 
                      </h1>

                      <p>
                       
                        <span className="">
                        
                          Hey! I’m Vedant —
                        </span>
                        a passionate web designer who loves crafting visually
                        <br /> appealing and smooth user experiences. I believe
                        a great website isn't <br /> just about how it looks,
                        but how it feels.
                        My approach combines creativity <br /> with clean code. Whether
                        it’s a landing page, a portfolio, or a full-blown <br />
                        UI design, I focus on simplicity,
                        <br /> structure, and speed.
                        <br />
                        <br />
                        Designing intuitive, user-friendly websites is more than
                        just a skill for me — it’s <br />
                        something I genuinely enjoy. Every project is a new
                        canvas, and I put my best <br />
                        into making it pixel-perfect and responsive across all
                        screens.
                        <br />
                        <br />
                        I’m constantly learning, improving, and staying
                        up-to-date <br /> with the latest design trends.
                        <br />
                        <div className="abouticons">

                        <FontAwesomeIcon icon={faGithub}  className="ic1"/>
                        <FontAwesomeIcon icon={faLinkedin} className="ic"/>
                        <FontAwesomeIcon icon={faTwitter} className="ic"/>
                        </div>









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
        <img className="back" src={skillback} alt="My image" />
        <div class="bottom-blur"></div>
        <div class="bottom-blur"></div>

        <div className="skilldata">
          <h3>MY SKILLS</h3>
          <h1>
            The Secret{" "}
            <span className="text-colorfull animate-gradient-x sau">
              {" "}
              Sauce{" "}
            </span>
          </h1>
        </div>

        <div className="techstack">
          <div className="tech0">
            <FontAwesomeIcon
              icon={faHtml5}
              className="html"
              style={{ color: "#f8530d" }}
            />
            <h3>HTML</h3>
          </div>

          <div className="tech1">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="html"
              style={{ color: "#0088cc", fontSize: "40px" }}
            />
            <h3>CSS</h3>
          </div>

          <div className="tech2">
            <FontAwesomeIcon
              icon={faJs}
              className="html"
              style={{ color: "#FFD43B" }}
            />
            <h2 className="js">JavaScript</h2>
          </div>

          <div className="tech3">
            <FontAwesomeIcon
              icon={faReact}
              className="html"
              style={{ color: "#2fbcf9" }}
            />
            <h2 className="js">ReactJS</h2>
          </div>

          <div className="tech4">
            <FontAwesomeIcon
              icon={faJava}
              className="html"
              style={{ color: "#2fbcf9" }}
            />
            <h2 className="js">Java</h2>
          </div>
          <div className="tech5">
            <FontAwesomeIcon
              icon={faPython}
              className="html"
              style={{ color: "#2fbcf9" }}
            />
            <h2 className="js">Python</h2>
          </div>
          <div className="tech6">
            <FontAwesomeIcon
              icon={faGitAlt}
              className="html"
              style={{ color: "#2fbcf9" }}
            />
            <h2 className="js">Github</h2>
          </div>

          <div className="tech7">
            <FontAwesomeIcon
              icon={faDatabase}
              className="html"
              style={{ color: "#2fbcf9" }}
            />
            <h2 className="js">Database</h2>
          </div>
          <div className="tech8">
            <FontAwesomeIcon
              icon={faBootstrap}
              className="html"
              style={{ color: "#2fbcf9" }}
            />
            <h2 className="js">Bootstrap</h2>
          </div>

          <div className="tech10">
            <img src={gsph} alt="" />
            <h2 className="js gsa">GSAP</h2>
          </div>
        </div>

        <div className="tech11">
          <img src={figmaph} alt="" />
          <h2 className="js gsa">Figma</h2>
        </div>

        <div className="tech12">
          <img src={redux} alt="" />
          <h2 className="js gsa">Redux</h2>
        </div>
      </div>

      <div class="scroll-wrapper">
  <div class="scroll-track">
    <div class="scroll-text">
      accessible &nbsp; dynamic &nbsp; scalable &nbsp; engaging &nbsp; responsive &nbsp;
      intuitive &nbsp; modern &nbsp; clean &nbsp; interactive &nbsp; lightweight &nbsp;
      seo-friendly &nbsp; optimized &nbsp; functional &nbsp; modular &nbsp; aesthetic &nbsp;
    </div>

    <div class="scroll-text">
      accessible &nbsp; dynamic &nbsp; scalable &nbsp; engaging &nbsp; responsive &nbsp;
      intuitive &nbsp; modern &nbsp; clean &nbsp; interactive &nbsp; lightweight &nbsp;
      seo-friendly &nbsp; optimized &nbsp; functional &nbsp; modular &nbsp; aesthetic &nbsp;
    </div>
  </div>
      </div>


      <div className="contact"></div>
    </div>
  );
};

export default Header;
