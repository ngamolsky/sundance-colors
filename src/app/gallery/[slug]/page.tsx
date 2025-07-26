import { client } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY, ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Revalidate every 60 seconds (1 minute)
export const revalidate = 60;

type Params = Promise<{ slug: string }>;

// Generate static params for all projects at build time
export async function generateStaticParams() {
  const projects = await client.fetch(ALL_PROJECTS_QUERY);
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }));
}

async function getProjectBySlug(slug: string) {
  return await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <section className="my-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

          {project.mainImage && (
            <div className="relative aspect-video mb-12">
              <Image
                src={urlFor(project.mainImage).url()}
                alt={project.mainImage.alt || project.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}

          {project.description && (
            <div className="prose max-w-none mb-12">
              <PortableText value={project.description} />
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3]">
                    <Image
                      src={urlFor(image).url()}
                      alt={
                        image.alt ||
                        `${project.title} gallery image ${index + 1}`
                      }
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.completionDate && (
            <div className="mt-8 text-muted-foreground">
              Completed: {new Date(project.completionDate).toLocaleDateString()}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
