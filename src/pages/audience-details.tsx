import { PageHeader } from '@/components/layout/page-header';
import { AudienceTabs } from '@/components/audience/audience-tabs';
import { useEffect, useState } from 'react';

export function AudienceDetailsPage() {
  const [selectedMessage, setSelectedMessage] = useState<string | undefined>(undefined);
  
  // Handle hash change for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#message-')) {
        const messageId = hash.replace('#message-', '');
        setSelectedMessage(messageId);
      } else {
        setSelectedMessage(undefined);
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <div className="space-y-4">
          <PageHeader 
            title="Audience Details" 
            description="Message adaptations for each audience"
            className="mx-auto max-w-3xl"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <AudienceTabs selectedMessage={selectedMessage} />
      </div>
    </div>
  );
}