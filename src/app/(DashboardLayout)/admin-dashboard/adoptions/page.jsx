"use client";

import { getAllAdoptions } from "@/services/getAdoption"; // Importing the service correctly
import React, { useEffect, useState } from "react";
import AdminPetCard from "../../components/Shared/AdminPetCard";

const AdoptionPage = () => {
  const [adoption, setAdoption] = useState([]); // State to store adoption data

  useEffect(() => {
    const fetchAllAdoptions = async () => {
      try {
        const allAdoptions = await getAllAdoptions(); // Fetching data
        setAdoption(allAdoptions); // Setting fetched data to state
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllAdoptions();
  }, []);

  // Log the adoption data after it's set
  useEffect(() => {
    console.log(adoption); // This will log the updated state once set
  }, [adoption]);

  return (
    <div className="container mx-auto p-4 md:pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adoption.length == 0 ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          adoption.map((pet, index) => <AdminPetCard key={index} pet={pet} />)
        )}
      </div>
    </div>
  );
};

export default AdoptionPage;
