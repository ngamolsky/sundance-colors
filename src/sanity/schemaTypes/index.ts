import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { aboutType } from "./aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, aboutType],
};
