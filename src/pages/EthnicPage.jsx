import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import products from "../data/products";

const EthnicPage = () => {

  const [filters, setFilters] = useState({
    size: "",
    color: "",
    price: ""
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  const filteredProducts = products
    .filter((product) => product.category === "ethnic")
    .filter((product) => {
      return (
        (!filters.size || product.size?.includes(filters.size)) &&
        (!filters.color || product.color?.includes(filters.color)) &&
        (!filters.price || product.price <= Number(filters.price))
      );
    });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
      
      <Filters
        onFilterChange={handleFilterChange}
        sizes={["M", "L", "XL"]}
        colors={["Cream", "Gold", "Red", "Green"]}
      />

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default EthnicPage;