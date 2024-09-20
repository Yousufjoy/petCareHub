import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const adoptionCollection = db.collection("adoptions");

  try {
    const allAdoption = await adoptionCollection.find().toArray();
    return new Response(JSON.stringify(allAdoption), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to fetch adoptions", { status: 500 });
  }
};
