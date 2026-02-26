import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle =
    "block py-2 px-3 rounded hover:bg-pink-100 transition";

  const activeStyle =
    "bg-pink-500 text-white";

  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-600">
          garba.shop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 text-sm font-medium">

          <NavLink to="/" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Home</NavLink>

          <NavLink to="/products" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Products</NavLink>

          <NavLink to="/cart" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Cart</NavLink>

          <NavLink to="/wishlist" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Wishlist</NavLink>

          <NavLink to="/my-orders" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>My Orders</NavLink>

          <NavLink to="/track-order" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Track Order</NavLink>

          <NavLink to="/upload-photos" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Upload Photos</NavLink>

          <NavLink to="/about-us" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>About</NavLink>

          <NavLink to="/contact-us" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Contact</NavLink>

          <NavLink to="/login" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? activeStyle : ""}`
          }>Login</NavLink>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-2 text-sm">

          <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyle}>Home</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)} className={navLinkStyle}>Products</NavLink>
          <NavLink to="/cart" onClick={() => setIsOpen(false)} className={navLinkStyle}>Cart</NavLink>
          <NavLink to="/wishlist" onClick={() => setIsOpen(false)} className={navLinkStyle}>Wishlist</NavLink>
          <NavLink to="/my-orders" onClick={() => setIsOpen(false)} className={navLinkStyle}>My Orders</NavLink>
          <NavLink to="/track-order" onClick={() => setIsOpen(false)} className={navLinkStyle}>Track Order</NavLink>
          <NavLink to="/upload-photos" onClick={() => setIsOpen(false)} className={navLinkStyle}>Upload Photos</NavLink>
          <NavLink to="/about-us" onClick={() => setIsOpen(false)} className={navLinkStyle}>About</NavLink>
          <NavLink to="/contact-us" onClick={() => setIsOpen(false)} className={navLinkStyle}>Contact</NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)} className={navLinkStyle}>Login</NavLink>

        </div>
      )}
    </header>
  );
};

export default Header;