import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SendIcon, Loader2 } from 'lucide-react';
import { sendEmail } from '@/lib/emailjs';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (validateForm()) {
      setIsLoading(true);
      
      try {
        await sendEmail(formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-8 bg-background"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="contact-content">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm always open to discussing new opportunities and collaborations.
          </p>

          {isSubmitted ? (
            <div className="bg-success/10 border border-success rounded-lg p-8 text-center">
              <p className="text-success-foreground text-lg font-medium">
                Thank you for your message! I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-card text-card-foreground border-border focus:border-primary"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-card text-card-foreground border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-card text-card-foreground border-border focus:border-primary min-h-[200px]"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-secondary text-base py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" strokeWidth={1.5} />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon className="mr-2 w-5 h-5" strokeWidth={1.5} />
                    Send Message
                  </>
                )}
              </Button>
              
              {submitError && (
                <div className="bg-destructive/10 border border-destructive rounded-lg p-4">
                  <p className="text-destructive text-sm">{submitError}</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
