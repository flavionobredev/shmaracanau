import { makeThemeConfigRepository } from "~/server/infra/database/factories/theme-config.factory";

export default defineEventHandler(async () => {
  const repository = makeThemeConfigRepository();
  return repository.testFromDb();
});
