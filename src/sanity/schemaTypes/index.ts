import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { aboutType } from "./aboutType";
import { heroImageType } from "./heroImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, aboutType, heroImageType],
};
