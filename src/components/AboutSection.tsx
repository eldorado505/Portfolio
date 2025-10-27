import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { LinkedinIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        y: 60,
        opacity: 0,
        duration: 1,
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
      id="about"
      className="py-20 px-8 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="about-content">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            With experience at Google and Samsung, I specialize in <b>AI-powered systems</b>, <b>scalable backend development</b>, and <b>Android app engineering</b>.
            I help startups and businesses turn ideas into production-ready, impactful software — fast, reliable, and user-focused.
          </p>
          
          <h3 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">
            🧠 What I've Built
          </h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            At Google, I developed an AI chatbot for Maps developers that automated internal workflows — saving <b>700+ SWE days/year</b> and <b>$500K+ in operational cost</b>.
            At Samsung, I engineered payment infrastructure and microservices for Samsung Wallet, powering tap-and-go and transit payments across countries.
            I've also delivered custom mobile apps, data-driven dashboards, and automation tools for clients and internal teams.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Beyond enterprise work, I've built diverse client solutions — including a self-serve ad platform with real-time analytics, an AI assistant powered by Gemini + FAISS, and a lightweight offline fitness app — among several other impactful projects.
          </p>

          <h3 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">
            💡 What I Do for Clients
          </h3>
          <ul className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-3">
            <li>• Build custom AI assistants and automation tools to streamline workflows</li>
            <li>• Design robust backend systems & APIs with strong performance and scalability</li>
            <li>• Develop modern Android apps that deliver seamless user experiences</li>
            <li>• Provide end-to-end product development — from concept to deployment</li>
          </ul>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
            <b>"I focus on building software that doesn't just work — it works beautifully, efficiently, and drives real results."</b>
          </p>

          <h3 className="text-2xl font-display font-semibold text-foreground mb-6 mt-8">
            Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-8">
            {[
              { name: 'C++', icon: '⚡' },
              { name: 'Java', icon: '☕' },
              { name: 'Kotlin', icon: '🎯' },
              { name: 'Python', icon: '🐍' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'Spring Boot', icon: '🍃' },
              { name: 'Next.js', icon: '⚡' },
              { name: 'Android', icon: '📱' },
              { name: 'Redis', icon: '🔴' },
              { name: 'GraphQL', icon: '📊' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Apache Kafka', icon: '📨' },
              { name: 'Apache Spark', icon: '✨' },
              { name: 'React.js', icon: '⚛️' },
              { name: 'Express.js', icon: '🚂' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'SQL', icon: '🗄️' },
              { name: 'SQLite', icon: '💾' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Firebase', icon: '🔥' },
              { name: 'GenAI', icon: '🤖' },
              { name: 'Workflow Automation', icon: '🔄' },
              { name: 'REST APIs', icon: '🌐' },
              { name: 'Unit Testing', icon: '✅' },
              { name: 'Git/Github', icon: '📦' },
              { name: 'HTML', icon: '🌐' },
              { name: 'CSS', icon: '🎨' },
              { name: 'C', icon: '⚡' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer p-4"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <span className="text-xs text-muted-foreground text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/file/d/1sTxn8Pw1wX8-SAnAyqQZmYhHi3h11T7e/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-secondary text-base px-8 py-6">
                View Resume
              </Button>
            </a>
            
            <a
              href="https://www.linkedin.com/in/rajdeep-tanwar-8921a8194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0077B5] text-white hover:bg-[#005885] text-base px-8 py-6 flex items-center gap-2">
                <LinkedinIcon className="w-5 h-5" strokeWidth={1.5} />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
