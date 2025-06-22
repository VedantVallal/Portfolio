import React, { useEffect } from "react";
import "./header.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
import img1 from "./assets/myimg.png";
import gsph from "./assets/gsapback.jpg";
import figmaph from "./assets/figma.png";
import redux from "./assets/redux.png";
import skillback from "./assets/steel.webp";
import foot from "./assets/footer.jpg";
// import curve from "./assets/curve.jpg";

// import { runHeaderAnimations } from './gsapAnimations';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import TechIcon from "./Tech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Use this as SQL icon

// lenis
import Lenis from "@studio-freight/lenis";

const Header = () => {
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
    <div className="main">
      {/* this is the Hero Section  */}

      {/* this is ABout section  */}
      <div className="about">
        <div id="main">
          <div id="top">
            <h1 id="top-h1">PROFILE</h1>
          </div>
          <div id="center">
            <div class="content">
              <div className="about">
                <div className="r">
                  <div className="data">
                    <div className="txt">
                      <h4>KNOW ABOUT ME</h4>

                      <h1>
                        Web Designer and <br /> a little bit of{" "}
                        <span className="text-colorfull animate-gradient-x">
                          {" "}
                          everything
                        </span>
                      </h1>

                      <p>
                        <span className="">Hey! I’m Vedant —</span>
                        a passionate web designer who loves crafting visually
                        <br /> appealing and smooth user experiences. I believe
                        a great website isn't <br /> just about how it looks,
                        but how it feels. My approach combines creativity <br />{" "}
                        with clean code. Whether it’s a landing page, a
                        portfolio, or a full-blown <br />
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
                          <a
                            href="https://github.com/VedantVallal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ic1 "
                          >
                            <FontAwesomeIcon icon={faGithub} />
                          </a>

                          <a
                            href="https://www.linkedin.com/in/vedant-vallal-432274345/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ic ic2"
                          >
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>

                          <a
                            href="https://x.com/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ic ic3"
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                        </div>
                      </p>
                    </div>

                    <div className="photo">
                      <img src={img1} alt="My image" className="image" />
                      <div className="hov">
                        <h3>Vedant Vallal</h3>
                        <p>Web Designer & Frontend Dev 💻</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="bottom">
            <h1 id="bottom-h1">PROFILE</h1>
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
            accessible &nbsp; dynamic &nbsp; scalable &nbsp; engaging &nbsp;
            responsive &nbsp; intuitive &nbsp; modern &nbsp; clean &nbsp;
            interactive &nbsp; lightweight &nbsp; seo-friendly &nbsp; optimized
            &nbsp; functional &nbsp; modular &nbsp; aesthetic &nbsp;
          </div>

          <div class="scroll-text">
            accessible &nbsp; dynamic &nbsp; scalable &nbsp; engaging &nbsp;
            responsive &nbsp; intuitive &nbsp; modern &nbsp; clean &nbsp;
            interactive &nbsp; lightweight &nbsp; seo-friendly &nbsp; optimized
            &nbsp; functional &nbsp; modular &nbsp; aesthetic &nbsp;
          </div>
        </div>
      </div>

      <div className="projects"></div>






      {/* contact section  */}

      <div className="contact">


        
        <div className="cdata">
          <h1>Vedant Vallal</h1>
          <h2>
            Design Meets Purpose <br /> Work With Me
          </h2>
          <h3>
            Solapur,Maharashtra <br /> +91 8087437104{" "}
          </h3>
          <h4>vedantvallal11@gmail.com</h4>





             <div className="cph">
          <div className="photo-wrapper">
            <div className="photo-glow"></div>
            <img src={img1} alt="My Profile" className="profile-pic" />
            <div className="hover-info">
              <h3>Vedant Vallal</h3>
              <p>Web Designer & Frontend Dev 💻</p>
            </div>
          </div>
        </div>









       



     


        <div className="cbtn">


          <button className="Btn"  onClick={() => window.location.href = "https://www.linkedin.com/in/vedant-vallal-432274345/"}>
            <span className="BG"></span>
            <span className="svgContainer">
              <svg
                viewBox="0 0 448 512"
                height="1.6em"
                xmlns="http://www.w3.org/2000/svg"
                className="svgIcon"
                fill="white"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
              </svg>
            </span>

          </button>

           <button className="Btn1"  onClick={() => window.location.href = "https://x.com/home"}>
            <span className="BG1"></span>
            <span className="svgContainer1">
              <svg
                viewBox="0 0 448 512"
                height="1.6em"
                xmlns="http://www.w3.org/2000/svg"
                className="svgIcon"
                fill="white"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </span>

          </button>

          

           <button className="Btn2"  onClick={() => window.location.href = "https://www.instagram.com/vedant_vallal/"}>
            <span className="BG2"></span>
            <span className="svgContainer2">
              <svg
                viewBox="0 0 448 512"
                height="1.6em"
                xmlns="http://www.w3.org/2000/svg"
                className="svgIcon"
                fill="white"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"></path>
              </svg>
            </span>

          </button>


         <button className="Btn3"  onClick={() => window.location.href = "https://github.com/VedantVallal"}>
            <span className="BG3"></span>
            <span className="svgContainer3">
              <svg
                viewBox="0 0 448 512"
                height="1.6em"
                xmlns="http://www.w3.org/2000/svg"
                className="svgIcon"
                fill="white"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </span>

          </button>




        </div>
       </div>
      </div>


      {/* contact section END */}






      {/* demo  */}

      {/* demo END */}

      {/* footer section  */}

      <footer className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          ⮕
        </svg>
        <img className="footimg" src={foot} alt="" />

        <div className="fdata">
          <h1>
            From Concept to <span className="">CREATION </span> <br /> Let's
            Make It{" "}
            <span className="text-colorfull animate-gradient-x sau">
              Happen
            </span>
          </h1>

          <div className="btn">
            <button className="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#010206"
                  fill-opacity="1"
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Get In Touch ⮕</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#010206"
                  fill-opacity="1"
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="think">
            <h3>
              Built by a curious mind who loves clean code. <br />
              Designing the web, one pixel at a time.
            </h3>
          </div>

          <div className="footicons">
            <a
              href="https://github.com/VedantVallal"
              target="_blank"
              rel="noopener noreferrer"
              className="fc1"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/vedant-vallal-432274345/"
              target="_blank"
              rel="noopener noreferrer"
              className="fc2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="fc3"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
