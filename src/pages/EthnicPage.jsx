import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import products from "../data/products";

const EthnicPage = () => {

  const ethnicProducts = products.filter(
    (product) => product.category === "ethnic"
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
      
      <Filters />

      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {ethnicProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default EthnicPage;