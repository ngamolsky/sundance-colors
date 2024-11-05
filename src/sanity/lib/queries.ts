import { defineQuery } from "next-sanity";

export const LATEST_PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(completionDate desc)[0...3] {
      _id,
      title,
      slug,
      mainImage,
      description
    }
  `);

export const ABOUT_PAGE_QUERY = defineQuery(`
    *[_type == "about"][0] {
      _id,
      title,
      profileImage,
      biography,
      services[] {
        serviceName,
        description
      }
    }
  `);

export const MAIN_IMAGE_QUERY = defineQuery(`
    *[_type == "project"] {
      _id,
      mainImage
    }
  `);

export const ALL_PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(completionDate desc) {
      _id,
      title,
      slug,
      mainImage,
      description
    }
  `);
