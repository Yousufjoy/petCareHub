import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
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
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: "3360b3595600bad7b6fb1693aa1f2a5e",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      const db = await connectDB();
      const userCollection = db.collection("users");

      if (account.provider === "google") {
        // Check if the user already exists
        const existingUser = await userCollection.findOne({
          email: user.email,
        });

        if (!existingUser) {
          // Insert user with default role as 'user'
          await userCollection.insertOne({
            email: user.email,
            name: user.name,
            image: user.image,
            provider: account.provider,
            role: "user", // Default role
          });
        }
      }

      return true;
    },

    async session({ session, token }) {
      // Add user role to session from token
      session.user.role = token.role; // Assuming the role is added to the token during sign-in
      return session;
    },

    async jwt({ token, user }) {
      // If the user object is available, it means it's a sign-in
      if (user) {
        token.role = user.role; //  user has a role field
      }
      return token;
    },

    async redirect({ url, baseUrl, token }) {
      // Check the user's role from the token
      if (token?.role === "admin") {
        return "/admin-dashboard"; // Redirect to admin dashboard
      }
      return url.startsWith(baseUrl) ? url : baseUrl; // Default redirect
    },
  },
});

export { handler as GET, handler as POST };
