import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cloud-Native Microservice Platform',
    description:
      'Designed and deployed a microservices architecture on Kubernetes with GitOps, autoscaling, and observability baked in.',
    tags: ['Kubernetes', 'Docker', 'ArgoCD', 'Prometheus'],
    link: '#',
  },
  {
    title: 'Real-time Monitoring Dashboard',
    description:
      'Built a real-time telemetry pipeline and dashboard to visualize infrastructure health and application KPIs.',
    tags: ['Grafana', 'Kafka', 'Timeseries DB', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Secure CI/CD Templates',
    description:
      'Created reusable pipelines with automated testing, SAST, and policy enforcement for faster, safer delivery.',
    tags: ['CI/CD', 'GitHub Actions', 'Security'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              A few highlights that showcase engineering depth, platform thinking, and product impact.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex"
          >
            Get in touch
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
                >
                  View details <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
