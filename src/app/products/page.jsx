"use client";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { name: "Show all", value: "all" },
    { name: "Dresses", value: "womens-dresses" },
    { name: "Shoes", value: "womens-shoes" },
    { name: "Bags", value: "womens-bags" },
    { name: "Watches", value: "womens-watches" },
    { name: "Jewellery", value: "womens-jewellery" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryValues = categories.map((c) => c.value).filter((v) => v !== "all");

      const responses = await Promise.all(categoryValues.map((cat) => fetch(`https://dummyjson.com/products/category/${cat}`).then((res) => res.json())));

      const all = responses.flatMap((res) => res.products);
      setAllProducts(all);
      setFilteredProducts(all);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory, allProducts]);

  return (
    <div className="p-6">
      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <Button key={cat.value} variant={activeCategory === cat.value ? "active" : "secondary"} onClick={() => setActiveCategory(cat.value)}>
            {cat.name}
          </Button>
        ))}
      </div>

      {/* LOADING / PRODUCT GRID */}
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Filtrer produkter for at sikre, at vi ikke prøver at rendere produkter uden nødvendige data */}
          {filteredProducts
            .filter(
              (product) => product && product.title && product.thumbnail // Tjek, at produktet har de nødvendige felter
            )
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

// import Button from "@/components/Button";

// const ProductList = () => {
//   return (
//     <div className="flex justify-center gap-5">
//       <Button variant="secondary">Show all</Button>
//       <Button variant="secondary">Dresses</Button>
//       <Button variant="secondary">Shoes</Button>
//       <Button variant="secondary">Bags</Button>
//       <Button variant="secondary">Watches</Button>
//       <Button variant="secondary">Jewellery</Button>
//     </div>
//   );
// };

// export default ProductList;
