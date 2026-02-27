import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ===== Pages ===== */
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import WishlistPage from "./pages/WishlistPage";
import WhatsAppLoginPage from "./pages/WhatsAppLoginPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import UploadUserPhotosPage from "./pages/UploadUserPhotosPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShippingPolicyPage from "./pages/ShippingPolicyPage";
import ReturnRefundPage from "./pages/ReturnRefundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

/* ===== Components ===== */
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Products */}
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* Cart & Checkout */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />

        {/* Orders */}
        <Route path="/my-orders" element={<MyOrdersPage />} />
        <Route path="/trackorder/:orderId" element={<TrackOrderPage />} />

        {/* Search */}
        <Route path="/search" element={<SearchResultsPage />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<WishlistPage />} />

        {/* Login */}
        <Route path="/login" element={<WhatsAppLoginPage />} />

        {/* Upload */}
        <Route path="/upload-photos" element={<UploadUserPhotosPage />} />

        {/* Info Pages */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/return-refund" element={<ReturnRefundPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-10 text-2xl">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;