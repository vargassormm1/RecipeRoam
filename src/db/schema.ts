import { text, pgTableCreator, serial } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `reciperoam_${name}`);

export const users = createTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerkId").notNull(),
  fname: text("fname").notNull(),
  lname: text("lname").notNull(),
  email: text("email").notNull(),
  imageUrl: text("imageUrl").notNull(),
});
