import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

const SocialLink = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-colors"
  >
    {children}
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient to increase text contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <GraduationCap className="h-4 w-4 text-teal-300" />
          <span className="text-sm text-slate-200">Personal Portfolio • Education in School</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="text-balance bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Bayu Yudha Bhakti
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-3xl text-pretty text-base text-slate-200 sm:text-lg"
        >
          Full‑stack developer passionate about building modern, interactive web experiences. Blending code and creativity with a strong foundation in school‑based learning and hands‑on projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <SocialLink href="mailto:bayu@example.com" label="Email Bayu">
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </SocialLink>
          <SocialLink href="https://github.com/" label="GitHub">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </SocialLink>
          <SocialLink href="https://linkedin.com/" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </SocialLink>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-5 py-2 text-teal-200 hover:bg-teal-400/20"
        >
          Learn more about me
        </motion.a>
      </div>
    </section>
  );
}
