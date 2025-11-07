import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-10 text-center text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <p>
          © {new Date().getFullYear()} Bayu Yudha Bhakti. Built with passion, learning, and modern web tech.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
