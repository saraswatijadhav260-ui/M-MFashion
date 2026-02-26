const CheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <input
        type="email"
        placeholder="Email Address"
        className="border p-3 w-full mb-4"
      />

      <button className="w-full bg-green-600 text-white py-3 rounded">
        Pay Now
      </button>
    </div>
  );
};

export default CheckoutPage;
