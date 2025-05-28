import express from "express";
import path from "path";
import csv from "csv-parser";
import fs from "fs";
import cors from "cors";
import config from "./config";
import db from "./db/connector";
import { missions } from "./db/schema";
import { seedMissions } from "./db/seed";

const app = express();
seedMissions();  // Seed the database with mission data

app.use(cors());
app.use(express.json());

// API endpoint to serve mission data
app.get("/api/missions", async (req, res) => {
    const missionData = await db.select().from(missions);
    res.json(missionData);
    // const missions:any = [];

    // // Parse the CSV file and push the data into the "missions" array
    // fs.createReadStream(path.join(__dirname, "Space_Corrected.csv"))
    //     .pipe(csv())
    //     .on("data", (row) => {
    //         missions.push(row);
    //     })
    //     .on("end", () => {
    //         res.json(missions);  // Send the parsed CSV data as JSON
    //     })
    //     .on("error", (error) => {
    //         console.error("Error reading CSV:", error);
    //         res.status(500).send("Error reading CSV");
    //     });
});

app.listen(config.port, () => {
    console.log(`Backend running at port ${config.port}`);
});
