import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border card-hover focus-within:ring-2 focus-within:ring-primary"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="text-primary hover:text-primary font-medium focus-ring"
          >
            View Details
          </Button>

          <div className="flex gap-2">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 hover:text-primary focus-ring"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 hover:text-primary focus-ring"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
