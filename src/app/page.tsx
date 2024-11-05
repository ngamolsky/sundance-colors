import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { LATEST_PROJECTS_QUERY, MAIN_IMAGE_QUERY } from "@/sanity/lib/queries";
import ImageCarousel from "@/components/ImageCarousel";

async function getLatestProjects() {
  return await client.fetch(LATEST_PROJECTS_QUERY);
}

async function getMainImages() {
  return await client.fetch(MAIN_IMAGE_QUERY);
}

export default async function Home() {
  const projects = await getLatestProjects();
  const mainImages = await getMainImages();
  console.log(mainImages);
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
