import mongoose from "mongoose";
export default defineNuxtPlugin(async () => {
  if (!process.env.DATABASE_MONGODB_URI)
    throw new Error("DATABASE_MONGODB_URI is required");
  const connection = await mongoose.connect(process.env.DATABASE_MONGODB_URI);
  console.log("Connected to MongoDB");

  return {
    provide: {
      mongooseConnection: connection,
    },
  };
});
