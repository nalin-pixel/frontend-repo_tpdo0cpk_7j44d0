import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, Layout } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Learning Portal',
    description:
      'A full‑stack app that helps students track progress, quizzes, and goals with real‑time feedback.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#',
    icon: <Layout className="h-5 w-5 text-teal-300" />,
  },
  {
    title: 'API Starter Kit',
    description:
      'Production‑ready FastAPI template with auth, testing, and deployment scripts.',
    tags: ['FastAPI', 'JWT', 'Docker'],
    link: '#',
    icon: <Server className="h-5 w-5 text-teal-300" />,
  },
  {
    title: 'Portfolio Animations',
    description:
      'A set of smooth, accessible motion components built with Framer Motion.',
    tags: ['Framer Motion', 'Accessibility'],
    link: '#',
    icon: <Layout className="h-5 w-5 text-teal-300" />,
  },
];

const Card = ({ p, i }) => (
  <motion.a
    href={p.link}
    target={p.link.startsWith('http') ? '_blank' : undefined}
    rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 hover:border-teal-500/40"
  >
    <div className="flex items-center gap-3">
      {p.icon}
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <ExternalLink className="ml-auto h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
    <p className="mt-3 text-sm text-slate-300">{p.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured projects</h2>
          <p className="mt-2 text-slate-300">A selection of work that blends performance, usability, and polish.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
