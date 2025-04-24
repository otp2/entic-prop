import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AUDIENCES } from '@/lib/constants';
import { AudienceSection } from './audience-section';
import { useState } from 'react';

interface AudienceTabsProps {
  selectedMessage?: string;
}

export function AudienceTabs({ selectedMessage }: AudienceTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(AUDIENCES[0].id);

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="w-full flex flex-col items-center"
    >
      <TabsList className="mb-8">
        {AUDIENCES.map((audience) => (
          <TabsTrigger 
            key={audience.id} 
            value={audience.id}
            className="px-8 py-2.5"
          >
            {audience.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="w-full">
        {AUDIENCES.map((audience) => (
          <TabsContent key={audience.id} value={audience.id}>
            <AudienceSection 
              audience={audience} 
              focusMessageId={selectedMessage ? parseInt(selectedMessage) : undefined} 
            />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}