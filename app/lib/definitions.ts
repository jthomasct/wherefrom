import z from "zod";

const CharacterSchema = z.object({
  id: z.string().uuid(),
  created: z.date(),
  name: z.string(),
  homeworld: z.string(),
  hometown: z.string(),
});
export type CharacterSchema = z.infer<typeof CharacterSchema>;
