import { useMemo, useState } from 'react';
import { Mail, MapPin, MessageSquareText, Phone, Send, UserRound } from 'lucide-react';
import PageHeader from '@/src/components/PageHeader';
import { projectSummary, teamMembers } from '@/src/lib/siteData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('SmartRetailX project inquiry');
  const [message, setMessage] = useState('');
  const leaderContact = teamMembers[0];

  const mailtoHref = useMemo(() => {
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, message, name, subject]);

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Contact Us"
        title="General contacts and inquiry template"
        description="Use the student contact directory or the e-mail template to reach the SmartRetailX project team about documents, assessments, demonstrations, or collaboration."
      />

      <section className="space-y-8">
        <section className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">Student contact directory</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                General e-mails and phone numbers are listed by team member, without assigning one personal account as the common project inbox.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-black text-blue-700 ring-1 ring-blue-100">
              <UserRound className="h-4 w-4" aria-hidden="true" />
              {teamMembers.length} contacts
            </div>
          </div>

          {leaderContact ? (
            <div className="rounded-lg border border-blue-200 bg-blue-50/80 p-4 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">General contact number</p>
                    <p className="mt-1 text-sm font-bold leading-6 text-blue-950">
                      {leaderContact.name} mobile number for project inquiries
                    </p>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-200 transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  href={`tel:${leaderContact.phone.replace(/\s+/g, '')}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {leaderContact.phone}
                </a>
              </div>
            </div>
          ) : null}

          <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.studentId}
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={member.photoSrc}
                    alt={`${member.name} profile`}
                    className="h-14 w-14 rounded-md object-cover ring-1 ring-slate-200"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h3 className="font-black leading-6 text-slate-950">{member.name}</h3>
                    <p className="mt-1 text-sm font-bold text-blue-700">{member.studentId}</p>
                    <p className="mt-2 text-sm leading-5 text-slate-600">{member.focus}</p>
                  </div>
                </div>

                <div className="mt-auto space-y-2 pt-4">
                  <a
                    className="flex min-h-11 items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    href={`mailto:${member.email}`}
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 break-all">{member.email}</span>
                  </a>
                  <a
                    className="flex min-h-11 items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    href={`tel:${member.phone}`}
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-6">
              <div className="rounded-md bg-blue-50 p-4 ring-1 ring-blue-100">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Project context</p>
                    <p className="mt-1 text-sm font-bold leading-6 text-blue-950">{projectSummary.institution}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquareText className="mt-1 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h2 className="text-xl font-black text-slate-950">Inquiry e-mail template</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Compose a reusable project inquiry while keeping the recipient field open.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-bold text-slate-700">Name</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoComplete="name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-bold text-slate-700">E-mail</span>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="mt-5 block space-y-2">
                <span className="text-sm font-bold text-slate-700">Subject</span>
                <input
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

              <label className="mt-5 block space-y-2">
                <span className="text-sm font-bold text-slate-700">Message</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-36 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

              <a
                href={mailtoHref}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Create E-mail Template <Send className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
