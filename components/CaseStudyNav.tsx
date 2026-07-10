import Link from "next/link";
import { Project } from "@/lib/projects";

export default function CaseStudyNav({
  prev,
  next,
}: {
  prev: Project;
  next: Project;
}) {
  return (
    <div className="border-t border-line mt-8">
      <div className="max-w-5xl px-6 grid grid-cols-2">
        <Link
          href={`/case-studies/${prev.slug}`}
          className="group py-8 pr-4 border-r border-line"
        >
          <p className="text-xs uppercase tracking-wider text-accent mb-2">&larr; Previous</p>
          <p className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors">
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/case-studies/${next.slug}`}
          className="group py-8 pl-4 text-right"
        >
          <p className="text-xs uppercase tracking-wider text-accent mb-2">Next &rarr;</p>
          <p className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors">
            {next.title}
          </p>
        </Link>
      </div>
    </div>
  );
}
