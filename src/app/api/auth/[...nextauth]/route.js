import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDb } from "@/lib/connectDb";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                // Connect to the database
                const db = await connectDb();
                const userCollection = db.collection("users");

                // Find the user by email
                const user = await userCollection.findOne({ email });

                if (!user) {
                    throw new Error("No user found with this email");
                }

                // Verify the password
                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Incorrect password");
                }

                // Return the user object if authenticated successfully
                return { id: user._id.toString(), name: user.name, email: user.email };
            },
        }),
    ],
    pages: {
        signIn: "/signin", // Redirect users here to log in
    },
    secret: process.env.NEXTAUTH_SECRET, // Generate a strong secret for JWT
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
