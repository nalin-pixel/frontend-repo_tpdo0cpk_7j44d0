import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-200 backdrop-blur"
        >
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">
            BYB
          </a>

          <div className="hidden gap-6 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-400"
          >
            Hire me
          </a>
        </motion.nav>
      </div>
    </header>
  );
}
