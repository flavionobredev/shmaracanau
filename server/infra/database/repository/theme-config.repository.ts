import { Model } from "mongoose";
import { ThemeConfigDocument } from "../models/theme-config";

export class ThemeConfigRepository {
  constructor(private readonly themeConfigModel: Model<ThemeConfigDocument>) {}

  async testFromDb() {
    await this.themeConfigModel.create({ theme: "default" });

    return await this.themeConfigModel.find();
  }
}
