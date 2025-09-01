"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    // TODO: Integrate with email service
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Let’s build something cool together.</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white shadow"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white shadow"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white shadow"
          rows={4}
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Send Message
        </button>
      </form>
      {sent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-green-500 font-semibold"
        >
          Message sent! I’ll get back to you soon.
        </motion.div>
      )}
      <div className="mt-8 flex justify-center gap-6">
        <a href="mailto:hello@avnsh.club" className="text-xl hover:scale-110 transition-transform">✉️</a>
        <a href="https://instagram.com/avnishkumarsinha" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110 transition-transform">📸</a>
        <a href="https://github.com/avnsh" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110 transition-transform">💻</a>
        <a href="https://linkedin.com/in/avnishkumarsinha" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110 transition-transform">🔗</a>
      </div>
    </section>
  );
}
