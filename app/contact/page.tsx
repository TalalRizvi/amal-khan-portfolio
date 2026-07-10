import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Amal Khan",
  description: "Get in touch with Amal Khan.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Connect"
        title="Get in touch"
        description="For opportunities, collaborations, or questions about any of the work on this site."
      />
      <div className="max-w-3xl px-6 pb-24">
        <ContactForm />

        <div className="mt-12 pt-8 border-t border-line">
          <p className="text-xs uppercase tracking-wider text-accent mb-3">Email</p>
          <a
            href="mailto:amal.popalzai@gmail.com"
            className="font-serif text-xl hover:text-accent transition-colors"
          >
            amal.popalzai@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
