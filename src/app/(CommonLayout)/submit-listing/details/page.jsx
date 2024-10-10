"use client";

import { postAdoption } from "@/services/postApi";
import React from "react";
import Swal from "sweetalert2";

function AdoptionForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const petDetailsForm = {
      category: e.target.category.value,
      image: e.target.image.value,
      petName: e.target.petName.value,
      location: e.target.location.value,
      gender: e.target.gender.value,
      age: e.target.age.value,
      phoneNumber: e.target.phoneNumber.value,
      description: e.target.description.value,
    };
    try {
      const response = await postAdoption(petDetailsForm);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "The pet you listed has been successfully posted.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-secondary rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-[#FF6B6B] mb-10">
        🐾 Adopt a Pet 🐾
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Category */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Pet Category
          </label>
          <select
            name="category"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
          >
            <option value="">Choose a category</option>
            <option value="dog">🐶 Dog</option>
            <option value="cat">🐱 Cat</option>
            <option value="bird">🐦 Bird</option>
            <option value="other">🐾 Other</option>
          </select>
        </div>

        {/* Images */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Pet Images (Required)
          </label>
          <input
            type="url"
            name="image"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
            placeholder="URL"
            required
          />
        </div>

        {/* Name of The Pet */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Pet's Name
          </label>
          <input
            type="text"
            name="petName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
            placeholder="Enter the pet's name"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
            placeholder="Where is the pet located?"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Pet's Gender
          </label>
          <select
            name="gender"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
          >
            <option value="">Select gender</option>
            <option value="male">♂ Male</option>
            <option value="female">♀ Female</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Pet's Age
          </label>
          <input
            type="number"
            name="age"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
            placeholder="Age in years"
          />
        </div>

        {/* Owner Details */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Owners Contact No
          </label>
          <input
            type="number"
            name="phoneNumber"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
            placeholder="Phone Number"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Description
          </label>
          <textarea
            name="description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF6B6B] focus:border-[#FF6B6B] bg-white"
            rows="4"
            placeholder="Describe the pet"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-4 bg-blue-800 text-white font-bold text-xl rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            🐕 Submit Adoption Form 🐈
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdoptionForm;
