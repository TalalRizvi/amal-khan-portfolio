import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  href,
  title,
  hook,
  image,
  imageAlt,
  size = "md",
}: {
  href: string;
  title: string;
  hook: string;
  image: string;
  imageAlt: string;
  size?: "md" | "lg";
}) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative w-full overflow-hidden bg-black/[0.03] ${
          size === "lg" ? "aspect-[16/10]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={size === "lg" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-xl md:text-2xl">{title}</h3>
        <span className="text-xs uppercase tracking-wider text-accent whitespace-nowrap">
          View &rarr;
        </span>
      </div>
      <p className="text-sm text-muted mt-1">{hook}</p>
    </Link>
  );
}
