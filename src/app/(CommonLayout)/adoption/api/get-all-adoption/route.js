import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const db = await connectDB();
  const adoptionCollection = db.collection("adoptions");

  try {
    // Get the search parameters from the request URL
    const { searchParams } = new URL(request.url);
    const searchedQuery = searchParams.get("q"); // Extract the 'q' parameter if it exists

    // If a search query is provided, find matching documents, otherwise return all
    let allAdoption;
    if (searchedQuery) {
      // Assuming the collection has a 'name' or similar field to search for
      allAdoption = await adoptionCollection
        .find({ petName: { $regex: searchedQuery, $options: "i" } }) // Case-insensitive search
        .toArray();
    } else {
      allAdoption = await adoptionCollection.find().toArray();
    }

    // Return the response
    return new NextResponse(JSON.stringify(allAdoption), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching adoptions:", error);
    return new NextResponse("Failed to fetch adoptions", { status: 500 });
  }
};
