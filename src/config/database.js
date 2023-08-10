import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log("Error connecting to database: ", error.message);
  }
}

export async function disconnectDb() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log("Error disconnecting from database: ", error.message);
  }
}