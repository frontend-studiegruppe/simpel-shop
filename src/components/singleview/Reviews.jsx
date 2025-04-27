"use client";
import { GrStar, GrStarOutline } from "react-icons/gr";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[var(--color-primary-grey-light)] text-sm px-12 py-8 max-w-[40ch]">
      <ReviewBar rating={review.rating} />
      <h4 className="text-lg font-medium mt-3 mb-2">{review.reviewerName}</h4>
      <p>"{review.comment}"</p>
    </div>
  );
};

const ReviewBar = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<GrStar key={i} />);
    } else {
      stars.push(<GrStarOutline key={i} />);
    }
  }

  return <div className="flex text-2xl">{stars}</div>;
};

export default ReviewCard;
