
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-dark pt-8">
      {/* Collaboration Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 p-8 rounded-t-lg mx-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-white text-xl mb-2">Need a successful national-level project?</p>
          <p className="text-white text-3xl font-bold mb-4">Let's Collaborate Together</p>
          <Link to="/contact" className="bg-black text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition-all inline-block">
            Connect with Us
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-xl font-bold mb-2">India Digital Awakening Hub</h3>
            <p className="text-gray-400">Your gateway to India's digital transformation</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-brand-gray pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024. All rights reserved by NeGD under MeitY, Government of India.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
                Terms of Use
              </Link>
              <Link to="/website-policy" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
                Website Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-400 text-sm">
            <div>Total Visitors: 5,522,273</div>
            <div>Today's Visitors: 7,601</div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-brand-orange p-3 rounded-full text-white shadow-lg hover:bg-opacity-80 transition-all"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
