"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SizeDropdown = ({ size = "m" }) => {
  const [selected, setSelected] = useState("M");
  const [isOpen, setIsOpen] = useState(false);
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const sizeStyles = {
    s: "w-24 text-sm px-2 py-1",
    m: "w-40 text-base px-4 py-2",
  }; //forskellige størrelser til payment og singleview (omfg har lige indset det ikek er til sizes men til quantity im just gonna scream)

  return (
    <div className="inline-block relative">
      <label className="text-sm mb-1 block">Choose size:</label>

      <div className={`bg-gray-300 flex justify-between items-center cursor-pointer ${sizeStyles[size]}`} onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <div className={`absolute bg-gray-300  z-10 ${sizeStyles[size]}`}>
          {sizes.map((sizeOption) => (
            <div
              key={sizeOption}
              className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
              onClick={() => {
                setSelected(sizeOption);
                setIsOpen(false);
              }}
            >
              {sizeOption}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeDropdown;
