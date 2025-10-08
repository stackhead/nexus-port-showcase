import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
