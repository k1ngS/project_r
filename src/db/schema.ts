import { relations } from "drizzle-orm";
import { integer, jsonb, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const charactersTable = pgTable(
  "characters",
  {
    id: varchar({ length: 255 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: varchar({ length: 255 }).notNull(),
    user_id: varchar({ length:255 }).notNull(),
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
    id: varchar({ length: 255 }).primaryKey(),
    character_id: varchar({ length: 255 }).references(() => charactersTable.id).notNull(),
    name: varchar({ length: 255 }).notNull(),
    effects: jsonb().notNull(),
    skills: jsonb().notNull(),
  }
)

export const inventoryTable = pgTable(
  "inventory",
  {
    id: varchar({ length: 255 }).primaryKey(),
    character_id: varchar({ length: 255 }).references(() => charactersTable.id).notNull(),
    item_id: varchar({ length: 255 }).references(() => itemsTable.id).notNull(),
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
    id: varchar({ length: 255 }).primaryKey(),
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
    id: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 255 }).notNull(),
    date: timestamp().notNull(),
    status: varchar({ length: 255 }).notNull(),
    character_id: varchar({ length: 255 }).references(() => charactersTable.id).notNull(),
    characterImpact: varchar({ length: 255 }).notNull(),
  }
)

export const worldLocationsTable = pgTable(
  "world_locations",
  {
    id: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 255 }).notNull(),
    difficulty: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 255 }).notNull(),
    character_id: varchar({ length: 255 }).references(() => charactersTable.id).notNull(),
  }
)

// Relationships
export const charactersRelations = relations(charactersTable, ({ many, one }) => ({
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
