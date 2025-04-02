
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">
              About <span className="text-brand-orange">Us</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover the vision and mission behind India Digital Awakening Hub
            </p>
          </div>
          
          <div className="bg-brand-gray rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-8">
              To be the premier resource for information and insights about India's digital transformation 
              journey, empowering citizens and organizations to effectively leverage digital public
              infrastructure for inclusive growth and innovation.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-8">
              To showcase and explain India's digital public infrastructure initiatives, foster digital 
              literacy, and promote the adoption of digital solutions across all segments of society.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-dark p-6 rounded-lg border border-brand-gray">
                <h3 className="text-xl font-semibold text-brand-orange mb-2">Information Hub</h3>
                <p className="text-gray-300">
                  We provide comprehensive, up-to-date information about India's digital initiatives,
                  making complex technological concepts accessible to everyone.
                </p>
              </div>
              
              <div className="bg-brand-dark p-6 rounded-lg border border-brand-gray">
                <h3 className="text-xl font-semibold text-brand-orange mb-2">Awareness Building</h3>
                <p className="text-gray-300">
                  We raise awareness about the benefits and usage of digital platforms and services
                  that are transforming citizen-government interactions.
                </p>
              </div>
              
              <div className="bg-brand-dark p-6 rounded-lg border border-brand-gray">
                <h3 className="text-xl font-semibold text-brand-orange mb-2">Impact Tracking</h3>
                <p className="text-gray-300">
                  We monitor and report on the impact of digital initiatives on governance,
                  economy, and society through data-driven insights.
                </p>
              </div>
              
              <div className="bg-brand-dark p-6 rounded-lg border border-brand-gray">
                <h3 className="text-xl font-semibold text-brand-orange mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We facilitate connections between stakeholders to accelerate digital adoption
                  and foster innovation in the digital ecosystem.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-300 mb-4">
              The India Digital Awakening Hub is managed by a dedicated team of professionals with
              expertise in technology, policy, communications, and public administration. We work
              closely with government agencies, technology partners, and civil society organizations
              to provide accurate and relevant information.
            </p>
            <p className="text-gray-300">
              Our team is committed to the principles of transparency, inclusivity, and innovation
              in all our activities and operations.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
