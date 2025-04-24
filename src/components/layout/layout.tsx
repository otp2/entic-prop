import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';
import { Container } from './container';
import { Toaster } from '@/components/ui/toaster';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-6 md:pt-28 md:pb-10">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className="py-6 md:py-8 border-t">
      </footer>
      <Toaster />
    </div>
  );
}