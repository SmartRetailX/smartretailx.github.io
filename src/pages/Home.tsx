import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  MessageSquare,
  Presentation,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { projectSummary, systemModules } from '@/src/lib/siteData';

const structure = [
  {
    title: 'Domain',
    text: 'Literature survey, gap, problem, objectives, methodology, and technologies.',
    icon: BarChart3,
    to: '/domain',
  },
  {
    title: 'Milestones',
    text: 'Assessment timeline with a selectable milestone detail view.',
    icon: CheckCircle2,
    to: '/milestones',
  },
  {
    title: 'Documents',
    text: 'Project documents exposed through direct view and download links.',
    icon: FileText,
    to: '/documents',
  },
  {
    title: 'Slides',
    text: 'Presentation slides for completed and future assessments.',
    icon: Presentation,
    to: '/slides',
  },
];

const moduleIcons = [MessageSquare, Users, TrendingUp, Sparkles];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className='rounded-lg border border-slate-200 bg-white p-5 shadow-sm'>
      <p className='text-sm font-semibold text-slate-500'>{label}</p>
      <p className='mt-2 text-3xl font-black tracking-tight text-slate-950'>
        {value}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className='space-y-20 pb-20'>
      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8'>
          <div className='space-y-8'>
            <div className='inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100'>
              <Sparkles
                className='h-4 w-4'
                aria-hidden='true'
              />
              Future of Retail Intelligence
            </div>
            <div className='space-y-6'>
              <h1 className='max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl'>
                {projectSummary.name}: {projectSummary.tagline}
              </h1>
              <p className='max-w-3xl text-lg leading-8 text-slate-600'>
                {projectSummary.abstract}
              </p>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <Link
                to='/domain'
                className='inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
              >
                Explore Domain{' '}
                <ArrowRight
                  className='h-4 w-4'
                  aria-hidden='true'
                />
              </Link>
              <Link
                to='/documents'
                className='inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
              >
                View Documents
              </Link>
            </div>
          </div>

          <div className='rounded-md bg-white p-5 ring-1 ring-slate-200'>
            <div className='flex items-center justify-between border-b border-slate-200 pb-4'>
              <div>
                <p className='text-xs font-bold uppercase tracking-[0.2em] text-slate-500'>
                  System Map
                </p>
                <h2 className='mt-1 text-xl font-black text-slate-950'>
                  SmartRetailX Intelligence Flow
                </h2>
              </div>
              <span className='rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200'>
                Integrated
              </span>
            </div>

            <div className='mt-5 grid gap-3'>
              {systemModules.map((module, index) => {
                const Icon = moduleIcons[index];

                return (
                  <div
                    key={module.title}
                    className='grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border border-slate-200 bg-white p-3'
                  >
                    <div className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700'>
                      <Icon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </div>
                    <div>
                      <p className='font-bold text-slate-950'>{module.title}</p>
                      <p className='text-xs leading-5 text-slate-500'>
                        {module.summary}
                      </p>
                    </div>
                    <span className='hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 sm:inline-flex'>
                      {module.metric}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className='mt-5 h-24 rounded-md border border-blue-100 bg-blue-50 p-4'>
              <div
                className='flex h-full items-end gap-2'
                aria-label='Representative retail analytics chart'
              >
                {[36, 54, 42, 70, 61, 84, 76, 92].map((height, index) => (
                  <div
                    key={index}
                    className='w-full rounded-t bg-blue-700'
                    style={{
                      height: `${height}%`,
                      opacity: 0.45 + index * 0.06,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-5 md:grid-cols-4'>
          <StatCard
            label='Promotion ROI'
            value='566.7%'
          />
          <StatCard
            label='Forecast Accuracy'
            value='92.9%'
          />
          <StatCard
            label='ASR Word Error Rate'
            value='13.5%'
          />
          <StatCard
            label='Conversion Lift'
            value='25%'
          />
        </div>
      </section>

      <section className='mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl'>
          <p className='text-sm font-bold uppercase tracking-[0.22em] text-blue-700'>
            Website Structure
          </p>
          <h2 className='mt-3 text-3xl font-black tracking-tight text-slate-950'>
            Aligned with the project website guidance
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-600'>
            The site uses the required academic project structure while keeping
            the SmartRetailX story consistent, navigable, and ready for uploaded
            files.
          </p>
        </div>

        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {structure.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className='group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            >
              <item.icon
                className='h-6 w-6 text-blue-700'
                aria-hidden='true'
              />
              <h3 className='mt-5 text-xl font-black text-slate-950'>
                {item.title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-slate-600'>
                {item.text}
              </p>
              <span className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700'>
                Open section{' '}
                <ArrowRight
                  className='h-4 w-4 transition group-hover:translate-x-0.5'
                  aria-hidden='true'
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
