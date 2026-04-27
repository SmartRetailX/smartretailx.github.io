import { useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Download, ExternalLink, FileText } from 'lucide-react';
import type { FileResource } from '@/src/lib/siteData';

type Availability = 'checking' | 'available' | 'missing';

type FileResourceListProps = {
  resources: FileResource[];
};

const statusStyles = {
  checking: 'bg-slate-100 text-slate-700 ring-slate-200',
  available: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  missing: 'bg-amber-50 text-amber-800 ring-amber-200',
};

export default function FileResourceList({ resources }: FileResourceListProps) {
  const [availability, setAvailability] = useState<Record<string, Availability>>({});
  const hrefs = useMemo(() => resources.map((resource) => resource.href), [resources]);

  useEffect(() => {
    const controller = new AbortController();

    setAvailability(
      Object.fromEntries(hrefs.map((href) => [href, 'checking' satisfies Availability])),
    );

    hrefs.forEach(async (href) => {
      try {
        const response = await fetch(href, {
          method: 'HEAD',
          cache: 'no-store',
          signal: controller.signal,
        });

        const contentType = response.headers.get('content-type') ?? '';

        setAvailability((current) => ({
          ...current,
          [href]: response.ok && !contentType.includes('text/html') ? 'available' : 'missing',
        }));
      } catch {
        if (!controller.signal.aborted) {
          setAvailability((current) => ({
            ...current,
            [href]: 'missing',
          }));
        }
      }
    });

    return () => controller.abort();
  }, [hrefs]);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {resources.map((resource) => {
        const fileStatus = availability[resource.href] ?? 'checking';
        const isAvailable = fileStatus === 'available';
        const statusLabel =
          fileStatus === 'checking' ? 'Checking file' : isAvailable ? 'Available' : 'Awaiting upload';

        return (
          <article
            key={resource.title}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-950">{resource.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{resource.description}</p>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                {resource.stage}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[fileStatus]}`}
              >
                {isAvailable ? (
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {statusLabel}
              </span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                {resource.type}
              </span>
            </div>

            <p className="mt-4 rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-600 ring-1 ring-slate-200">
              {resource.expectedPath}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {isAvailable ? (
                <>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    aria-label={`Open ${resource.title}`}
                  >
                    Open <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={resource.href}
                    download
                    className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    aria-label={`Download ${resource.title}`}
                  >
                    Download <Download className="h-4 w-4" aria-hidden="true" />
                  </a>
                </>
              ) : (
                <span className="text-sm font-medium text-slate-500">
                  Add the file at the expected path to activate the open and download links.
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
