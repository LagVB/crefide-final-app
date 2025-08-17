CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"phone" text,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
