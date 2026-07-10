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
  { src: "/images/thesis/13-research-boards-display-wide.jpg", alt: "Wide view of the full research and fabrication boards display, alongside the prototype model" },
  { src: "/images/thesis/10-research-boards-display-a.jpg", alt: "Research boards display wall, oyster and shell studies alongside embroidery samples" },
  { src: "/images/thesis/01-self-talk-text-panel.jpg", alt: "Laser-cut and embroidered text panel of a personal self-dialogue poem on an iridescent surface" },
  { src: "/images/thesis/03-oyster-shell-text-detail.jpg", alt: "Cluster of oyster shells printed with fragments of inner-dialogue text" },
  { src: "/images/thesis/04-journal-text-detail.jpg", alt: "Handwritten cursive journal text in pink ink on an iridescent surface" },
  { src: "/images/thesis/12-shell-scale-texture-detail.jpg", alt: "Close detail of the laser-cut, iridescent oyster-shell exterior" },
  { src: "/images/thesis/05-smocked-interior-detail.jpg", alt: "Detail of the smocked interior textile in soft pink and grey tones" },
  { src: "/images/thesis/06-interior-fabric-mosaic-floor.jpg", alt: "Draped iridescent fabric meeting the mirrored mosaic wall above the lit sensory floor" },
  { src: "/images/thesis/11-exterior-interior-transition-b.jpg", alt: "Alternate view of the exterior-to-interior transition, shell scales into draped fabric" },
  { src: "/images/thesis/09-draped-fabric-mosaic-detail.jpg", alt: "Detail of draped fabric against the mirrored mosaic wall" },
  { src: "/images/thesis/07-sensory-floor-detail.jpg", alt: "Close detail of the sensory floor, pearls and crushed glass among oyster shells" },
];

export default function ThesisPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Major Studio IV Thesis — TFA-402"
        title="Myra: Inner Sanctuary"
        description="An installation transforming imagination as a coping mechanism into a physical safe space — inspired by the formation of a pearl within an oyster."
      />

      <div className="max-w-6xl px-6 pb-14 flex flex-wrap gap-4">
        <a
          href="/documents/amal-khan-thesis-presentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs uppercase tracking-wider border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          View full presentation (PDF)
        </a>
        <a
          href="/documents/amal-khan-thesis-book.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs uppercase tracking-wider border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          View full documentation (PDF)
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
              src="/images/thesis/02-interior-view.jpg"
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
          The concept evolved through an exploration of imagination as a personal safe haven.
          Beginning with research into childhood fantasy worlds, emotional refuge, and the
          transformative nature of imagination, the project developed into a large-scale
          immersive installation. The oyster became a central metaphor, symbolizing the ability
          to transform discomfort and vulnerability into growth and beauty. Through material
          experimentation, sketching, prototyping, and spatial development, the concept gradually
          took shape as a walk-in environment that invites viewers to experience a journey from a
          protective exterior into a soft and dreamlike interior.
        </p>
      </Section>

      <Section title="Research">
        <p>
          What began as a personal reflection gradually developed into a broader investigation
          into imagination, self-dialogue, and the ways people create emotional comfort during
          difficult moments. While exploring my own experience of speaking to a calmer version of
          myself called Myra, I became interested in understanding why the mind instinctively
          creates inner worlds when reality feels overwhelming. This curiosity led me towards
          research in psychology, psychoanalysis, narrative identity, and creativity. The
          articles explored throughout this research offered different perspectives on
          imagination not as simple fantasy, but as a meaningful psychological tool that helps
          people process emotions, construct identity, and find comfort in times of distress.
        </p>
      </Section>

      <Section title="Materials & Fabrication">
        <p>
          The installation is built on a rod iron structure, forming the framework of the piece.
          The exterior is covered with rexine fabric and layered with laser-cut oyster shell
          forms, inspired by the oyster&rsquo;s transformation of an irritant into a pearl. The
          interior is created using moonlight chiffon manipulated through smocking techniques to
          produce soft, immersive textures, alongside custom laser-cut leather and rexine
          fabrications developed as part of the project. The floor consists of a combination of
          pearl oyster shells and crystals, adding a reflective quality that enhances the
          dreamlike atmosphere of the space. Together, these materials create a contrast between
          the protective outer shell and the soft interior, reflecting the idea of imagination as
          a place of comfort, refuge, and transformation.
        </p>
      </Section>

      <Section title="Colour Palette">
        <p>
          The colour palette is inspired by the natural beauty of pearls and oyster shells,
          featuring shades of white and iridescent tones. These colours create a soft, luminous
          atmosphere that enhances the dreamlike quality of the installation and reinforces
          themes of imagination and refuge.
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
