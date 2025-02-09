CREATE TABLE "characters" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "characters_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"user_id" integer NOT NULL,
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
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "events_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"date" timestamp NOT NULL,
	"status" varchar(255) NOT NULL,
	"character_id" integer NOT NULL,
	"characterImpact" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "flux_marks" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "flux_marks_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"character_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"effects" jsonb NOT NULL,
	"skills" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "inventory" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "inventory_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"character_id" integer NOT NULL,
	"item_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"quantity" integer NOT NULL,
	"description" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"added_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "items" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "items_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"effects" jsonb NOT NULL,
	"skills" jsonb NOT NULL,
	"rarity" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "world_locations" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "world_locations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"difficulty" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"character_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "avatar" varchar(255);--> statement-breakpoint
ALTER TABLE "characters" ADD CONSTRAINT "characters_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flux_marks" ADD CONSTRAINT "flux_marks_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "world_locations" ADD CONSTRAINT "world_locations_character_id_characters_id_fk" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "age";