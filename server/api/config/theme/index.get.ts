import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async () => {
  const client = new PrismaClient();

  await client.themeConfig.deleteMany()

  await client.themeConfig.create({
    data: {
      theme: "dark",
    },
  });

  const themes = await client.themeConfig.findMany();

  return themes;
});
