import { Character, World, Town, Interactable } from "./definitions";

export const aquarius: World = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Aquarius",
  techLevel: BigInt(1),
};

export const amphithon = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CC",
  name: "amphithon",
  population: BigInt(20),
  worldId: aquarius.id,
};

export const hopheath = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CD",
  name: "hopheath",
  population: BigInt(16),
  worldId: aquarius.id,
};


export const capricorn: World = {
  id: "03045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Capricorn",
  techLevel: BigInt(1),
};

export const taurus: World = {
  id: "04045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Taurus",
  techLevel: BigInt(1),
};

export const scorpio: World = {
  id: "05045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Scorpio",
  techLevel: BigInt(1),
};

export const gemini: World = {
  id: "06045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Gemini",
  techLevel: BigInt(1),
};

export const pisces: World = {
  id: "07045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Pisces",
  techLevel: BigInt(1),
};

export const sagitarius: World = {
  id: "08045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Sagitarius",
  techLevel: BigInt(1),
};

export const characters: Character[] = [
  {
    id: "02045222-E64B-4715-A3A2-83DFBC4B34CA",
    created: new Date(),
    name: "grisel",
    homeWorldId: aquarius.id,
    homeTownId: amphithon.id,
    currentWorldId: aquarius.id,
    currentTownId: amphithon.id,
  },
  {
    id: "962D7BC1-FF0B-4829-84A7-01B419C6825A",
    created: new Date(),
    name: "bit",
    homeWorldId: aquarius.id,
    homeTownId: amphithon.id,
    currentWorldId: aquarius.id,
    currentTownId: amphithon.id,
  },
];
