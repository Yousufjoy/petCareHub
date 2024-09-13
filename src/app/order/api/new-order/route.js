import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newOrder = await request.json();
  const db = await connectDB();
  const orderCollection = db.collection("orders");

  try {
    const res = await orderCollection.insertOne(newOrder);
    return Response.json({ message: "Booked Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};
