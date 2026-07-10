import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work | Amal Khan",
  description:
    "Textile design coursework by Amal Khan — weave, print, garment construction, and mixed-media studio work from four years at BNU.",
};

export default function WorkPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Work"
        title="Studio Projects"
        description="Four years of textile design coursework — research-driven studio work across weave, print, dye, garment construction, and mixed media."
      />
      <div className="max-w-7xl px-6 pb-24">
        <a
          href="/documents/amal-khan-portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-12 text-xs uppercase tracking-wider border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          View full portfolio (PDF)
        </a>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
          {projects.map((p) => (
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
    </div>
  );
}
