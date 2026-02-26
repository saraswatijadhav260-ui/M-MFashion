import { useState } from "react";
import WhatsAppShare from "../components/WhatsAppShare";

const ProductDetailPage = () => {

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["Red", "Blue", "Green", "Yellow"];

  const basePrice = 2999;

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [price, setPrice] = useState(basePrice);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);

    // Example: XL costs extra ₹200
    if (size === "XL" || size === "XXL") {
      setPrice(basePrice + 200);
    } else {
      setPrice(basePrice);
    }
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      
      {/* Image Section */}
      <div className="h-96 bg-gray-200 flex items-center justify-center">
        Images / Video
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Garba Dress</h1>
        <p className="text-pink-600 text-2xl font-bold mb-4">
          ₹{price}
        </p>

        {/* Size Dropdown */}
        <label className="block mb-1 font-medium">Select Size</label>
        <select
          value={selectedSize}
          onChange={handleSizeChange}
          className="border p-2 w-full mb-4 rounded"
        >
          <option value="">Choose Size</option>
          {sizes.map((size, index) => (
            <option key={index} value={size}>
              {size} {size === "XL" || size === "XXL" ? "(+₹200)" : ""}
            </option>
          ))}
        </select>

        {/* Color Dropdown */}
        <label className="block mb-1 font-medium">Select Color</label>
        <select
          value={selectedColor}
          onChange={handleColorChange}
          className="border p-2 w-full mb-4 rounded"
        >
          <option value="">Choose Color</option>
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>

        {/* Price Range Example */}
        <label className="block mb-1 font-medium">Price Range</label>
        <input
          type="range"
          min="2000"
          max="5000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mb-4"
        />
        <p className="mb-4 text-sm text-gray-500">
          Selected Price: ₹{price}
        </p>

        {/* Add to Cart */}
        <button
          disabled={!selectedSize || !selectedColor}
          className={`w-full py-3 rounded mb-4 text-white ${
            selectedSize && selectedColor
              ? "bg-pink-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>

        <WhatsAppShare />
      </div>
    </div>
  );
};

export default ProductDetailPage;