"use client";
import Carousal from "@/components/AdoptoinPage/Carousal";
import Categories from "@/components/AdoptoinPage/Categories";
import PetCard from "@/components/Cards/PetCard";
import { getAllAdoptions } from "@/services/getAdoption";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdoptionPage = () => {
  const [adoption, setAdoption] = useState([]);

  useEffect(() => {
    const fetchAdoptionData = async () => {
      try {
        const response = await getAllAdoptions();
        const data = await response.json();
        setAdoption(data);
        console.log("Fetched adoption data:", data);
      } catch (error) {
        console.log("Error fetching adoption data:", error);
      }
    };

    fetchAdoptionData();
  }, []);

  console.log(adoption);

  return (
    <>
      <Carousal />
      <Categories />
      <div className="md:flex md:justify-between ">
        <h1 className="font-fanwood text-primary md:text-[60px] md:text-start text-center text-[40px] md:pt-[80px]">
          Adopt From Us
        </h1>

        <div className="md:pt-[100px]">
          <Link href="/submit-listing/details">
            <button className="bg-primary hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
              + Post Adoption
            </button>
          </Link>
        </div>

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

      <div className="container mx-auto p-4 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {adoption.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdoptionPage;
