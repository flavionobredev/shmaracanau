import mongoose, { InferSchemaType } from "mongoose";
import { MongoModelsName } from "../models.enum";

const Schema = new mongoose.Schema(
  {
    firebaseUid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export type UserSchemaType = InferSchemaType<typeof Schema>;

export const UserModel =
  mongoose.models[MongoModelsName.Users] ||
  mongoose.model(MongoModelsName.Users, Schema);
