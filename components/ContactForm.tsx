"use client";

import { useState } from "react";

const CONTACT_EMAIL = "amal.popalzai@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = () => {
    const subject = encodeURIComponent(reason ? `Portfolio inquiry — ${reason}` : "Portfolio inquiry");
    const bodyLines = [
      message,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      action={mailtoHref()}
      method="post"
      encType="text/plain"
      className="grid sm:grid-cols-2 gap-5 text-sm"
    >
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-accent">Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-line bg-transparent px-3 py-2 focus:outline-none focus:border-accent transition-colors"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-accent">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-line bg-transparent px-3 py-2 focus:outline-none focus:border-accent transition-colors"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-accent">Phone (optional)</span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-line bg-transparent px-3 py-2 focus:outline-none focus:border-accent transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-accent">What&rsquo;s this about</span>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Job opportunity, collaboration, commission..."
          className="border border-line bg-transparent px-3 py-2 focus:outline-none focus:border-accent transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-xs uppercase tracking-wider text-accent">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="border border-line bg-transparent px-3 py-2 focus:outline-none focus:border-accent transition-colors resize-none"
          required
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
