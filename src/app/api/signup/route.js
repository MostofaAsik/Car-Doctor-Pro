
import { connectDb } from "@/lib/connectDb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        const db = await connectDb();
        const userCollection = db.collection("users");

        // Check if user exists
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user
        const result = await userCollection.insertOne({
            name,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ message: "User created successfully", userId: result.insertedId }, { status: 201 });
    } catch (error) {
        console.error("Error in signup API:", error.message);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
