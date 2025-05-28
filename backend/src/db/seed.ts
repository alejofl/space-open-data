import db from "./connector";
import { missions } from "./schema";
import seedData from "./seed-data.json";

export async function seedMissions() {
  const existing = await db.select().from(missions).limit(1);
  if (existing.length === 0) {
    console.log('Seeding mission data...');
    await db.insert(missions).values(seedData);
  } else {
    console.log('Missions table already has data. Skipping seed.');
  }
}
