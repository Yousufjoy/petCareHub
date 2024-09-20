import { getAdoptionDetails } from "@/services/getAdoption";
import React from "react";
import Image from "next/image";

const DetailsPage = async ({ params }) => {
  const details = await getAdoptionDetails(params.id);

  if (!details) {
    return <div className="text-center mt-10">Failed to load pet details.</div>;
  }

  const { _id, image, petName, location, gender, age, description } =
    details.pet;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-secondary min-h-screen">
      <h1 className="text-6xl font-bold text-center text-orange-600 mb-12">
        Meet {petName} 🐾
      </h1>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Pet Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative h-96 w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={image || "/default-pet-image.jpg"}
              alt={petName || "Pet Image"}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg">
            <span className="text-2xl font-bold text-orange-600">
              {petName}
            </span>
          </div>
        </div>

        {/* Pet Information */}
        <div className="lg:w-1/2 bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            Pet Details
          </h2>
          <div className="space-y-6">
            <p className="text-xl">
              <span className="font-semibold text-orange-500">Location:</span>{" "}
              {location || "N/A"}
            </p>
            <p className="text-xl">
              <span className="font-semibold text-pink-500">Gender:</span>{" "}
              {gender || "N/A"}
            </p>
            <p className="text-xl">
              <span className="font-semibold text-purple-500">Age:</span>{" "}
              {age || "N/A"} years
            </p>
            <p className="text-xl">
              <span className="font-semibold text-blue-500">Description:</span>{" "}
              {description || "No description available."}
            </p>
          </div>

          {/* Adopt Button */}
          <div className="mt-10">
            <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              🏠 Give {petName} a Forever Home
            </button>
          </div>
        </div>
      </div>

      {/* Why Adopt Section */}
      <div className="mt-16 p-8 bg-white rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
          Why Adopt {petName}? 🐾
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-6xl mb-4">🐶</p>
            <p className="text-lg">
              You'll save a life and gain a loyal companion
            </p>
          </div>
          <div className="text-center">
            <p className="text-6xl mb-4">❤️</p>
            <p className="text-lg">Unconditional love and endless cuddles</p>
          </div>
          <div className="text-center">
            <p className="text-6xl mb-4">🎉</p>
            <p className="text-lg">
              Create lasting memories and celebrate milestones together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
