import React from 'react'
import "./load.css"

const Loader = () => {
  return (
    <div>
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
    </div>
  )
}

export default Loader
