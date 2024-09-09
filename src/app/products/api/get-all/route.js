import { connectDB } from "@/lib/connectDB";

export const GET = async (req) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");

  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("q");
    // console.log(req.url)
    // console.log(searchParams)
    // console.log(searchQuery)

    let products;

    if (searchQuery) {
      products = await productsCollection
        .find({
          title: { $regex: searchQuery, $options: "i" }, // Case-insensitive search
        })
        .toArray();
    } else {
      products = await productsCollection.find().toArray();
    }

    return Response.json({ products });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch products", { status: 500 });
  }
};
