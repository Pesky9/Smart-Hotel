import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Hotel</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              Rooms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?hotel')",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to Our Hotel</h1>
          <p className="mt-4 text-lg">Enjoy luxury and comfort</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Book Now
          </button>
        </div>
      </header>

      {/* Rooms Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((room, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={`https://source.unsplash.com/400x300/?hotel-room${index}`}
                alt="Room"
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Deluxe Room</h3>
              <p className="mt-2">A spacious room with all amenities.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-16">
        <p>&copy; 2024 Hotel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
