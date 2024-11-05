import { client } from "@/sanity/lib/client";
import { LATEST_PROJECTS_QUERY, MAIN_IMAGE_QUERY } from "@/sanity/lib/queries";
import ImageCarousel from "@/components/ImageCarousel";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/sanity/types";
import Link from "next/link";

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <ImageCarousel images={mainImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <div className="mx-auto max-w-7xl px-4 relative z-20 text-white py-16">
          <h1 className="text-5xl font-bold mb-8 max-w-3xl">
            Creating Harmonious Spaces Through Color
          </h1>
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              SunDance Colors offers complete residential and commercial
              interior/exterior color consultant services. Specialized in
              architectural color and texture consulting for home and business
              owners, serving the Grass Valley, Truckee areas.
            </p>
            <p className="text-xl leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              My deep interest in color and the possibility of enhancing the
              human experience through the beneficial use of color in design led
              me to study with and become the member of IACC - International
              Association of Color Consultants.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-black px-12 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-24 px-4 ">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our recent color consulting projects and see how we
              transform spaces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project as Project} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Color Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
