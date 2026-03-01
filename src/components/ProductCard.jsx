import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const [showMessage, setShowMessage] = useState(false);

  const isLiked = wishlist.some(
    (item) => item.id === product.id
  );

  const handleLike = (e) => {
    e.stopPropagation(); // 🚀 Prevent card click navigation

    if (isLiked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  };

  return (
    <>
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer border rounded-lg p-4 relative hover:shadow-lg transition bg-white"
      >
        {/* Wishlist Button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          {isLiked ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-400 text-lg" />
          )}
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded"
        />

        {/* Product Info */}
        <h3 className="mt-3 font-semibold">
          {product.name}
        </h3>

        <p className="text-pink-600 font-bold">
          ₹{product.price}
        </p>

        {/* Optional View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/product/${product.id}`);
          }}
          className="block w-full mt-3 bg-pink-600 text-white py-2 rounded"
        >
          View
        </button>
      </div>

      {/* Wishlist Message */}
      {showMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded shadow-lg">
          {product.name} saved in your Wishlist ❤️
        </div>
      )}
    </>
  );
};

export default ProductCard;