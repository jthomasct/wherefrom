import { Character, World, Town, Interactable, occurence, tagInfo, ImageAsset } from "./definitions";
import griselImage from "@/public/characters/grisel.png";
import bitImage from "@/public/characters/bit.png";

export const griselImageEntry: ImageAsset = {
  id: "00005222-E64B-4715-A3A2-83DFBC4B34CX",
  name: "grisel",
  data: griselImage.src,
  contentType: "image/png",
}

export const watery: tagInfo = {
  id: "00005222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "watery",
};

export const aquarius: World = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Aquarius",
  techLevel: BigInt(1),
  attributeTags: [watery.id],
  story: "",
};

export const amphithon: Town = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CC",
  name: "amphithon",
  population: BigInt(20),
  worldId: aquarius.id,
  attributeTags: [watery.id],
  story: "",
};

export const hopheath: Town = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CD",
  name: "hopheath",
  population: BigInt(16),
  worldId: aquarius.id,
  attributeTags: [watery.id],
  story: "",
};

export const capricorn: World = {
  id: "03045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Capricorn",
  techLevel: BigInt(1),
  attributeTags: [],
  story: "",
};

export const taurus: World = {
  id: "04045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Taurus",
  techLevel: BigInt(1),
  attributeTags: [],
  story: "",
};

export const prongpeak: Town = {
  id: "04045222-E64B-4715-A3A2-83DFBC4B34CD",
  name: "prongpeak",
  population: BigInt(20),
  worldId: taurus.id,
  attributeTags: [],
  story: "",
};

export const scorpio: World = {
  id: "05045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Scorpio",
  techLevel: BigInt(1),
  attributeTags: [],
  story: "",
};

export const gemini: World = {
  id: "06045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Gemini",
  techLevel: BigInt(1),
  attributeTags: [],
  story: "",
};

export const pisces: World = {
  id: "07045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Pisces",
  techLevel: BigInt(1),
  attributeTags: [],
  story: "",
};

export const sagitarius: World = {
  id: "08045222-E64B-4715-A3A2-83DFBC4B34CB",
  name: "Sagitarius",
  techLevel: BigInt(1),
  attributeTags: [],
  story: "",
};

export const grisel: Character = {
  id: "02045222-E64B-4715-A3A2-83DFBC4B34CA",
  created: new Date(),
  name: "grisel",
  homeWorldId: aquarius.id,
  homeTownId: amphithon.id,
  currentWorldId: aquarius.id,
  currentTownId: amphithon.id,
  attributeTags: [],
  story: "",
  image: griselImage.src,
};

export const griselBit: Character = {
  id: "962D7BC1-FF0B-4829-84A7-01B419C6825A",
  created: new Date(),
  name: "bit",
  homeWorldId: aquarius.id,
  homeTownId: amphithon.id,
  currentWorldId: aquarius.id,
  currentTownId: amphithon.id,
  attributeTags: [],
  story: "",
  image: bitImage.src,
};

export const hoverBoard: Interactable = {
  id: "972D7BC1-FF0B-4829-84A7-01B419C6825A",
  created: new Date(),
  name: "hoverBoard",
  homeWorldId: aquarius.id,
  homeTownId: amphithon.id,
  currentWorldId: aquarius.id,
  currentTownId: amphithon.id,
  attributeTags: ["tool","movement"],
  story: "",
}

export const robotBody: Interactable = {
  id: "972D7BC1-FF0B-4829-84A7-01B419C6825A",
  created: new Date(),
  name: "hoverBoard",
  homeWorldId: taurus.id,
  homeTownId: prongpeak.id,
  currentWorldId: aquarius.id,
  currentTownId: amphithon.id,
  attributeTags: ["tool","movement"],
  story: "",
}

export const newGame: occurence = {
  id: "472D7BC1-FF0B-4829-84A7-01B419C68254",
  created: new Date(),
  name: "new game",
  starts: new Date(),
  stops: new Date(),
  recurring: "false",
  characters: [grisel.id, griselBit.id],
  interactables: [],
  towns: [amphithon.id],
  attributeTags: [],
  story: "Grisel begins her quest at this location",
}

export const stealHoverBoard: occurence = {
  id: "472D7BC1-FF0B-4829-84A7-01B419C68254",
  created: new Date(),
  name: "build hoverboard",
  starts: new Date(),
  stops: new Date(),
  recurring: "false",
  characters: [grisel.id, griselBit.id],
  interactables: [hoverBoard.id],
  towns: [amphithon.id],
  attributeTags: [],
  story: "Grisel discovers a hoverboard while roaming Aquarius. After careful consideration, she decides to put her thief skills to use",
}

export const escapeCapricorn: occurence = {
  id: "472D7BC1-FF0B-4829-84A7-01B419C68254",
  created: new Date(),
  name: "escape capricorn",
  starts: new Date(),
  stops: new Date(),
  recurring: "false",
  characters: [grisel.id, griselBit.id],
  interactables: [robotBody.id],
  towns: [prongpeak.id],
  attributeTags: [],
  story: "",
}