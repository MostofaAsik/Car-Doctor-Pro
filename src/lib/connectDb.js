import { MongoClient, ServerApiVersion } from "mongodb";

let db = null; // Cache the DB connection

export const connectDb = async () => {
    if (db) return db;

    try {
        const uri = process.env.MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        if (!db) {
            await client.connect();
            db = client.db("car-doctor-pro"); // Replace with your database name
            console.log("Connected to MongoDB");
        }

        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error.message);
        throw new Error("Failed to connect to MongoDB");
    }
};
