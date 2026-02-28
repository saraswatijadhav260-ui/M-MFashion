import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleLike = () => {
    setLiked(!liked);

    if (!liked) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="border rounded-lg p-4 hover:shadow-lg relative">

        {/* ❤️ Heart Button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          {liked ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-400 text-lg" />
          )}
        </button>

        {/* Product Image */}
        <div className="h-40 bg-gray-200 mb-3 flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full object-cover"
            />
          ) : (
            "Image"
          )}
        </div>

        {/* Dynamic Name */}
        <h3 className="font-semibold">{product.name}</h3>

        {/* Dynamic Price */}
        <p className="text-pink-600 font-bold">
          ₹{product.price}
        </p>

        {/* Dynamic Link */}
        <Link
          to={`/product/${product.id}`}
          className="block text-center mt-3 bg-pink-600 text-white py-2 rounded"
        >
          View
        </Link>
      </div>

      {/* Wishlist Popup Message */}
      {showMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded shadow-lg">
          {product.name} saved in your Wishlist ❤️
        </div>
      )}
    </>
  );
};

export default ProductCard;