import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_9zadxvm';
const EMAILJS_TEMPLATE_ID = 'template_4botpcs';
const EMAILJS_PUBLIC_KEY = '-hw3pFb-2a-Oqcq7m';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
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

export default emailjs;
