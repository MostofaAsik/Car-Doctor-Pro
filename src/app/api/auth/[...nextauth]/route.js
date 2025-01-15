import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
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


                // return { id: user._id.toString(), name: user.name, email: user.email };
                return user;
            },

        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google' || account.provider === 'github') {
                try {
                    const db = await connectDb();
                    const userCollection = db.collection("users");
                    const existingUser = await userCollection.findOne({ email: user.email });
                    if (!existingUser) {
                        await userCollection.insertOne({
                            name: user.name,
                            email: user.email,
                            image: user.image,
                        });
                    }
                    return true;

                } catch (error) {
                    console.error("Error during sign-in:", error);

                }
                return true;
            }

        }
    },
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
