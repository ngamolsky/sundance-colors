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
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">Project Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of innovative projects and creative
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project._id} className="group">
                <ProjectCard project={project as Project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
