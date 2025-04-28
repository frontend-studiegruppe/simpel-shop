"use client";
import { useState } from "react";

const Quantity = ({ size = "m" }) => {
  const [quantity, setQuantity] = useState(1);

  const sizeStyles = {
    s: "w-24 text-sm px-2 py-1",
    m: "w-40 text-base px-4 py-2",
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      <label className="text-sm mb-1 block">Choose quantity:</label>
      <div
        className={` bg-gray-300 flex items-center justify-between ${sizeStyles[size]} `}
      >
        <button
          onClick={handleDecrease}
          className=" text-primary-black text-lg cursor-pointer"
        >
          −
        </button>
        <span className="mx-4">{quantity}</span>
        <button
          onClick={handleIncrease}
          className=" text-primary-black text-lg cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}; //man kan måske tilføje at den kun kan gå op til max hvad der er i stock if we wanna

export default Quantity;
