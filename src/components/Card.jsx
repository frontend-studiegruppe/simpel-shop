import Image from "next/image";
import Button from "./Button";

const Card = ({ product }) => {
  // Tjek, at product har nødvendige felter
  if (!product || !product.title || !product.thumbnail) {
    return <div className="text-center text-red-500">Produktdata er manglende</div>;
  }

  return (
    <div className="group max-w-[250px]">
      <div className="relative">
        <Image src={product.thumbnail || "/placeholder.png"} alt={product.title} width={250} height={250} className="group-hover:brightness-50 transition duration-300 ease-in-out object-cover bg-white" />
        <div className="w-full flex justify-center absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <Button variant="card_hover_btn">Add to Basket</Button>
        </div>
      </div>
      <div className="flex justify-between font-light py-2">
        <h3>{product.title}</h3>
        <h3>{product.price}kr</h3>
      </div>
    </div>
  );
};

export default Card;
