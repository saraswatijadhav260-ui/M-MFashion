import { Heart, Heart as HeartOutline } from "lucide-react"; // Heart icons

const ProductCard = ({ product, isLiked, onLike }) => {
  return (
    <div className="border rounded-lg p-4 relative hover:shadow-lg transition bg-white">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded"
      />

      {/* Like Button */}
      <button
        onClick={onLike}
        className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition"
      >
        {isLiked ? (
          <Heart className="w-6 h-6 text-red-500" /> // filled red heart
        ) : (
          <HeartOutline className="w-6 h-6 text-gray-400" /> // outline gray heart
        )}
      </button>

      {/* Product Info */}
      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500 mt-1">₹{product.price}</p>

    </div>
  );
};

export default ProductCard;