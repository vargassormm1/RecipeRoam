CREATE TABLE IF NOT EXISTS "reciperoam_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerkId" text NOT NULL,
	"fname" text NOT NULL,
	"lname" text NOT NULL,
	"email" text NOT NULL,
	"imageUrl" text NOT NULL
);
