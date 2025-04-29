"use client"

import Button from "../Button";
import Quantity from "../QuantityDropdown";
import { useState } from "react";
import useCartStore from "@/app/store/cartStore";
import SizeDropdown from "./SizeDropdown";

const AddProduct = ({product}) => {
    // const { addProduct } = useCartStore(state => state)
  const addProduct = useCartStore(state => state.addProduct)
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const handleAddProduct = () => {
    addProduct({ ...product, qty: quantity, size: selectedSize });
  };

    return (
        <>
        <SizeDropdown selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        {/* <Button onClick={() => addProduct(product)}>Add to cart</Button> */}
        <Button variant="primary" onClick={handleAddProduct}>Add to cart</Button>
        </>
     );
}
 
export default AddProduct;