type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl space-y-5 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
      <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </header>
  );
}
