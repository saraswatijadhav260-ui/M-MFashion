const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold mb-3">garba.shop</h3>
          <p className="text-sm">Premium Garba Clothing</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Policies</h3>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Privacy</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <p>FAQ</p>
          <p>WhatsApp Support</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © 2026 garba.shop
      </div>
    </footer>
  );
};

export default Footer;
