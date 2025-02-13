import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-blue-50 text-blue-900 p-8">
      {/* Hero Section */}
      <div
        className="h-60 bg-cover bg-center flex items-center justify-center text-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg')",
        }}
      >
        About Us
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Discover the India with Us
        </h2>
        <p className="text-lg mb-6">
          We are passionate about crafting unforgettable travel experiences. Our
          team of experts curates unique itineraries, ensuring every journey is
          filled with adventure, comfort, and joy.
        </p>
      </div>

      {/* Highlights */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">🏝️ Exotic Destinations</h3>
          <p className="text-gray-700">
            Explore breathtaking locations around the globe.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">✈️ Hassle-Free Booking</h3>
          <p className="text-gray-700">
            Seamless and stress-free travel planning.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">💎 Premium Services</h3>
          <p className="text-gray-700">
            Luxury experiences at unbeatable prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
