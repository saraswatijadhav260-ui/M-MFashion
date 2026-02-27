import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const product = {
    id: "WK-4589",
    name: "Women’s Festive Ethnic Kurti",
    brand: "ZARA",
    sku: "WK-4589",
    rating: 4.3,
    reviewsCount: 1245,
    originalPrice: 1999,
    discountedPrice: 999,
    discount: 50,
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/501",
      "https://via.placeholder.com/502",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // ✅ Add to Cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select Size and Color");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      originalPrice: product.originalPrice,
      image: selectedImage,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("✅ Product Added to Cart!");
  };

  // ✅ UPDATED Buy Now (Skip Cart → Go to Checkout)
  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select Size and Color");
      return;
    }

    const buyNowItem = {
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      originalPrice: product.originalPrice, // ✅ Added
      image: selectedImage,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };

    localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Images */}
        <div>
          <img
            src={selectedImage}
            alt="product"
            className="w-full rounded-lg shadow"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border
                ${selectedImage === img ? "border-black border-2" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating} ({product.reviewsCount} ratings)
          </p>
          <p>Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">SKU: {product.sku}</p>

          {/* Price */}
          <div className="mt-5">
            <span className="text-2xl font-bold text-green-600">
              ₹{product.discountedPrice}
            </span>
            <span className="line-through text-gray-400 ml-3">
              ₹{product.originalPrice}
            </span>
            <span className="text-red-500 ml-3">
              {product.discount}% OFF
            </span>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-3 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded 
                  ${selectedSize === size ? "bg-black text-white" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Color */}
            <p className="font-semibold mt-4">Select Color</p>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded 
                  ${selectedColor === color ? "bg-black text-white" : ""}`}
                >
                  {color}
                </button>
              ))}
            </div>

            {/* Quantity */}
            <p className="font-semibold mt-4">Quantity</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-2 w-20 rounded mt-2"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 text-white px-6 py-3 rounded"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-6 py-3 rounded"
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;