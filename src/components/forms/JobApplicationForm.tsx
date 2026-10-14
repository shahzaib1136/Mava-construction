"use client";

import { useId, useState, type FormEvent } from "react";

const labelClass = "block leading-6";
const fieldClass =
  "block w-full rounded-[3px] border border-[#69727d] bg-white text-[15px] leading-5.25 text-[#1f2124] outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand";

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
      <p className="leading-6 text-navy">
        Thanks for applying for {jobTitle}. We&rsquo;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label={`Apply for ${jobTitle}`} className="flex flex-col gap-5">
      <div>
        <label htmlFor={`${formId}-name`} className={labelClass}>
          Name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          placeholder="Name"
          className={`${fieldClass} px-5 py-2.5`}
        />
      </div>
      <div>
        <label htmlFor={`${formId}-email`} className={labelClass}>
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          placeholder="Email"
          className={`${fieldClass} px-5 py-2.5`}
        />
      </div>
      <div>
        <label htmlFor={`${formId}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder="Message"
          className={`${fieldClass} px-3.5 py-1.25`}
        />
      </div>
      <div>
        <label htmlFor={`${formId}-cv`} className={labelClass}>
          Upload CV
        </label>
        <input
          id={`${formId}-cv`}
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="block h-6 w-full leading-[18.4px] outline-none focus-visible:outline-2 focus-visible:outline-brand"
        />
      </div>
      {error && <p className="leading-6 text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-[3px] bg-brand px-6 py-3 text-[15px] leading-6 font-medium tracking-[0.2px] text-white outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Send
      </button>
    </form>
  );
}
