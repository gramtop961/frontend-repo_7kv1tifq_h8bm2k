import Spline from '@splinetool/react-spline';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900/90" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 md:pt-36">
        <p className="mb-2 text-sm tracking-widest text-sky-300/90">HELLO, I AM</p>
        <h1 className="font-['Geist',Inter,ui-sans-serif] text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          A Modern IT Engineer
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Building Reliable Systems</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200/90 md:text-lg">
          I design, build, and scale resilient infrastructure and applications. From cloud-native services to automation and DevOps workflows, I bring ideas to production with speed and reliability.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-slate-600/60 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-slate-600/60 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
