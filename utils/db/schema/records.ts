import {
  pgTable,
  serial,
  numeric,
  varchar,
  uuid,
  date,
  bigint,
} from "drizzle-orm/pg-core";

export const records = pgTable("records", {
  id: serial("id").primaryKey().unique(),
  type: varchar("type", { length: 256 }),
  account: varchar("account", { length: 256 }),
  amount: numeric("amount"),
  currency: varchar("currency", { length: 3 }),
  record_happened_at: date("happened_at"),
  record_created_at: date("created_at"),
});
