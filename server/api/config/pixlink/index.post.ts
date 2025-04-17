import { makePixLinkRepository } from "~/server/infra/database/factories/pix-link.factory";

export default defineEventHandler(async () => {
  try {
    const repository = makePixLinkRepository();
    console.log("pre request");
    const result = await repository.testFromDb();
    console.log("result -> ", result);
    return { data: result };
  } catch (error) {
    console.log("error -> ", error);
    return { message: "erorr", error };
  }
});
