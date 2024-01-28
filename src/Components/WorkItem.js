import React from 'react';
import '../Styles/Certifications.css';

function WorkItem({ image, name, title, link }) {
  const handleImageClick = (e) => {
    window.open(link, '_blank');
  };

  const handleLinkClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="workItem">
      <a href={link} target="_blank" rel="noreferrer" onClick={handleLinkClick}>
        <img src={image} alt={name} className="workImage" onClick={handleImageClick} />
      </a>
      <p>{title}</p>
      <h1>{name}</h1>
    </div>
  );
}

export default WorkItem;

