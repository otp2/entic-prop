import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CORE_MESSAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AudienceSectionProps {
  audience: any;
  focusMessageId?: number;
}

export function AudienceSection({ audience, focusMessageId }: AudienceSectionProps) {
  const focusRef = useRef<HTMLDivElement>(null);

  // Scroll to the focused message if provided
  useEffect(() => {
    if (focusMessageId && focusRef.current) {
      setTimeout(() => {
        focusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [focusMessageId, audience.id]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{audience.name}</h2>
          <p className="text-muted-foreground">{audience.description}</p>
        </div>
      </div>

      <div className="grid gap-6">
        {CORE_MESSAGES.map((message) => {
          const messageDetails = audience.messageDetails[message.id];
          const isFocused = focusMessageId === message.id;
          
          return (
            <div 
              key={message.id} 
              id={`message-${message.id}`}
              ref={isFocused ? focusRef : null}
              className={cn(
                "scroll-mt-20 transition-all",
                isFocused && "ring-2 ring-primary rounded-lg"
              )}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{message.title}</CardTitle>
                      <CardDescription className="mt-1.5">{message.description}</CardDescription>
                    </div>
                    <Badge variant="outline">Message {message.id}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-3">Supporting Points</h3>
                      <ul className="space-y-2">
                        {messageDetails.supportingPoints.map((item: any, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </span>
                            <div className="flex-1">
                              <span className="text-sm">{item.point}</span>
                              <Badge variant="secondary" className="ml-2 text-xs">
                                {item.source}
                              </Badge>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-3">Audience Language</h3>
                      <ul className="space-y-2">
                        {messageDetails.audienceLanguage.map((text: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-3">"</span>
                            <span className="italic text-sm">{text}</span>
                            <span className="text-primary ml-1">"</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}