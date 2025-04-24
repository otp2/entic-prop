import { PageHeader } from '@/components/layout/page-header';
import { ROLLOUT_STEPS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {ROLLOUT_STEPS.map((step) => (
          <Card key={step.id}>
            <CardHeader className="bg-muted/50">
              <CardTitle className="font-sans font-semibold">{`${step.id}. ${step.title}`}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="font-sans text-sm text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}