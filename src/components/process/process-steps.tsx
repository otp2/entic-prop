import { PROCESS_STEPS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ProcessSteps() {
  return (
    <div className="space-y-6">
      {PROCESS_STEPS.map((step, index) => (
        <Card key={step.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                {step.id}
              </div>
              <CardTitle>{step.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}