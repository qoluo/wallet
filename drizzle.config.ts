import type { Config } from "drizzle-kit";
export default {
  schema: "./utils/db/schema/*",
  dbCredentials: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: true,
  },
  driver: "pg",
  out: "./sql-migration",
} satisfies Config;
