import { makeThemeConfigRepository } from "~/server/infra/database/factories/theme-config.factory";
import { createMongooseConnection } from "~/server/utils/mongoose";

export default defineEventHandler(async () => {
  try {
    await createMongooseConnection();
    const repository = makeThemeConfigRepository();
    console.log("pre request");
    const result = await repository.testFromDb();
    console.log("result -> ", result);
    return result;
  } catch (error) {
    console.log("error -> ", error);
    return { message: "erorr", error };
  }
});
