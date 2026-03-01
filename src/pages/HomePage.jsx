import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart, Menu } from "lucide-react";
import { WishlistContext } from "../context/WishlistContext";

const categories = [
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Kids", path: "/" },
  { name: "Ethnic", path: "/ethnic" },
  { name: "Western", path: "/western" },
  { name: "Party Wear", path: "/party-wear" },
];

const featuredProducts = [
  { id: 1, name: "Cotton Kurta Set", price: 2499, image: "https://via.placeholder.com/400" },
  { id: 2, name: "Designer Lehenga", price: 5999, image: "https://via.placeholder.com/400" },
  { id: 3, name: "Casual Shirt", price: 1499, image: "https://via.placeholder.com/400" },
  { id: 4, name: "Kids Festive Wear", price: 1999, image: "https://via.placeholder.com/400" },
];

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState("");
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const toggleWishlist = (product, e) => {
    e.preventDefault();

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      addToWishlist(product);
      setMessage("Product added to wishlist ❤️");

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      removeFromWishlist(product.id);
    }
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
            <ShoppingCart className="cursor-pointer hover:text-pink-600" />
            <Menu
              className="md:hidden cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </header>

      {/* SIMPLE MESSAGE */}
      {message && (
        <div className="text-center mt-6 text-green-600 font-semibold">
          {message}
        </div>
      )}

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const isLiked = wishlist.some((item) => item.id === product.id);

            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="relative border rounded-lg overflow-hidden hover:shadow-xl transition block"
              >
                <button
                  onClick={(e) => toggleWishlist(product, e)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                >
                  <Heart
                    size={18}
                    className={`${
                      isLiked ? "text-red-500 fill-red-500" : "text-gray-400"
                    }`}
                  />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-4">
                  <h4 className="font-semibold mb-1">{product.name}</h4>
                  <p className="text-pink-600 font-bold">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;