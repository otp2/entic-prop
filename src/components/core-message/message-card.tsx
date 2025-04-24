import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ORIGINAL_MESSAGE_IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface MessageCardProps {
  id: number;
  title: string;
  description: string;
  whatItMeans: string;
  whyItMatters: string;
  relatedTo: string;
  onOpenLightbox: (imageUrls: string[], startIndex?: number) => void;
}

export function MessageCard({ id, title, description, whatItMeans, whyItMatters, relatedTo, onOpenLightbox }: MessageCardProps) {

  const getRelatedImages = () => {
    const numbers = relatedTo.match(/\d+/g);
    if (!numbers) return [];
    
    const imageUrls = numbers.flatMap(numStr => {
      const num = parseInt(numStr);
      return ORIGINAL_MESSAGE_IMAGES[num] || [];
    });
    return imageUrls;
  };

  const relatedImages = getRelatedImages();

  const handleRelatedClick = () => {
    if (relatedImages.length > 0) {
      onOpenLightbox(relatedImages);
    }
  };

  return (
    <Card className="h-full transition-all hover:shadow-md flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
            {id}
          </div>
          <div className="text-left">
            <CardTitle>{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-left flex-1">
        <div>
          <h3 className="font-serif font-medium text-sm text-muted-foreground mb-1">What this means:</h3>
          <p className="text-sm font-sans">{whatItMeans}</p>
        </div>
        <div>
          <h3 className="font-serif font-medium text-sm text-muted-foreground mb-1">Why it matters:</h3>
          <p className="text-sm font-sans">{whyItMatters}</p>
        </div>
        {relatedImages.length > 0 && (
           <div className="pt-2">
             <h3 className="font-serif font-medium text-sm text-muted-foreground mb-1">Related to:</h3>
             <Button 
               variant="link" 
               className="p-0 h-auto font-sans text-sm text-muted-foreground hover:text-primary hover:no-underline cursor-pointer"
               onClick={handleRelatedClick}
             >
               {relatedTo}
             </Button>
           </div>
        )}
      </CardContent>
      <CardFooter className="pt-4"> 
        <NavLink 
          to={`/audience-details/#core-message-${id}`} 
          className="font-sans text-primary hover:text-primary/80 inline-flex items-center text-sm group font-semibold no-underline hover:no-underline"
        >
          View audience details
          <span className="material-symbols-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">
            chevron_right
          </span>
        </NavLink>
      </CardFooter>
    </Card>
  );
}