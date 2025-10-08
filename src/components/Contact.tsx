import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Missing fields',
        description: 'Please fill out all fields before submitting.',
        variant: 'destructive',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual EmailJS integration
      // Example EmailJS code (uncomment and configure):
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="focus-ring"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="focus-ring"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px] resize-none focus-ring"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all focus-ring"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="mr-2"
                  >
                    <Mail className="h-4 w-4" />
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* EmailJS Setup Instructions */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> To enable email functionality, configure EmailJS in the Contact component.
              Visit <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">emailjs.com</a> to get your credentials.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
