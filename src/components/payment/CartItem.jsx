import Image from "next/image";
import Quantity from "../QuantityDropdown";
import exampleImg from "@/img/example.png";
import { PiTrashLight } from "react-icons/pi";
import useCartStore from "@/app/store/cartStore";

const CartItem = ({product}) => {
    const { updateProductQuantity, removeProduct, clearCart } = useCartStore();
    const handleQuantityChange = (newQty) => {
        // Opdaterer produktets quantity i zustand
        updateProductQuantity(product.id, newQty);
      };

        // Beregn prisen med rabat, hvis der er en rabat
        const discountedPrice = product.discountPercentage
        ? product.price * (1 - product.discountPercentage / 100)
        : product.price;

        // Rund prisen op
        const finalPrice = Math.ceil(discountedPrice * product.qty);

    return ( 
    
    <div className="bg-primary-grey-light-3 flex flex-col md:flex-row p-8 justify-between gap-6 h-fit">
        <figure className="width-[200px] height-[200px]">
        <Image src={product.thumbnail} width={200} height={200} alt="eksempel" className="object-cover object-top"></Image>
        </figure>
        <div className="flex-1 flex flex-col md:justify-between">
            <div>
                <p className="font-bold">{product.title}</p>
                <p>Color: Black</p>
                <p>Size: {product.size}</p>
            </div>
            <div>
            <Quantity
            size="s"
            quantity={product.qty}
            setQuantity={handleQuantityChange} />
            </div>
        </div>
        <div className="flex sm:flex-row md:flex-col items-end justify-between">
            <p>{finalPrice}kr</p>
            <PiTrashLight
            size={34}
            className="text-secondary-cherry-dark hover:text-secondary-cherry-light"
            onClick={() => removeProduct(product.id)} />
        </div>
    </div> );
}
 
export default CartItem;
