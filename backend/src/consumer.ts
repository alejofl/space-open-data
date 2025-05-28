import axios from "axios";
import config from "./config";
import db from "./db/connector";
import { astronauts, last_update, launches, missions } from "./db/schema";
import { sql } from "drizzle-orm";

export async function updateDatabaseData() {
    console.log("Updating database with latest data...");

    const launchesData = [];
    for (let i = 0; i < 8; i++) {
        try {
            const offset = i > 0 ? 1 : 0
            const response = await axios.get(`${config.apiUrl}/launches/?ordering=-net&limit=80&offset=${i * 80 + offset}`);
            if (response.status === 200) {
                launchesData.push(...response.data.results);
            }
        } catch (error) {
            console.error(`Error fetching launches data on page ${i + 1}:`, error);
        }
    }
    const processedLaunches = launchesData.map((launch: any) => ({
        id: launch.id,
        name: launch.name || "Unknown",
        status: launch.status?.abbrev || "Unknown",
        launchDate: launch.net || "Unknown",
        imageUrl: launch.image?.image_url || "https://i.ibb.co/gb5gHTQ0/placeholder-image10.jpg",
        company: launch.launch_service_provider?.name || "Unknown",
    }));

    for (const launch of processedLaunches) {
        await db.insert(launches)
            .values(launch)
            .onConflictDoUpdate({
                target: launches.id,
                set: {
                    name: sql`excluded.name`,
                    status: sql`excluded.status`,
                    launchDate: sql`excluded.launch_date`,
                    imageUrl: sql`excluded.image_url`,
                    company: sql`excluded.company`,
                },
            });
    }

    const astronautsData = [];
    for (let i = 0; i < 4; i++) {
        try {
            const offset = i > 0 ? 1 : 0
            const response = await axios.get(`${config.apiUrl}/astronauts/?ordering=-date_of_birth&limit=100&offset=${i * 100 + offset}`);
            if (response.status === 200) {
                astronautsData.push(...response.data.results);
            }
        } catch (error) {
            console.error(`Error fetching astronaut data on page ${i + 1}:`, error);
        }
    }
    const processedAstronauts = astronautsData.map((astronaut: any) => ({
        id: astronaut.id,
        name: astronaut.name || "Unknown",
        status: astronaut.status?.name || "Unknown",
        company: astronaut.agency?.name || "Unknown",
        imageUrl: astronaut.image?.image_url || "https://i.ibb.co/gb5gHTQ0/placeholder-image10.jpg",
        birthDate: astronaut.date_of_birth || "Unknown",
        deathDate: astronaut.date_of_death || null,
        nationality: astronaut.nationality?.alpha_2_code || "XX",
        wikipediaUrl: astronaut.wiki || null,
    }));

    for (const astronaut of processedAstronauts) {
        await db.insert(astronauts)
            .values(astronaut)
            .onConflictDoUpdate({
                target: astronauts.id,
                set: {
                    name: sql`excluded.name`,
                    status: sql`excluded.status`,
                    company: sql`excluded.company`,
                    imageUrl: sql`excluded.image_url`,
                    birthDate: sql`excluded.birth_date`,
                    deathDate: sql`excluded.death_date`,
                    nationality: sql`excluded.nationality`,
                    wikipediaUrl: sql`excluded.wikipedia_url`,
                },
            });
    }

    await db.insert(last_update).values({})
}