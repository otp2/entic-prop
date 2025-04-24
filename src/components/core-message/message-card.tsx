import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MessageCardProps {
  id: number;
  title: string;
  description: string;
  whatItMeans: string;
  whyItMatters: string;
  relatedTo: string;
}

export function MessageCard({ id, title, description, whatItMeans, whyItMatters, relatedTo }: MessageCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
            {id}
          </div>
          <div className="text-left">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-left">
        <div>
          <h3 className="font-medium text-sm text-muted-foreground mb-1">What this means:</h3>
          <p className="text-sm">{whatItMeans}</p>
        </div>
        <div>
          <h3 className="font-medium text-sm text-muted-foreground mb-1">Why it matters:</h3>
          <p className="text-sm">{whyItMatters}</p>
        </div>
        <div className="pt-2">
          <h3 className="font-medium text-sm text-muted-foreground mb-1">Related to:</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <p className="text-sm text-muted-foreground cursor-help">{relatedTo}</p>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Original Messages</h4>
                <p className="text-sm text-muted-foreground">
                  This message combines and refines elements from {relatedTo}.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <NavLink 
          to={`/audience-details/#message-${id}`}
          className="text-primary hover:text-primary/80 inline-flex items-center text-sm group"
        >
          View audience details
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </CardContent>
    </Card>
  );
}