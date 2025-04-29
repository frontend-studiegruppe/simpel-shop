"use client";

import { PiHandbagLight } from "react-icons/pi";
import Link from "next/link";
import useCartStore from "@/app/store/cartStore";

const CartIcon = () => {
    const cartQuantity = useCartStore(state => state.cartQuantity);
    return (           <Link href="/payment">
        <div className="relative">
        <PiHandbagLight className="w-6 h-6 sm:w-8 sm:h-8 z-0" />
        {cartQuantity > 0 && (
          <div className="absolute -top-0.5 -right-1.5 bg-red-400 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {cartQuantity}
          </div>
        )}
        </div>
      </Link> );
}
 
export default CartIcon;