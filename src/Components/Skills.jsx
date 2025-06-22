import React ,{ useEffect } from 'react'

import Lenis from "@studio-freight/lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faPython,
  faGitAlt,
  faBootstrap,

  // faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import skillback from "./assets/steel.webp";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import gsph from "./assets/gsapback.jpg";
import figmaph from "./assets/figma.png";
import redux from "./assets/redux.png";
import "./skill.css";



const Skills = () => {


    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      // smoother easing
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      mouseMultiplier: 1,
      wheelMultiplier: 1, // controls scroll speed on wheel
      smoothTouch: true, // enable smooth touch scrolling
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
    <div>
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
    </div>
  )
}

export default Skills
