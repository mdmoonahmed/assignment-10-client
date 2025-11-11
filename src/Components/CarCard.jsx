import React from "react";

const CarCard = ({ car }) => {
  return (
    <>
      <div className="hover-3d">
        <h1>{car.carName}</h1>
        <img className="h-80 w-100 object-contain" src={car.imageURL} alt="" />
      </div>
    </>
  );
};

export default CarCard;
