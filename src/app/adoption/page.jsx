"use client";
import React, { useState } from "react";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";
const AdoptionPage = () => {
  return (
    <>
      <div class="carousel w-full relative">
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg"
            class="w-full h-[500px] object-cover opacity-70"
            alt="Cat"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-4xl font-bold text-center px-4 bg-black bg-opacity-50 py-2 rounded">
              Purr-fect Friends Here
            </h2>
          </div>
          <div class="absolute inset-0 flex items-center justify-between p-4">
            <a
              href="#slide1"
              class="btn btn-circle bg-white text-black hover:bg-gray-200"
            >
              ❮
            </a>
            <a
              href="#slide3"
              class="btn btn-circle bg-white text-black hover:bg-gray-200"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://media.4-paws.org/3/9/3/1/3931c3a89c44aa0c5a73a7e7fa1c07f1a0bc76a6/VIER%20PFOTEN_2016-09-18_081-2000x666-1920x639.jpg"
            class="w-full h-[500px] object-cover opacity-70"
            alt="Dog"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-4xl font-bold text-center px-4 bg-black bg-opacity-50 py-2 rounded">
              Loyal Companions Await
            </h2>
          </div>
          <div class="absolute inset-0 flex items-center justify-between p-4">
            <a
              href="#slide4"
              class="btn btn-circle bg-white text-black hover:bg-gray-200"
            >
              ❮
            </a>
            <a
              href="#slide2"
              class="btn btn-circle bg-white text-black hover:bg-gray-200"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between">
        <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px]">
          Adopt From Us
        </h1>
        <div className="flex md:mr-3 md:mt-0 mt-[50px] md:ml-0 ml-[60px]">
          <div className="md:pt-[100px]">
            <input
              type="text"
              placeholder="Search Pets"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="md:pt-[100px] md:mr-[30px]">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      {/* <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px]">
          Adopt From Us
        </h1> */}
      <h2 className="text-4xl font-bold text-center mb-12 font-fanwood text-primary">Adoption Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <FaDog className="text-8xl mb-4 text-gray-700" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Dogs</h3>
          <p className="text-gray-600">Adopt a loving and loyal companion today.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <FaCat className="text-8xl mb-4 text-gray-700" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cats</h3>
          <p className="text-gray-600">Find your purrfect feline friend here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <FaPaw className="text-8xl mb-4 text-gray-700" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rabbits</h3>
          <p className="text-gray-600">Adopt a fluffy and friendly rabbit today.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdoptionPage;
