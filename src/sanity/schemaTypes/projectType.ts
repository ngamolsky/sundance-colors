import { defineField, defineType } from "sanity";
import { Palette } from "lucide-react";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: Palette,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      description: "Name of the interior design project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly version of the project title",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "The primary image that represents this project",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Description of the image for accessibility and SEO",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Description of the image for accessibility and SEO",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed description of the project and its outcomes",
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
      description: "When was this project completed?",
    }),
  ],
});
