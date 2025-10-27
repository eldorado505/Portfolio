// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_9zadxvm';
const EMAILJS_TEMPLATE_ID = 'template_4botpcs';
const EMAILJS_PUBLIC_KEY = '-hw3pFb-2a-Oqcq7m';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Load EmailJS from CDN
const loadEmailJS = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Check if EmailJS is already loaded
    if (typeof window !== 'undefined' && (window as any).emailjs) {
      resolve((window as any).emailjs);
      return;
    }

    // Load EmailJS script from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      resolve((window as any).emailjs);
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load EmailJS'));
    };
    
    document.head.appendChild(script);
  });
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Load EmailJS from CDN
    const emailjs = await loadEmailJS();
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      title: data.name,
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'rajdeeptanwar5@gmail.com',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};
