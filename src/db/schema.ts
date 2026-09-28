import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const briefSubmissions = sqliteTable("brief_submissions", {
  id: text("id").primaryKey(),
  projectName: text("project_name").notNull(),
  submittingUnit: text("submitting_unit").notNull(),
  contactName: text("contact_name").notNull(),
  contactEmail: text("contact_email").notNull(),
  whoAffected: text("who_affected").notNull(),
  whatHappens: text("what_happens").notNull(),
  whyMatters: text("why_matters").notNull(),
  clarityRating: integer("clarity_rating").default(0),
  consequenceRating: integer("consequence_rating").default(0),
  causeRating: integer("cause_rating").default(0),
  confirmationRating: integer("confirmation_rating").default(0),
  status: text("status").default("pending"), // pending, under_review, triaged, approved, referred
  createdAt: text("created_at").notNull(),
});

export const glossaryTerms = sqliteTable("glossary_terms", {
  id: text("id").primaryKey(),
  term: text("term").notNull(),
  fullName: text("full_name").notNull(),
  definition: text("definition").notNull(),
  category: text("category").notNull(), // org, framework, platform, governance, military
  relatedTerms: text("related_terms"),
  updatedAt: text("updated_at").notNull(),
});

export const telemetryEvents = sqliteTable("telemetry_events", {
  id: text("id").primaryKey(),
  eventType: text("event_type").notNull(), // page_view, search, brief_started, brief_submitted, matrix_interaction
  metadata: text("metadata"),
  timestamp: text("timestamp").notNull(),
});
