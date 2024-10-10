import React from "react";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";

const PetsInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-6 font-fanwood text-primary">
        Find Your Perfect Pet
      </h2>
      <p className="text-xl text-center mb-12 text-gray-600">
        Discover the joy of adopting a furry friend. Each pet brings love and happiness into your home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-b-4 border-blue-500">
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-6">
            <FaDog className="text-7xl text-blue-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Dogs</h3>
          <p className="text-gray-600 mb-6">
            Dogs are incredibly loyal and affectionate companions. They thrive on love and attention and will
            return that love tenfold. Whether you want an energetic pup for outdoor adventures or a gentle soul
            for quiet evenings, a dog can make your life fuller and more joyful.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-b-4 border-purple-500">
          <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
            <FaCat className="text-7xl text-purple-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cats</h3>
          <p className="text-gray-600 mb-6">
            Cats offer a unique blend of independence and affection. They are playful yet serene, and their 
            purring can be incredibly soothing. Adopting a cat means bringing a playful and sometimes silly
            companion into your home, one that requires less attention but still loves being near you.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-b-4 border-green-500">
          <div className="inline-block p-4 rounded-full bg-green-100 mb-6">
            <FaPaw className="text-7xl text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rabbits</h3>
          <p className="text-gray-600 mb-6">
            Rabbits are playful, social, and can even be litter-trained. They are known for their gentle 
            nature and can form close bonds with their owners. Adopting a rabbit brings a fluffy friend
            who loves to hop around and explore, making every day a new adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetsInfo;
