import React from 'react'
// Import in your component file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import './tech.css';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Tech = () => {
  return (
    <div>
        heloo
         <div className="tech">
               <FontAwesomeIcon icon={faHtml5} className="html" style={{ color: "#f8530d" }} />
               <h3>HTML</h3>
             </div>
    </div>
  )
}

export default Tech
