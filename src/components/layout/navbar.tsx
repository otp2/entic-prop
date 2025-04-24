import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Core Messages', path: '/core-messages' },
  { name: 'Audience Details', path: '/audience-details' },
  { name: 'Rationale', path: '/rationale' },
  { name: 'Rollout', path: '/rollout' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-sm rounded-full border border-border/40 px-6 py-2">
        <div className="flex items-center justify-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      cn(
                        navigationMenuTriggerStyle(),
                        "transition-colors hover:text-foreground/80 py-2 px-3 rounded-full",
                        isActive ? "bg-primary/10 text-primary" : "text-foreground/60"
                      )
                    }
                  >
                    {route.name}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <NavLink
                      key={route.path}
                      to={route.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "px-2 py-1 rounded-md transition-colors hover:text-foreground/80",
                          isActive ? "bg-accent text-foreground" : "text-foreground/60"
                        )
                      }
                    >
                      {route.name}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}