import React from 'react';
import '../Styles/Certifications.css';

function CertificationItem({ image, name, link }) {
  const handleImageClick = (e) => {
    window.open(link, '_blank');
  };

  const handleLinkClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="certItem">
      <a href={link} target="_blank" rel="noreferrer"
        onClick={handleLinkClick}>
        <img src={image} alt={name} className="certImage" onClick={handleImageClick} />
      </a>
      <h1>{name}</h1>

    </div>
  );
}

export default CertificationItem;

