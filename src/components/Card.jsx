import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import useCartStore from "@/app/store/cartStore";

const Card = ({ product }) => {
  const { addProduct } = useCartStore();
  // Tjek, at product har nødvendige felter
  if (!product || !product.title || !product.thumbnail) {
    return (
      <div className="text-center text-red-500">Produktdata er manglende</div>
    );
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group max-w-[250px] mx-2 sm:mx-auto">
        <div className="relative">
          {product.discountPercentage > 10 && (
            <div className="bg-secondary-cherry-light/30 text-secondary-cherry-dark font-bold w-fit px-2 py-1 absolute top-0 left-0 z-20">
              <h3>Sale {Math.round(product.discountPercentage)}%</h3>
            </div>
          )}
          <div className="group-hover:brightness-50 transition duration-300 ease-in-out z-0">
            <Image
              src={product.thumbnail || "/placeholder.png"}
              alt={product.title}
              width={250}
              height={250}
              className="object-cover bg-white"
            />
          </div>
          <div className="w-full flex justify-center absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <Button   onClick={(e) => {e.preventDefault(); addProduct({ ...product, qty: 1, size: product.size || "M" }); }}
            variant="card_hover_btn">Add to Basket</Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-2 font-light text-sm sm:text-md gap-1">
          <h3>{product.title}</h3>
          {product.discountPercentage > 10 ? (
            <div>
              <h3 className="text-red-500">
                {Math.round(
                  product.price * (1 - product.discountPercentage / 100)
                )}{" "}
                kr
              </h3>
              <h3 className=" text-xs">
                Before: <span className="line-through">{product.price} kr</span>
              </h3>
            </div>
          ) : (
            <h3>{product.price} kr</h3>
          )}
        </div>
        {product.availabilityStatus === "Low Stock" && (
          <p className="text-secondary-cherry-light font-semibold text-sm">
            pssst... Low Stock
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
