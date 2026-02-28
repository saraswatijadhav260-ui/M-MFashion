import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";

/* ================= SAMPLE DATA ================= */
const categories = [
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Kids", path: "/kids" },
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
  const [showOffer, setShowOffer] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold text-pink-600">M&M Fashion</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="cursor-pointer hover:text-pink-600 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Heart className="cursor-pointer hover:text-pink-600" />
            <User className="cursor-pointer hover:text-pink-600" />
            <ShoppingCart className="cursor-pointer hover:text-pink-600" />
            <Menu
              className="md:hidden cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="block border-b py-2 hover:text-pink-600 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-pink-500 text-white text-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Festival Fashion Sale
        </h2>
        <p className="text-xl mb-6">
          Up to 60% OFF on Ethnic & Western Wear
        </p>
        <Link
          to="/women"
          className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold"
        >
          Shop Now
        </Link>
      </section>

      {/* ================= SEARCH ================= */}
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <div className="flex items-center border rounded-full px-4 py-3 shadow-lg">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by product..."
            className="ml-3 w-full outline-none bg-transparent"
          />
        </div>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold mb-1">{product.name}</h4>
                <p className="text-pink-600 font-bold mb-3">
                  ₹{product.price}
                </p>

                <div className="flex justify-between items-center">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
                    Add to Cart
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;