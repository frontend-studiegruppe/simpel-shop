import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Card = ({ product }) => {
  // Tjek, at product har nødvendige felter
  if (!product || !product.title || !product.thumbnail) {
    return <div className="text-center text-red-500">Produktdata er manglende</div>;
  }

  return (
    <Link href={`/products/${product.id}`}>
    <div className="group max-w-[250px]">
      <div className="relative">
        {product.discountPercentage > 10 && (<div className="bg-secondary-cherry-light/30 text-secondary-cherry-dark font-bold w-fit px-2 py-1 absolute top-0 left-0 z-10">
        <h3>Sale {Math.round(product.discountPercentage)}%</h3>
        </div>)}
        
        <Image src={product.thumbnail || "/placeholder.png"} alt={product.title} width={250} height={250} className="group-hover:brightness-50 transition duration-300 ease-in-out object-cover bg-white z-9" />
        <div className="w-full flex justify-center absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <Button variant="card_hover_btn">Add to Basket</Button>
        </div>
      </div>
      <div className="flex justify-between font-light py-2">
        <h3>{product.title}</h3>
        <h3>{product.price}kr</h3>
      </div>
    </div>
    </Link>
  );
};

export default Card;
