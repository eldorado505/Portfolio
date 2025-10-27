import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './ProjectCard';
import { useProjectStore } from '../stores/projectStore';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const projects = useProjectStore((state: any) => state.projects);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-20 px-8 bg-muted/30"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-16 text-center">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
