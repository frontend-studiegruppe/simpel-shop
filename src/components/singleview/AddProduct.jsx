"use client"

import Button from "../Button";
import Quantity from "../QuantityDropdown";
import { useState } from "react";
import useCartStore from "@/app/store/cartStore";

const AddProduct = ({product}) => {
    // const { addProduct } = useCartStore(state => state)
  const addProduct = useCartStore(state => state.addProduct)
  const [quantity, setQuantity] = useState(1);
  const handleAddProduct = () => {
    addProduct({ ...product, qty: quantity }); // send valgt quantity med
  };

    return (
        <>
        <Quantity quantity={quantity} setQuantity={setQuantity}></Quantity>
        {/* <Button onClick={() => addProduct(product)}>Add to cart</Button> */}
        <Button onClick={handleAddProduct}>Add to cart</Button>
        </>
     );
}
 
export default AddProduct;