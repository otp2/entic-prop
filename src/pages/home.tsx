import { NavLink } from 'react-router-dom';
import { PageHeader } from '@/components/layout/page-header';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CORE_MESSAGES } from '@/lib/constants';
import { Blog } from '@/components/ui/blog';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Navigation - Assuming this is handled globally, but added placeholders if needed */}
      {/* <nav className="mb-4">
        <ul className="flex space-x-4 justify-center">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/core-messages">Core Messages</NavLink></li>
          <li><NavLink to="/audience-details">Audience Details</NavLink></li>
          <li><NavLink to="/rationale">Rationale</NavLink></li>
          <li><NavLink to="/rollout">Rollout</NavLink></li>
        </ul>
      </nav> */}

      <div className="space-y-4 text-center">
        <PageHeader 
          title="Proposed Refined Framework" 
          description="Adjustments based on original Entic Edge proposal"
          className="mx-auto max-w-3xl"
        />
      </div>

      <div className="border-b pb-8">
        <SectionHeading description="The overarching message that guides all of our communications">
          Guiding Message
        </SectionHeading>
        <Card>
          <CardContent className="pt-6">
            <blockquote className="font-serif border-l-4 border-primary pl-4 italic text-lg font-semibold">
              Your best mental health is our endeavor.
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <div>
        <SectionHeading description="Our four core messages represent the essential elements of our value proposition">
          Core Messages
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans font-semibold">1. Comprehensive, connected care for your mental health journey</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-sans">
                We provide a full spectrum of mental and behavioral health care, all working together seamlessly within the Endeavor Health system.
              </CardDescription>
              <NavLink 
                to="/audience-details#core-message-1" 
                className={cn(buttonVariants({ variant: "link" }), "font-sans mt-4 px-0 text-primary hover:text-primary/80 inline-flex items-center text-sm group font-semibold no-underline hover:no-underline")}
              >
                View audience details
                <span className="material-symbols-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">
                  chevron_right
                </span>
              </NavLink>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-sans font-semibold">2. Expert, compassionate care tailored to your unique needs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-sans">
                Our team of highly qualified specialists delivers care grounded in evidence-based practices, always with a personal, understanding approach.
              </CardDescription>
              <NavLink 
                to="/audience-details#core-message-2" 
                className={cn(buttonVariants({ variant: "link" }), "font-sans mt-4 px-0 text-primary hover:text-primary/80 inline-flex items-center text-sm group font-semibold no-underline hover:no-underline")}
              >
                View audience details
                <span className="material-symbols-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">
                  chevron_right
                </span>
              </NavLink>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-sans font-semibold">3. Easy access to the right support, right when you need it</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-sans">
                We make the process of getting started simple, helping you connect with the appropriate level of care and specialists across our extensive network of convenient locations.
              </CardDescription>
              <NavLink 
                to="/audience-details#core-message-3" 
                className={cn(buttonVariants({ variant: "link" }), "font-sans mt-4 px-0 text-primary hover:text-primary/80 inline-flex items-center text-sm group font-semibold no-underline hover:no-underline")}
              >
                View audience details
                <span className="material-symbols-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">
                  chevron_right
                </span>
              </NavLink>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-sans font-semibold">4. We're here for Illinois: trusted behavioral health expertise woven into our communities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-sans">
                As the largest integrated behavioral health network in Illinois, we have a significant reach and a genuine commitment to serving the diverse needs of communities across the state.
              </CardDescription>
              <NavLink 
                to="/audience-details#core-message-4" 
                className={cn(buttonVariants({ variant: "link" }), "font-sans mt-4 px-0 text-primary hover:text-primary/80 inline-flex items-center text-sm group font-semibold no-underline hover:no-underline")}
              >
                View audience details
                <span className="material-symbols-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">
                  chevron_right
                </span>
              </NavLink>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Remove the redundant Blog component */}
      {/* 
      <div>
        <Blog messages={CORE_MESSAGES} />
      </div> 
      */}
    </div>
  );
}