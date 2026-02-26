const TrackOrderPage = () => {
  return (
    <div className="max-w-md mx-auto py-20">
      <input
        placeholder="Enter Order ID"
        className="border p-3 w-full mb-4"
      />
      <button className="w-full bg-black text-white py-2 rounded">
        Track Order
      </button>
    </div>
  );
};

export default TrackOrderPage;
