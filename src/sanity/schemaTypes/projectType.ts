import { defineField, defineType } from "sanity";
import { ImageIcon } from "lucide-react";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ImageIcon,
  description:
    "A collection of photos and details for color consultation projects",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The name of the project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL-friendly version of the project title",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      description: "The date this project was published",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "The primary image representing this project",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Description of the image for screen readers and SEO",
        },
      ],
    }),
    defineField({
      name: "projectImages",
      title: "Project Images",
      type: "array",
      description:
        "A gallery of images showing different aspects of the project",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              description:
                "Description of the image for screen readers and SEO",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
              description: "A brief caption explaining this particular image",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Detailed description of the color consultation project",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      description: "Name of the client for this project",
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      description: "The type of color consultation project",
      options: {
        list: [
          { title: "Interior", value: "interior" },
          { title: "Exterior", value: "exterior" },
          { title: "Commercial", value: "commercial" },
          { title: "Residential", value: "residential" },
        ],
      },
    }),
  ],
});
