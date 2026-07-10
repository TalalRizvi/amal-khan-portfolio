import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About | Amal Khan",
  description:
    "About Amal Khan — textile designer, Beaconhouse National University, 2022–2026.",
};

const workshops = [
  "Macramé — Fehreen Mujahid",
  "Phulkari — Rafia Shafiq",
  "Everywhere Unseen — Elaine Igoe",
  "5-Day Natural Dyeing — Tariq Habib Mirza",
  "Textile Archives — Zeb Bilal",
  "Kinetics — Ahmed Hasan Gilani",
  "Trinjan x Torr Jorr — Zeb Bilal",
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About" title="Amal Khan" />

      <div className="max-w-5xl px-6 pb-24">
        <div className="max-w-2xl text-[15px] leading-relaxed text-foreground/85 space-y-4 mb-20">
          <p>
            Hi, I&rsquo;m Amal, a textile designer who loves creating and experimenting with
            different materials, techniques, and processes.
          </p>
          <p>
            I enjoy turning ideas into something tangible and finding new ways to express them
            through textiles, installations, and surface design. I&rsquo;m always curious to
            explore, learn, and push my work further, which has allowed me to develop a
            practice that is both creative and detail-oriented.
          </p>
          <p>
            For me, design is about more than just making something look beautiful. It&rsquo;s
            about creating work that tells a story, sparks curiosity, and leaves a lasting
            impression.
          </p>
          <p>
            This website is a collection of my work and creative journey over the years,
            bringing together projects that reflect my interests, growth, and love for design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-xs uppercase tracking-wider text-accent mb-6">Experience</h2>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-serif text-lg">Sapphire</p>
                <p className="text-xs text-muted whitespace-nowrap">July 2025</p>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/85">
                Conducted research on seasonal themes and fashion trends. Designed motif repeat
                shirts, running pattern trousers, and floral layouts across shirts, sleeves,
                trousers, and dupattas. Created tie &amp; dye shirt designs with embroidery
                details and Kashmiri-inspired shawls. Gained hands-on experience in garment
                layouts, colorways, and print development, observing production on visits to the
                stitching unit and helping evaluate upcoming collections.
              </p>
              <Link
                href="/internship"
                className="inline-block text-xs uppercase tracking-wider text-accent hover:text-foreground transition-colors pt-1"
              >
                View internship presentation &rarr;
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-accent mb-6">Education</h2>
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <p className="font-serif text-lg">Beaconhouse National University</p>
              <p className="text-xs text-muted whitespace-nowrap">2022–2026</p>
            </div>
            <p className="text-[15px] text-foreground/85 mb-8">
              Department of Textile, Fibre, Fashion and Jewelry Studies
            </p>

            <h2 className="text-xs uppercase tracking-wider text-accent mb-6">Workshops</h2>
            <ul className="space-y-2 text-[15px] text-foreground/85">
              {workshops.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
