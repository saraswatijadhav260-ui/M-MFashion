const ContactUsPage = () => {
  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <input
        type="text"
        placeholder="Your Name"
        className="border p-3 w-full mb-4"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="border p-3 w-full mb-4"
      />

      <textarea
        placeholder="Your Message"
        className="border p-3 w-full mb-4"
      />

      <button className="w-full bg-black text-white py-3 rounded">
        Send Message
      </button>
    </div>
  );
};

export default ContactUsPage;
