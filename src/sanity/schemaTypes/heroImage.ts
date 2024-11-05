import { defineField, defineType } from "sanity";
import { ImageIcon } from "lucide-react";

export const heroImageType = defineType({
  name: "heroImage",
  title: "Hero Image",
  type: "document",
  icon: ImageIcon,
  description: "Large banner images used in the hero section of pages",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description:
        "The main hero image that will be displayed prominently at the top of the page",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description:
            "Remember to use alt text for people to be able to read what is happening in the image if they are using a screen reader, it's also important for SEO",
        }),
      ],
    }),
  ],
  validation: (Rule) => Rule.required(),
});
