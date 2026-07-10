import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectSection from "@/components/ProjectSection";

export const metadata: Metadata = {
  title: "Sapphire Internship | Amal Khan",
  description:
    "A four-week design internship at Sapphire — seasonal print research, motif repeats, garment layouts, tie & dye, and Kashmiri-inspired shawls.",
};

export default function InternshipPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Internship — July 2025"
        title="Sapphire"
        description="A four-week internship with one of Pakistan's leading fashion brands, working across seasonal print research, garment layouts, and production."
      />

      <ProjectSection
        title="About Sapphire"
        images={[
          {
            src: "/images/internship/01-sapphire-storefront.jpg",
            alt: "Exterior of a Sapphire retail store",
          },
        ]}
      >
        <p>
          Sapphire is one of Pakistan&rsquo;s most popular and trusted fashion brands, known for
          its high quality fabrics, trendy designs, and affordable prices. It offers a wide
          variety of products, including unstitched fabric, ready to wear collections,
          accessories, and even home textiles. What makes Sapphire stand out is how it blends
          traditional styles with modern trends, giving customers designs that are both stylish
          and practical.
        </p>
      </ProjectSection>

      <ProjectSection
        title="Week 1"
        meta="Research & production"
      >
        <p>
          In the first week, we started by understanding the seasonal themes and doing research
          on current trends, colors, and styles that matched Sapphire&rsquo;s design direction. I
          learned about rotary and running design patterns and how they are used to create
          continuous prints across fabrics. During this week, I designed shirts using the repeat
          motif technique, making sure the patterns were seamless and well balanced. We also
          visited the stitching unit to observe the production process in detail — from fabric
          cutting to sewing and finishing — which helped me understand how designs are translated
          from digital layouts into final garments. This week gave me a strong foundation in both
          the creative and production sides of the design process.
        </p>
      </ProjectSection>

      <ProjectSection
        title="Week 2"
        meta="Motif repeats & embroidery sketching"
        images={[
          { src: "/images/internship/week2-01-repeat-swatch-maroon-paisley.jpg", alt: "Repeat motif fabric swatch in maroon paisley" },
          { src: "/images/internship/week2-02-repeat-swatch-maroon-floral.jpg", alt: "Repeat motif fabric swatch in maroon floral" },
          { src: "/images/internship/week2-03-repeat-swatch-yellow-vine.jpg", alt: "Repeat motif fabric swatch, yellow vine pattern" },
          { src: "/images/internship/week2-04-repeat-swatch-pale-yellow-floral.jpg", alt: "Repeat motif fabric swatch in pale yellow floral" },
          { src: "/images/internship/week2-05-repeat-swatch-cream-floral.jpg", alt: "Repeat motif fabric swatch in cream floral" },
          { src: "/images/internship/week2-06-repeat-swatch-green-floral.jpg", alt: "Repeat motif fabric swatch in green floral" },
          { src: "/images/internship/week2-07-repeat-swatch-black.jpg", alt: "Repeat motif fabric swatch in black" },
          { src: "/images/internship/week2-08-repeat-swatch-sage.jpg", alt: "Repeat motif fabric swatch in sage" },
          { src: "/images/internship/week2-09-embroidery-tracing-a.jpg", alt: "Hand-traced embroidery pattern sketch on fabric" },
          { src: "/images/internship/week2-10-embroidery-tracing-b.jpg", alt: "Hand-traced embroidery pattern sketch on fabric" },
          { src: "/images/internship/week2-11-embroidery-tracing-c.jpg", alt: "Hand-traced embroidery pattern sketch on fabric" },
          { src: "/images/internship/week2-12-embroidery-tracing-d.jpg", alt: "Hand-traced embroidery pattern sketch on fabric" },
          { src: "/images/internship/week2-13-embroidery-tracing-e.jpg", alt: "Hand-traced embroidery pattern sketch on fabric" },
        ]}
      >
        <p>
          In the second week, the focus was on designing motif repeat shirts and running pattern
          trousers. I worked on creating shirt designs where motifs were repeated in a clean and
          consistent way, ensuring proper alignment and balance across the fabric. For the
          trousers, I used running patterns that flowed smoothly without breaks, making the
          overall look cohesive when paired with the shirts. This week helped me improve my
          understanding of scale, placement, and how different pattern styles can be combined to
          create a complete outfit. Along with that I was assigned to the sketching department to
          sketch embroidery patterns.
        </p>
      </ProjectSection>

      <ProjectSection
        title="Week 3"
        meta="Floral layouts & dupattas"
        images={[
          { src: "/images/internship/week3-01-shirt-design1-front.jpg", alt: "Floral shirt layout, Design 1, front panel" },
          { src: "/images/internship/week3-02-shirt-design1-sleeve.jpg", alt: "Floral shirt layout, Design 1, sleeve panel" },
          { src: "/images/internship/week3-03-shirt-design1-neckline.jpg", alt: "Floral shirt layout, Design 1, neckline panel" },
          { src: "/images/internship/week3-04-shirt-design2-front.jpg", alt: "Floral shirt layout, Design 2, front panel" },
          { src: "/images/internship/week3-05-shirt-design2-sleeve.jpg", alt: "Floral shirt layout, Design 2, sleeve panel" },
          { src: "/images/internship/week3-06-shirt-design2-neckline.jpg", alt: "Floral shirt layout, Design 2, neckline panel" },
          { src: "/images/internship/week3-07-shirt-design3-front.jpg", alt: "Floral shirt layout, Design 3, front panel" },
          { src: "/images/internship/week3-08-shirt-design3-sleeve.jpg", alt: "Floral shirt layout, Design 3, sleeve panel" },
          { src: "/images/internship/week3-09-shirt-design3-neckline.jpg", alt: "Floral shirt layout, Design 3, neckline panel" },
          { src: "/images/internship/week3-10-shirt-design4-front.jpg", alt: "Floral shirt layout, Design 4, front panel" },
          { src: "/images/internship/week3-11-shirt-design4-sleeve.jpg", alt: "Floral shirt layout, Design 4, sleeve panel" },
          { src: "/images/internship/week3-12-shirt-design4-neckline.jpg", alt: "Floral shirt layout, Design 4, neckline panel" },
          { src: "/images/internship/week3-13-shirt-design5-front.jpg", alt: "Floral shirt layout, Design 5, front panel" },
          { src: "/images/internship/week3-14-shirt-design5-sleeve.jpg", alt: "Floral shirt layout, Design 5, sleeve panel" },
          { src: "/images/internship/week3-15-shirt-design5-neckline.jpg", alt: "Floral shirt layout, Design 5, neckline panel" },
          { src: "/images/internship/week3-16-shirt-design6-front.jpg", alt: "Floral shirt layout, Design 6, front panel" },
          { src: "/images/internship/week3-17-shirt-design6-sleeve.jpg", alt: "Floral shirt layout, Design 6, sleeve panel" },
          { src: "/images/internship/week3-18-shirt-design6-neckline.jpg", alt: "Floral shirt layout, Design 6, neckline panel" },
          { src: "/images/internship/week3-19-dupatta-design1.jpg", alt: "Dupatta design with a scenic palace panel motif" },
          { src: "/images/internship/week3-20-dupatta-design2.jpg", alt: "Dupatta design in sage green" },
          { src: "/images/internship/week3-21-dupatta-shirt-layout-a.jpg", alt: "Dupatta design with shirt and sleeve layout" },
          { src: "/images/internship/week3-22-dupatta-shirt-layout-b.jpg", alt: "Dupatta design with shirt and sleeve layout, alternate panel" },
          { src: "/images/internship/week3-23-dupatta-shirt-layout-c.jpg", alt: "Dupatta design with shirt and sleeve layout, alternate panel" },
        ]}
      >
        <p>
          In the third week, I worked on shirt layouts that included the front, back, sleeves,
          and trousers, all designed around a floral theme. The aim was to create a harmonious
          outfit where every part of the garment complemented the others. Alongside the shirts, I
          also designed dupattas to complete the set, making sure the patterns and colors flowed
          well with the floral theme of the shirts. This week gave me a deeper understanding of
          how to create balanced, coordinated outfits that are visually appealing and market
          ready.
        </p>
      </ProjectSection>

      <ProjectSection
        title="Week 4"
        meta="Tie & dye and Kashmiri shawls"
        images={[
          {
            src: "/images/internship/14-tie-dye-embroidery-maroon.jpg",
            alt: "Maroon tie and dye shirt design with embroidery detailing",
          },
          {
            src: "/images/internship/15-tie-dye-indigo.jpg",
            alt: "Indigo tie and dye shirt design",
          },
          {
            src: "/images/internship/16-kashmiri-shawl-nature.jpg",
            alt: "Kashmiri-inspired shawl design with a nature motif",
          },
          {
            src: "/images/internship/17-kashmiri-shawl-ornate-red.jpg",
            alt: "Kashmiri-inspired shawl design with an ornate red paisley motif",
          },
        ]}
      >
        <p>
          In the fourth and final week, I designed tie &amp; dye shirts with embroidery detailing
          on the shirt, sleeves, and trousers. The combination of the tie &amp; dye effect with
          delicate embroidery added both texture and elegance to the designs, making them stand
          out. Alongside this, I worked on Kashmiri inspired shawls, incorporating traditional
          motifs and patterns that reflect the rich heritage of Kashmiri craftsmanship. This week
          was a perfect blend of modern textile techniques and cultural inspiration, wrapping up
          my internship with creative and detailed design work.
        </p>
      </ProjectSection>

      <ProjectSection title="Conclusion">
        <p>
          My 4 week internship at Sapphire was a very valuable experience where I learned both
          the creative and technical sides of the textile design process. From researching themes
          and designing prints to understanding garment layouts and visiting the stitching unit,
          every task added to my skills and confidence as a designer. I also had the opportunity
          to work on a variety of design styles — from motif repeats and running patterns to tie
          &amp; dye with embroidery detailing and Kashmiri shawls.
        </p>
        <p>
          This internship not only improved my design abilities but also gave me an insight into
          how a leading fashion brand operates, manages collections, and maintains quality. The
          guidance and feedback I received from my mentors, especially Sir Usman, played a big
          role in helping me learn and grow. Overall, this was a memorable and rewarding
          experience that I will carry forward into my professional journey.
        </p>
        <a
          href="/documents/sapphire-internship-presentation.pptx"
          download
          className="inline-block mt-4 text-xs uppercase tracking-wider border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Download full presentation (.pptx)
        </a>
      </ProjectSection>
    </div>
  );
}
