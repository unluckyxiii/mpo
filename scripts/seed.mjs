import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dataDir = path.resolve(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.resolve(dataDir, "mpo.sqlite");
const db = new Database(dbPath);

console.log("Initializing database tables...");

// Create Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS brief_submissions (
    id TEXT PRIMARY KEY,
    project_name TEXT NOT NULL,
    submitting_unit TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    who_affected TEXT NOT NULL,
    what_happens TEXT NOT NULL,
    why_matters TEXT NOT NULL,
    clarity_rating INTEGER DEFAULT 0,
    consequence_rating INTEGER DEFAULT 0,
    cause_rating INTEGER DEFAULT 0,
    confirmation_rating INTEGER DEFAULT 0,
    status TEXT DEFAULT 'pending',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS glossary_terms (
    id TEXT PRIMARY KEY,
    term TEXT NOT NULL,
    full_name TEXT NOT NULL,
    definition TEXT NOT NULL,
    category TEXT NOT NULL,
    related_terms TEXT,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS telemetry_events (
    id TEXT PRIMARY KEY,
    event_type TEXT NOT NULL,
    metadata TEXT,
    timestamp TEXT NOT NULL
  );
`);

console.log("Seeding pioneer brief submissions...");

const insertBrief = db.prepare(`
  INSERT OR REPLACE INTO brief_submissions (
    id, project_name, submitting_unit, contact_name, contact_email,
    who_affected, what_happens, why_matters, clarity_rating, consequence_rating,
    cause_rating, confirmation_rating, status, created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertBrief.run(
  "brief_nominal_roll",
  "Nominal Roll ICT Call-up Automation",
  "Army S1 Directorate / 3rd Division",
  "MAJ Darren Lim",
  "darren.lim@defence.gov.sg",
  "Unit S1 Officers and Battalion Clerks across 45 active and NS units.",
  "Manual cross-referencing of medical status, PES grading, and deferments across 3 separate legacy databases.",
  "Takes up to 14 days per unit call-up cycle with risk of roster errors.",
  5, 5, 4, 5,
  "approved",
  new Date().toISOString()
);

console.log("Database seeded successfully!");
db.close();
