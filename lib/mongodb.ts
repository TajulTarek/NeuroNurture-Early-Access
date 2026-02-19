import mongoose from "mongoose";

async function dbConnect(): Promise<typeof mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  // mongoose.connect is a no-op when already connected
  await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  });
  return mongoose;
}

export default dbConnect;
