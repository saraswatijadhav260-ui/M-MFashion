import { useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";

const ProductListPage = () => {

  const products = [
    { id: 1, name: "Garba Dress 1" },
    { id: 2, name: "Garba Dress 2" },
    { id: 3, name: "Garba Dress 3" },
    { id: 4, name: "Garba Dress 4" },
    { id: 5, name: "Garba Dress 5" },
    { id: 6, name: "Garba Dress 6" },
  ];

  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (id) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((item) => item !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
      
      <Filters />

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={likedProducts.includes(product.id)}
            onLike={() => toggleLike(product.id)}
          />
        ))}
      </div>

    </div>
  );
};

export default ProductListPage;