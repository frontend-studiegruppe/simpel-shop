import Image from "next/image";
import Quantity from "../QuantityDropdown";
import exampleImg from "@/img/example.png";
import { PiTrashLight } from "react-icons/pi";

const CartItem = ({product}) => {
    return ( <div className="bg-primary-grey-light-3 flex flex-col md:flex-row p-8 justify-between gap-6 h-fit">
        <figure className="width-[200px] height-[200px]">
        <Image src={product.thumbnail} width={200} height={200} alt="eksempel" className="object-cover object-top"></Image>
        </figure>
        <div className="flex-1 flex flex-col md:justify-between">
            <div>
                <p className="font-bold">{product.title}</p>
                <p>Color: Black</p>
                <p>Size: M</p>
            </div>
            <div>
                <p>Quantity</p>
            <Quantity size="s"></Quantity>
            </div>
        </div>
        <div className="flex sm:flex-row md:flex-col items-end justify-between">
            <p>{product.price}kr</p>
            <PiTrashLight size={34} className="text-secondary-cherry-dark hover:text-secondary-cherry-light"></PiTrashLight>
        </div>
    </div> );
}
 
export default CartItem;
