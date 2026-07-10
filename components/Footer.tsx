import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Amal Khan. Textile Design.</p>
        <div className="flex items-center gap-6">
          <Link href="/work" className="hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
          <a
            href="mailto:amal.popalzai@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
