import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const email = form.get('email');
      const message = form.get('message');

      // Simple client-side demo; can be wired to backend later
      await new Promise((r) => setTimeout(r, 800));
      setStatus(`Thanks ${name}! I will get back to you at ${email}.`);
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
            <Mail className="h-4 w-4 text-teal-300" />
            <span>Contact</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Let's work together</h2>
          <p className="mt-2 text-slate-300">Have a question or want to collaborate? Send a message below.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-teal-400/50"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="Your email"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-teal-400/50"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-teal-400/50"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-medium text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-0"
          >
            <Send className="h-4 w-4" />
            Send message
          </button>
          {status && <p className="text-sm text-teal-200">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
