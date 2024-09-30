import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newAdoption = await request.json();

  const db = await connectDB();
  const adoptionCollection = db.collection("adoptions");

  try {
    const res = adoptionCollection.insertOne(newAdoption);
    if (res) {
      return Response.json({
        message: "Created new adoption Post",
      });
    }
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};
