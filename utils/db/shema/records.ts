import {
  pgTable,
  serial,
  numeric,
  varchar,
  uuid,
  date,
} from "drizzle-orm/pg-core";

export const records = pgTable("users", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 256 }),
  account: uuid("phone"),
  amount: numeric("amount"),
  currency: varchar("currency", { length: 3 }),
  created_at: date("created_at"),
});
