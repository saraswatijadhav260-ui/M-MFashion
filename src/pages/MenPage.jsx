import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import products from "../data/products";

const MenPage = () => {
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

  // Only men products
  const menProducts = products.filter(
    (product) => product.category === "men"
  );

  // Dynamic sizes
  const availableSizes = [
    ...new Set(menProducts.flatMap((p) => p.size || []))
  ];

  // Dynamic colors
  const availableColors = [
    ...new Set(menProducts.flatMap((p) => p.color || []))
  ];

  // Apply filters
  let filteredProducts = [...menProducts];

  if (filters.size) {
    filteredProducts = filteredProducts.filter((product) =>
      product.size?.includes(filters.size)
    );
  }

  if (filters.color) {
    filteredProducts = filteredProducts.filter((product) =>
      product.color?.includes(filters.color)
    );
  }

  if (filters.price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseInt(filters.price)
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
      <Filters
        onFilterChange={handleFilterChange}
        sizes={availableSizes}
        colors={availableColors}
      />

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MenPage;