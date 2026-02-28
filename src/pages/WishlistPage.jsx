import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <img src={item.image} alt={item.name} className="h-40" />
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;