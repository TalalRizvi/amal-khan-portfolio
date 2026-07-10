export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  hook: string;
  projectType: string;
  technique: string;
  semester: string;
  description: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "artist-assignment",
    title: "Artist Assignment",
    hook: "Three artists' worlds, combined into one original repeat.",
    projectType: "Studio Assignment",
    technique: "Design extraction, black & white repeat fabric design",
    semester: "Semester 1",
    description: [
      "Elements from three different artists' work were combined to create original designs. A dense research board fed a set of design-extraction studies, pulling motifs and marks out of the source imagery before resolving them into a family of black-and-white repeat fabric designs and their fabricated counterparts.",
    ],
    images: [
      { src: "/images/work/artist-assignment/01-research-board.jpg", alt: "Dense mixed-media research board combining imagery from three different artists" },
      { src: "/images/work/artist-assignment/02-bw-designs-a.jpg", alt: "Black and white repeat fabric design developed from the research board" },
      { src: "/images/work/artist-assignment/03-bw-designs-b.jpg", alt: "Second black and white repeat fabric design, mirrored motif" },
      { src: "/images/work/artist-assignment/04-coloured-fabrication.jpg", alt: "Coloured fabrication of the repeat design in blue and gold tones" },
      { src: "/images/work/artist-assignment/05-coloured-fabrication-b.jpg", alt: "Coloured fabrication of the repeat design in green and purple tones" },
    ],
  },
  {
    slug: "space-design",
    title: "Space Design",
    hook: "A campus waiting area, rebuilt in macramé and reclaimed jute.",
    projectType: "Studio Assignment",
    technique: "Macramé, charpai-style weaving, jute, bamboo framing",
    semester: "Semester 2",
    description: [
      "A functional space for the university, designed around a need identified on campus: a bus waiting area offering shade, comfort, and a moment to pause between classes.",
      "Macramé forms the backdrop for texture and calm, charpai-style weaving gives the bench structure and familiarity, and woven jute pillows soften the seat. A bamboo frame draped in burlap provides shade with a flowy, breathable feel — traditional craft brought into a functional, everyday setting.",
    ],
    images: [
      { src: "/images/work/space-design/08-installed-wide.jpg", alt: "Wide view of the completed bamboo-framed waiting area structure" },
      { src: "/images/work/space-design/01-waiting-area-sketch.jpg", alt: "Hand-drawn concept sketch for a shaded bus waiting area" },
      { src: "/images/work/space-design/02-final-display-render.jpg", alt: "Final waiting area structure with macramé backdrop and woven bench" },
      { src: "/images/work/space-design/03-installed-01.jpg", alt: "Completed waiting area installed on campus, macramé and jute detail" },
      { src: "/images/work/space-design/04-installed-02.jpg", alt: "Completed waiting area installed on campus, full structure" },
      { src: "/images/work/space-design/05-installed-detail-a.jpg", alt: "Detail of the macramé backdrop and woven bench with jute pillows" },
      { src: "/images/work/space-design/06-moodboard-materials.jpg", alt: "Moodboard of materials and reference imagery for the waiting area design" },
      { src: "/images/work/space-design/07-installed-detail-b.jpg", alt: "Detail of the installed macramé and burlap canopy from a different angle" },
    ],
  },
  {
    slug: "ikat-pillows",
    title: "Ikat Weaved Pillows",
    hook: "Traditional ikat, hand-painted and handwoven into a modern pillow.",
    projectType: "Studio Assignment",
    technique: "Ikat weaving, hand-painting",
    semester: "Semester 2",
    description: [
      "Hand-painted and handwoven pillows combining the traditional ikat technique with a modern design sensibility — the blurred, resist-dyed ikat pattern rendered in a contemporary plum and cream palette.",
    ],
    images: [
      { src: "/images/work/ikat-pillows/01-pillow-detail-a.jpg", alt: "Ikat-patterned pillow in plum and cream, close detail" },
      { src: "/images/work/ikat-pillows/02-pillow-detail-b.jpg", alt: "Pair of ikat-patterned pillows styled on a chair" },
    ],
  },
  {
    slug: "checkered-scarf",
    title: "Checkered Scarf",
    hook: "A timeless check, hand-painted and hand-woven.",
    projectType: "Studio Assignment",
    technique: "Hand-painting, hand-weaving",
    semester: "Semester 2",
    description: [
      "Hand-painted and hand-woven with love and care, featuring a timeless checkered pattern in forest green, red, and cream.",
    ],
    images: [
      { src: "/images/work/checkered-scarf/01-scarf.jpg", alt: "Hand-woven checkered scarf in forest green, red, and cream" },
    ],
  },
  {
    slug: "weaving-samples",
    title: "Weaving Samples",
    hook: "Eight-frame loom studies in traditional technique, modern eye.",
    projectType: "Studio Assignment",
    technique: "8-frame loom weaving",
    semester: "Semester 3",
    description: [
      "A set of handwoven textile samples crafted on an 8-frame loom, pairing traditional weaving technique with a modern colour and texture sensibility.",
    ],
    images: [
      { src: "/images/work/weaving-samples/01-sample-magenta-black.jpg", alt: "Handwoven textile sample in magenta and black" },
      { src: "/images/work/weaving-samples/02-sample-blue-gold.jpg", alt: "Handwoven striped textile samples in blue and gold" },
      { src: "/images/work/weaving-samples/03-sample-lavender-grey.jpg", alt: "Handwoven textile sample in lavender and grey" },
      { src: "/images/work/weaving-samples/04-sample-pink.jpg", alt: "Handwoven textile sample in pink" },
      { src: "/images/work/weaving-samples/05-sample-black-cream.jpg", alt: "Handwoven textile sample in black and cream" },
      { src: "/images/work/weaving-samples/06-sample-purple.jpg", alt: "Handwoven textile sample in purple" },
      { src: "/images/work/weaving-samples/07-sample-gold.jpg", alt: "Handwoven textile sample in gold" },
      { src: "/images/work/weaving-samples/08-sample-coral.jpg", alt: "Handwoven textile sample in coral" },
      { src: "/images/work/weaving-samples/09-sample-maroon-cream-newspaper.jpg", alt: "Handwoven textile sample in maroon and cream, woven with strips of newsprint" },
      { src: "/images/work/weaving-samples/10-sample-maroon-gold-stripe.jpg", alt: "Handwoven striped textile sample in maroon and gold" },
      { src: "/images/work/weaving-samples/11-sample-green-rust.jpg", alt: "Handwoven textile sample in green and rust" },
      { src: "/images/work/weaving-samples/12-sample-navy-gold-plaid.jpg", alt: "Handwoven plaid textile sample in navy and gold" },
      { src: "/images/work/weaving-samples/13-sample-maroon-ikat.jpg", alt: "Handwoven ikat-style textile sample in maroon and gold" },
      { src: "/images/work/weaving-samples/14-sample-brown-olive-stripe.jpg", alt: "Handwoven striped textile sample in brown and olive" },
    ],
  },
  {
    slug: "unconventional-weave",
    title: "Unconventional Weave",
    hook: "Plastic bags and wire, woven like they were never meant to be.",
    projectType: "Studio Assignment",
    technique: "Off-loom weaving with non-traditional materials",
    semester: "Semester 3",
    description: [
      "A pioneering textile artwork crafted from unexpected materials — plastic bags, wire, and fabric scraps — challenging traditional notions of weaving and materiality.",
    ],
    images: [
      { src: "/images/work/unconventional-weave/01-panel-a.jpg", alt: "Woven textile panel made from plastic bags, wire, and fabric scraps, grey tones with yellow tufting" },
      { src: "/images/work/unconventional-weave/02-panel-b.jpg", alt: "Second woven panel from unconventional materials, with pink and teal accents" },
    ],
  },
  {
    slug: "designing-nature-inspired",
    title: "Designing",
    hook: "Gothic arches and microorganisms, screen printed into a gown.",
    projectType: "Studio Assignment",
    technique: "Hand-sketched motifs, screen printing, coloured felt with embroidery",
    semester: "Semester 4",
    description: [
      "Hand-sketched flora and fauna motifs, screen printed onto fabric and developed into a garment. Inspiration boards referenced St. Patrick's Cathedral and microorganisms, resolved into eight sample repeats screen-printed on different fabrics, plus a coloured felt piece finished with embroidery.",
    ],
    images: [
      { src: "/images/work/designing-nature-inspired/04-final-garment.jpg", alt: "Screen-printed gown on a mannequin in front of the project's research and sample boards" },
      { src: "/images/work/designing-nature-inspired/01-motif-repeat.jpg", alt: "Hand-sketched floral motif developed into a mirrored repeat pattern" },
      { src: "/images/work/designing-nature-inspired/02-garment.jpg", alt: "Final garment in gold and pink brocade-look fabric with a stack of coloured fabric swatches" },
      { src: "/images/work/designing-nature-inspired/03-screen-printed-detail.jpg", alt: "Screen-printed floral repeat pattern on pink fabric, styled on a mannequin" },
      { src: "/images/work/designing-nature-inspired/05-coloured-felt.jpg", alt: "Coloured felt piece with hand embroidery in purple, red, and green" },
    ],
  },
  {
    slug: "design-manipulation",
    title: "Design & Manipulation",
    hook: "Eight fabric-manipulation studies, replicating a cathedral in cloth.",
    projectType: "Studio Assignment",
    technique: "Fabric manipulation — gathering, padding, appliqué",
    semester: "Semester 4",
    description: [
      "Research-driven fabric manipulation techniques replicating intricate patterns and structures into unique textiles. An inspiration board pairing St. Patrick's Cathedral with microorganism imagery was translated into a set of eight dimensional fabric-manipulation samples, each pairing a line-drawing study with its worked textile counterpart.",
    ],
    images: [
      { src: "/images/work/design-manipulation/01-inspiration-board.jpg", alt: "Inspiration board pairing St. Patrick's Cathedral architecture with microorganism imagery" },
      { src: "/images/work/design-manipulation/02-sample-3.jpg", alt: "Fabric manipulation sample 3, dimensional gathered fabric in dark purple" },
      { src: "/images/work/design-manipulation/03-sample-6.jpg", alt: "Fabric manipulation sample 6, appliqued fabric in mauve and pink with embroidery" },
      { src: "/images/work/design-manipulation/04-sample-8.jpg", alt: "Fabric manipulation sample 8, padded fabric in plum with pink stitched detail" },
      { src: "/images/work/design-manipulation/05-exhibition-display-a.jpg", alt: "Exhibition display of the fabric-manipulation samples and finished garment, mounted on a mirrored wall" },
      { src: "/images/work/design-manipulation/06-exhibition-display-b.jpg", alt: "Wide view of the exhibition display, samples and garment mounted alongside other studio work" },
      { src: "/images/work/design-manipulation/07-felt-skyline-detail.jpg", alt: "Detail of a felted textile sample with a cathedral skyline stitched in cream thread over dyed wool" },
      { src: "/images/work/design-manipulation/08-garment-bodice-detail.jpg", alt: "Close-up of the finished garment's printed bodice on a mannequin, with iridescent skirt below" },
    ],
  },
  {
    slug: "news-extraction",
    title: "News Extraction",
    hook: "A trending headline, quilted into a wall piece.",
    projectType: "Studio Assignment",
    technique: "Illustration, quilting, appliqué",
    semester: "Semester 3",
    description: [
      "For the news extraction assignment, a trending news topic was translated into a visual textile design — reimagined here as a Simpsons-style illustration of a political prediction, developed through a moodboard and painted study before being fully fabricated as a quilted, appliquéd wall piece.",
    ],
    images: [
      { src: "/images/work/news-extraction/01-artwork.jpg", alt: "Illustrated design referencing a trending news story, in a decorative tarot-inspired border" },
      { src: "/images/work/news-extraction/02-fabrication.jpg", alt: "Final quilted and appliqued textile piece based on the illustrated design" },
    ],
  },
  {
    slug: "memory-through-layers",
    title: "Memory Through Layers",
    hook: "Childhood photos and magazine cutouts, fabricated into fog.",
    projectType: "Studio Assignment",
    technique: "Photo collage, layered dyeing and stitching on fabric",
    semester: "Semester 3",
    description: [
      "Personal childhood photographs were layered with magazine cutouts to build compositions exploring memory. \"Fragments of Summer Past\" reconstructs a layered memory of a beach trip, blending moments from different times so the scene feels nostalgic yet surreal — a blue tint mirroring how memories feel distant yet deeply emotional. The composition was then translated into monotone, fabricated fabric layers.",
    ],
    images: [
      { src: "/images/work/memory-through-layers/04-fabricated-layer-a.jpg", alt: "Fabricated fabric layer in blue tones based on the beach memory composition" },
      { src: "/images/work/memory-through-layers/01-collage-a.jpg", alt: "Childhood photo collage of a child on a swing over a snowy mountain scene" },
      { src: "/images/work/memory-through-layers/02-collage-c.jpg", alt: "Childhood photo collage combining a swing, sea turtles, and family photographs" },
      { src: "/images/work/memory-through-layers/03-fragments-a.jpg", alt: "Fragments of Summer Past composition, a beach scene in blue-tinted layers" },
      { src: "/images/work/memory-through-layers/05-fabricated-layer-c.jpg", alt: "Fabricated fabric layer showing a palm tree silhouette in blue tones" },
    ],
  },
  {
    slug: "magazine-collage",
    title: "Magazine Collage",
    hook: "Cutouts from a stack of old magazines, unified into one visual.",
    projectType: "Studio Assignment",
    technique: "Paper collage",
    semester: "Semester 1",
    description: [
      "This assignment combines various magazine cutouts to form one unified visual — an ornate interior scene populated with birds, and an underwater world layered with coral and sea life.",
    ],
    images: [
      { src: "/images/work/magazine-collage/01-collage-a.jpg", alt: "Magazine cutout collage of an ornate interior filled with flying birds" },
      { src: "/images/work/magazine-collage/02-collage-b.jpg", alt: "Magazine cutout collage of an underwater cityscape with coral and sea life" },
    ],
  },
  {
    slug: "moodboards",
    title: "Moodboards",
    hook: "Retro futurism meets desert bohemia, board by board.",
    projectType: "Studio Assignment",
    technique: "Moodboarding, visual research",
    semester: "Semester 1–6",
    description: [
      "A series of moodboards documenting a creative journey, showcasing the diverse influences and ideas that shape the work — from a retro-futuristic, sci-fi-inspired board to a warm, earth-toned \"Sands of Bohemian\" board.",
    ],
    images: [
      { src: "/images/work/moodboards/01-retro-futuristic.jpg", alt: "Retro futuristic inspired moodboard with metallic fashion and sci-fi imagery" },
      { src: "/images/work/moodboards/02-sands-of-bohemian.jpg", alt: "Sands of Bohemian moodboard in warm earth tones with woven textures" },
    ],
  },
  {
    slug: "bodice-pattern-making",
    title: "Bodice & Pattern Making",
    hook: "A meticulously drafted bodice, built pattern piece by piece.",
    projectType: "Studio Assignment",
    technique: "Pattern drafting, bodice construction",
    semester: "Semester 5",
    description: [
      "A harmonious balance of technical skill and creative vision, resulting in a meticulously crafted bodice — drafted from measured pattern pieces and constructed on the dress form through successive fittings.",
    ],
    images: [
      { src: "/images/work/bodice-pattern-making/02-bodice-front.jpg", alt: "Fitted bodice on a dress form, front view" },
      { src: "/images/work/bodice-pattern-making/01-pattern-pieces.jpg", alt: "Drafted muslin pattern pieces for a fitted bodice" },
      { src: "/images/work/bodice-pattern-making/03-bodice-side.jpg", alt: "Fitted bodice on a dress form, side profile" },
    ],
  },
  {
    slug: "deconstructing-reconstructing",
    title: "Deconstructing & Reconstructing",
    hook: "Thrifted denim and old sportswear, rebuilt into new garments.",
    projectType: "Studio Assignment",
    technique: "Upcycling, garment deconstruction and reconstruction",
    semester: "Semester 5",
    description: [
      "Upcycling discarded thrifted textiles into unique, functional garments through creative transformation. A corset-style bodice and skirt were built from layered, ruffled denim panels, with a moodboard referencing Giambattista Valli's Spring 2025 collection. A second series reworked thrifted sportswear tees — Nike, Puma, and panther-branded pieces — into color-blocked, reconstructed silhouettes.",
    ],
    images: [
      { src: "/images/work/deconstructing-reconstructing/02-denim-front.jpg", alt: "Reconstructed denim corset-style bodice and skirt on a dress form, front view" },
      { src: "/images/work/deconstructing-reconstructing/01-moodboard-garment-board.jpg", alt: "Moodboard referencing Giambattista Valli's Spring 2025 collection alongside runway garment references" },
      { src: "/images/work/deconstructing-reconstructing/03-denim-side.jpg", alt: "Reconstructed denim garment on a dress form, side view" },
      { src: "/images/work/deconstructing-reconstructing/04-upcycled-tee.jpg", alt: "Upcycled sportswear tee reconstructed into a color-blocked garment on a mannequin" },
    ],
  },
  {
    slug: "seashore-serenade",
    title: "Garment Making — Seashore Serenade",
    hook: "The ocean's gentle waves, crafted into a flowing gown.",
    projectType: "Studio Assignment",
    technique: "Draping, garment construction",
    semester: "Semester 6",
    description: [
      "Seashore Serenade: a dress inspired by the ocean's gentle waves and soothing melodies, crafted with delicate care. Built from a moodboard of ocean and mermaid imagery, the finished gown drapes navy and sage-green fabric with shell and rosette details at the bodice.",
    ],
    images: [
      { src: "/images/work/seashore-serenade/01-moodboard.jpg", alt: "Ocean and mermaid-inspired moodboard for the Seashore Serenade garment" },
      { src: "/images/work/seashore-serenade/02-dress-front.jpg", alt: "Seashore Serenade gown on a dress form, with shell and fabric-rosette bodice detail" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
