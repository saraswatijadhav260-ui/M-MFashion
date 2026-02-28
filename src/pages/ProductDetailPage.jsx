import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const sliderRef = useRef(null);

  // All products (main + similar)
  const allProducts = [
    {
      id: "WK-4589",
      name: "Women’s Festive Ethnic Kurti",
      brand: "ZARA",
      sku: "WK-4589",
      rating: 4.3,
      reviewsCount: 1245,
      originalPrice: 1999,
      discountedPrice: 999,
      discount: 50,
      images: [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/501",
        "https://via.placeholder.com/502",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4590",
      name: "Designer Party Kurti",
      price: 1199,
      originalPrice: 2199,
      image: "https://via.placeholder.com/300",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4591",
      name: "Printed Casual Kurti",
      price: 899,
      originalPrice: 1599,
      image: "https://via.placeholder.com/301",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4592",
      name: "Festive Embroidery Kurti",
      price: 1499,
      originalPrice: 2499,
      image: "https://via.placeholder.com/302",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4593",
      name: "Cotton Daily Wear Kurti",
      price: 799,
      originalPrice: 1399,
      image: "https://via.placeholder.com/303",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4594",
      name: "Silk Wedding Kurti",
      price: 1799,
      originalPrice: 2799,
      image: "https://via.placeholder.com/304",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4595",
      name: "Floral Printed Kurti",
      price: 999,
      originalPrice: 1899,
      image: "https://via.placeholder.com/305",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: "WK-4596",
      name: "Summer Casual Kurti",
      price: 699,
      originalPrice: 1299,
      image: "https://via.placeholder.com/306",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"],
    },
  ];

  // State for currently displayed product
  const [product, setProduct] = useState(allProducts[0]);
  const [selectedImage, setSelectedImage] = useState(allProducts[0].images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Update product when URL changes
  useEffect(() => {
    const newProduct = allProducts.find((p) => p.id === id) || allProducts[0];
    setProduct(newProduct);
    setSelectedImage(newProduct.images?.[0] || newProduct.image);
    setSelectedSize(null);
    setSelectedColor(null);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  // Scroll handlers
  const scrollLeft = () => sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select Size and Color");
      return;
    }
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.discountedPrice || product.price,
      image: selectedImage,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("✅ Product Added to Cart!");
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select Size and Color");
      return;
    }
    const buyNowItem = {
      id: product.id,
      name: product.name,
      price: product.discountedPrice || product.price,
      image: selectedImage,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };
    localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
    navigate("/checkout");
  };

  // Similar products (exclude current product)
  const similarProducts = allProducts.filter((p) => p.id !== product.id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* MAIN PRODUCT SECTION */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <img src={selectedImage} alt="product" className="w-full rounded-lg shadow" />
          <div className="flex gap-3 mt-4">
            {(product.images || [product.image]).map((img) => (
              <img
                key={img}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  selectedImage === img ? "border-black border-2" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {product.rating && (
            <p className="text-yellow-500 mt-2">
              ⭐ {product.rating} ({product.reviewsCount} ratings)
            </p>
          )}
          <div className="mt-5">
            <span className="text-2xl font-bold text-green-600">
              ₹{product.discountedPrice || product.price}
            </span>
            {product.originalPrice && (
              <span className="line-through text-gray-400 ml-3">{product.originalPrice}</span>
            )}
            {product.discount && <span className="text-red-500 ml-3">{product.discount}% OFF</span>}
          </div>

          {/* Size & Color */}
          <div className="mt-6">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-3 mt-2">
              {(product.sizes || []).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <p className="font-semibold mt-4">Select Color</p>
            <div className="flex gap-3 mt-2">
              {(product.colors || []).map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded ${
                    selectedColor === color ? "bg-black text-white" : ""
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>

            <p className="font-semibold mt-4">Quantity</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-2 w-20 rounded mt-2"
            />
          </div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <button onClick={handleAddToCart} className="bg-yellow-500 text-white px-6 py-3 rounded">
              🛒 Add to Cart
            </button>
            <button onClick={handleBuyNow} className="bg-black text-white px-6 py-3 rounded">
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <div className="mt-16 relative">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar"
        >
          {similarProducts.map((item) => (
            <div
              key={item.id}
              className="min-w-[250px] border rounded-lg p-4 cursor-pointer hover:shadow-xl transition bg-white"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded" />
              <h3 className="mt-3 font-semibold">{item.name}</h3>
              <div className="mt-2">
                <span className="font-bold text-green-600">₹{item.price}</span>
                <span className="line-through text-gray-400 ml-2">{item.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;