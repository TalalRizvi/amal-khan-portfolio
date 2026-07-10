import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import CaseStudyNav from "@/components/CaseStudyNav";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Amal Khan`,
    description: project.hook,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div>
      <div className="max-w-6xl px-6 pt-16 pb-24 md:pt-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="md:sticky md:top-24">
          <p className="text-xs uppercase tracking-[0.15em] text-accent mb-4">Work</p>
          <h1 className="font-serif uppercase tracking-wide text-4xl md:text-5xl leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-10">
            {project.hook}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-sm border-y border-line py-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent mb-1">Project Type</p>
              <p>{project.projectType}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent mb-1">Technique</p>
              <p>{project.technique}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent mb-1">Semester</p>
              <p>{project.semester}</p>
            </div>
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/85">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <div>
          <Gallery images={project.images} defaultOpen />
        </div>
      </div>

      <CaseStudyNav prev={prev} next={next} />
    </div>
  );
}
