import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    // Connection to the database
    const db = await connectDB();

    // Creating a collection in the database called "users"
    const userCollection = db.collection("users");

    // Checking if the user already exists by email in the "users" collection
    const exist = await userCollection.findOne({ email: newUser.email });

    // If the email exists, respond with a message indicating the user already exists
    if (exist) {
      return NextResponse.json({ message: "User Exists" }, { status: 304 });
    }

    // Hashing the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(newUser.password, 14);

    // Inserting the user into the database with the hashed password
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};
