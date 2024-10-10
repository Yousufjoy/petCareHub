import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");
  const updateDoc = await request.json();
  try {
    const resp = await productsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updateDoc,
        },
      },
      {
        upsert: true,
      }
    );
    return NextResponse.json({
      message: "Updated Product successfully",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");
  try {
    const resp = await productsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({
      message: "deleted the product",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};
