import { ReactNode } from "react";
import Gallery, { GalleryImage } from "./Gallery";

export default function ProjectSection({
  title,
  meta,
  children,
  images,
  id,
}: {
  title: string;
  meta?: string;
  children?: ReactNode;
  images?: GalleryImage[];
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-line first:border-t-0 py-14 scroll-mt-16">
      <div className="max-w-3xl px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
          <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl">{title}</h2>
          {meta && (
            <p className="text-xs uppercase tracking-wider text-accent">
              {meta}
            </p>
          )}
        </div>
        {children && (
          <div className="text-[15px] leading-relaxed text-foreground/85 space-y-4 mb-8">
            {children}
          </div>
        )}
      </div>
      {images && images.length > 0 && (
        <div className="max-w-5xl px-6">
          <Gallery images={images} />
        </div>
      )}
    </section>
  );
}
