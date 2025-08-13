import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    user_id: text('user_id'),
    name: text('name'),
    description: text('description'),
    price: text('price'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;