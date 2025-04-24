import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CORE_MESSAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AudienceSectionProps {
  audience: any;
  focusCoreMessageId?: number;
}

export function AudienceSection({ audience, focusCoreMessageId }: AudienceSectionProps) {
  const focusRef = useRef<HTMLDivElement>(null);

  // Scroll to the focused message if provided
  useEffect(() => {
    if (focusCoreMessageId && focusRef.current) {
      setTimeout(() => {
        focusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    // Only depend on focusCoreMessageId to prevent scrolling on tab change
  }, [focusCoreMessageId]);

  return (
    <div className="space-y-8">
      {audience.intro && (
        <p className="text-muted-foreground mb-6">{audience.intro}</p>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{audience.name}</h2>
          <p className="text-muted-foreground">{audience.description}</p>
        </div>
      </div>

      <div className="grid gap-6">
        {CORE_MESSAGES.map((message) => {
          const messageDetails = audience.messageDetails[message.id];
          const isFocused = focusCoreMessageId === message.id;
          
          if (!messageDetails) return null;

          return (
            <div 
              key={message.id} 
              id={`core-message-${message.id}`}
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
                      <CardTitle className="font-sans font-semibold">{message.title}</CardTitle>
                      <CardDescription className="font-sans mt-1.5">{message.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs whitespace-nowrap shrink-0">Message {message.id}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-semibold mb-3 font-serif">Supporting Points</h3>
                      <ul className="list-disc list-outside pl-5 space-y-2.5 text-sm text-muted-foreground">
                        {messageDetails.supportingPoints.map((item: any, index: number) => (
                          <li key={index} className="pl-1">
                            <span>{item.point}</span>
                            {item.source && (
                              <Badge variant="secondary" className="ml-2 text-xs font-medium">
                                {item.source}
                              </Badge>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold mb-3 font-serif">{audience.name} Language</h3>
                      <ul className="list-disc list-outside pl-5 space-y-2.5 text-sm text-muted-foreground">
                        {messageDetails.audienceLanguage.map((text: string, index: number) => (
                          <li key={index} className="pl-1"> 
                            <span>
                              {text.includes(":") ? (
                                <>
                                  "
                                  <strong className="font-semibold not-italic">{text.substring(0, text.indexOf(":") + 1)}</strong> 
                                  <span className="not-italic">{text.substring(text.indexOf(":") + 1)}</span>
                                  "
                                </>    
                              ) : (
                                <span className="not-italic">{`"${text}"`}</span>
                              )}
                            </span>
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