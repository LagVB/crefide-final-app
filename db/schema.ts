import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('user', {
    id: serial('id').primaryKey(),
    name: text('name'),
    phone: text('phone'),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    userId: text('userId'),
    name: text('name'),
    description: text('description'),
    points: text('points'),
    price: text('price'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;