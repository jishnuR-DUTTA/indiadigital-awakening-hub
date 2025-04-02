
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

interface InitiativeData {
  [key: string]: {
    title: string;
    logo: string;
    description: string;
    features: string[];
    stats: { label: string; value: string }[];
    leaderInfo: {
      name: string;
      title: string;
      email: string;
    };
    websiteUrl: string;
    launchYear: string;
    organization: string;
  };
}

// This would ideally come from an API or a more complete data source
const initiativeData: InitiativeData = {
  "digilocker": {
    title: "DigiLocker",
    logo: "https://www.digilocker.gov.in/assets/img/digilocker-1.png",
    description: "DigiLocker is a flagship initiative under Digital India program. It aims at 'Digital Empowerment' of citizens by providing access to authentic digital documents in a citizen's digital document wallet. The issued documents in DigiLocker system are deemed to be at par with original physical documents.",
    features: [
      "Secure cloud-based platform for storage, sharing and verification of documents & certificates",
      "Reduced administrative overhead of government departments",
      "Easy access to verified documents for citizens",
      "Minimized use of physical documents",
      "Ensuring authenticity of the documents through issuer",
      "Electronic workflow for e-signing documents"
    ],
    stats: [
      { label: "Registered Users", value: "100 Million+" },
      { label: "Issued Documents", value: "4.9 Billion+" },
      { label: "Authentic Documents", value: "1.7 Billion+" }
    ],
    leaderInfo: {
      name: "Mr. Nand Kumaram",
      title: "CEO, National e-Governance Division (NeGD)",
      email: "ceo-negd@digitalindia.gov.in"
    },
    websiteUrl: "https://www.digilocker.gov.in",
    launchYear: "2015",
    organization: "Ministry of Electronics & Information Technology"
  },
  "upi": {
    title: "Unified Payments Interface (UPI)",
    logo: "https://www.npci.org.in/assets/images/Unified-Payment-Interface.svg",
    description: "Unified Payments Interface (UPI) is a system that powers multiple bank accounts into a single mobile application (of any participating bank), merging several banking features, seamless fund routing & merchant payments into one hood. It also caters to the 'Peer to Peer' collect request which can be scheduled and paid as per requirement and convenience.",
    features: [
      "Immediate money transfer through mobile device",
      "Single mobile application for accessing different bank accounts",
      "Single Click 2 Factor Authentication",
      "QR Code based payments",
      "Merchant Payment with Single Application or In-App-Payments",
      "Scheduling Payments",
      "Utility Bills Shared Payment"
    ],
    stats: [
      { label: "Monthly Transactions", value: "8.7 Billion+" },
      { label: "Transaction Value", value: "₹14.3 Trillion+" },
      { label: "Participating Banks", value: "358+" }
    ],
    leaderInfo: {
      name: "Mr. Dilip Asbe",
      title: "MD & CEO, National Payments Corporation of India (NPCI)",
      email: "ceo@npci.org.in"
    },
    websiteUrl: "https://www.npci.org.in",
    launchYear: "2016",
    organization: "National Payments Corporation of India (NPCI)"
  },
  "aadhaar": {
    title: "Aadhaar",
    logo: "https://uidai.gov.in/images/logo/aadhaar_english_logo.svg",
    description: "Aadhaar is a 12-digit unique identity number that can be obtained by residents of India, based on their biometric and demographic data. The data is collected by the Unique Identification Authority of India (UIDAI), a statutory authority established by the Government of India under the Ministry of Electronics and Information Technology.",
    features: [
      "Unique 12-digit identification number",
      "Biometric authentication (fingerprint, iris scan)",
      "Demographic information collection",
      "Bank account linkage",
      "e-KYC services",
      "Online verification capabilities"
    ],
    stats: [
      { label: "Total Aadhaar Generated", value: "1.35 Billion+" },
      { label: "Daily Authentications", value: "70 Million+" },
      { label: "Saturation Level", value: "99.9% (Adult Population)" }
    ],
    leaderInfo: {
      name: "Shri Bhuvnesh Kumar",
      title: "CEO, Unique Identification Authority of India (UIDAI)",
      email: "ceo@uidai.gov.in"
    },
    websiteUrl: "https://uidai.gov.in",
    launchYear: "2009",
    organization: "Unique Identification Authority of India (UIDAI)"
  }
};

const DigitalInitiative: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Default to digilocker if id is undefined
  const initiativeId = id || "digilocker";
  
  // Check if data exists for this initiative
  const initiative = initiativeData[initiativeId];
  
  if (!initiative) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-dark">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Initiative Not Found</h1>
            <p className="text-gray-300 mb-8">The digital initiative you're looking for doesn't exist in our database yet.</p>
            <Link to="/" className="bg-brand-orange text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-brand-orange hover:text-brand-orange/80 inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-brand-gray rounded-lg overflow-hidden shadow-xl mb-10">
            <div className="bg-gradient-to-r from-brand-dark to-brand-gray p-8 flex flex-col md:flex-row items-center">
              <img 
                src={initiative.logo} 
                alt={initiative.title} 
                className="w-32 h-32 object-contain bg-white rounded-lg p-2 mb-6 md:mb-0 md:mr-8"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{initiative.title}</h1>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="inline-block mr-4">
                    <strong>Launched:</strong> {initiative.launchYear}
                  </span>
                  <span>
                    <strong>Organization:</strong> {initiative.organization}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-brand-gray rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-gray-300 mb-6">{initiative.description}</p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-2">
                  {initiative.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a 
                    href={initiative.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-orange text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all inline-block"
                  >
                    Visit Official Website
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-brand-gray rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Key Statistics</h2>
                
                <div className="space-y-4">
                  {initiative.stats.map((stat, index) => (
                    <div key={index} className="border-b border-brand-dark pb-3 last:border-0 last:pb-0">
                      <div className="text-sm text-gray-400">{stat.label}</div>
                      <div className="text-2xl font-bold text-brand-orange">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-brand-gray rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Leadership</h2>
                
                <div>
                  <div className="text-lg font-semibold text-brand-orange">{initiative.leaderInfo.name}</div>
                  <div className="text-sm text-gray-300 mb-2">{initiative.leaderInfo.title}</div>
                  <div className="text-sm text-gray-400">
                    <strong>Contact:</strong> {initiative.leaderInfo.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalInitiative;
