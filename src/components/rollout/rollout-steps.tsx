import { ROLLOUT_STEPS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function RolloutSteps() {
  return (
    <div className="space-y-6">
      {ROLLOUT_STEPS.map((step) => (
        <Card key={step.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                {step.id}
              </div>
              <div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription className="mt-1">{step.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}