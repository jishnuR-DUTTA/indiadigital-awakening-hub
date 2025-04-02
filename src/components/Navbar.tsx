
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

// Organize digital initiatives by category
const digitalInitiativesByCategory = {
  FINANCIAL: [
    { name: 'Unified Payments Interface (UPI)', path: '/digital-goods/upi' },
    { name: 'GeM', path: '/digital-goods/gem' },
    { name: 'FASTag', path: '/digital-goods/fastag' },
    { name: 'eNAM', path: '/digital-goods/enam' },
  ],
  HEALTH: [
    { name: 'Aarogya Setu', path: '/digital-goods/aarogya-setu' },
    { name: 'eSanjeevani', path: '/digital-goods/esanjeevani' },
    { name: 'Poshan Tracker', path: '/digital-goods/poshan-tracker' },
    { name: 'Co-WIN', path: '/digital-goods/co-win' },
    { name: 'e-Hospital', path: '/digital-goods/e-hospital' },
    { name: 'NCD Platform', path: '/digital-goods/ncd-platform' },
    { name: 'Ayushman Bharat Digital Mission', path: '/digital-goods/abdm' },
  ],
  IDENTITY: [
    { name: 'DigiLocker', path: '/digital-goods/digilocker' },
    { name: 'SIDH', path: '/digital-goods/sidh' },
    { name: 'Aadhaar', path: '/digital-goods/aadhaar' },
    { name: 'DigiYatra', path: '/digital-goods/digiyatra' },
    { name: 'Passport Seva', path: '/digital-goods/passport-seva' },
  ],
  EDUCATION: [
    { name: 'DIKSHA', path: '/digital-goods/diksha' },
    { name: 'SWAYAM', path: '/digital-goods/swayam' },
    { name: 'National Digital Library', path: '/digital-goods/ndl' },
  ],
  GOVERNANCE: [
    { name: 'UMANG', path: '/digital-goods/umang' },
    { name: 'API Setu', path: '/digital-goods/api-setu' },
    { name: 'e-Courts', path: '/digital-goods/e-courts' },
    { name: 'e-Office', path: '/digital-goods/e-office' },
    { name: 'BharatNet', path: '/digital-goods/bharatnet' },
    { name: 'PM-WANI', path: '/digital-goods/pm-wani' },
    { name: 'CERT-In', path: '/digital-goods/cert-in' },
    { name: 'Parivahan Sewa', path: '/digital-goods/parivahan-sewa' },
    { name: 'VAHAN & SARATHI', path: '/digital-goods/vahan-sarathi' },
    { name: 'Kisan Suvidha', path: '/digital-goods/kisan-suvidha' },
    { name: 'RAPDRP', path: '/digital-goods/rapdrp' },
  ]
};

// Create a flat list of all initiatives for the mobile menu
const allInitiatives = Object.values(digitalInitiativesByCategory).flat();

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-brand-dark border-b border-brand-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-xl">India Digital Awakening Hub</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-brand-gray transition-colors ${
                location.pathname === '/' ? 'bg-brand-gray text-brand-orange' : ''
              }`}
            >
              Home
            </Link>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-brand-gray transition-colors flex items-center ${
                  location.pathname.includes('/digital-goods') ? 'bg-brand-gray text-brand-orange' : ''
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
              >
                Digital Global Goods
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="categorized-dropdown"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {Object.entries(digitalInitiativesByCategory).map(([category, initiatives]) => (
                    <div key={category} className="category-column">
                      <h3 className="category-title">{category}</h3>
                      {initiatives.map((initiative, index) => (
                        <Link 
                          key={index} 
                          to={initiative.path}
                          className={`category-item ${
                            location.pathname === initiative.path ? 'text-brand-orange' : ''
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {initiative.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-brand-gray transition-colors ${
                location.pathname === '/about' ? 'bg-brand-gray text-brand-orange' : ''
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-brand-gray transition-colors ${
                location.pathname === '/contact' ? 'bg-brand-gray text-brand-orange' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-gray focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-gray ${
                location.pathname === '/' ? 'bg-brand-gray text-brand-orange' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Categories */}
            {Object.entries(digitalInitiativesByCategory).map(([category, initiatives]) => (
              <div key={category} className="relative">
                <button 
                  onClick={() => setMobileCategoryOpen(mobileCategoryOpen === category ? null : category)}
                  className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-gray flex items-center justify-between ${
                    initiatives.some(item => location.pathname === item.path) ? 'bg-brand-gray text-brand-orange' : ''
                  }`}
                >
                  <span>{category}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCategoryOpen === category ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileCategoryOpen === category && (
                  <div className="pl-4 max-h-[50vh] overflow-y-auto">
                    {initiatives.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path}
                        className={`block px-3 py-1.5 rounded-md text-sm font-medium text-gray-300 hover:text-brand-orange hover:bg-brand-gray ${
                          location.pathname === item.path ? 'bg-brand-gray/50 text-brand-orange' : ''
                        }`}
                        onClick={() => {
                          setMobileCategoryOpen(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-gray ${
                location.pathname === '/about' ? 'bg-brand-gray text-brand-orange' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-gray ${
                location.pathname === '/contact' ? 'bg-brand-gray text-brand-orange' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
