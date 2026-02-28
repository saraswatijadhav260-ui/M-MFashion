import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import products from "../data/products"; // ✅ central products

const WomenPage = () => {

  // ✅ Filter only women category products
  const womenProducts = products.filter(
    (product) => product.category === "women"
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
      
      <Filters />

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {womenProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default WomenPage;