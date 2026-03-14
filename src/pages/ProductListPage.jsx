import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { ChevronDown } from "lucide-react";

const ProductListPage = () => {
  const navigate = useNavigate();

  // Generate many products
  const allProducts = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `Garba Dress ${i + 1}`,
    price: 899 + i * 20,
    image: `https://via.placeholder.com/300?text=Garba+${i + 1}`
  }));

  // Show first products
  const [visibleCount, setVisibleCount] = useState(9);

  const [likedProducts, setLikedProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const [message, setMessage] = useState("");

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) => prev + 6);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle wishlist
  const toggleLike = (product) => {
    let updated;

    if (likedProducts.find((p) => p.id === product.id)) {
      updated = likedProducts.filter((p) => p.id !== product.id);
      setLikedProducts(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setMessage("❌ Product removed from wishlist");
    } else {
      updated = [...likedProducts, product];
      setLikedProducts(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setMessage("✅ Product added to wishlist");
    }

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 relative">

      {/* Filters */}
      <Filters />

      {/* Product Grid */}
      <div className="md:col-span-3">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {allProducts.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <ProductCard
                product={product}
                isLiked={likedProducts.some((p) => p.id === product.id)}
                onLike={(e) => {
                  e.stopPropagation();
                  toggleLike(product);
                }}
              />
            </div>
          ))}

        </div>

        {/* Down Arrow Indicator */}
        {visibleCount < allProducts.length && (
          <div className="flex flex-col items-center mt-10 text-gray-500">
            <ChevronDown size={40} className="animate-bounce" />
            <p className="text-sm">Loading more products...</p>
          </div>
        )}

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