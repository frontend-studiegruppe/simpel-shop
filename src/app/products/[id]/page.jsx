import Button from "@/components/Button";
import ReviewCard, { ReviewBar } from "@/components/singleview/Reviews";

export default SingleProduct = () => {
  return (
    <div>
      <div>
        <Button variant="primary">Add to basket</Button>
      </div>
      <div className="flex overflow-scroll">
        <div className="flex gap-5 shrink-0">
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
        </div>
      </div>
    </div>
  );
};
