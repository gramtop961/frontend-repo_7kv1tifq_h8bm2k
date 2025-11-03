import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const email = 'youremail@example.com';
  return (
    <section id="contact" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let’s work together</h2>
          <p className="mt-3 text-slate-300">
            Interested in collaborating or have a role in mind? I’m open to new opportunities and exciting problems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-sky-300" />
              <div>
                <div className="text-sm text-slate-300">Email</div>
                <a href={`mailto:${email}`} className="text-base font-medium text-white hover:underline">
                  {email}
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-sky-300" />
              <div>
                <div className="text-sm text-slate-300">Location</div>
                <div className="text-base font-medium text-white">Remote / Worldwide</div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            className="md:col-span-2 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className="h-11 rounded-md border border-white/10 bg-white/10 px-3 text-white placeholder:text-slate-300/70 focus:border-sky-400 focus:outline-none" />
              <input type="email" name="email" required placeholder="Email" className="h-11 rounded-md border border-white/10 bg-white/10 px-3 text-white placeholder:text-slate-300/70 focus:border-sky-400 focus:outline-none" />
            </div>
            <input name="subject" placeholder="Subject" className="h-11 rounded-md border border-white/10 bg-white/10 px-3 text-white placeholder:text-slate-300/70 focus:border-sky-400 focus:outline-none" />
            <textarea name="message" rows={5} placeholder="Your message" className="rounded-md border border-white/10 bg-white/10 p-3 text-white placeholder:text-slate-300/70 focus:border-sky-400 focus:outline-none" />
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-600">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <p className="mt-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} IT Engineer Portfolio. All rights reserved.</p>
      </div>
    </section>
  );
}
