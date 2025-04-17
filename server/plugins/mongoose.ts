import mongoose from "mongoose";
import { Nitro } from "nitropack";

export default async (nitroApp: Nitro) => {
  const { dbURI } = useRuntimeConfig();
  if (!dbURI) throw new Error("dbURI is required");
  await mongoose.connect(dbURI);
  console.log("[Mongoose Plugin] Connected to MongoDB");
};
