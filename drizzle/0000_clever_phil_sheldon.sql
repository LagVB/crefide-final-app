CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"price" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
