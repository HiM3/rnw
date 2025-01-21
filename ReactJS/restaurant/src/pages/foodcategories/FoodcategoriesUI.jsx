import React from "react";

const FoodcategoriesUI = ({ imgSrc, altText, buttonText, link }) => {
  return (
    <div className="card text-center" style={{ height: "350px", width: "250px" }}>
      <img src={imgSrc} className="card-img-top bg-warning-subtle" alt={altText} />
      <div className="card-body">
        <a href={link} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default FoodcategoriesUI;
