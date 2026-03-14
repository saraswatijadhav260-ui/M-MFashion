import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart, Menu, ChevronDown, X } from "lucide-react";
import { WishlistContext } from "../context/WishlistContext";

// Generate products
const featuredProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Fashion Product ${i + 1}`,
  price: 999 + i * 100,
  image: "https://via.placeholder.com/400"
}));

const HomePage = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [visibleCount, setVisibleCount] = useState(8);
  const [message, setMessage] = useState("");

  // Cart state
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
  const addToCart = (product, e) => {
    e.preventDefault();
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      setMessage("Product added to cart 🛒");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const showMoreProducts = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">

          <Link to="/">
            <h1 className="text-2xl font-bold text-pink-600">M&M Fashion</h1>
          </Link>

          <div className="flex items-center gap-4">

            <Link to="/wishlist">
              <Heart className="cursor-pointer hover:text-pink-600" />
            </Link>

            <User className="cursor-pointer hover:text-pink-600" />

            {/* CART ICON */}
            <div className="relative">
              <ShoppingCart
                className="cursor-pointer hover:text-pink-600"
                onClick={() => setShowCart(!showCart)}
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}

              {/* CART DROPDOWN */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded p-4 z-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg">Cart Items</h4>
                    <X className="cursor-pointer" onClick={() => setShowCart(false)} />
                  </div>

                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                  ) : (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <div className="flex gap-2 items-center">
                            <span>₹{item.price}</span>
                            <button
                              className="text-red-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Menu className="cursor-pointer md:hidden" />

          </div>
        </div>
      </header>

      {/* MESSAGE */}
      {message && (
        <div className="text-center mt-6 text-green-600 font-semibold">
          {message}
        </div>
      )}

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h3 className="text-3xl font-bold text-center mb-10">Suggested For You</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {featuredProducts.slice(0, visibleCount).map((product) => {
            const isLiked = wishlist.some((item) => item.id === product.id);

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
                  <p className="text-pink-600 font-bold">₹{product.price}</p>
                  <button
                    onClick={(e) => addToCart(product, e)}
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