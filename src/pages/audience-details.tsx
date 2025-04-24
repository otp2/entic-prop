import { PageHeader } from '@/components/layout/page-header';
import { AudienceTabs } from '@/components/audience/audience-tabs';
import { useEffect, useState } from 'react';

export function AudienceDetailsPage() {
  const [selectedCoreMessageId, setSelectedCoreMessageId] = useState<string | undefined>(undefined);

  // Handle hash change for direct linking to core messages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Match hashes like #core-message-1, #core-message-2, etc.
      if (hash.startsWith('#core-message-')) {
        const messageId = hash.replace('#core-message-', '');
        // Ensure the messageId is a valid number (or handle as needed)
        if (!isNaN(Number(messageId))) {
          setSelectedCoreMessageId(messageId);
        } else {
          setSelectedCoreMessageId(undefined);
        }
      } else {
        setSelectedCoreMessageId(undefined);
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <PageHeader 
          title="Audience Details" 
          className="mx-auto max-w-3xl"
        />
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Breaking down how each core message should be communicated to our four key audiences: patients, primary care providers, therapists & counselors, and internal staff.
        </p>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <AudienceTabs selectedCoreMessageId={selectedCoreMessageId} />
      </div>
    </div>
  );
}