import { client } from "@/sanity/lib/client";
import { LATEST_PROJECTS_QUERY, MAIN_IMAGE_QUERY } from "@/sanity/lib/queries";
import ImageCarousel from "@/components/ImageCarousel";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/sanity/types";

async function getLatestProjects() {
  return await client.fetch(LATEST_PROJECTS_QUERY);
}

async function getMainImages() {
  return await client.fetch(MAIN_IMAGE_QUERY);
}

export default async function Home() {
  const projects = await getLatestProjects();
  const mainImages = await getMainImages();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <ImageCarousel images={mainImages} />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="mx-auto max-w-7xl px-4 relative z-20 text-white">
          <p className="text-2xl font-medium mb-8 max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            SunDance Colors offers complete residential and commercial
            interior/exterior color consultant services. Specialized in
            architectural color and texture consulting for home and business
            owners, serving the Grass Valley, Truckee areas. We help our clients
            create cohesive, integrated interior design concepts in a variety of
            styles and tastes.
          </p>
          <p className="text-2xl font-medium mb-8 max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            My deep interest in color and the possibility of enhancing the human
            experience through the beneficial use of color in design led me to
            study with and become the member of IACC - International Association
            of Color Consultants.
          </p>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="my-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project as Project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
