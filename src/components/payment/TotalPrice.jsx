import useCartStore from "@/app/store/cartStore";
import { use } from "react";

const TotalPrice = () => {
    const { subtotal, delivery, total } = useCartStore();

    return ( <div className="flex flex-col gap-0.5">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{subtotal}kr</p>
        </div>
        <div className="flex justify-between mb-6">
          <p>Delivery</p>
          <p>{delivery}kr</p>
        </div>
        <div className="w-full border-b-2 border-primary-grey-dark"></div>
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p>{total}kr</p>
        </div>
      </div> );
}
 
export default TotalPrice;