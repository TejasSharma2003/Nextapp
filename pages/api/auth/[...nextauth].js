import connectDb from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import mongoose from "mongoose";

import User from "@/models/userModel";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          //connecting to database.
          const client = await connectDb();

          const user = await User.findOne({ email: credentials.email }).select(
            "+password"
          );

          //check the password
          if (!user || !(await user.comparePassword(credentials.password))) {
            throw new Error("Credentials are not valid.");
          }

          //Closing database connection.
          mongoose.connection.close();

          //This will be our jwt token

          return {
            name: user.name,
            email: user.email,
            id: user.id,
          };
        } catch (err) {
          throw err;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth",
  },
};
export default NextAuth(authOptions);
