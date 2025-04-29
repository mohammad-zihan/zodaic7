import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Zodiac sign schema
export const zodiacSigns = pgTable("zodiac_signs", {
  id: serial("id").primaryKey(),
  sign: text("sign").notNull(),
  dates: text("dates").notNull(),
  potentialRangeLow: integer("potential_range_low").notNull(),
  potentialRangeHigh: integer("potential_range_high").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

export const insertZodiacSchema = createInsertSchema(zodiacSigns).omit({
  id: true,
});

// Earnings calculation schema
export const earningsCalculationSchema = z.object({
  birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Birthdate must be in YYYY-MM-DD format"),
  name: z.string().optional(),
});

export const earningsResultSchema = z.object({
  name: z.string(),
  zodiacSign: z.string(),
  dates: z.string(),
  potentialRange: z.string(),
  description: z.string(),
  image: z.string(),
});

