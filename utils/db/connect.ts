import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const connection = postgres(constructConnectionString());

export const db = drizzle(connection);

function constructConnectionString() {
  const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
  } = process.env;

  if (DATABASE_PASSWORD) {
    const urlReadyPassword = encodeURIComponent(DATABASE_PASSWORD);
    return `postgresql://${DATABASE_USER}:${urlReadyPassword}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
  } else {
    throw new Error("DATABASE_PASSWORD is not set");
  }
}
