import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useDomain } from "../context/DomainContext";

// Filter Component inline
const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    size: "", color: "", fabric: "", occasion: "", pattern: "", gender: "", category: "", price: [0, 5000]
  });

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Green", "Black", "Pink"];
  const fabrics = ["Cotton", "Silk", "Rayon", "Georgette"];
  const occasions = ["Festive", "Casual", "Wedding", "Party"];
  const patterns = ["Printed", "Embroidered", "Solid"];
  const genders = ["Women", "Men", "Kids"];
  const categories = ["Garba Dress", "Kurti", "Lehenga", "Sherwani"];

  const handleChange = (name, value) => {
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilter(updated);
  };

  return (
    <div className="border p-4 rounded shadow-sm space-y-6 bg-white shrink-0 w-64">
      <h2 className="font-semibold text-xl border-b pb-2">Filters</h2>
      {[{ label: "Size", name: "size", opts: sizes }, { label: "Color", name: "color", opts: colors }].map((g) => (
        <div key={g.name}>
          <h3 className="font-medium mb-2">{g.label}</h3>
          <div className="flex flex-wrap gap-2">
            {g.opts.map((opt) => (
              <button
                key={opt}
                onClick={() => handleChange(g.name, filters[g.name] === opt ? "" : opt)}
                className={`px-3 py-1 border rounded text-sm ${filters[g.name] === opt ? "bg-pink-600 text-white border-pink-600" : "hover:border-pink-300"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      {[{ label: "Fabric", name: "fabric", opts: fabrics }, { label: "Occasion", name: "occasion", opts: occasions }, { label: "Pattern", name: "pattern", opts: patterns }, { label: "Gender", name: "gender", opts: genders }, { label: "Category", name: "category", opts: categories }].map((g) => (
        <div key={g.name}>
          <h3 className="font-medium mb-1">{g.label}</h3>
          <select className="border p-2 w-full rounded focus:outline-pink-500" onChange={(e) => handleChange(g.name, e.target.value)} value={filters[g.name]}>
            <option value="">All</option>
            {g.opts.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      ))}
      <div>
        <h3 className="font-medium mb-2">Max Price: ₹{filters.price[1]}</h3>
        <input type="range" min="0" max="5000" className="w-full accent-pink-600" value={filters.price[1]} onChange={(e) => handleChange("price", [0, Number(e.target.value)])} />
      </div>
    </div>
  );
};

const MOCK_PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: `M-MF-${i + 1}`,
  name: `Designer Wear ${i + 1}`,
  image: "https://via.placeholder.com/400x500",
  category: i % 2 === 0 ? "Kurti" : "Garba Dress",
  gender: "Women",
  fabric: i % 2 === 0 ? "Cotton" : "Silk",
  occasion: i % 3 === 0 ? "Festive" : "Casual",
  pattern: "Printed",
  variants: [
    { size: "M", color: "Red", price_ttd: 600 + i * 10, price_garba: 999 + i * 15, price_maha: 750 + i * 12 },
    { size: "L", color: "Blue", price_ttd: 600 + i * 10, price_garba: 999 + i * 15, price_maha: 750 + i * 12 }
  ]
}));

const ProductListPage = () => {
  const { priceKey } = useDomain();
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilter = (filters) => {
    setActiveFilters(filters);
    // In a real app, send filters to backend API
    let filtered = [...MOCK_PRODUCTS];
    if (filters.category) filtered = filtered.filter(p => p.category === filters.category);
    if (filters.fabric) filtered = filtered.filter(p => p.fabric === filters.fabric);
    if (filters.occasion) filtered = filtered.filter(p => p.occasion === filters.occasion);
    if (filters.pattern) filtered = filtered.filter(p => p.pattern === filters.pattern);
    if (filters.gender) filtered = filtered.filter(p => p.gender === filters.gender);
    if (filters.size) filtered = filtered.filter(p => p.variants.some(v => v.size === filters.size));
    if (filters.color) filtered = filtered.filter(p => p.variants.some(v => v.color === filters.color));
    
    // Filter by max price
    if (filters.price) {
       filtered = filtered.filter(p => p.variants[0][priceKey] <= filters.price[1]);
    }
    
    setProducts(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white py-6 shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-500 mt-2">Discover our exclusive collection filtered precisely for you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 pb-16">
        {/* Sidebar Filters */}
        <Filters onFilter={handleFilter} />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center text-gray-600">
            <span>Showing {products.length} results</span>
            <select className="border border-gray-300 p-2 rounded focus:outline-pink-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const displayPrice = product.variants[0][priceKey];
              return (
                <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="font-medium text-gray-800 mb-2 truncate">{product.name}</h3>
                    <p className="text-pink-600 font-bold">₹{displayPrice}</p>
                  </div>
                </Link>
              );
            })}
            
            {products.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-500 bg-white rounded-lg">
                No products found matching your criteria. Try adjusting the filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;