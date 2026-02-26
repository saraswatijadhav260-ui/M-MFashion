import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

const SearchResultsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Red Garba Dress",
      price: 1499,
      image: "https://via.placeholder.com/300",
      sizes: ["S", "M", "L"],
      colors: ["Red", "Blue"],
    },
    {
      id: 2,
      name: "Blue Ethnic Kurti",
      price: 899,
      image: "https://via.placeholder.com/300",
      sizes: ["M", "L"],
      colors: ["Blue", "Green"],
    },
    {
      id: 3,
      name: "Green Lehenga",
      price: 2999,
      image: "https://via.placeholder.com/300",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Green", "Yellow"],
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="md:w-1/4">
          <Filters />
        </div>

        {/* Product Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
