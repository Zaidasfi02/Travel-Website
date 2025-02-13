import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-blue-50 text-blue-900 p-8">
      {/* Hero Section */}
      <div
        className="h-60 bg-cover bg-center flex items-center justify-center text-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg')",
        }}
      >
        Contact Us
      </div>

      <div className="max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          Have questions or need assistance? Reach out to us, and we'll be happy
          to help.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold">Message</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-md">
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg font-semibold">
          📍 Address: Kotha Toli,Sasaram
        </p>
        <p className="text-lg font-semibold">
          📧 Email: zaidasfi786@gmail.com
        </p>
        <p className="text-lg font-semibold">📞 Phone:+91 7903618562</p>
      </div>
    </section>
  );
};

export default Contact;
