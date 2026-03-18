import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart, Menu, ChevronDown, X } from "lucide-react";
import { WishlistContext } from "../context/WishlistContext";
import { useDomain } from "../context/DomainContext";
import { CartContext } from "../context/CartContext";

// Generate products
const featuredProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Featured Pattern ${i + 1}`,
  image: "https://via.placeholder.com/400",
  variants: [
    {
      price_ttd: 600 + i * 50,
      price_garba: 999 + i * 100,
      price_maha: 750 + i * 50,
    }
  ]
}));

const HomePage = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const { showSliders, showWelcomeOffer, isB2B, priceKey } = useDomain();
  const { addToCart } = useContext(CartContext);

  const [visibleCount, setVisibleCount] = useState(8);
  const [message, setMessage] = useState("");

  // Wishlist toggle
  const toggleWishlist = (product, e) => {
    e.preventDefault();
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      addToWishlist(product);
      setMessage("Product added to wishlist ❤️");
      setTimeout(() => setMessage(""), 2000);
    } else {
      removeFromWishlist(product.id);
    }
  };

  // Add to cart
  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart({ ...product, price: product.variants[0][priceKey] });
    setMessage("Product added to cart 🛒");
    setTimeout(() => setMessage(""), 2000);
  };

  const showMoreProducts = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">

      {/* MESSAGE */}
      {message && (
        <div className="text-center mt-6 text-green-600 font-semibold">
          {message}
        </div>
      )}
      
      {/* CONDITIONAL WELCOME OFFER */}
      {showWelcomeOffer && (
        <div className="bg-pink-600 text-white text-center py-2 text-sm font-semibold tracking-wide">
          🎉 Welcome Offer: Get 10% off your first retail order with code FIRST10!
        </div>
      )}

      {/* CONDITIONAL SLIDER PLACEHOLDER */}
      {showSliders && (
        <div className="w-full h-64 bg-pink-200 flex items-center justify-center text-pink-700 text-xl font-bold shadow-inner">
          [ Promotional Image Slider (B2C Only) ]
        </div>
      )}

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h3 className="text-3xl font-bold text-center mb-10">Suggested For You</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {featuredProducts.slice(0, visibleCount).map((product) => {
            const isLiked = wishlist.some((item) => item.id === product.id);
            const currentPrice = product.variants[0][priceKey];

            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="relative border rounded-lg overflow-hidden hover:shadow-xl transition block"
              >
                {/* Wishlist */}
                <button
                  onClick={(e) => toggleWishlist(product, e)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                >
                  <Heart
                    size={18}
                    className={isLiked ? "text-red-500 fill-red-500" : "text-gray-400"}
                  />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-4">
                  <h4 className="font-semibold mb-1">{product.name}</h4>
                  <p className="text-pink-600 font-bold">₹{currentPrice}</p>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="mt-2 w-full bg-pink-600 text-white py-1 rounded hover:bg-pink-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            );
          })}

        </div>

        {/* SHOW MORE BUTTON */}
        {visibleCount < featuredProducts.length && (
          <div className="flex flex-col items-center mt-10">
            <ChevronDown size={40} className="text-gray-500 animate-bounce" />
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="mt-2 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Show More
            </button>
          </div>
        )}

      </section>

    </div>
  );
};

export default HomePage;