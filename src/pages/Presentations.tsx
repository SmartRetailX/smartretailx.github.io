import FileResourceList from '@/src/components/FileResourceList';
import PageHeader from '@/src/components/PageHeader';
import { presentations } from '@/src/lib/siteData';

export default function Presentations() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Presentations"
        title="Slides of past presentations"
        description="Proposal, progress, and final presentation slides are exposed here, with room for future assessment slides as the project advances."
      />
      <FileResourceList resources={presentations} />
    </div>
  );
}
