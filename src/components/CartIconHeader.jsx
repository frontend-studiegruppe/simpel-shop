"use client";

import { PiHandbagLight, PiTrashLight } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "@/app/store/cartStore";
import { useState } from "react";
import Button from "./Button";

const CartIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { cart, cartQuantity, removeProduct, subtotal } = useCartStore();

  return (
    <div
      className="relative"
      style={{ zIndex: 999 }}
      onMouseEnter={() => setIsHovered(true)} // Trigger hover when mouse enters either icon or dropdown
      onMouseLeave={() => setIsHovered(false)} // Trigger leave when mouse leaves both icon and dropdown
    >
      <Link href="/payment">
        <div className="relative cursor-pointer">
          <PiHandbagLight className="w-6 h-6 sm:w-8 sm:h-8" />
          {cartQuantity > 0 && (
            <div className="absolute -top-0.5 -right-1.5 bg-red-400 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartQuantity}
            </div>
          )}
        </div>
      </Link>

      {isHovered && cart.length > 0 && (
        <div className=" top-full absolute right-0 w-72 sm:w-96 bg-white shadow-lg p-4 z-[999]">
          <h3 className="text-sm font-semibold mb-2">Your Cart</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {cart.map((product) => {
              const discountedPrice = product.discountPercentage
                ? Math.round(
                    product.price * (1 - product.discountPercentage / 100)
                  )
                : product.price;

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between pb-2 text-primary-black bg-primary-grey-light-3"
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="object-cover rounded"
                  />
                  <div className="flex-1 px-2 text-sm">
                    <p className="font-semibold line-clamp-1">
                      {product.title}
                    </p>
                    <p>
                      {product.qty} x {discountedPrice} kr
                    </p>
                  </div>
                  <PiTrashLight
                    size={28}
                    className="text-secondary-cherry-dark hover:text-secondary-cherry-light"
                    onClick={() => removeProduct(product.id)}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-3 text-sm font-semibold text-primary-black">
            <span>Subtotal:</span>
            <span>{subtotal} kr</span>
          </div>
          <Link href="/payment" className="flex justify-center mt-4">
            <Button variant="primary_small">Go to checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
