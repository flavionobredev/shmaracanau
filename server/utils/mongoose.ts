import mongoose from "mongoose";

export const createMongooseConnection = async () => {
  if (!process.env.DATABASE_MONGODB_URI)
    throw new Error("DATABASE_MONGODB_URI is required");
  return mongoose.connect(process.env.DATABASE_MONGODB_URI);
};
