import { PageHeader } from '@/components/layout/page-header';
import { SectionHeading } from '@/components/ui/section-heading';
import { RolloutSteps } from '@/components/rollout/rollout-steps';

export function RolloutPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <PageHeader 
          title="Rollout Plan" 
          description="Implementation strategy for our refined messaging framework"
          className="mx-auto max-w-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <RolloutSteps />
      </div>
    </div>
  );
}