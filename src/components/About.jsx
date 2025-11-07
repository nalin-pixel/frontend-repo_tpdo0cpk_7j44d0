import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Code2, Sparkles } from 'lucide-react';

const Stat = ({ value, label }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="mt-1 text-sm text-slate-300">{label}</div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
            <Sparkles className="h-4 w-4 text-teal-300" />
            <span>About</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Learning by building</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            I'm a student and full‑stack developer focused on crafting intuitive interfaces and robust APIs. I love
            learning new technologies and using them to solve real problems.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Stat value="+3" label="Years coding" />
          <Stat value="+15" label="Projects completed" />
          <Stat value="Ongoing" label="School education" />
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
          >
            <div className="flex items-center gap-3">
              <BookOpenCheck className="h-6 w-6 text-teal-300" />
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Focused on computer science fundamentals</li>
              <li>Active in coding clubs and hackathons</li>
              <li>Exploring AI, cloud, and DevOps basics</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
          >
            <div className="flex items-center gap-3">
              <Code2 className="h-6 w-6 text-teal-300" />
              <h3 className="text-lg font-semibold text-white">Tech stack</h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-slate-300 sm:grid-cols-3">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
