import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import type { Project } from '../stores/projectStore';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="portfolio-card block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Card className="bg-card text-card-foreground border-border overflow-hidden cursor-pointer h-full">
          <div className="aspect-[3/4] overflow-hidden bg-muted/20">
            <img
              src={project.image}
              alt={project.imageAlt}
              className={`w-full h-full transition-transform duration-300 hover:scale-105 ${
                 project.id === 'project-' ? 'object-cover scale-100' : 'object-cover'
              }`}
              loading="lazy"
            />
          </div>
          <CardContent className="p-8">
            <h3 className="text-2xl font-display font-semibold text-card-foreground mb-3">
              {project.title}
            </h3>
            <p 
              className="text-muted-foreground text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
