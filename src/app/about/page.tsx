import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

async function getAboutContent() {
  return await client.fetch(ABOUT_PAGE_QUERY);
}

export default async function AboutPage() {
  const aboutContent = await getAboutContent();

  return (
    <main>
      {/* Hero Section with Quote */}
      <section className="my-16 px-4">
        <div className="mx-auto max-w-7xl">
          <blockquote className="text-2xl italic text-center max-w-3xl mx-auto mb-16">
            &quot;May what I do flow from me like a river, no forcing and no
            holding back, the way it is with children.&quot;
            <footer className="text-lg mt-4 text-foreground/70">
              - Rainer Maria Rilke
            </footer>
          </blockquote>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="">
              <Image
                src={urlFor(aboutContent?.profileImage || {}).url()}
                alt={
                  aboutContent?.profileImage?.alt ||
                  "Rachel Noble - Color Consultant"
                }
                width={500}
                height={500}
                className="object-contain shadow-lg"
                priority
              />
            </div>
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed">
                  I am passionate about beauty and its creation. I consider my
                  color consulting a success only if you wake up each morning
                  and say &quot;I love these colors&quot;. I would like to see
                  through your eyes and invite you to see through mine.
                </p>

                <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                <p>
                  I was born in Germany to Israeli and German parents and moved
                  to Israel at the age of six. Being a part of two distinct
                  worlds, my childhood was influenced by Middle Eastern deserts,
                  ancient Christian, Moslem and Jewish sites, and by the
                  beautiful palaces of Vienna, Salzburg, Berlin and Venice.
                  After completing my BA in Art History at Berlin University, I
                  continued exploring cultures and traveled extensively in
                  India, Italy, France, Greece, the United States, Mexico, and
                  Egypt.
                </p>

                <p>
                  My attraction to creating beauty and uplifting the spirit drew
                  me to open a floral design studio in the Sierra Nevada
                  foothills in 1992. It served private clients at residences,
                  offices and galleries, focusing on coordination of large
                  events, galas and formal dinners.
                </p>

                <p>
                  In 1997, I was invited to stay at the apartment of Interior
                  designer Giorgio Pes near Pizza Navona in Rome and spent a
                  year studying classical and baroque architecture and interiors
                  in Rome, which broadened my scope from that of floral
                  arrangements in interiors to that of color harmonies in all
                  architectural spaces, interior and exterior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="my-16 px-4 bg-accent/5">
        <div className="mx-auto max-w-7xl py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">My Mission</h2>
            <p className="text-lg">
              My mission is to bring beauty and harmony into people&apos;s life
              by increasing awareness and appreciation of color in one&apos;s
              environment. I am currently writing a book on exterior color
              themes inspired by the harmonies of the seasonal colors in the
              Sierra Nevada Foothills, where I live.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="my-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="prose prose-lg max-w-none">
            <blockquote className="text-2xl italic text-center max-w-3xl mx-auto mb-16">
              &quot;Let the beauty we love be what we do&quot;
              <footer className="text-base mt-2 text-foreground/70">
                - Jalaluddin Rumi
              </footer>
            </blockquote>
            <h2 className="text-3xl font-bold mb-8">Professional Background</h2>
            <p>
              My deep interest in color and the possibility of enhancing the
              human experience through the beneficial use of color in design led
              me to study with and become the member of IACC - International
              Association of Color Consultants. IACC is an international
              organization founded in Europe in 1957 by architects, scientist
              and psychologists dedicated to the study and practice of
              architectural color and how it influences human psychology and
              physiology.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
