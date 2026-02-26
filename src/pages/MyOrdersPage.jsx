const MyOrdersPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="border rounded p-4 mb-4">
        <p className="font-semibold">Order ID: #ORD12345</p>
        <p>Status: Delivered</p>
        <p>Total: ₹4,599</p>
      </div>

      <div className="border rounded p-4">
        <p className="font-semibold">Order ID: #ORD12346</p>
        <p>Status: In Transit</p>
        <p>Total: ₹2,999</p>
      </div>
    </div>
  );
};

export default MyOrdersPage;
