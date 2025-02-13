import ThemeConfigModel from "../models/theme-config";
import { ThemeConfigRepository } from "../repository/theme-config.repository";

export const makeThemeConfigRepository = () => {
  return new ThemeConfigRepository(ThemeConfigModel);
};
