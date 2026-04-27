import { Award, BadgeCheck, Github, Linkedin, Mail, Phone, Sparkles, UserRound } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';
import { projectSummary, teamMembers } from '@/src/lib/siteData';

const achievements = [
  'Inclusive Sinhala-first retail interaction',
  'Explainable demand forecasting workflow',
  'Behavior-driven loyalty segmentation',
  'High-ROI personalized promotion strategy',
];

const responsibilityCopy = {
  'Sinhala Voice Assistant': [
    'Responsible for Sinhala-first voice interaction design and intent understanding.',
    'Drives accessibility, language quality, and end-to-end assistant integration.',
  ],
  'Customer Segmentation': [
    'Responsible for customer behavior analysis, segmentation strategy, and loyalty grouping.',
    'Owns segment validation, profiling quality, and actionable insights for targeting.',
  ],
  'BI Dashboard ML Service': [
    'Responsible for demand forecasting models and business intelligence dashboard flow.',
    'Owns model explainability, accuracy monitoring, and operational recommendation outputs.',
  ],
  'Personalized Promotion Engine': [
    'Responsible for personalized offer generation and campaign decision logic.',
    'Owns uplift-focused optimization, recommendation quality, and promotion impact tracking.',
  ],
} as const;

export default function About() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="About Us"
        title="Research team and contribution areas"
        description="The team section is structured for member identification, photographs, contact details, contribution areas, and relevant project achievements."
      />

      <section className="space-y-6">
        {teamMembers.map((member) => (
          <article
            key={member.studentId}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div className="grid lg:grid-cols-[280px_1fr]">
              <div className="relative min-h-72 bg-slate-100 lg:min-h-0">
                <img
                  src={member.photoSrc}
                  alt={`${member.name} profile`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-950">{member.name}</h2>
                    <p className="mt-3 flex items-center gap-2 text-sm font-bold text-blue-700">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      {member.focus}
                    </p>
                    <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600">
                      <p>{responsibilityCopy[member.focus as keyof typeof responsibilityCopy]?.[0]}</p>
                      <p>{responsibilityCopy[member.focus as keyof typeof responsibilityCopy]?.[1]}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>

                <dl className="mt-8 grid gap-5 border-t border-slate-200 pt-6 md:grid-cols-3">
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                      <BadgeCheck className="h-4 w-4 text-blue-700" aria-hidden="true" />
                      Student ID
                    </dt>
                    <dd className="mt-2 font-black text-slate-950">{member.studentId}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                      <Mail className="h-4 w-4 text-blue-700" aria-hidden="true" />
                      E-mail
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="break-all text-sm font-bold text-slate-700 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {member.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                      <Phone className="h-4 w-4 text-blue-700" aria-hidden="true" />
                      Phone
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm font-bold text-slate-700 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {member.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <UserRound className="h-6 w-6 text-blue-700" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950">Project Identity</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{projectSummary.abstract}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Project</dt>
              <dd className="mt-1 font-black text-slate-950">{projectSummary.name}</dd>
            </div>
            <div className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Focus</dt>
              <dd className="mt-1 font-black text-slate-950">{projectSummary.tagline}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-blue-700" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950">Relevant achievements</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <div key={achievement} className="rounded-md bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-900 ring-1 ring-blue-100">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
