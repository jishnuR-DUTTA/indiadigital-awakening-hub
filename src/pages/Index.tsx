
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import CounterAnimation from '../components/CounterAnimation';
import DigitalInitiativeCard from '../components/DigitalInitiativeCard';
import { Users, CreditCard, CheckCircle } from 'lucide-react';

// Sample slideshow images
const slideshowImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
];

// Digital initiatives data
const digitalInitiatives = [
  {
    name: "Aadhaar",
    logo: "https://uidai.gov.in/images/logo/aadhaar_english_logo.svg",
    description: "Aadhaar is India's biometric-based digital identity system.",
    leader: "Shri Bhuvnesh Kumar, CEO of UIDAI",
    email: "ceo@uidai.gov.in",
    link: "/digital-goods/aadhaar"
  },
  {
    name: "Unified Payments Interface (UPI)",
    logo: "https://www.npci.org.in/assets/images/Unified-Payment-Interface.svg",
    description: "UPI is India's real-time digital payment system.",
    leader: "Mr. Dilip Asbe, MD & CEO, NPCI",
    email: "ceo@npci.org.in",
    link: "/digital-goods/upi"
  },
  {
    name: "Co-WIN",
    logo: "https://www.cowin.gov.in/assets/images/cowin_logo.svg",
    description: "Co-WIN is India's digital vaccination management platform.",
    leader: "Ms. Deepti Gaur Mukerjee, CEO, NHA",
    email: "ceo.nha@nha.gov.in",
    link: "/digital-goods/co-win"
  },
  {
    name: "DigiLocker",
    logo: "https://www.digilocker.gov.in/assets/img/digilocker-1.png",
    description: "DigiLocker is a secure cloud-based document storage system.",
    leader: "Mr. Nand Kumaram, P&CEO, NeGD",
    email: "ceo-negd@digitalindia.gov.in",
    link: "/digital-goods/digilocker"
  },
  {
    name: "Aarogya Setu",
    logo: "https://www.aarogyasetu.gov.in/wp-content/themes/aarogyasetu/images/aarogya_logo.svg",
    description: "Aarogya Setu is India's contact tracing and health information app.",
    leader: "Mr. IPS Sethi, Director General, NIC",
    email: "dg@nic.in",
    link: "/digital-goods/aarogya-setu"
  },
  {
    name: "DIKSHA",
    logo: "https://diksha.gov.in/assets/images/logo.svg",
    description: "DIKSHA is an e-learning platform for teachers and students.",
    leader: "Dr. Amarendra P. Behera, Joint Director, NCERT",
    email: "jdciet.ncert@nic.in",
    link: "/digital-goods/diksha"
  },
  {
    name: "UMANG",
    logo: "https://web.umang.gov.in/assets/images/UMANG_logo.svg",
    description: "UMANG is a unified mobile app for accessing e-governance services.",
    leader: "Mr. Nand Kumaram, P&CEO, NeGD",
    email: "ceo-negd@digitalindia.gov.in",
    link: "/digital-goods/umang"
  },
  {
    name: "eSanjeevani",
    logo: "https://esanjeevani.mohfw.gov.in/assets/img/eSanjLogo.png",
    description: "eSanjeevani is India's telemedicine platform for virtual healthcare consultations.",
    leader: "Mr. Magesh Ethirajan, DG, C-DAC",
    email: "dg@cdac.in",
    link: "/digital-goods/e-sanjeevani"
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-dark to-brand-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  India's Digital <span className="text-brand-orange">Awakening</span>
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Your gateway to digital transformation. We showcase groundbreaking
                  initiatives revolutionizing governance, finance,
                  healthcare, and more. From UPI to DigiLocker,
                  explore how technology enhances accessibility,
                  security, and efficiency. Stay informed on
                  innovations shaping the future.
                </p>
                <a 
                  href="#digital-initiatives" 
                  className="bg-brand-orange text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all inline-block"
                >
                  Explore Initiatives
                </a>
              </div>
              <div className="h-64 md:h-96">
                <Slideshow images={slideshowImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Impact <span className="text-brand-orange">in Numbers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CounterAnimation 
                end={1350} 
                label="Million Aadhaar Cards" 
                icon={<Users size={36} />}
              />
              <CounterAnimation 
                end={74} 
                label="Billion UPI Transactions" 
                icon={<CreditCard size={36} />}
              />
              <CounterAnimation 
                end={218} 
                label="Million Vaccinations via Co-WIN" 
                icon={<CheckCircle size={36} />}
              />
            </div>
          </div>
        </section>

        {/* Digital Initiatives Section */}
        <section id="digital-initiatives" className="py-16 bg-gradient-to-b from-brand-dark to-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Digital <span className="text-brand-orange">Public Infrastructure</span>
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Explore India's key digital initiatives that are transforming lives and governance 
              across the nation. Hover over each card to learn more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalInitiatives.map((initiative, index) => (
                <DigitalInitiativeCard
                  key={index}
                  name={initiative.name}
                  logo={initiative.logo}
                  description={initiative.description}
                  leader={initiative.leader}
                  email={initiative.email}
                  link={initiative.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              <span className="text-brand-orange">Social</span> Media Updates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold">Digital India on Twitter</h3>
                </div>
                <div className="p-4 h-64 flex items-center justify-center">
                  <p className="text-gray-400 text-center">
                    Twitter feed currently unavailable. Please check back later.
                  </p>
                </div>
              </div>
              
              <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold">Digital India on Facebook</h3>
                </div>
                <div className="p-4 space-y-4 h-64 overflow-y-auto">
                  <div className="border-b border-brand-dark pb-4">
                    <p className="text-white text-sm mb-2">
                      भारत के हस्तशिल्प उत्पादों और स्थानीय कारीगरों का समर्थन करें। #VocalForLocal
                    </p>
                    <p className="text-gray-400 text-xs">Posted 2 days ago</p>
                  </div>
                  <div className="border-b border-brand-dark pb-4">
                    <p className="text-white text-sm mb-2">
                      स्वच्छ भारत अभियान के तहत "स्वभाव स्वच्छता" अभियान पर नई जानकारी। #SHS2024
                    </p>
                    <p className="text-gray-400 text-xs">Posted 3 days ago</p>
                  </div>
                  <div>
                    <p className="text-white text-sm mb-2">
                      डिजिटल इंडिया: सशक्त भारत, समृद्ध भारत। #DigitalIndia
                    </p>
                    <p className="text-gray-400 text-xs">Posted 1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
