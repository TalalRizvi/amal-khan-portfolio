import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { getProject } from "@/lib/projects";

const featuredSlugs = ["artist-assignment", "space-design", "weaving-samples"];

const skillGroups = [
  {
    title: "Textile Techniques",
    items: ["Weaving", "Knitting", "Dyeing", "Printing", "Felting"],
  },
  {
    title: "Design Skills",
    items: ["Sketching", "Mood boards", "Colour forecasting", "Motif sketching"],
  },
  {
    title: "Digital Techniques",
    items: ["Illustrator", "Photoshop", "Figma", "Procreate"],
  },
  {
    title: "Fabric Knowledge",
    items: ["Sourcing", "Quality assessment", "Sustainability practices"],
  },
];

export default function Home() {
  const featured = featuredSlugs.map((s) => getProject(s)!);

  return (
    <div>
      <HeroSlider />

      <section className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-accent mb-5">
          Hello!
        </p>
        <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
          I&rsquo;m Amal Khan, a textile designer working across weave, knit, dye, and print
        </h1>
        <p className="text-muted leading-relaxed mb-10">
          Through four years of coursework at Beaconhouse National University, I&rsquo;ve developed
          my research, concept development, and problem-solving skills across studio projects,
          culminating in Myra: Inner Sanctuary — a full-scale immersive installation built around
          imagination, self-dialogue, and the quiet strength found in the spaces we build within
          ourselves.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <Link
            href="/thesis"
            className="border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            View the thesis
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl">Selected work</h2>
            <Link href="/work" className="text-xs uppercase tracking-wider text-accent hover:text-foreground transition-colors">
              View all work &rarr;
            </Link>
          </div>

          <div className="mb-12">
            <Link href="/thesis" className="group block">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/[0.03]">
                <Image
                  src="/images/thesis/02-interior-view.jpg"
                  alt="Myra: Inner Sanctuary, interior view of the finished walk-through installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-2xl md:text-3xl">Myra: Inner Sanctuary</h3>
                <span className="text-xs uppercase tracking-wider text-accent whitespace-nowrap">
                  Thesis &rarr;
                </span>
              </div>
              <p className="text-sm text-muted mt-1 max-w-xl">
                Major Studio IV thesis — an immersive, walk-through installation shaped like an
                open oyster shell, transforming loneliness into a space of comfort.
              </p>
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {featured.map((p) => (
              <ProjectCard
                key={p.slug}
                href={`/case-studies/${p.slug}`}
                title={p.title}
                hook={p.hook}
                image={p.images[0].src}
                imageAlt={p.images[0].alt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl mb-10">Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl mb-3">Get in touch</h2>
          <p className="text-muted mb-10 max-w-xl">
            For opportunities, collaborations, or questions about any of the work above — reach
            out directly or use the form below.
          </p>
          <ContactForm />
          <div className="mt-10 pt-8 border-t border-line flex flex-wrap items-baseline gap-x-10 gap-y-2 text-sm">
            <a
              href="mailto:amal.popalzai@gmail.com"
              className="font-serif text-xl hover:text-accent transition-colors"
            >
              amal.popalzai@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
