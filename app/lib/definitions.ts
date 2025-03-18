import z from "zod";

export const ImageAssetSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  data: z.string().url(),
  contentType: z.string(),
});
export type ImageAsset = z.infer<typeof ImageAssetSchema>;

export const TagInfoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});
export type tagInfo = z.infer<typeof TagInfoSchema>;

export const WorldSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  techLevel: z.bigint(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
  image: z.string().url().optional(),
});
export type World = z.infer<typeof WorldSchema>;

export const TownSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  population: z.bigint(),
  worldId: z.string().uuid(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
  image: z.string().url().optional(),
});
export type Town = z.infer<typeof TownSchema>;

export const CharacterSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  homeWorldId: z.string().uuid(),
  homeTownId: z.string().uuid(),
  currentWorldId: z.string().uuid(),
  currentTownId: z.string().uuid(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
  image: z.string().url().optional(),
});
export type Character = z.infer<typeof CharacterSchema>;

export const InteractableSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  homeWorldId: z.string().uuid(),
  homeTownId: z.string().uuid(),
  currentWorldId: z.string().uuid(),
  currentTownId: z.string().uuid(),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
  image: z.string().url().optional(),
});
export type Interactable = z.infer<typeof InteractableSchema>;

export const OccurenceSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  starts: z.date(),
  stops: z.date(),
  recurring: z.string(),
  characters: z.array(z.string().uuid()),
  towns: z.array(z.string().uuid()),
  interactables: z.array(z.string().uuid()),
  attributeTags: z.array(z.string().uuid()),
  story: z.string(),
  image: z.string().url().optional(),
});
export type occurence = z.infer<typeof OccurenceSchema>;
