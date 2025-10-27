import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-tertiary text-tertiary-foreground py-16 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rajdeep Tanwar. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/eldorado505"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajdeep-tanwar-8921a8194"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:rajdeeptanwar5@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
