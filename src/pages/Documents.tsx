import FileResourceList from '@/src/components/FileResourceList';
import PageHeader from '@/src/components/PageHeader';
import { documents } from '@/src/lib/siteData';

export default function Documents() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Documents"
        title="Project documents"
        description="This page lists produced and pending project documents with accessible file links once the files are placed in the public project folder."
      />
      <FileResourceList resources={documents} />
    </div>
  );
}
