import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productCollection = db.collection("products");
  try {
    const product = await productCollection.findOne({ _id: new ObjectId(params.id) }); // Convert id to ObjectId
    if (product) {
      return NextResponse.json({ product });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error });
  }
};
