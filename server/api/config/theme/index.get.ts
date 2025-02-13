import { makeThemeConfigRepository } from "~/server/infra/database/factories/theme-config.factory";

export default defineEventHandler(async () => {
  try {
    const repository = makeThemeConfigRepository();
    console.log("pre request");
    const result = await repository.testFromDb();
    console.log("result -> ", result);
    return result;
  } catch (error) {
    console.log("error -> ", error);
  }
});
