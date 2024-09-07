// This is 3rd phase where business logic is handled

import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productCollection = db.collection("products");
  const { category } = params; // Extract category from params

  try {
    const products = await productCollection.find({ category }).toArray(); // Query MongoDB for products with the specified category
    if (products.length > 0) {
      return NextResponse.json({ products });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error });
  }
};
