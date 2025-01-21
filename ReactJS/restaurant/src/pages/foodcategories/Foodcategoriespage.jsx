import React from 'react';
import FoodCategories from './Foodcategories';  // Import the data array
import FoodcategoriesUI from './FoodcategoriesUI';  // Import the UI component

const Foodcategoriespage = () => {
  return (
    <>
      <h3 className="d-flex justify-content-center text-black">
        Food Category
      </h3>
      <div className="d-flex gap-3 justify-content-center mt-3">
        {FoodCategories.map((item, index) => (
          <FoodcategoriesUI
            key={index}
            imgSrc={item.imgSrc}
            altText={item.altText}
            buttonText={item.buttonText}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default Foodcategoriespage;
