import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import products from "../data/products";

const WesternPage = () => {

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

  let westernProducts = products.filter(
    (item) => item.category === "western"
  );

  // SIZE FILTER
  if (filters.size) {
    westernProducts = westernProducts.filter((item) =>
      item.size?.includes(filters.size)
    );
  }

  // COLOR FILTER
  if (filters.color) {
    westernProducts = westernProducts.filter(
      (item) => item.color === filters.color
    );
  }

  // PRICE FILTER
  if (filters.price) {
    westernProducts = westernProducts.filter(
      (item) => item.price <= Number(filters.price)
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

      <Filters onFilterChange={handleFilterChange} />

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {westernProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default WesternPage;