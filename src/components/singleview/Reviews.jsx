//Matilde og Katinka

import { GrStar, GrStarOutline } from "react-icons/gr";

const ReviewCard = ({ children }) => {
  return (
    <div className="bg-[var(--color-primary-grey-light)] text-sm px-6 py-5 max-w-[40ch]">
      {children}
      <h4 className="text-lg font-medium mt-3 mb-2">Costumer Name</h4>
      <p>
        "Customer review. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita, eius quam error illo ipsa optio at explicabo reiciendis,
        ducimus aspernatur corporis atque assumenda magni est obcaecati
        veritatis dolore. Facere, eaque!"
      </p>
    </div>
  );
};

const ReviewBar = () => {
  return (
    <div className="flex text-2xl">
      <GrStar />
      <GrStar />
      <GrStar />
      <GrStarOutline />
      <GrStarOutline />
    </div>
  );
};

const ReviewStar = () => {
  return <div></div>;
};

export default ReviewCard;
export { ReviewBar };
export { ReviewStar };
