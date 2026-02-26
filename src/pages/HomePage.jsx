import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
} from "lucide-react";

/* ================= SAMPLE DATA ================= */

const categories = [
  "Men",
  "Women",
  "Kids",
  "Ethnic",
  "Western",
  "Party Wear",
];

const featuredProducts = [
  {
    id: 1,
    name: "Cotton Kurta Set",
    price: 2499,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    name: "Designer Lehenga",
    price: 5999,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    name: "Casual Shirt",
    price: 1499,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 4,
    name: "Kids Festive Wear",
    price: 1999,
    image: "https://via.placeholder.com/400",
  },
];

/* ================= COMPONENT ================= */

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOffer, setShowOffer] = useState(true);

  return (
    <div className="min-h-screen bg-white">

      {/* ================= POPUP OFFER ================= */}
      {showOffer && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => setShowOffer(false)}
            >
              <X />
            </button>
            <h2 className="text-2xl font-bold text-pink-600 text-center">
              Welcome 🎉
            </h2>
            <p className="text-center mt-2">Flat ₹500 OFF on first order</p>
            <p className="text-center font-bold text-pink-600 mt-2">
              Code: WELCOME500
            </p>
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-pink-600">
            M&M Fashion
          </h1>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <span
                key={cat}
                className="cursor-pointer hover:text-pink-600"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Heart className="cursor-pointer" />
            <User className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
            <Menu
              className="md:hidden cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {categories.map((cat) => (
              <div key={cat} className="border-b py-2">
                {cat}
              </div>
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
        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </section>

      {/* ================= SEARCH ================= */}
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <div className="flex items-center border rounded-full px-4 py-3">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by product, fabric, occasion..."
            className="ml-3 w-full outline-none"
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
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold mb-1">
                  {product.name}
                </h4>
                <p className="text-pink-600 font-bold mb-3">
                  ₹{product.price}
                </p>

                <div className="flex justify-between items-center">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>

                  <a
                    href={`https://wa.me/?text=Check out this product: ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-3">M&M Fashion</h4>
            <p className="text-sm">
              Premium ethnic & western clothing manufacturer.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Company</h4>
            <p>About Us</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Policies</h4>
            <p>Shipping Policy</p>
            <p>Return & Refund</p>
            <p>Privacy Policy</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Support</h4>
            <p>WhatsApp Support</p>
            <p>Email: support@mmfashion.com</p>
          </div>
        </div>

        <p className="text-center text-sm mt-10">
          © 2026 M&M Fashion. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
export default HomePage;
