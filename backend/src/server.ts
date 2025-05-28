import express from "express";
import cors from "cors";
import config from "./config";
import db from "./db/connector";
import { astronauts, last_update, launches, missions } from "./db/schema";
import { seedMissions } from "./db/seed";
import { asc, desc } from "drizzle-orm";
import { updateDatabaseData } from "./consumer";

const app = express();
seedMissions();  // Seed the database with mission data

app.use(cors());
app.use(express.json());

// API endpoint to serve mission data
app.get("/api/missions", async (req, res) => {
    const missionData = await db.select().from(missions);
    res.json(missionData);
});

app.get("/api/launches", async (req, res) => {
    const lastUpdate = await db.select().from(last_update).orderBy(desc(last_update.timestamp)).limit(1);
    
    if (lastUpdate.length === 0 || Math.abs(new Date().getTime() - lastUpdate[0].timestamp.getTime()) / (1000 * 60 * 60) >= 2) {
        await updateDatabaseData();
    }

    const launchesData = await db.select().from(launches).orderBy(desc(launches.launchDate));
    res.json(launchesData);
});

app.get("/api/astronauts", async (req, res) => {
    const lastUpdate = await db.select().from(last_update).orderBy(desc(last_update.timestamp)).limit(1);
    
    if (lastUpdate.length === 0 || Math.abs(new Date().getTime() - lastUpdate[0].timestamp.getTime()) / (1000 * 60 * 60) >= 2) {
        await updateDatabaseData();
    }

    const astronautsData = await db.select().from(astronauts).orderBy(asc(astronauts.name));
    res.json(astronautsData);
});

app.listen(config.port, () => {
    console.log(`Backend running at port ${config.port}`);
});
