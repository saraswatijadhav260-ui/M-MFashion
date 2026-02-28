import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0)
    return (
      <p className="text-center mt-10 text-gray-500">
        Your wishlist is empty.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="border rounded-lg p-4 relative hover:shadow-lg transition bg-white cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFromWishlist(product.id);
              }}
              className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>

            <h3 className="mt-3 font-semibold text-lg">
              {product.name}
            </h3>
            <p className="text-gray-500 mt-1">
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;