import React from 'react'
import "./hom.css"

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
