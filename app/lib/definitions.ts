import z from "zod";

const WorldSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  techLevel: z.bigint(),
});
export type World = z.infer<typeof WorldSchema>;

const TownSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  population: z.bigint(),
  world: WorldSchema,
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
});
export type Character = z.infer<typeof CharacterSchema>;

const InteractableSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  attributeTags: z.array(z.string()),
  homeWorld: z.string().uuid(),
  homeTown: z.string().uuid(),
  currentWorld: z.string().uuid(),
  currentTown: z.string().uuid(),
});
export type Interactable = z.infer<typeof InteractableSchema>;

const EventSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  starts: z.date(),
  stops: z.date(),
  recurring: z.string(),
  characters: z.array(z.string().uuid()),
  towns: z.array(z.string().uuid()),
  objects: z.array(z.string().uuid()),
});
