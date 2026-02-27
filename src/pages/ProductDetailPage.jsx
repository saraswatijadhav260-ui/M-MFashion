import { useState } from "react";

const ProductDetailPage = () => {
  const product = {
    name: "Women’s Festive Ethnic Kurti",
    brand: "ZARA",
    sku: "WK-4589",
    rating: 4.3,
    reviewsCount: 1245,
    originalPrice: 1999,
    discountedPrice: 999,
    discount: 50,
    delivery: "Free Delivery",
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/501",
      "https://via.placeholder.com/502",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    description:
      "Premium festive kurti made from pure cotton fabric. Perfect for celebrations and family functions.",
    specifications: {
      Fabric: "Cotton",
      Fit: "Regular",
      Sleeve: "3/4th",
      Occasion: "Festive",
      "Country of Origin": "India",
    },
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* 1️⃣ Image + Basic Info Section */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Image Section */}
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
                className="w-20 h-20 object-cover rounded cursor-pointer border"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>

          {/* 2️⃣ Basic Info */}
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating} ({product.reviewsCount} ratings)
          </p>
          <p className="mt-2">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">SKU: {product.sku}</p>

          {/* 3️⃣ Price Section */}
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
            <p className="text-sm mt-1">{product.delivery}</p>
          </div>

          {/* 4️⃣ Variants */}
          <div className="mt-6">

            {/* Size */}
            <p className="font-semibold mb-2">Select Size</p>
            <div className="flex gap-3">
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
            <p className="font-semibold mt-4 mb-2">Select Color</p>
            <div className="flex gap-3">
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
            <p className="font-semibold mt-4 mb-2">Quantity</p>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-2 w-20 rounded"
            />
          </div>

          {/* 5️⃣ Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded w-full md:w-auto">
              🛒 Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-3 rounded w-full md:w-auto">
              ⚡ Buy Now
            </button>
            <button className="border px-6 py-3 rounded w-full md:w-auto">
              ❤️ Wishlist
            </button>
          </div>

          {/* 6️⃣ Delivery Info */}
          <div className="mt-6 border p-4 rounded">
            <p>📍 Delivery by 3 March</p>
            <p>🔄 7 Days Easy Return</p>
          </div>

        </div>
      </div>

      {/* 7️⃣ Description */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-3">Product Description</h2>
        <p>{product.description}</p>
      </div>

      {/* 8️⃣ Specifications */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-3">Specifications</h2>
        <table className="w-full border">
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key} className="border">
                <td className="p-3 font-semibold w-1/3">{key}</td>
                <td className="p-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 9️⃣ Ratings Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Ratings & Reviews</h2>
        <p>⭐ {product.rating} out of 5</p>
        <p>1,245 Verified Reviews</p>
      </div>

      {/* 🔟 Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-5">Similar Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div key={item} className="border p-3 rounded shadow-sm">
              <img
                src="https://via.placeholder.com/200"
                alt="related"
                className="w-full mb-2"
              />
              <p className="font-semibold">Ethnic Kurti</p>
              <p className="text-green-600">₹899</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;