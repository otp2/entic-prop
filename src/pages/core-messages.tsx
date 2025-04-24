import { useState } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { SectionHeading } from '@/components/ui/section-heading';
import { MessageCard } from '@/components/core-message/message-card';
import { CORE_MESSAGES } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function CoreMessagesPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (imageUrls: string[], startIndex: number = 0) => {
    if (imageUrls && imageUrls.length > 0) {
      setLightboxImages(imageUrls);
      setCurrentImageIndex(startIndex);
      setLightboxOpen(true);
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % lightboxImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <>
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <div className="space-y-4">
            <PageHeader 
              title="Core Messages" 
              className="mx-auto max-w-3xl"
            />
            <p className="mx-auto max-w-2xl text-muted-foreground">
              What we want to say and why it matters
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
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-6xl w-[90vw] h-[90vh] p-4 flex flex-col gap-4">
          <DialogClose asChild className="absolute top-4 right-4 z-10">
             <Button 
              variant="outline" 
              size="icon" 
              className="bg-background/70 hover:bg-background/90 rounded-full"
             >
               <X className="h-5 w-5" />
               <span className="sr-only">Close</span>
            </Button>
          </DialogClose>

          <div className="flex-1 flex items-center justify-center gap-4 overflow-hidden">
            {lightboxImages.length > 1 ? (
              <Button 
                variant="outline" 
                size="icon" 
                className="shrink-0 bg-background/70 hover:bg-background/90"
                onClick={goToPrevImage}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous Image</span>
              </Button>
            ) : (
              <div className="w-9 h-9 shrink-0"></div>
            )}

            <div className="flex-1 h-full flex items-center justify-center overflow-hidden">
              {lightboxImages.length > 0 && (
                <img 
                  src={lightboxImages[currentImageIndex]} 
                  alt={`Original Message Content ${currentImageIndex + 1} of ${lightboxImages.length}`} 
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {lightboxImages.length > 1 ? (
              <Button 
                variant="outline" 
                size="icon" 
                className="shrink-0 bg-background/70 hover:bg-background/90"
                onClick={goToNextImage}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next Image</span>
              </Button>
            ) : (
              <div className="w-9 h-9 shrink-0"></div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}