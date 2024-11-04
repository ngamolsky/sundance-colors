import { defineField, defineType } from "sanity";
import { User } from "lucide-react";

export const aboutType = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading for the about page",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Description of the profile image",
        }),
      ],
    }),
    defineField({
      name: "biography",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
      description: "Your professional biography and background",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "serviceName",
              title: "Service Name",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});
