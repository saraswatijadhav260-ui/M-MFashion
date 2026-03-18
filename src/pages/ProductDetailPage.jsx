import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Share2, ShoppingCart, Heart, CheckCircle, Upload } from "lucide-react";
import { useDomain } from "../context/DomainContext";
import { CartContext } from "../context/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { priceKey, domain } = useDomain();
  const { addToCart } = useContext(CartContext);

  // Mocked product with rich details matching requirements
  const [product, setProduct] = useState({
    id: id || "M-MF-101",
    designId: `DSG-${Math.floor(Math.random() * 1000) + 1000}`,
    name: "Premium Embroidered Festive Lehenga",
    description: "An elegant piece designed for festive occasions. Rich fabric with delicate hand embroidery.",
    rating: 4.8,
    reviewsCount: 124,
    images: [
      "https://via.placeholder.com/600x800",
      "https://via.placeholder.com/600x801",
      "https://via.placeholder.com/600x802"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    variants: [
      { id: "v1", color: "Red", size: "M", quantity: 15, price_ttd: 2500, price_garba: 2999, price_maha: 2600 },
      { id: "v2", color: "Red", size: "L", quantity: 0, price_ttd: 2500, price_garba: 2999, price_maha: 2600 },
      { id: "v3", color: "Blue", size: "L", quantity: 5, price_ttd: 2600, price_garba: 3099, price_maha: 2700 }
    ],
    userPhotos: [
      "https://via.placeholder.com/200?text=User+Photo+1"
    ],
    reviews: [
      { user: "Priya S.", comment: "Absolutely loved the fabric and exact fit!" }
    ]
  });

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  // Derived unique colors and sizes from variants
  const availableColors = [...new Set(product.variants.map(v => v.color))];
  const sizeOptionsForColor = product.variants.filter(v => v.color === selectedColor);
  
  // Find current active variant based on selections
  const activeVariant = product.variants.find(v => v.color === selectedColor && v.size === selectedSize);
  const basePrice = activeVariant ? activeVariant[priceKey] : product.variants[0][priceKey];
  const finalPrice = appliedDiscount ? basePrice * 0.9 : basePrice; // dummy 10% discount logic

  const handleShare = () => {
    const text = encodeURIComponent(`Check out this amazing product: ${product.name} at ${basePrice}!`);
    const url = `https://wa.me/?text=${text}%20${window.location.href}`;
    window.open(url, "_blank");
  };

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === "WELCOME10") {
      setAppliedDiscount("WELCOME10");
      alert("Discount applied successfully!");
    } else {
      alert("Invalid discount code");
    }
  };

  const handleAddToCart = () => {
    if (!activeVariant) return alert("Please select a valid size and color combination.");
    if (quantity > activeVariant.quantity) return alert("Requested quantity exceeds available stock!");
    addToCart({ ...product, activeVariant, cartQuantity: quantity, price: finalPrice });
    alert("Added to cart successfully!");
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-pink-600">Home</Link> / <Link to="/products" className="hover:text-pink-600">Products</Link> / <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* MEDIA GALLERY */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group bg-gray-50 flex items-center justify-center">
              {selectedImage.endsWith('.mp4') ? (
                <video src={selectedImage} autoPlay loop muted className="w-full h-full object-cover" />
              ) : (
                <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
              )}
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, i) => (
                <img key={i} src={img} alt="thumb" onClick={() => setSelectedImage(img)} className={`w-20 h-24 object-cover rounded-lg cursor-pointer border-2 shadow-sm ${selectedImage === img ? "border-pink-600 opacity-100" : "border-transparent opacity-70 hover:opacity-100 transition"}`} />
              ))}
              {product.video && (
                <div onClick={() => setSelectedImage(product.video)} className={`w-20 h-24 bg-gray-200 rounded-lg cursor-pointer border-2 flex items-center justify-center shadow-sm ${selectedImage === product.video ? "border-pink-600" : "border-transparent opacity-70 hover:opacity-100"}`}>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Video</span>
                </div>
              )}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            <p className="text-sm font-semibold text-gray-500 mt-2">Design ID: <span className="text-gray-800">{product.designId}</span></p>
            
            {/* Pricing */}
            <div className="my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-extrabold text-pink-600">₹{finalPrice}</span>
                {appliedDiscount && <span className="text-lg line-through text-gray-400 mb-1">₹{basePrice}</span>}
              </div>
              <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes. Free shipping applied.</p>
            </div>

            {/* Colors */}
            <div className="mt-2">
              <h3 className="font-semibold text-gray-900 mb-3">Color: <span className="font-normal text-gray-600">{selectedColor}</span></h3>
              <div className="flex gap-3">
                {availableColors.map(c => (
                  <button key={c} onClick={() => { setSelectedColor(c); setSelectedSize(null); }} className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${selectedColor === c ? "border-pink-600 bg-pink-50 text-pink-700" : "border-gray-300 hover:border-gray-400 text-gray-700"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes & Stock */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900">Select Size</h3>
                <span className="text-xs text-pink-600 font-medium underline cursor-pointer">Size Guide</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {sizeOptionsForColor.map(v => (
                  <button 
                    key={v.size} 
                    disabled={v.quantity === 0}
                    onClick={() => setSelectedSize(v.size)} 
                    className={`relative px-5 py-3 border rounded-lg text-sm font-bold min-w-[60px] text-center transition ${
                      v.quantity === 0 ? "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed overflow-hidden line-through" : 
                      selectedSize === v.size ? "border-pink-600 bg-pink-600 text-white shadow-md" : "border-gray-300 hover:border-pink-400 text-gray-800"
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
              
              {/* Live Stock Indicator */}
              <div className="mt-3 h-5">
                {selectedSize ? (
                  activeVariant?.quantity > 0 ? (
                    <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                      <CheckCircle size={16} /> In Stock ({activeVariant.quantity} available)
                    </p>
                  ) : <p className="text-sm font-medium text-red-500 flex items-center gap-1">Out of Stock</p>
                ) : <p className="text-sm text-gray-400">Please select a size to view stock.</p>}
              </div>
            </div>

            {/* Add to Cart Area */}
            <div className="mt-8 flex gap-4">
              <div className="border border-gray-300 rounded-lg flex items-center overflow-hidden w-28 shrink-0">
                <button className="px-3 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <div className="flex-1 text-center font-bold text-gray-900">{quantity}</div>
                <button className="px-3 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <ShoppingCart size={20} /> Add to Cart (Shopflo)
              </button>
              <button className="px-5 py-3 border border-gray-300 hover:border-pink-500 rounded-lg text-gray-600 hover:text-pink-600 transition flex items-center justify-center shadow-sm hover:shadow">
                <Heart size={24} />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex gap-4 border-t pt-6 text-sm text-gray-600 font-medium">
              <button onClick={handleShare} className="flex text-green-600 items-center justify-center gap-2 px-4 py-2 border border-green-200 rounded-lg shadow-sm hover:bg-green-50 transition w-full">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                 Share on WhatsApp
              </button>
            </div>

            {/* Discount Code */}
            <div className="mt-6 bg-gray-50 p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Have a Discount Code?</h4>
              <div className="flex gap-2">
                <input type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="Enter Code (e.g. WELCOME10)" className="flex-1 border p-2 rounded focus:outline-pink-500 uppercase"/>
                <button onClick={handleApplyDiscount} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black font-semibold">Apply</button>
              </div>
            </div>

          </div>
        </div>
        
        {/* DESCRIPTION AND REVIEWS TABS */}
        <div className="mt-20 border-t pt-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Product Details</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
            </div>
            
            {/* User Generated Photos & Reviews */}
            <div>
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-bold">Buyer Photos</h3>
                 <button className="flex items-center gap-1 text-sm font-bold text-pink-600 border border-pink-200 bg-pink-50 px-3 py-1.5 rounded-full hover:bg-pink-100 transition">
                   <Upload size={16}/> Upload Yours
                 </button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {product.userPhotos.map((photo, idx) => (
                  <div key={idx} className="w-32 h-32 rounded-lg bg-gray-200 overflow-hidden shadow-sm flex-shrink-0">
                    <img src={photo} alt={"User photo " + idx} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">Reviews</h3>
              <div className="space-y-4">
                {product.reviews.map((r, i) => (
                  <div key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                    <p className="font-semibold text-gray-900">{r.user}</p>
                    <p className="text-gray-600 mt-1">{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;