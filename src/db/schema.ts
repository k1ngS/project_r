import { relations } from "drizzle-orm";
import { integer, jsonb, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "users",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    avatar: varchar({ length: 255 }),
  }
);

export const charactersTable = pgTable(
  "characters",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
    name: varchar({ length: 255 }).notNull(),
    user_id: integer("user_id").references(() => usersTable.id).notNull(),
    mark_type: varchar({ length: 255 }).notNull(),
    attributes: jsonb().notNull(),
    level: integer().notNull(),
    experience: integer().notNull(),
    localisation: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 255 }).notNull(), // Alive or Dead
  }
)

export const fluxMarksTable = pgTable(
  "flux_marks",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    character_id: integer("character_id").references(() => charactersTable.id).notNull(),
    name: varchar({ length: 255 }).notNull(),
    effects: jsonb().notNull(),
    skills: jsonb().notNull(),
  }
)

export const inventoryTable = pgTable(
  "inventory",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    character_id: integer("character_id").references(() => charactersTable.id).notNull(),
    item_id: integer("item_id").references(() => itemsTable.id).notNull(),
    name: varchar({ length: 255 }).notNull(),
    quantity: integer().notNull(),
    description: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 255 }).notNull(),
    added_at: timestamp().notNull(),
  }
)

export const itemsTable = pgTable(
  "items",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 255 }).notNull(),
    effects: jsonb().notNull(),
    skills: jsonb().notNull(),
    rarity: varchar({ length: 255 }).notNull(),
  }
)

export const eventsTable = pgTable(
  "events",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 255 }).notNull(),
    date: timestamp().notNull(),
    status: varchar({ length: 255 }).notNull(),
    character_id: integer("character_id").references(() => charactersTable.id).notNull(),
    characterImpact: varchar({ length: 255 }).notNull(),
  }
)

export const worldLocationsTable = pgTable(
  "world_locations",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 255 }).notNull(),
    difficulty: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 255 }).notNull(),
    character_id: integer("character_id").references(() => charactersTable.id).notNull(),
  }
)

// Relationships

export const usersRelations = relations(usersTable, ({ one }) => ({
  characters: one(charactersTable, { fields: [usersTable.id], references: [charactersTable.user_id] }),
}))

export const charactersRelations = relations(charactersTable, ({ one, many }) => ({
  user: one(usersTable, { fields: [charactersTable.user_id], references: [usersTable.id] }),
  inventory: many(inventoryTable),
  events: many(eventsTable),
  worldLocation: one(worldLocationsTable, { fields: [charactersTable.id], references: [worldLocationsTable.character_id] }),
}));

export const inventoryRelations = relations(inventoryTable, ({ one }) => ({
  character: one(charactersTable, { fields: [inventoryTable.character_id], references: [charactersTable.id] }),
  item: one(itemsTable, { fields: [inventoryTable.item_id], references: [itemsTable.id] }),
}));

export const itemsRelations = relations(itemsTable, ({ many }) => ({
  inventory: many(inventoryTable),
}));

export const eventsRelations = relations(eventsTable, ({ one, many }) => ({
  character: one(charactersTable, { fields: [eventsTable.character_id], references: [charactersTable.id] }),
  participants: many(charactersTable),
}));

export const worldLocationsRelations = relations(worldLocationsTable, ({ one, many }) => ({
  character: one(charactersTable, { fields: [worldLocationsTable.character_id], references: [charactersTable.id] }),
  events: many(eventsTable),
}));