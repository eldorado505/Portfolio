import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-name', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })
        .from('.hero-title', {
          y: 50,
          opacity: 0,
          duration: 1,
        }, '-=0.7')
        .from('.hero-tagline', {
          y: 50,
          opacity: 0,
          duration: 1,
        }, '-=0.7')
        .from('.hero-cta', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.video
          src="https://c.animaapp.com/mh3e4dhdGaNd3V/img/ai_1.mp4"
          poster="https://c.animaapp.com/mh3e4dhdGaNd3V/img/ai_1-poster.png"
          alt="creative motion background"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <h1 className="hero-name text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
          Rajdeep Tanwar
        </h1>
        <p className="hero-title text-2xl md:text-4xl font-display font-medium text-foreground mb-4">
          Software Engineer
        </p>
        <p className="hero-tagline text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Engineer with hands-on experience in AI, backend architecture, and mobile app development
        </p>
        <Button
          onClick={scrollToWork}
          className="hero-cta bg-primary text-primary-foreground hover:bg-secondary text-base px-8 py-6"
        >
          View Work
          <ArrowDownIcon className="ml-2 w-5 h-5" strokeWidth={1.5} />
        </Button>
      </div>
    </section>
  );
}
