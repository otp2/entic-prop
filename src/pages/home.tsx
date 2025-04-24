import { NavLink } from 'react-router-dom';
import { PageHeader } from '@/components/layout/page-header';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { CORE_MESSAGES } from '@/lib/constants';
import { Blog } from '@/components/ui/blog';

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <PageHeader 
          title="Endeavor Health Messaging Framework" 
          description="A comprehensive guide to our refined messaging approach"
          className="mx-auto max-w-3xl"
        />
        <p className="mx-auto max-w-2xl text-muted-foreground">
          This framework represents our refined messaging strategy, optimized for clarity, consistency, and impact across all audiences and touchpoints.
        </p>
      </div>

      <div className="border-b pb-8">
        <SectionHeading description="The overarching message that guides all of our communications">
          Guiding Message
        </SectionHeading>
        <Card>
          <CardContent className="pt-6">
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
              "We transform health outcomes by integrating physical and mental healthcare through evidence-based collaborative care models that make quality treatment accessible to all who need it."
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <div>
        <Blog messages={CORE_MESSAGES} />
      </div>
    </div>
  );
}