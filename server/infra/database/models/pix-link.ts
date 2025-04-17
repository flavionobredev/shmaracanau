import mongoose, { InferSchemaType } from "mongoose";
import { MongoModelsName } from "../models.enum";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    pix_key: {
      type: String,
      required: true,
    },
    pix_code: {
      type: String,
      required: true,
    },
    pix_razao_social: {
      type: String,
      required: true,
    },
    pix_cnpj: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MongoModelsName.Users,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export type PixLinkSchemaType = InferSchemaType<typeof Schema>;

export const PixLinkModel =
  mongoose.models[MongoModelsName.PixLink] ||
  mongoose.model(MongoModelsName.PixLink, Schema);
