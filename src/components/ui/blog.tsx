import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { CORE_MESSAGES } from '@/lib/constants';

interface BlogProps {
  messages: typeof CORE_MESSAGES;
}

export function Blog({ messages }: BlogProps) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {messages.map((message) => (
        <Card key={message.id} className="h-full transition-all hover:shadow-md overflow-hidden">
          <CardHeader className="pb-3">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
              {message.id}
            </div>
            <CardTitle className="text-base font-medium leading-tight mt-3">
              <div className="text-muted-foreground text-sm mb-2">
                {message.relatedTo}
              </div>
              <h3 className="text-xl font-semibold mb-2">{message.title}</h3>
              <p className="text-muted-foreground mb-4">{message.description}</p>
              <NavLink 
                to={`/audience-details/#message-${message.id}`}
                className="text-primary hover:text-primary/80 inline-flex items-center text-sm"
              >
                View audience details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </NavLink>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}