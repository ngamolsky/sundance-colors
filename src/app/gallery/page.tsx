import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

async function getAllProjects() {
  return await client.fetch(ALL_PROJECTS_QUERY);
}

export default async function GalleryPage() {
  const projects = await getAllProjects();

  return (
    <main>
      <section className="my-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-12">Project Gallery</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
