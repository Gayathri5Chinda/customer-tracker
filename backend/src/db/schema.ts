
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const adminTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  organisation: varchar({ length: 255 }).notNull(),
});

export const userTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    organisation: varchar({ length: 255 }).notNull(),
});

export const trainerTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    organisation: varchar({ length: 255 }).notNull(),
  });

export const planTable = pgTable("plans", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),       
    name: varchar({ length: 255 }).notNull(),
    price: integer().notNull(),
    description: varchar({ length: 255 }).notNull(),
    features: varchar({ length: 255 }).notNull(),
});

export const subscriptionTable = pgTable("subscriptions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  planId: integer().notNull(),
  startDate: varchar({ length: 255 }).notNull(),
  endDate: varchar({ length: 255 }).notNull(),
  trainerName: varchar({ length: 255 }).notNull(),
});


