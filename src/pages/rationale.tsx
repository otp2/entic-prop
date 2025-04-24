import { PageHeader } from '@/components/layout/page-header';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProcessSteps } from '@/components/process/process-steps';

export function RationalePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <PageHeader 
          title="Rationale & Process" 
          description="Understanding the methodology behind our message refinement"
          className="mx-auto max-w-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <ProcessSteps />
      </div>
    </div>
  );
}