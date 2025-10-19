"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mldpwvev", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        setErrorMessage(payload.error || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage(err.message || "Network error");
      setStatus("error");
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl ring-1 ring-white/10 dark:ring-white/10 bg-white dark:bg-white/5 p-8 shadow-sm">
          <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight mb-2">Contact Me</h1>
          <p className="text-sm text-gray-700 dark:text-white/80 mb-6">
            Have a question or want to collaborate? Send me a message and I&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="form-status">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-[#7c5cff] px-5 py-2.5 font-medium text-white shadow hover:scale-[1.02] transition focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d]"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>

            <div id="form-status" aria-live="polite" className="mt-3">
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400">Thanks — your message has been sent!</p>
              )}
              {status === "error" && <p className="text-sm text-red-600 dark:text-red-400">Error: {errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
