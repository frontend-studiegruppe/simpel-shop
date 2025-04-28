"use client"
//Katinka: OBS mangler icon på button

import Button from "@/components/Button";
import CartItem from "@/components/payment/CartItem";
import Payment from "@/components/payment/Payment";
import Delivery from "@/components/payment/Delivery";
import { PiCreditCardLight } from "react-icons/pi";
import useCartStore from "../store/cartStore";

const PaymentPage = () => {
  const cart = useCartStore(state => state.cart)
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-4 mb-16">
      <div className="bg-primary-grey-light-2 grid gap-6 px-24 py-16">
        <h2 className="text-secondary-cherry-dark font-bold text-2xl">Cart</h2>
        {cart.length > 0 && (
          cart.map((product, i) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))

        ) }
      </div>

      <div className="bg-primary-grey-light-2 py-16 px-14 h-fit">
        <h2 className="text-secondary-cherry-dark font-bold mb-6 text-2xl">Payment</h2>
        <div className="bg-primary-grey-light-3 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>100kr</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Delivery</p>
              <p>39kr</p>
            </div>
            <div className="w-full border-b-2 border-primary-grey-dark"></div>
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p>139kr</p>
            </div>
          </div>
          <div>
            <h3>Delivery Adress</h3>
            <Delivery>  </Delivery>
          </div>
          <div>
            <h3>Payment</h3>
            <Payment></Payment>
          </div>
          <div className="flex justify-center">
          <Button variant="primary">Buy now <PiCreditCardLight size={34} className="ml-4"/> </Button>
          </div>
        </div>
      
      </div>
      
    </div>
  );
};

export default PaymentPage;
