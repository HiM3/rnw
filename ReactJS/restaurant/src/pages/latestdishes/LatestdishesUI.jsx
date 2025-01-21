import React from "react";

const LatestdishesUI = ({
  imgSrc,
  altText,
  buttonText,
  link,
  title,
  description,
}) => {
  return (
    <div className="card text-center" style={{ width: "20%" }}>
      <img
        src={imgSrc}
        className="card-img-top"
        style={{ height: "350px" }}
        alt={altText}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default LatestdishesUI;
