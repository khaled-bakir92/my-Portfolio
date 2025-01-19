import React, { useState, useCallback } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

const PUBLIC_KEY = 'BFeVe5UinNc-F5DF_';
const SERVICE_ID = 'service_ftz2y3b';
const TEMPLATE_ID = 'template_g3iqpzk';

emailjs.init(PUBLIC_KEY);

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
    to_name: 'Khaled'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setShowAlert(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', message: '', to_name: 'Khaled' });
      setShowAlert(true);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[#213555]">
      <div className="section-container relative">
        <div className="max-w-5xl ">
          <h2 className="font-bold text-[#D8C4B6] text-3xl sm:text-4xl md:text-5xl flex items-center gap-4 lg:mb-16 ">
            Kontakt
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Illustration - Shown on top for mobile */}
            <div className="lg:hidden w-full h-[300px]">
              <img
                src="/images/kontakt1.svg"
                alt="Modern workspace with laptop and coffee - Contact section illustration"
                loading="lazy"
                width="800"
                height="300"
                className="w-full h-full object-conataint rounded-2xl "
              />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2 rounded-2xl pt-0 pr-8 pb-8 pl-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium  text-white">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-300" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder="Max Mustermann"
                      className="block w-full pl-10 pr-3 py-3 border border-[#D8C4B6] rounded-lg bg-transparent
                        focus:outline-none focus:ring-2 focus:ring-[#415370] focus:border-transparent
                        placeholder:text-gray-400 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-300" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      placeholder="max-mustermann@gmail.com"
                      className="block w-full pl-10 pr-3 py-3 border border-[#D8C4B6] rounded-lg bg-transparent
                        focus:outline-none focus:ring-2 focus:ring-[#415370] focus:border-transparent
                        placeholder:text-gray-400 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute left-0 top-3 pl-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-300" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Your message here..."
                      className="block w-full pl-10 pr-3 py-3 border border-[#D8C4B6] rounded-lg bg-transparent
                        focus:outline-none focus:ring-2 focus:ring-[#415370] focus:border-transparent
                        placeholder:text-gray-400 resize-none text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-2 border-[#D8C4B6] text-white py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg font-medium
                    flex items-center justify-center gap-2 hover:bg-[#415370] hover:text-[#D8C4B6] transition-colors
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#415370]
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="h-4 sm:h-5 w-4 sm:w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 sm:h-5 w-4 sm:w-5" />
                    </>
                  )}
                </button>

                <Alert
                  type={submitStatus === 'success' ? 'success' : 'error'}
                  message={
                    submitStatus === 'success'
                      ? 'Erfolgreich gesendet!'
                      : 'Fehler beim Senden'
                  }
                  subMessage={
                    submitStatus === 'success'
                      ? 'Ihre Nachricht wurde erfolgreich übermittelt.'
                      : 'Bitte versuchen Sie es später erneut.'
                  }
                  isOpen={showAlert}
                  onClose={() => {
                    setShowAlert(false);
                    setSubmitStatus('idle');
                  }}
                />
              </form>
            </div>

            {/* Illustration */}
            <div className="hidden lg:block lg:w-1/2 h-[500px]">
              <img
                src="/images/kontakt1.svg"
                alt="Modern workspace with laptop and coffee - Contact section illustration"
                loading="lazy"
                width="1000"
                height="500"
                className="w-full h-full object-contain rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;