import React, { useState } from 'react';
import { Instagram, Send, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formsubmit.co/ajax/harivignesh526@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: 'false',
        }),
      });

      const result = await res.json();
      if (result.success === 'true') {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-dark-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-dark-900 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, bookings, or any questions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-dark-200 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-serif font-semibold text-gold-500 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center text-gold-500 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gold-400 mb-1">WhatsApp</h4>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="https://wa.me/919380596699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-800 hover:text-gold-500 transition-colors"
                      >
                        +91 9380596699
                      </a>
                      <a
                        href="https://wa.me/918680938059"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-800 hover:text-gold-500 transition-colors"
                      >
                        +91 8680938059
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center text-gold-500 mt-1">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gold-400 mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/jayanthi_boutique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-800 hover:text-gold-500 transition-colors"
                    >
                      @jayanthi_boutique
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium text-gold-400 mb-4">Business Hours</h4>
                <ul className="space-y-2 text-dark-800">
                  <li>Monday - Friday: 7:00 AM - 9:00 PM</li>
                  <li>Saturday & Sunday: 10:00 AM - 6:00 PM</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark-200 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-serif font-semibold text-gold-500 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-dark-800 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-100 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-dark-900"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-dark-800 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-100 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-dark-900"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark-800 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark-100 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-dark-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-dark-50 py-3 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  <span>Send Message</span>
                </button>

                {formStatus === 'success' && (
                  <p className="text-green-500 mt-4">✅ Your message has been sent!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-500 mt-4">❌ Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

