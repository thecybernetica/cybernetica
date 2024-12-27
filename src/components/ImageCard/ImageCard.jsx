import React from "react";
import PropTypes from "prop-types";
import "./ImageCard.css";

const ImageCard = ({ imageSrc, title }) => {
  if (!imageSrc || !title) return <div className="card"></div>;
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

ImageCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
};

export default ImageCard;
