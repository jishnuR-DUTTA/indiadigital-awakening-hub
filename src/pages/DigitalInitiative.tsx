
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink, Mail, Calendar, Building } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

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
    keyHighlights?: string[];
    relatedImages?: string[];
    useCases?: { title: string; description: string }[];
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
    organization: "Ministry of Electronics & Information Technology",
    keyHighlights: [
      "ISO 27001 certified for Information Security",
      "API integration with multiple government services",
      "Paperless KYC solutions for businesses and institutions",
      "Supports 2048-bit encryption for document security"
    ],
    useCases: [
      { title: "Education", description: "Storage and verification of educational certificates, marksheets, and degrees." },
      { title: "Vehicle Registration", description: "Digital copies of vehicle registration certificates and driving licenses." },
      { title: "Banking & Finance", description: "eKYC and paperless account opening using verified documents." }
    ]
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
    organization: "National Payments Corporation of India (NPCI)",
    keyHighlights: [
      "Integrated with over 200 banks across India",
      "International expansion to Singapore, UAE, and other countries",
      "NPCI's UPI 2.0 introduced auto-debit feature and invoice in the inbox",
      "Tokenization support for secure transactions"
    ],
    useCases: [
      { title: "Merchant Payments", description: "Quick and secure payment for in-store and online purchases." },
      { title: "Peer-to-Peer Transfers", description: "Instant money transfers between friends and family." },
      { title: "Bill Payments", description: "Payment of utility bills, subscriptions, and other regular expenses." }
    ]
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
    organization: "Unique Identification Authority of India (UIDAI)",
    keyHighlights: [
      "World's largest biometric ID system",
      "Secured with 2048-bit PKI encryption",
      "VID (Virtual ID) for enhanced privacy",
      "Face authentication for senior citizens with fingerprint/iris challenges"
    ],
    useCases: [
      { title: "Government Benefits", description: "Direct transfer of subsidies and benefits to eligible citizens." },
      { title: "Financial Inclusion", description: "Opening bank accounts and accessing financial services." },
      { title: "Healthcare", description: "Identification for healthcare services and insurance claims." }
    ]
  },
  "umang": {
    title: "UMANG",
    logo: "https://web.umang.gov.in/assets/images/UMANG_logo.svg",
    description: "UMANG (Unified Mobile Application for New-age Governance) is a unified platform to provide single point access to major government services. It integrates with core government services of various government departments and centralizes all government services for citizens.",
    features: [
      "Single platform for multiple government services",
      "Available in 13 Indian languages",
      "Service discovery based on location",
      "Digital payments integration",
      "Profile management",
      "Document wallet"
    ],
    stats: [
      { label: "Available Services", value: "20,000+" },
      { label: "Departments Connected", value: "200+" },
      { label: "App Downloads", value: "40 Million+" }
    ],
    leaderInfo: {
      name: "Mr. Nand Kumaram",
      title: "P&CEO, National e-Governance Division (NeGD)",
      email: "ceo-negd@digitalindia.gov.in"
    },
    websiteUrl: "https://web.umang.gov.in",
    launchYear: "2017",
    organization: "Ministry of Electronics & Information Technology",
    keyHighlights: [
      "ISO 27001 certified for information security",
      "Available on Android, iOS, and web platforms",
      "Unified search for discovering services",
      "Voice-enabled services for accessibility"
    ],
    useCases: [
      { title: "Utility Bill Payments", description: "Pay electricity, water, and gas bills through a single interface." },
      { title: "Pension Services", description: "Track pension status and access related documents." },
      { title: "Education", description: "Apply for scholarships and check exam results." }
    ]
  },
  "esanjeevani": {
    title: "eSanjeevani",
    logo: "https://esanjeevani.mohfw.gov.in/assets/img/eSanjLogo.png",
    description: "eSanjeevani is India's telemedicine platform for virtual healthcare consultations. It enables patient-to-doctor teleconsultations via video conferencing, helping citizens access healthcare services from the comfort of their homes.",
    features: [
      "Free teleconsultation service",
      "Patient registration and appointment booking",
      "Video consultation with doctors",
      "Electronic health records management",
      "Digital prescription generation",
      "Integration with health ID (ABHA)"
    ],
    stats: [
      { label: "Total Consultations", value: "150 Million+" },
      { label: "Health Centers Connected", value: "26,000+" },
      { label: "Doctors Onboarded", value: "115,000+" }
    ],
    leaderInfo: {
      name: "Mr. Magesh Ethirajan",
      title: "DG, C-DAC",
      email: "dg@cdac.in"
    },
    websiteUrl: "https://esanjeevani.mohfw.gov.in",
    launchYear: "2020",
    organization: "Ministry of Health & Family Welfare",
    keyHighlights: [
      "Largest telemedicine implementation in the world",
      "Operates in hub and spoke model for specialist consultations",
      "Available in multiple Indian languages",
      "Built-in scheduling and queue management system"
    ],
    useCases: [
      { title: "Primary Healthcare", description: "Basic health consultations without visiting a clinic." },
      { title: "Specialist Consultation", description: "Access to specialists in remote areas." },
      { title: "Chronic Disease Management", description: "Regular follow-ups for patients with chronic conditions." }
    ]
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
      
      <main className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#digital-initiatives">Digital Initiatives</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-brand-orange">{initiative.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="initiative-card mb-10">
            <div className="initiative-header">
              <img 
                src={initiative.logo} 
                alt={initiative.title} 
                className="initiative-logo"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{initiative.title}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Launched: {initiative.launchYear}</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{initiative.organization}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="initiative-card mb-8">
                <h2 className="text-2xl font-bold text-white p-6 border-b border-brand-gray">Overview</h2>
                <div className="initiative-content">
                  <p className="mb-6">{initiative.description}</p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <ul className="list-disc pl-5 mb-8 space-y-2">
                    {initiative.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  {initiative.keyHighlights && (
                    <>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Highlights</h3>
                      <ul className="list-disc pl-5 mb-8 space-y-2">
                        {initiative.keyHighlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {initiative.useCases && (
                    <>
                      <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                      <div className="space-y-4 mb-8">
                        {initiative.useCases.map((useCase, index) => (
                          <div key={index} className="bg-brand-dark p-4 rounded-lg">
                            <h4 className="text-lg font-medium text-brand-orange mb-2">{useCase.title}</h4>
                            <p>{useCase.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  
                  <div className="mt-6">
                    <a 
                      href={initiative.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-orange text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all inline-flex items-center"
                    >
                      Visit Official Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="initiative-card">
                <h2 className="text-xl font-bold text-white p-6 border-b border-brand-gray">Key Statistics</h2>
                <div className="p-6 space-y-4">
                  {initiative.stats.map((stat, index) => (
                    <div key={index} className="initiative-stats">
                      <div className="text-sm text-gray-400">{stat.label}</div>
                      <div className="text-2xl font-bold text-brand-orange">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="initiative-card">
                <h2 className="text-xl font-bold text-white p-6 border-b border-brand-gray">Leadership</h2>
                <div className="p-6">
                  <div className="initiative-leader">{initiative.leaderInfo.name}</div>
                  <div className="text-sm text-gray-300 mb-3">{initiative.leaderInfo.title}</div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${initiative.leaderInfo.email}`} className="hover:text-brand-orange transition-colors">
                      {initiative.leaderInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="initiative-card">
                <h2 className="text-xl font-bold text-white p-6 border-b border-brand-gray">Quick Links</h2>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li>
                      <Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors flex items-center">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-gray-300 hover:text-brand-orange transition-colors flex items-center">
                        <span className="h-4 w-4 mr-2">•</span>
                        About Digital India
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-gray-300 hover:text-brand-orange transition-colors flex items-center">
                        <span className="h-4 w-4 mr-2">•</span>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
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
