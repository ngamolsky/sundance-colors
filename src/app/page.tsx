import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { defineQuery } from "next-sanity";

const LATEST_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(completionDate desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    description
  }
`);

async function getLatestProjects() {
  return await client.fetch(LATEST_PROJECTS_QUERY);
}

export default async function Home() {
  const projects = await getLatestProjects();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="mx-auto max-w-7xl px-4 relative z-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Transform Your Space
            <br />
            With Color
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Professional color consultation and interior design services to
            create harmonious, inspiring spaces that reflect your vision.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="my-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug?.current}`}
                className="group"
              >
                {project.mainImage && (
                  <div className="relative aspect-[4/3] mb-4">
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.mainImage?.alt || project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold group-hover:text-foreground/70 transition-colors">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
