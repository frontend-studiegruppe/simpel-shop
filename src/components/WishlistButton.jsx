"use client";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Wishlistbutton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <div className={`cursor-pointer transition-colors duration-200 ${liked ? "text-secondary-cherry-light" : "text-primary-grey-dark"}`} onClick={toggleLike}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </div>
      <div>
        <p className="text-primary-grey-dark">Add to wishlist</p>
      </div>
    </div>
  );
};

export default Wishlistbutton;
