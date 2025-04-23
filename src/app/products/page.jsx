import Button from "@/components/Button";

const ProductList = () => {
  return (
    <div className="flex justify-center gap-5">
      <Button variant="secondary">Show all</Button>
      <Button variant="secondary">Dresses</Button>
      <Button variant="secondary">Shoes</Button>
      <Button variant="secondary">Bags</Button>
      <Button variant="secondary">Watches</Button>
      <Button variant="secondary">Jewellery</Button>
    </div>
  );
};

export default ProductList;
