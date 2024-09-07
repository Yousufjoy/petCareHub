import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },
  providers: [
    // What credentials user give to login in
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      //   Purpose: The authorize function is used to verify the credentials provided by the user during login.
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
  ],
  // We are adding pages because before we used the login page that nextjs provides by default but now we are making or using or own custom login page
  pages: {
    signIn: "/login",
  },
  //next auth default function gives which we can manipulate as we wish
  callbacks: {},
});

export { handler as GET, handler as POST };
