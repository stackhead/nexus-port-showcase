import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Built with <Heart className="h-3 w-3 text-primary fill-primary" /> by John Developer
          </p>

          {/* Social Links */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:scale-110 transition-all focus-ring rounded-full"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:scale-110 transition-all focus-ring rounded-full"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary hover:scale-110 transition-all focus-ring rounded-full"
            >
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
