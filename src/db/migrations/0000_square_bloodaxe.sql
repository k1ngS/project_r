CREATE TABLE "characters" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"mark_type" varchar(255) NOT NULL,
	"attributes" jsonb NOT NULL,
	"level" integer NOT NULL,
	"experience" integer NOT NULL,
	"localisation" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	CONSTRAINT "characters_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"date" timestamp NOT NULL,
	"status" varchar(255) NOT NULL,
	"character_id" varchar(255) NOT NULL,
	"characterImpact" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "flux_marks" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"character_id" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"effects" jsonb NOT NULL,
	"skills" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "inventory" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"character_id" varchar(255) NOT NULL,
	"item_id" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"quantity" integer NOT NULL,
	"description" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"added_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "items" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"effects" jsonb NOT NULL,
	"skills" jsonb NOT NULL,
	"rarity" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "world_locations" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"difficulty" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"character_id" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flux_marks" ADD CONSTRAINT "flux_marks_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "world_locations" ADD CONSTRAINT "world_locations_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;