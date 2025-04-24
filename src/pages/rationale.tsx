import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define benefits data directly here
const BENEFITS_DATA = [
  {
    title: "Greater Clarity",
    description: "The four core messages are more memorable and easier to integrate into daily communications."
  },
  {
    title: "Audience Relevance",
    description: "Each message is adapted with language and supporting points that directly address audience-specific needs."
  },
  {
    title: "Unified Identity",
    description: "The messaging reinforces our position as the largest behavioral health network in Illinois, strengthening our shared purpose."
  },
  {
    title: "Practical Implementation",
    description: "Clear guidelines make it easier for staff to incorporate these messages into their daily work."
  }
];

export function RationalePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <PageHeader 
          title="Rationale & Process" 
          description="Methodology behind refinement"
          className="mx-auto max-w-3xl"
        />
      </div>

      {/* Add new cards for each benefit */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {BENEFITS_DATA.map((benefit, index) => (
          <Card key={index}>
            <CardHeader className="bg-muted/50">
              <CardTitle className="font-sans font-semibold">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4"> {/* Adjust padding if needed */}
              <p className="font-sans text-sm text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}