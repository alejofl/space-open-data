CREATE TABLE "astronauts" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"status" varchar NOT NULL,
	"company" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"birth_date" varchar NOT NULL,
	"death_date" varchar,
	"nationality" char(2) NOT NULL,
	"wikipedia_url" varchar
);
--> statement-breakpoint
CREATE TABLE "launches" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"status" varchar NOT NULL,
	"launch_date" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"company" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "missions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company" varchar NOT NULL,
	"location" varchar NOT NULL,
	"date" varchar NOT NULL,
	"detail" varchar NOT NULL,
	"mission_status" varchar NOT NULL,
	"rocket_status" varchar NOT NULL,
	"rocket_price" real
);
