"use client";

import { useId, useState, type FormEvent } from "react";

export function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    if (!name || !email) {
      setError("Please fill in your name and email.");
      return;
    }

    // Frontend-only: no application backend is connected yet.
    // Wire this submit handler up to a Server Action or API route before going live.
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-[1.5rem] text-navy">
        Thanks for applying for {jobTitle}. We&rsquo;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      <div>
        <label htmlFor={`${formId}-name`} className="mb-1 block text-[1.4rem] text-navy">
          Name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          className="w-full border border-border px-4 py-2.5 text-[1.5rem] outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor={`${formId}-email`} className="mb-1 block text-[1.4rem] text-navy">
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          className="w-full border border-border px-4 py-2.5 text-[1.5rem] outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor={`${formId}-message`} className="mb-1 block text-[1.4rem] text-navy">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className="w-full border border-border px-4 py-2.5 text-[1.5rem] outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor={`${formId}-cv`} className="mb-1 block text-[1.4rem] text-navy">
          Upload CV
        </label>
        <input
          id={`${formId}-cv`}
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full border border-border px-4 py-2.5 text-[1.4rem] outline-none focus:border-brand"
        />
      </div>
      {error && <p className="text-[1.4rem] text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-fit bg-brand px-6 py-3 text-[1.5rem] text-white hover:bg-brand-hover transition-colors"
      >
        Send
      </button>
    </form>
  );
}
