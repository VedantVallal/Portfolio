import React from 'react';
import img1 from "./assets/myimg.png";
import "./abo.css";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
