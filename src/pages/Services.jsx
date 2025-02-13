import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen bg-blue-50 text-blue-900 p-8">
      {/* Hero Section */}
      <div
        className="h-60 bg-cover bg-center flex items-center justify-center text-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')",
        }}
      >
        Our Services
      </div>

      {/* Service Introduction */}
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Your Gateway to Amazing Travel Experiences
        </h2>
        <p className="text-lg mb-6">
          From luxury vacations to budget-friendly getaways, we provide tailored
          travel solutions to fit your needs. Discover our range of services
          designed to make your journey unforgettable.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">🌍 Exotic Tours</h3>
          <p className="text-gray-700">
            Explore exotic destinations across the india.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">🏕️ Adventure Trips</h3>
          <p className="text-gray-700">
            Thrilling activities like hiking, rafting, and more.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">🏨 Hotel & Transport</h3>
          <p className="text-gray-700">
            Luxury hotels and hassle-free transportation.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">🛳️ Cruise Packages</h3>
          <p className="text-gray-700">
            Set sail on breathtaking ocean and river cruises.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎟️ Customized Packages</h3>
          <p className="text-gray-700">
            Tailor your trip according to your preferences.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">📸 Travel Photography</h3>
          <p className="text-gray-700">
            Capture your memories with professional travel photography.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-md">
          Book Your Trip Now
        </button>
      </div>
    </section>
  );
};

export default Services;
