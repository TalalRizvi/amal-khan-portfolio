export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.15em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif uppercase tracking-wide text-4xl md:text-5xl leading-tight mb-6">
        {title}
      </h1>
      {description && (
        <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
