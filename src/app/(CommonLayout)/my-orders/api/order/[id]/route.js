import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const orderCollection = db.collection("orders");
  try {
    const resp = await orderCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({
      message: "deleted the order",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const ordersCollection = db.collection("orders");
  const updateDoc = await request.json();
  try {
    const resp = await ordersCollection.updateOne(
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
    return NextResponse.json({ message: "updated the order", response: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const orderCollectoin = db.collection("orders");
  try {
    const resp = await orderCollectoin.findOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({ message: "Order found", data: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};
