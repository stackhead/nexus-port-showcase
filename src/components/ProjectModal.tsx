import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background focus-ring"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero Image */}
                <div className="relative h-64 md:h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6 -mt-20 relative z-10">
                  {/* Title */}
                  <div className="space-y-3">
                    <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-card-foreground">
                      {project.title}
                    </h2>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="bg-primary hover:bg-primary/90 focus-ring"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 focus-ring"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
