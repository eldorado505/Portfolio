import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BriefcaseIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  techStack: string;
}

const experiences: Experience[] = [
  {
    company: 'Google',
    role: 'Software Engineer – AI Chatbot for Maps Developers',
    period: 'Sept 2024 – Present',
    achievements: [
      'Building a specialized internal AI assistant to help Google Maps developers find information, resolve queries, and automate workflows.',
      'Handles topics like feature launch process, approvals, and tracking, reducing manual effort significantly.',
      'Achieved 700+ SWE days saved annually, resulting in $500K+ yearly cost savings.',
    ],
    techStack: 'Python, GenAI, LLMs, Workflow Automation, API integration, Prompt engineering, Agentic architecture',
  },
  {
    company: 'Samsung R&D Institute',
    role: 'Software Engineer – Samsung Wallet Team',
    period: 'Aug 2023 – Sept 2024',
    achievements: [
      'Built a thread-safe communication system managing 70+ APIs for tap-and-go & transit payments.',
      'Developed a QoS microservice using Kafka & Spark to analyze 100K+ UPI logs daily — reduced payment failures by 60%.',
      'Designed and shipped the Event Ticket Card feature end-to-end (DB schema, ViewModel, UI).',
      'Improved code coverage from 47% → 89% with JUnit & Mockito tests.',
    ],
    techStack: 'Java, Spring Boot, Kafka, Spark, SQL, Kotlin, Concurrency',
  },
  {
    company: 'Masai School',
    role: 'Problem Setter',
    period: 'Sept 2022 – Feb 2023',
    achievements: [
      'Designed 400+ DSA problems and led 20+ coding contests, boosting student learning outcomes.',
      'Enhanced test cases by identifying key edge cases and improving reliability.',
    ],
    techStack: 'C, C++, Java, Data Structures, Algorithms',
  },
  {
    company: 'Samsung R&D Institute',
    role: 'Software Engineer Intern',
    period: 'May 2022 – July 2022',
    achievements: [
      'Built a shared C library for audio processing, integrated with JavaScript.',
      'Implemented advanced operations — Noise Reduction, Filtering, Crossfade — achieving 250× faster execution.',
    ],
    techStack: 'C, C++, JavaScript',
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set('.experience-card', { opacity: 0, y: 50 });
      
      gsap.to('.experience-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 px-8 bg-muted/30 min-h-screen"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-16 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
              style={{ opacity: 1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BriefcaseIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-1">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-base text-muted-foreground leading-relaxed flex">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Tech Stack:</span> {exp.techStack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
