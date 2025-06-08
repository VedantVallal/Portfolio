// TechIcon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tech.css'
function TechIcon({ icon, color, label, style = {} }) {
  return (
    <div className="tech" style={style}>
      <FontAwesomeIcon icon={icon} className="html" style={{ color }} />
      <h3>{label}</h3>
    </div>
  );
}

export default TechIcon;
