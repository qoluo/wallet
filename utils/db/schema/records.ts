import {
  pgTable,
  serial,
  numeric,
  varchar,
  uuid,
  date,
} from "drizzle-orm/pg-core";

export const records = pgTable("users", {
  id: serial("id").primaryKey().unique(),
  type: varchar("type", { length: 256 }),
  account: uuid("phone"),
  amount: numeric("amount"),
  currency: varchar("currency", { length: 3 }),
  record_happened_at: date("happened_at"),
  record_created_at: date("created_at"),
});
