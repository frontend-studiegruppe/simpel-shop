import Button from "@/components/Button";
import ReviewCard, { ReviewBar } from "@/components/singleview/Reviews";
import ColorSelector from "@/components/singleview/ColorSelector";
import Gallery from "@/components/singleview/Gallery";

export default async function SingleProduct ({params}) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
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
