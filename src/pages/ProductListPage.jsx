import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";

const ProductListPage = () => {
  const navigate = useNavigate();

  // Sample products
  const products = [
    { id: 1, name: "Garba Dress 1", price: 999, image: "https://via.placeholder.com/300?text=Garba+1" },
    { id: 2, name: "Garba Dress 2", price: 1299, image: "https://via.placeholder.com/300?text=Garba+2" },
    { id: 3, name: "Garba Dress 3", price: 899, image: "https://via.placeholder.com/300?text=Garba+3" },
    { id: 4, name: "Garba Dress 4", price: 1499, image: "https://via.placeholder.com/300?text=Garba+4" },
    { id: 5, name: "Garba Dress 5", price: 1099, image: "https://via.placeholder.com/300?text=Garba+5" },
    { id: 6, name: "Garba Dress 6", price: 1199, image: "https://via.placeholder.com/300?text=Garba+6" },
  ];

  // Wishlist state
  const [likedProducts, setLikedProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const [message, setMessage] = useState(""); // For non-blocking toast message

  // Toggle wishlist
  const toggleLike = (product) => {
    let updated;
    if (likedProducts.find((p) => p.id === product.id)) {
      // Remove from wishlist
      updated = likedProducts.filter((p) => p.id !== product.id);
      setLikedProducts(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setMessage("❌ Product removed from wishlist");
    } else {
      // Add to wishlist
      updated = [...likedProducts, product];
      setLikedProducts(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setMessage("✅ Product added to wishlist");
    }

    // Hide message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 relative">
      
      {/* Filters */}
      <Filters />

      {/* Product Grid */}
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <ProductCard
              product={product}
              isLiked={likedProducts.some((p) => p.id === product.id)}
              onLike={(e) => {
                e.stopPropagation(); // Prevent navigating when clicking heart
                toggleLike(product);
              }}
            />
          </div>
        ))}
      </div>

      {/* Wishlist Toast Message */}
      {message && (
        <div className="absolute top-4 right-6 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;