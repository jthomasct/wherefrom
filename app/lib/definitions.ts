import z from "zod";

const tagInfoSchema = z.object ({
  id: z.string().uuid(),
  name: z.string(),
});
export type tagInfo = z.infer<typeof tagInfoSchema>;

const WorldSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  techLevel: z.bigint(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
});
export type World = z.infer<typeof WorldSchema>;

const TownSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  population: z.bigint(),
  worldId: z.string().uuid(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
});
export type Town = z.infer<typeof TownSchema>;

const CharacterSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  homeWorldId: z.string().uuid(),
  homeTownId: z.string().uuid(),
  currentWorldId: z.string().uuid(),
  currentTownId: z.string().uuid(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
});
export type Character = z.infer<typeof CharacterSchema>;

const InteractableSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  homeWorldId: z.string().uuid(),
  homeTownId: z.string().uuid(),
  currentWorldId: z.string().uuid(),
  currentTownId: z.string().uuid(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
});
export type Interactable = z.infer<typeof InteractableSchema>;

const OccurenceSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  starts: z.date(),
  stops: z.date(),
  recurring: z.string(),
  characters: z.array(z.string().uuid()),
  towns: z.array(z.string().uuid()),
  objects: z.array(z.string().uuid()),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
});
export type occurence = z.infer<typeof OccurenceSchema>
