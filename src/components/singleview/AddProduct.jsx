"use client"

import Button from "../Button";
import Quantity from "../QuantityDropdown";

import useCartStore from "@/app/store/cartStore";

const AddProduct = ({product}) => {
    // const { addProduct } = useCartStore(state => state)
  const addProduct = useCartStore(state => state.addProduct)
    return (
        <>
        <Quantity></Quantity>
        <Button onClick={() => addProduct(product)}>Add to cart</Button>
        </>
     );
}
 
export default AddProduct;