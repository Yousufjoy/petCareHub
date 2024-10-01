import { connectDB } from "@/lib/connectDB";

export const GET = async (req) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");

  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("q");
    const sortOrder = searchParams.get("sort");

    let sortOptions = {};

    if (sortOrder === "High To Low") {
      sortOptions.price = -1; // Descending order
    } else if (sortOrder === "Low To High") {
      sortOptions.price = 1; // Ascending order
    }

    let products;

    if (searchQuery) {
      products = await productsCollection
        .find({
          title: { $regex: searchQuery, $options: "i" }, // Case-insensitive search
        })
        .sort(sortOptions)
        .toArray();
    } else {
      products = await productsCollection.find().sort(sortOptions).toArray();
    }

    return Response.json({ products });
  } catch (error) {
    return new Response("Failed to fetch products", { status: 500 });
  }
};
