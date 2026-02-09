import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showWelcomeOffer, setShowWelcomeOffer] = useState(true);

  const heroSlides = [
    {
      id: 1,
      title: "New Collection",
      subtitle: "UP TO 60% OFF",
      description: "Live Now!",
      image: "/images/hero1.jpg",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "Summer Sale",
      subtitle: "FLAT ₹500 OFF",
      description: "On ₹2000+",
      image: "/images/hero2.jpg",
      bgColor: "bg-gradient-to-r from-blue-500 to-teal-500"
    },
    {
      id: 3,
      title: "Festival Special",
      subtitle: "BUY 2 GET 1 FREE",
      description: "Limited Time Offer",
      image: "/images/hero3.jpg",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  const promoBanners = [
    {
      title: "FLAT ₹300 OFF",
      subtitle: "On ₹2000+",
      code: "SAVE300",
      bgColor: "bg-pink-100"
    },
    {
      title: "FREE SHIPPING",
      subtitle: "On orders above ₹999",
      code: "FREESHIP",
      bgColor: "bg-blue-100"
    }
  ];

  const categories = [
    { name: "Men's Wear", image: "/images/cat-men.jpg" },
    { name: "Women's Wear", image: "/images/cat-women.jpg" },
    { name: "Kids Wear", image: "/images/cat-kids.jpg" },
    { name: "Ethnic Wear", image: "/images/cat-ethnic.jpg" },
    { name: "Western Wear", image: "/images/cat-western.jpg" },
    { name: "Party Wear", image: "/images/cat-party.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {showWelcomeOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowWelcomeOffer(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Welcome! 🎉</h2>
              <p className="text-xl mb-4">Get FLAT ₹500 OFF</p>
              <p className="text-gray-600 mb-6">On your first order above ₹2000</p>
              <div className="bg-pink-100 border-2 border-dashed border-pink-400 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Use Code:</p>
                <p className="text-2xl font-bold text-pink-600">WELCOME500</p>
              </div>
              <button
                onClick={() => setShowWelcomeOffer(false)}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-pink-600 text-white py-2 text-center text-sm">
        <p>🎊 Festival Sale Live Now! Up to 60% OFF on Everything! 🎊</p>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold text-pink-600">M&M Fashion</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Categories</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Sale</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">About Us</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent outline-none ml-2 w-64"
                />
              </div>
              <button className="hover:text-pink-600 transition">
                <Heart size={24} />
              </button>
              <button className="hover:text-pink-600 transition">
                <User size={24} />
              </button>
              <button className="relative hover:text-pink-600 transition">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </button>
              <button
                className="md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8 py-3 text-sm">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Men</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Women</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Kids</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Ethnic</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Western</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Party Wear</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Casual</a>
            <a href="#" className="bg-pink-600 text-white px-4 py-1 rounded-full font-semibold">SALE</a>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 space-y-3">
              <a href="#" className="text-gray-700 hover:text-pink-600">Categories</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">Sale</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`${slide.bgColor} h-full flex items-center justify-between px-8 md:px-16`}>
                <div className="text-white max-w-lg">
                  <h2 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-3xl md:text-5xl font-bold mb-2">{slide.subtitle}</p>
                  <p className="text-2xl md:text-3xl mb-6">{slide.description}</p>
                  <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                    Shop Now
                  </button>
                </div>
                <div className="hidden md:block">
                  <img src={slide.image} alt={slide.title} className="h-96 object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-4">
          {promoBanners.map((banner, index) => (
            <div
              key={index}
              className={`${banner.bgColor} rounded-lg p-8 flex items-center justify-between`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                <p className="text-lg text-gray-700 mb-4">{banner.subtitle}</p>
                <div className="bg-white inline-block px-6 py-2 rounded-full">
                  <p className="text-sm text-gray-600">USE CODE:</p>
                  <p className="text-xl font-bold text-pink-600">{banner.code}</p>
                </div>
              </div>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above ₹999</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-bold mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">7-day return policy</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-bold mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure transactions</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">WhatsApp support available</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">M&M Fashion</h3>
              <p className="text-gray-400 text-sm">Your one-stop destination for trendy clothing.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Track Order</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Policies</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white">Return Policy</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-400 mb-2">WhatsApp: +91 XXXXXXXXXX</p>
              <p className="text-sm text-gray-400">Email: info@mmfashion.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 M&M Fashion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;