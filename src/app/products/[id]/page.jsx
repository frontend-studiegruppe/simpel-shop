import Button from "@/components/Button";
import ReviewCard from "@/components/singleview/Reviews";
import ColorSelector from "@/components/singleview/ColorSelector";
import Gallery from "@/components/singleview/Gallery";
import Wishlistbutton from "@/components/WishlistButton";
import AddProduct from "@/components/singleview/AddProduct";
import SizeDropdown from "@/components/singleview/SizeDropdown";

export default async function SingleProduct({ params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <div className="grid sm:grid-cols-2">
        <div>
          <Gallery images={product.images}></Gallery>
        </div>
        <div className="flex flex-col gap-3 mx-5">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {product.discountPercentage > 10 ? (
            <div>
              <p className="text-red-500 font-bold text-xl">
                {Math.round(
                  product.price * (1 - product.discountPercentage / 100)
                )}{" "}
                kr
              </p>
              <p className="italic">
                Before: <span className="line-through">{product.price} kr</span>
              </p>
            </div>
          ) : (
            <p className="font-bold text-xl">{product.price} kr</p>
          )}

          <ColorSelector></ColorSelector>

          {/*
          <Button variant="primary">Add to basket</Button> */}
          <AddProduct product={product}></AddProduct>
          <Wishlistbutton></Wishlistbutton>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h2 className="ml-5 sm:ml-0 mb-4">Reviews</h2>
        <div className="flex overflow-scroll pt-2">
          <div className="flex gap-5 shrink-0">
            {product.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
