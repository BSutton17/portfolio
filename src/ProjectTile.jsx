// ProjectTile.js

import React from 'react';
import './App.css';

const ProjectTile = ({ title, imageSrc, imageAlt, link, onClick }) => {
  return (
    <div className="project-tile" onClick={onClick}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={imageAlt} />
          <div className="title">
            <h3>{title}</h3>
          </div>
        </a>
      ) : (
        <>
          <img src={imageSrc} alt={imageAlt} />
          <div className="title">
            <h3>{title}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectTile;
