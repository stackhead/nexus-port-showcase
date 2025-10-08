import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Available for hire
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              John Developer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Full-stack developer crafting elegant solutions with modern technologies.
            Passionate about building seamless user experiences and scalable applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 shadow-lg hover:shadow-xl transition-all focus-ring"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="font-medium px-8 border-2 hover:bg-secondary focus-ring"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-medium px-8 border-2 hover:bg-secondary focus-ring"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center items-center pt-8"
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:scale-110 transition-all focus-ring rounded-full"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:scale-110 transition-all focus-ring rounded-full"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:scale-110 transition-all focus-ring rounded-full"
            >
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, repeat: Infinity, duration: 2 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
