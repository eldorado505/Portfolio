import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { useProjectStore } from '../stores/projectStore';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const projects = useProjectStore((state: any) => state.projects);
  const project = projects.find((p: any) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-8 py-32">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-primary text-primary-foreground hover:bg-secondary">
              <ArrowLeftIcon className="w-5 h-5 mr-2" strokeWidth={1.5} />
              Back to Home
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-8 py-32">
        <Link to="/#work">
          <Button className="bg-primary text-primary-foreground hover:bg-secondary mb-12">
            <ArrowLeftIcon className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Back to Portfolio
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
            {project.title}
          </h1>
          
          <div className="mb-12 bg-muted/20 rounded-lg p-8 flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Overview</h2>
            <p 
              className="text-lg text-muted-foreground mb-8"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Challenge</h2>
            <p 
              className="text-lg text-muted-foreground mb-8"
              dangerouslySetInnerHTML={{ __html: project.challenge }}
            />

            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Solution</h2>
            <p 
              className="text-lg text-muted-foreground mb-8"
              dangerouslySetInnerHTML={{ __html: project.solution }}
            />

            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3 mb-8">
                {project.tools.map((tool: any, index: any) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card text-card-foreground rounded-md text-sm font-medium border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Impact</h2>
            <p className="text-lg text-muted-foreground mb-12">{project.impact}</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
