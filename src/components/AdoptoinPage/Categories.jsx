import React from "react";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-4 font-fanwood text-primary">
        Adoption Categories
      </h2>
      <p className="text-xl text-center mb-12 text-gray-600">
        Find your perfect furry companion
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-b-4 border-blue-500">
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-6">
            <FaDog className="text-7xl text-blue-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Dogs</h3>
          <p className="text-gray-600 mb-6">
            Adopt a loving and loyal companion today.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-b-4 border-purple-500">
          <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
            <FaCat className="text-7xl text-purple-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cats</h3>
          <p className="text-gray-600 mb-6">
            Find your purrfect feline friend here.
          </p>
          <button className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-b-4 border-green-500">
          <div className="inline-block p-4 rounded-full bg-green-100 mb-6">
            <FaPaw className="text-7xl text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rabbits</h3>
          <p className="text-gray-600 mb-6">
            Adopt a fluffy and friendly rabbit today.
          </p>
          <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
