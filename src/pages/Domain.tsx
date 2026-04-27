import { Cpu, Database, GitBranch, Goal, Layers, SearchCheck } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';
import { domainSections, systemModules } from '@/src/lib/siteData';

const icons = [SearchCheck, GitBranch, Goal, Goal, Layers, Cpu];

const technologyGroups = [
  { label: 'Frontend', tools: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
  { label: 'Services', tools: ['FastAPI', 'Flask', 'NestJS', 'REST APIs'] },
  { label: 'Data & ML', tools: ['PostgreSQL', 'Prophet', 'XGBoost', 'SHAP', 'Scikit-learn'] },
  { label: 'Delivery', tools: ['Docker', 'Kubernetes', 'GitHub Pages', 'CI/CD'] },
];

export default function Domain() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Domain"
        title="Research domain and technical direction"
        description="This section captures the literature survey, research gap, problem definition, objectives, methodology, and technologies required by the project website guidance."
      />

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {domainSections.map((section, index) => {
          const Icon = icons[index] ?? SearchCheck;

          return (
            <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-black text-slate-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Methodology</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">A modular path from raw retail data to personalized action</h2>
          <p className="text-lg leading-8 text-slate-600">
            SmartRetailX is organized as independent but connected services so each research contribution can be tested, explained, and improved without breaking the wider platform.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            {systemModules.map((module, index) => (
              <div key={module.title} className="grid gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:grid-cols-[auto_1fr]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-mono text-sm font-bold text-slate-700">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-black text-slate-950">{module.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{module.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Technologies Used</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Implementation stack</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map((group) => (
            <article key={group.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-blue-700" aria-hidden="true" />
                <h3 className="font-black text-slate-950">{group.label}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {group.tools.map((tool) => (
                  <li key={tool} className="rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
