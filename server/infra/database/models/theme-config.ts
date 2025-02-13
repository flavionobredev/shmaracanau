import mongoose from "mongoose";

export type ThemeConfigDocument = mongoose.Document & {
  theme: string;
};

const Schema = new mongoose.Schema<ThemeConfigDocument>({
  theme: {
    type: String,
    default: "default",
  },
});

const ThemeConfigModel = mongoose.model("theme_config", Schema);

export default ThemeConfigModel;
