import { char, pgTable, real, uuid, varchar } from "drizzle-orm/pg-core";

export const launches = pgTable("launches", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    status: varchar().notNull(), //status.abbrev
    launchDate: varchar().notNull(), //net
    imageUrl: varchar().notNull(), //image.image_url
    company: varchar().notNull(), //launch_service_provider.name
});

export const astronauts = pgTable("astronauts", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    status: varchar().notNull(), //status.name
    company: varchar().notNull(), //agency.name
    imageUrl: varchar().notNull(), //image.image_url
    birthDate: varchar().notNull(), //date_of_birth
    deathDate: varchar(), //date_of_death
    nationality: char({ length: 2 }).notNull(), //nationality.alpha_2_code
    wikipediaUrl: varchar() //wiki
});

export const missions = pgTable("missions", {
    id: uuid().primaryKey().defaultRandom(),
    company: varchar().notNull(),
    location: varchar().notNull(),
    date: varchar().notNull(),
    detail: varchar().notNull(),
    missionStatus: varchar().notNull(),
    rocketStatus: varchar().notNull(),
    rocketPrice: real(),
});