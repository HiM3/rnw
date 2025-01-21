import React from 'react';
import LatestDishes from './Latestdish';  // Import the data array
import LatestdishesUI from './LatestdishesUI';  // Import the UI component

const Latestdishespage = () => {
  return (
    <>
      <h2 className="d-flex justify-content-center text-black">Latest Dishes</h2>
      <div className="w-100 d-flex justify-content-around align-items-center flex-wrap gap-5 mt-5">
        {LatestDishes.map((dish, index) => (
          <LatestdishesUI
            key={index}
            imgSrc={dish.imgSrc}
            altText={dish.altText}
            title={dish.title}
            description={dish.description}
            buttonText={dish.buttonText}
            link={dish.link}
          />
        ))}
      </div>
    </>
  );
};

export default Latestdishespage;
