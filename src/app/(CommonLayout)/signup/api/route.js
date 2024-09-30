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

    // Assign role based on specific email
    let role = "user"; // default role

    // Check if the email is the one you want to assign admin role to
    if (newUser.email === "admin@gmail.com") {
      role = "admin"; // set the role as admin for the specific email
    }

    // Inserting the user into the database with the hashed password and role
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
      role,  // Assign the determined role
    });

    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};
