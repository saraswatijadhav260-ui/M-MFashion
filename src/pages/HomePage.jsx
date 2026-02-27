import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";

/* ================= SAMPLE DATA ================= */
const categories = ["Men", "Women", "Kids", "Ethnic", "Western", "Party Wear"];

const featuredProducts = [
  { id: 1, name: "Cotton Kurta Set", price: 2499, image: "https://via.placeholder.com/400" },
  { id: 2, name: "Designer Lehenga", price: 5999, image: "https://via.placeholder.com/400" },
  { id: 3, name: "Casual Shirt", price: 1499, image: "https://via.placeholder.com/400" },
  { id: 4, name: "Kids Festive Wear", price: 1999, image: "https://via.placeholder.com/400" },
];

/* ================= COMPONENT ================= */
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOffer, setShowOffer] = useState(true);
  const [confetti, setConfetti] = useState([]);
  const [particles, setParticles] = useState([]);

  // Create random confetti shapes and particles
  useEffect(() => {
    const confettiCount = 40;
    const newConfetti = Array.from({ length: confettiCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      size: Math.random() * 10 + 5 + "px",
      color: ["#FACC15", "#EC4899", "#3B82F6", "#22C55E"][Math.floor(Math.random() * 4)],
      delay: Math.random() * 5 + "s",
      duration: Math.random() * 10 + 5 + "s",
    }));
    setConfetti(newConfetti);

    const particleCount = 80;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      size: Math.random() * 4 + 1 + "px",
      speed: Math.random() * 0.5 + 0.2 + "s",
      color: ["#FFD700", "#FF69B4", "#00BFFF", "#32CD32"][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden">
      {/* ================= BACKGROUND ANIMATION ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Confetti */}
        {confetti.map((c) => (
          <span
            key={c.id}
            className="absolute rounded-full animate-fall"
            style={{
              left: c.left,
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
              animationDelay: c.delay,
              animationDuration: c.duration,
            }}
          />
        ))}

        {/* Floating particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full animate-float"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDuration: p.speed,
            }}
          />
        ))}
      </div>

      <style>
        {`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 1; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        `}
      </style>

      {/* ================= POPUP OFFER ================= */}
      {showOffer && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 relative animate-flap">
            <button
              className="absolute top-2 right-2"
              onClick={() => setShowOffer(false)}
            >
              <X />
            </button>
            <h2 className="text-2xl font-bold text-pink-600 text-center">Welcome 🎉</h2>
            <p className="text-center mt-2">Flat ₹500 OFF on first order</p>
            <p className="text-center font-bold text-pink-600 mt-2">Code: WELCOME500</p>
          </div>

          <style>{`
            @keyframes flap {
              0%, 100% { transform: scale(1); }
              25% { transform: scale(1.05); }
              50% { transform: scale(1.1); }
              75% { transform: scale(1.05); }
            }
            .animate-flap {
              animation: flap 1.5s ease-in-out infinite;
            }
          `}</style>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-pink-600">M&M Fashion</h1>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <span key={cat} className="cursor-pointer hover:text-pink-600 transition-colors">
                {cat}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Heart className="cursor-pointer hover:text-pink-600 transition-colors" />
            <User className="cursor-pointer hover:text-pink-600 transition-colors" />
            <ShoppingCart className="cursor-pointer hover:text-pink-600 transition-colors" />
            <Menu
              className="md:hidden cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {categories.map((cat) => (
              <div key={cat} className="border-b py-2 hover:text-pink-600 transition-colors">
                {cat}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-pink-500 text-white text-center py-20 relative z-10 overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-flapText">
          Festival Fashion Sale
        </h2>
        <p className="text-xl mb-6 animate-flapText delay-200">
          Up to 60% OFF on Ethnic & Western Wear
        </p>
        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold animate-flapBtn">
          Shop Now
        </button>

        <style>{`
          @keyframes flap {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.05); }
            50% { transform: scale(1.1); }
            75% { transform: scale(1.05); }
          }
          .animate-flapText {
            animation: flap 2s ease-in-out infinite;
          }
          .animate-flapText.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-flapBtn {
            animation: flap 2s ease-in-out infinite;
            animation-delay: 0.4s;
          }
        `}</style>
      </section>

      {/* ================= SEARCH ================= */}
      <div className="max-w-3xl mx-auto mt-10 px-4 relative z-10">
        <div className="flex items-center border rounded-full px-4 py-3 shadow-lg">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by product, fabric, occasion..."
            className="ml-3 w-full outline-none bg-transparent"
          />
        </div>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <h3 className="text-3xl font-bold text-center mb-10">Featured Products</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover hover:scale-105 transition-transform"
              />

              <div className="p-4">
                <h4 className="font-semibold mb-1">{product.name}</h4>
                <p className="text-pink-600 font-bold mb-3">₹{product.price}</p>

                <div className="flex justify-between items-center">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors">
                    Add to Cart
                  </button>

                  <a
                    href={`https://wa.me/?text=Check out this product: ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    WhatsApp
                  </a>
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