import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const adoptionCollection = db.collection("adoptions");
  try {
    const adoption = await adoptionCollection.findOne({
      _id: new ObjectId(params.id),
    }); // Convert id to ObjectId
    if (adoption) {
      return NextResponse.json({ pet: adoption });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error });
  }
};
