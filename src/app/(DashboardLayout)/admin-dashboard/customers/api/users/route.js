const { connectDB } = require("@/lib/connectDB");
const { NextResponse } = require("next/server");

export const GET = async (req) => {
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    const allUsers = await usersCollection.find().toArray();
    return NextResponse.json({
      allUsers,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new NextResponse("Failed to fetch orders", { status: 500 });
  }
};
