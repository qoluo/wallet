import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, connection } from "@/utils/db/connect";

async function runMigration() {
  await migrate(db, { migrationsFolder: "sql-migration" });
  await connection.end();
}

runMigration();
