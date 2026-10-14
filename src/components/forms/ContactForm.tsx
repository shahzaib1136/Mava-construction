"use client";

import { useId, useState, type FormEvent } from "react";

const labelClass = "inline-block pb-3.75 leading-6";
const requiredMark = "after:pl-2 after:text-[red] after:content-['*']";
const fieldClass =
  "block min-h-11.75 w-full rounded-sm border border-[#69727d] bg-white px-4 py-1.5 leading-[22.4px] text-[#1f2124] outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand";

export function ContactForm() {
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

    // Frontend-only: no email/CRM backend is connected yet.
    // Wire this submit handler up to a Server Action or API route before going live.
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="leading-6 text-navy">Thanks for getting in touch. We&rsquo;ll reply as soon as possible.</p>
    );
  }

  return (
    // Field groups carry 5px side padding inside a -5px wrapper, as in the reference form.
    <form onSubmit={handleSubmit} className="-mx-1.25 flex flex-col gap-2.5 [&>*]:px-1.25">
      <div className="w-full md:w-4/5">
        <label htmlFor={`${formId}-name`} className={`${labelClass} ${requiredMark}`}>
          Name
        </label>
        <input id={`${formId}-name`} name="name" type="text" required placeholder="Name" className={fieldClass} />
      </div>
      <div className="w-full md:w-4/5">
        <label htmlFor={`${formId}-email`} className={`${labelClass} ${requiredMark}`}>
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          placeholder="Email"
          className={fieldClass}
        />
      </div>
      <div className="w-full md:w-4/5">
        <label htmlFor={`${formId}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder="Message"
          className={fieldClass}
        />
      </div>
      {error && <p className="leading-6 text-red-600">{error}</p>}
      <div>
        <button
          type="submit"
          className="w-[30%] min-w-max rounded-[3px] bg-brand px-6 py-3 text-[15px] leading-6 font-medium tracking-[0.2px] text-white outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Send
        </button>
      </div>
    </form>
  );
}
