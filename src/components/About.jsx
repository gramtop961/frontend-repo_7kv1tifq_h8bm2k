import { Code, Server, Cpu, Shield } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Software Engineering', desc: 'TypeScript, Python, React, Node.js' },
  { icon: Server, title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD' },
  { icon: Cpu, title: 'Systems', desc: 'Linux, Networking, Observability' },
  { icon: Shield, title: 'Security', desc: 'Best practices, IAM, Secrets, Policies' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-600">
            I’m an IT Engineer focused on building robust, scalable platforms. I bridge software and infrastructure to deliver high-quality, maintainable systems with a strong emphasis on reliability and automation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-sky-50 p-3 text-sky-600 ring-1 ring-inset ring-sky-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
