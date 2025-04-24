import { PageHeader } from '@/components/layout/page-header';
import { SectionHeading } from '@/components/ui/section-heading';
import { MessageCard } from '@/components/core-message/message-card';
import { CORE_MESSAGES } from '@/lib/constants';

export function CoreMessagesPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <div className="space-y-4">
          <PageHeader 
            title="Core Messages" 
            description="Our four core messages represent the essential elements of our value proposition"
            className="mx-auto max-w-3xl"
          />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We've refined our messaging from the original five core messages to four clearer, more impactful statements.
            Each message below includes context about what it means, why it matters, and which original messages it relates to.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {CORE_MESSAGES.map((message) => (
          <MessageCard 
            key={message.id}
            id={message.id}
            title={message.title}
            description={message.description}
            whatItMeans={message.whatItMeans}
            whyItMatters={message.whyItMatters}
            relatedTo={message.relatedTo}
          />
        ))}
      </div>
    </div>
  );
}