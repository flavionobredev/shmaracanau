import { spawn } from "node:child_process";
import { join } from "node:path";

async function runPrismaDbPush() {
  return new Promise((resolve, reject) => {
    const prisma = spawn(
      "npx",
      ["prisma", "db", "push", "--accept-data-loss"],
      { shell: true }
    );

    prisma.stdout.on("data", (data) => {
      console.log(`${data}`);
    });

    prisma.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    prisma.on("close", (code) => {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error(`Prisma db push failed with code ${code}`));
      }
    });
  });
}

async function runPrismaMigrateDeploy() {
  return new Promise((resolve, reject) => {
    const prisma = spawn("npx", ["prisma", "migrate", "deploy"], {
      shell: true,
    });

    prisma.stdout.on("data", (data) => {
      console.log(`${data}`);
    });

    prisma.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    prisma.on("close", (code) => {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error(`Prisma db push failed with code ${code}`));
      }
    });
  });
}

async function startSqliteDB() {
  const env: "development" | "production" = process.env.NODE_ENV as any;
  const sqliteDbName = process.env.DATABASE_SQLITE_NAME?.split("file:")[1];
  if (!sqliteDbName) {
    throw new Error("DATABASE_SQLITE_NAME not found");
  }
  console.log("sqliteDbName", sqliteDbName);
  const databasePath = join(process.cwd(), "prisma", sqliteDbName);
  // const fileExists = existsSync(databasePath);
  console.log("fileExists", databasePath);

  if (env === "development") {
    await runPrismaDbPush();
  } else if (env === "production") {
    await runPrismaMigrateDeploy();
  }
}

export default defineNuxtPlugin({
  name: "prisma",
  hooks: {
    "app:created": async (app) => {
      console.log("1. baixar db do gdrive. se nao existir, criar db");
      console.log("2. rodar migrations");

      const hasDbInGoogleDrive = false;

      if (hasDbInGoogleDrive) {
        console.log("baixar db e colocar no local de destino");
      }

      if (process.env.DATABASE_SQLITE_APPLY_ON_START === "true") {
        startSqliteDB();
      }
    },
  },
});
