import type { Metadata } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";

function Section({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-t border-line py-14 scroll-mt-16">
      <div className="max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6 max-w-3xl">
          <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl">{title}</h2>
          {meta && <p className="text-xs uppercase tracking-wider text-accent">{meta}</p>}
        </div>
        {children && (
          <div className="max-w-3xl text-[15px] leading-relaxed text-foreground/85 space-y-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Myra: Inner Sanctuary — Thesis | Amal Khan",
  description:
    "Myra: Inner Sanctuary — a textile installation transforming imagination and self-dialogue into a physical safe space, shaped like an open oyster shell.",
};

const galleryImages = [
  { src: "/images/thesis/01-cover-shell-texture.jpg", alt: "Close detail of the laser-cut, iridescent oyster-shell exterior" },
  { src: "/images/thesis/02-secondary-research-oysters.jpg", alt: "Secondary research board of macro oyster and pearl photography" },
  { src: "/images/thesis/03-primary-photography.jpg", alt: "Primary photography board of soft domestic interiors — beds, curtains, mirrors" },
  { src: "/images/thesis/04-secondary-photography-oysters.jpg", alt: "Secondary photography board of oyster shells and pearls" },
  { src: "/images/thesis/05-ink-drawings-a.jpg", alt: "Ink and watercolour studies of oyster and shell forms" },
  { src: "/images/thesis/06-ink-drawings-b.jpg", alt: "Further ink and watercolour studies of oyster and pearl forms" },
  { src: "/images/thesis/07-prototype-render.jpg", alt: "3D digital prototype render of the installation's exterior shell form" },
  { src: "/images/thesis/09-execution-studio.jpg", alt: "Steel framework and iridescent shell forms during execution in the studio" },
  { src: "/images/thesis/11-boards-display.jpg", alt: "Research and fabrication boards displayed on the studio wall" },
  { src: "/images/thesis/12-installing-process.jpg", alt: "Hands installing laser-cut iridescent shell forms onto the structure" },
  { src: "/images/thesis/13-final-display-render.jpg", alt: "Full render of the final walk-through installation" },
  { src: "/images/thesis/14-final-wide.jpg", alt: "Wide photo of the finished installation, exterior and interior visible" },
  { src: "/images/thesis/15-final-detail-a.jpg", alt: "Close detail of the finished installation's interior and sensory floor" },
  { src: "/images/thesis/16-final-detail-b.jpg", alt: "Close detail of the layered iridescent shell exterior" },
];

export default function ThesisPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Major Studio IV Thesis — TFA-402"
        title="Myra: Inner Sanctuary"
        description="An installation transforming imagination as a coping mechanism into a physical safe space — inspired by the formation of a pearl within an oyster."
      />

      <div className="max-w-6xl px-6 pb-14">
        <a
          href="/documents/amal-khan-thesis-presentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs uppercase tracking-wider border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          View full presentation (PDF)
        </a>
      </div>

      <section className="border-t border-line py-14 scroll-mt-16">
        <div className="max-w-6xl px-6 grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
          <div>
            <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl mb-6">
              Artist Statement
            </h2>
            <div className="text-[15px] leading-relaxed text-foreground/85 space-y-4">
              <p>
                My work explores imagination as a personal coping mechanism and the quiet
                strength found within self-dialogue. Growing up I turned inward during moments of
                loneliness. Over time I began speaking to a calmer, more grounded version of
                myself called Myra — she is not separate from me but a reflection of the part of
                me that remains positive and hopeful in difficult times.
              </p>
              <p>
                This installation transforms that inner experience into a physical safe space I
                have built over the years. Inspired by the formation of a pearl within an oyster,
                the work represents how emotional pressure can slowly become protection. The
                exterior of the installation is covered with laser-cut oyster shell forms,
                creating a protective outer surface. Inside, the space becomes softer and more
                personal through draped fabrics, smocking techniques, and sensory elements.
              </p>
              <p>
                The installation invites viewers to enter a space where loneliness transforms
                into comfort — a reminder that sometimes the safest refuge is the one we build
                within ourselves.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/[0.03]">
            <Image
              src="/images/thesis/artist-statement-interior.jpg"
              alt="Interior view of the finished installation, looking up into the iridescent oyster-shell canopy with a lit sensory floor below"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section title="Concept Development">
        <p>
          The work began as a personal reflection on childhood loneliness and the imaginary
          worlds and games used as an emotional escape, developed through research into
          imagination as a coping mechanism, self-dialogue, and psychology — narrative identity
          and creativity. Mind-mapping traced this into the symbolism of the oyster and pearl:
          emotional pressure covered by protective layers, eventually forming something
          beautiful, mirrored by a dual-self concept — the oyster shell as exterior, loneliness,
          and healing; the inner self, Myra, as comfort and pearl.
        </p>
      </Section>

      <Section title="Research">
        <p>
          Artist references included Louise Bourgeois, Frida Kahlo, Do Ho Suh, and Yayoi Kusama —
          identity, repetition, and personal space. Primary research combined personal
          photography of soft domestic interiors (beds, curtains, mirrors, condensation on glass)
          with primary and secondary research boards built around oyster and shell imagery, plus
          hand-drawn studies of oyster and shell forms in ink and watercolour.
        </p>
      </Section>

      <Section title="Materials & Fabrication">
        <p>
          Off-loom techniques, laser-cut oyster-shell forms on iridescent leather for the
          exterior &ldquo;shell,&rdquo; and draped and smocked textiles for the interior, with
          pearls, shells, and crushed glass worked into a sensory floor. A steel framework was
          built and covered with the layered laser-cut leather shell forms; the interior combines
          draped smocked textiles, laser-cut panels, embedded lighting, sound, and the sensory
          floor.
        </p>
      </Section>

      <Section title="Colour Palette">
        <p>
          Soft pearlescent neutrals — white, cream, taupe, blush pink, and iridescent
          blue-green — drawn directly from oyster shell and pearl reference photography.
        </p>
      </Section>

      <Section title="Final Installation">
        <p>
          A walk-through, immersive structure roughly 9 feet high and 10 feet deep, shaped like
          an open oyster shell you can step inside.
        </p>
        <p className="italic text-foreground/70">
          &ldquo;The idea is to give viewers either a softer look into the world of moving from
          the normal world to something more personal and contemplative. The fabrics are
          shimmering and flowing, giving the elements an approach that is entirely organic and
          majestic. The textile manipulation captures the reflective properties of the
          materials&hellip; reflecting light throughout the installation, creating subtle changes
          in colours and movements that add to the wonder and stillness. The aim of the display
          is to generate a sense of comfort, contemplation, and emotional connection&hellip;
          Myra Inner Sanctuary is a combination of textile manipulation, spatial design and
          sensory elements, which all together bring a quieter and calmer world order that people
          find themselves entering and mentally reconnecting with the spaces of comfort and
          refuge that they carry within themselves.&rdquo;
        </p>
      </Section>

      <section className="border-t border-line py-14 scroll-mt-16">
        <div className="max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6 max-w-3xl">
            <h2 className="font-serif uppercase tracking-wide text-2xl md:text-3xl">Gallery</h2>
            <p className="text-xs uppercase tracking-wider text-accent">Research to final installation</p>
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>

      <Section title="Acknowledgement">
        <p>
          Thank you to my course instructors — Kiran Khan, Aimen Gillani, and Fehreen Mujahid —
          for their guidance throughout this work.
        </p>
      </Section>
    </div>
  );
}
