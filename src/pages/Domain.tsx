import {
  BarChart3,
  BrainCircuit,
  Boxes,
  Cpu,
  Database,
  FileCode2,
  FlaskConical,
  GitBranch,
  Globe,
  Goal,
  Layers,
  LineChart,
  Monitor,
  Network,
  Rocket,
  SearchCheck,
  Server,
  Ship,
  Sparkles,
  Waypoints,
  Wind,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';
import { domainSections, systemModules } from '@/src/lib/siteData';

const icons = [SearchCheck, GitBranch, Goal, Goal, Layers, Cpu];

type TechnologyItem = {
  name: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
};

type TechnologyGroup = {
  label: string;
  tools: TechnologyItem[];
};

const technologyGroups = [
  {
    label: 'Frontend',
    tools: [
      { name: 'React', icon: Monitor, iconColor: 'text-sky-700', iconBackground: 'bg-sky-100' },
      { name: 'TypeScript', icon: FileCode2, iconColor: 'text-blue-700', iconBackground: 'bg-blue-100' },
      { name: 'Tailwind CSS', icon: Wind, iconColor: 'text-cyan-700', iconBackground: 'bg-cyan-100' },
      { name: 'Recharts', icon: BarChart3, iconColor: 'text-indigo-700', iconBackground: 'bg-indigo-100' },
    ],
  },
  {
    label: 'Services',
    tools: [
      { name: 'FastAPI', icon: Waypoints, iconColor: 'text-emerald-700', iconBackground: 'bg-emerald-100' },
      { name: 'Flask', icon: FlaskConical, iconColor: 'text-slate-700', iconBackground: 'bg-slate-100' },
      { name: 'NestJS', icon: Boxes, iconColor: 'text-rose-700', iconBackground: 'bg-rose-100' },
      { name: 'REST APIs', icon: Server, iconColor: 'text-violet-700', iconBackground: 'bg-violet-100' },
    ],
  },
  {
    label: 'Data & ML',
    tools: [
      { name: 'PostgreSQL', icon: Database, iconColor: 'text-sky-700', iconBackground: 'bg-sky-100' },
      { name: 'Prophet', icon: LineChart, iconColor: 'text-amber-700', iconBackground: 'bg-amber-100' },
      { name: 'XGBoost', icon: Rocket, iconColor: 'text-orange-700', iconBackground: 'bg-orange-100' },
      { name: 'SHAP', icon: Sparkles, iconColor: 'text-fuchsia-700', iconBackground: 'bg-fuchsia-100' },
      { name: 'Scikit-learn', icon: BrainCircuit, iconColor: 'text-teal-700', iconBackground: 'bg-teal-100' },
    ],
  },
  {
    label: 'Delivery',
    tools: [
      { name: 'Docker', icon: Ship, iconColor: 'text-blue-700', iconBackground: 'bg-blue-100' },
      { name: 'Kubernetes', icon: Network, iconColor: 'text-indigo-700', iconBackground: 'bg-indigo-100' },
      { name: 'GitHub Pages', icon: Globe, iconColor: 'text-zinc-700', iconBackground: 'bg-zinc-100' },
      { name: 'CI/CD', icon: Workflow, iconColor: 'text-emerald-700', iconBackground: 'bg-emerald-100' },
    ],
  },
] satisfies TechnologyGroup[];

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
                {group.tools.map((tool) => {
                  const ToolIcon = tool.icon;

                  return (
                    <li key={tool.name} className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-md ${tool.iconBackground}`}>
                        <ToolIcon className={`h-4 w-4 ${tool.iconColor}`} aria-hidden="true" />
                      </span>
                      <span>{tool.name}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
