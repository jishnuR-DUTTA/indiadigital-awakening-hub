
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">
              Contact <span className="text-brand-orange">Us</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Get in touch with our team for inquiries, partnerships, or feedback
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brand-gray rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-brand-orange p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">contact@indiadigitalhub.gov.in</p>
              <p className="text-gray-300">support@indiadigitalhub.gov.in</p>
            </div>
            
            <div className="bg-brand-gray rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-brand-orange p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 11 2430 1900</p>
              <p className="text-gray-300">Toll Free: 1800 111 555</p>
            </div>
            
            <div className="bg-brand-gray rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-brand-orange p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Electronics Niketan, 6 CGO Complex</p>
              <p className="text-gray-300">Lodhi Road, New Delhi - 110003</p>
            </div>
          </div>
          
          <div className="bg-brand-gray rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark border border-brand-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark border border-brand-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-brand-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-brand-dark border border-brand-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-brand-orange text-white px-8 py-3 rounded-md hover:bg-opacity-80 transition-all inline-flex items-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
