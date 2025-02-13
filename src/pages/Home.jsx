import React from "react";

const Home = () => (
  <header
    className="h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg')",
    }}
  >
    <h2 className="text-4xl font-bold mb-4 bg-white bg-opacity-70 p-2 rounded">
      Explore the World with Us
    </h2>
    <p className="text-lg mb-6 bg-white bg-opacity-70 p-2 rounded">
      Find your perfect travel destination and embark on an unforgettable
      journey.
    </p>
    <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
      Get Started
    </button>
  </header>
);

export default Home;
