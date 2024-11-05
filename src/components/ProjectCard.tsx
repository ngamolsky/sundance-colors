import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/sanity/types";

export function ProjectCard({ project }: { project: Project }) {
  const { title, slug, mainImage } = project;
  return (
    <Link href={`/gallery/${slug?.current}`} className="group relative block">
      {mainImage && (
        <div className="relative aspect-[4/3] hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={urlFor(mainImage).url()}
            alt={mainImage?.alt || title}
            fill
            className="object-cover rounded-lg "
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-end p-4 ">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          </div>
        </div>
      )}
    </Link>
  );
}
