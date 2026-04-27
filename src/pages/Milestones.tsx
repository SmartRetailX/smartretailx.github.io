import { useMemo, useState } from 'react';
import { CalendarDays, CheckCircle2, ChevronDown, ClipboardList } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';
import { milestones } from '@/src/lib/siteData';

const statusClasses = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Upcoming: 'bg-blue-50 text-blue-700 ring-blue-200',
  Pending: 'bg-amber-50 text-amber-800 ring-amber-200',
};

export default function Milestones() {
  const [selectedTitle, setSelectedTitle] = useState(milestones[0]?.title ?? '');
  const selectedMilestone = useMemo(
    () => milestones.find((milestone) => milestone.title === selectedTitle) ?? milestones[0],
    [selectedTitle],
  );

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Milestones"
        title="Project assessments, timeline, and marks"
        description="Use the drop-down menu to select an assessment and review its details, scheduled date, allocated marks, and expected deliverables."
      />

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <label htmlFor="milestone" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
            Choose Assessment (Drop-down)
          </label>
          <div className="relative mt-3">
            <select
              id="milestone"
              value={selectedTitle}
              onChange={(event) => setSelectedTitle(event.target.value)}
              className="w-full appearance-none rounded-md border border-slate-300 bg-white px-4 py-3 pr-10 text-base font-semibold text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {milestones.map((milestone) => (
                <option key={milestone.title} value={milestone.title}>
                  {milestone.title}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          </div>

          {selectedMilestone && (
            <article className="mt-6 rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusClasses[selectedMilestone.status]}`}>
                  {selectedMilestone.status}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                  Marks: {selectedMilestone.marks}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-slate-950">{selectedMilestone.title}</h2>
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CalendarDays className="h-4 w-4 text-blue-700" aria-hidden="true" />
                {selectedMilestone.date}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{selectedMilestone.summary}</p>
              <ul className="mt-5 space-y-2">
                {selectedMilestone.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-700" aria-hidden="true" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ClipboardList className="h-6 w-6 text-blue-700" aria-hidden="true" />
            <h2 className="text-xl font-black text-slate-950">All project assessments</h2>
          </div>
          <div className="mt-6 space-y-4">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.title}
                type="button"
                onClick={() => setSelectedTitle(milestone.title)}
                className={`grid w-full gap-4 rounded-lg border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:grid-cols-[auto_1fr_auto] ${
                  selectedTitle === milestone.title
                    ? 'border-blue-300 bg-blue-50'
                    : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-mono text-sm font-bold text-slate-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-black text-slate-950">{milestone.title}</span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Date: {milestone.date}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Marks: {milestone.marks}
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">{milestone.summary}</span>
                </span>
                <span className={`h-fit rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusClasses[milestone.status]}`}>
                  {milestone.status}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
