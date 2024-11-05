import { ProjectCard } from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/sanity/types";

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
              <ProjectCard key={project._id} project={project as Project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
