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
  },
  "api-setu": {
    title: "API Setu",
    logo: "https://www.meity.gov.in/sites/upload_files/dit/files/Logo-1.jpg",
    description: "API Setu provides a simple, standard way to integrate with various government platforms and services. It enables access to government data and services through well-defined interfaces and reduces the effort needed for such integration.",
    features: [
      "Standardized API gateway for government services",
      "Simplified integration with government platforms",
      "Secure access to government data",
      "Reduced development and integration time",
      "Unified authentication mechanism",
      "API versioning and management"
    ],
    stats: [
      { label: "APIs Available", value: "1,000+" },
      { label: "Digital Transactions", value: "5 Billion+" },
      { label: "Departments Connected", value: "75+" }
    ],
    leaderInfo: {
      name: "Dr. Neeta Verma",
      title: "Director General, National Informatics Centre (NIC)",
      email: "dg@nic.in"
    },
    websiteUrl: "https://www.nic.in",
    launchYear: "2018",
    organization: "National Informatics Centre (NIC), MeitY",
    keyHighlights: [
      "Facilitates API-based integration with government services",
      "Enables secure exchange of data between different departments",
      "Provides centralized documentation and discovery of APIs",
      "Standardized SDKs for multiple programming languages"
    ],
    useCases: [
      { title: "e-Governance", description: "Integration of various government applications for cohesive service delivery." },
      { title: "Digital Documentation", description: "Verification and authentication of documents across platforms." },
      { title: "Private Sector Integration", description: "Enabling businesses to connect with government services." }
    ]
  },
  "e-courts": {
    title: "e-Courts",
    logo: "https://www.ecourts.gov.in/ecourts_home/static/images/logo/logo.png",
    description: "e-Courts is a mission mode project under the National e-Governance Plan (NeGP), aimed at improving the judicial system by enabling courts to enhance judicial productivity, make the justice delivery system affordable, accessible, transparent and accountable.",
    features: [
      "Case Information System (CIS)",
      "National Judicial Data Grid (NJDG)",
      "e-Filing of cases",
      "e-Payment of court fees",
      "SMS and email notification services",
      "Virtual Courts"
    ],
    stats: [
      { label: "Cases Digitized", value: "110 Million+" },
      { label: "Courts Connected", value: "18,000+" },
      { label: "Monthly e-Filings", value: "300,000+" }
    ],
    leaderInfo: {
      name: "Hon. Justice D.Y. Chandrachud",
      title: "Chief Justice of India & Chairman, e-Committee, Supreme Court of India",
      email: "ecommittee@aij.gov.in"
    },
    websiteUrl: "https://www.ecourts.gov.in",
    launchYear: "2007",
    organization: "Department of Justice, Ministry of Law and Justice",
    keyHighlights: [
      "Computerization of all district and subordinate courts",
      "Facilitation of online access to case status and judgments",
      "Implementation of Video Conferencing in courts",
      "Mobile applications for litigants and lawyers"
    ],
    useCases: [
      { title: "Case Management", description: "Digital filing, tracking and management of court cases." },
      { title: "Remote Hearings", description: "Conducting court proceedings through video conferencing." },
      { title: "Legal Research", description: "Online access to judgments and case laws for legal professionals." }
    ]
  },
  "sidh": {
    title: "Secure Internet Digital Highway (SIDH)",
    logo: "https://assets.website-files.com/618a5f4d82acbb22b7b6a2b4/61e7c96c1b2caa2dcbbeb1f3_Logo.svg",
    description: "SIDH is a secure and dedicated network established to provide a reliable, efficient and secure means of communication for government departments and agencies, facilitating the secure exchange of information and seamless access to various digital services.",
    features: [
      "Secured and encrypted data transmission",
      "High-speed connectivity across government offices",
      "Dedicated network infrastructure",
      "24/7 monitoring and threat protection",
      "Disaster recovery and business continuity",
      "Centralized network management"
    ],
    stats: [
      { label: "Government Offices Connected", value: "5,000+" },
      { label: "Daily Data Transferred", value: "50 TB+" },
      { label: "Security Incidents Prevented", value: "10,000+ monthly" }
    ],
    leaderInfo: {
      name: "Mr. Abhishek Singh",
      title: "CEO, National e-Governance Division (NeGD)",
      email: "ceo-negd@digitalindia.gov.in"
    },
    websiteUrl: "https://www.meity.gov.in",
    launchYear: "2016",
    organization: "Ministry of Electronics & Information Technology",
    keyHighlights: [
      "End-to-end encrypted communication channel",
      "Integrated with National Knowledge Network (NKN)",
      "Multi-layer security architecture",
      "Supports IPv6 and advanced networking protocols"
    ],
    useCases: [
      { title: "Secure Information Exchange", description: "Safe transmission of sensitive government data between departments." },
      { title: "e-Governance Applications", description: "Hosting critical applications with high security requirements." },
      { title: "Video Conferencing", description: "Secure platform for government meetings and conferences." }
    ]
  },
  "e-office": {
    title: "e-Office",
    logo: "https://eoffice.gov.in/images/nic-logo.png",
    description: "e-Office is a Mission Mode Project (MMP) under the National e-Governance Plan (NeGP), aimed at improving the operational efficiency of Government by transitioning to a paperless office through electronic management of records and workflow automation.",
    features: [
      "Electronic File Management System (e-File)",
      "Knowledge Management System (KMS)",
      "Collaborative tools for meetings and discussions",
      "Digital signatures integration",
      "Letter and dispatch management",
      "Employee services portal"
    ],
    stats: [
      { label: "Government Departments Using", value: "500+" },
      { label: "Files Processed Digitally", value: "15 Million+" },
      { label: "Paper Saved Annually", value: "12,000+ tons" }
    ],
    leaderInfo: {
      name: "Dr. Rajendra Kumar",
      title: "Additional Secretary, MeitY",
      email: "as-raj@meity.gov.in"
    },
    websiteUrl: "https://eoffice.gov.in",
    launchYear: "2011",
    organization: "National Informatics Centre (NIC)",
    keyHighlights: [
      "Reduction in paper usage and environmental impact",
      "Faster processing of government files and decisions",
      "Enhanced transparency and accountability",
      "Secure digital record management"
    ],
    useCases: [
      { title: "File Tracking", description: "Monitoring the movement and status of government files." },
      { title: "Approval Workflows", description: "Digital processing of administrative approvals and sanctions." },
      { title: "Document Repository", description: "Centralized storage and retrieval of official documents." }
    ]
  },
  "aarogya-setu": {
    title: "Aarogya Setu",
    logo: "https://www.aarogyasetu.gov.in/wp-content/uploads/2020/04/aarogya-setu-logo.png",
    description: "Aarogya Setu is a mobile application developed by the Government of India to connect essential health services with the people of India in our combined fight against COVID-19. The app is aimed at augmenting the initiatives of the Government of India, particularly the Department of Health, in proactively informing people about the best practices and relevant advisories pertaining to the containment of COVID-19.",
    features: [
      "Bluetooth-based contact tracing",
      "Self-assessment for COVID-19 symptoms",
      "Real-time risk assessment based on proximity",
      "COVID-19 updates and advisories",
      "e-Pass integration",
      "Vaccination registration and certificate"
    ],
    stats: [
      { label: "Downloads", value: "200 Million+" },
      { label: "Active Users", value: "50 Million+" },
      { label: "Alerts Generated", value: "10 Million+" }
    ],
    leaderInfo: {
      name: "Mr. Abhishek Singh",
      title: "CEO, MyGov",
      email: "ceo@mygov.in"
    },
    websiteUrl: "https://www.aarogyasetu.gov.in",
    launchYear: "2020",
    organization: "Ministry of Electronics & Information Technology and Ministry of Health",
    keyHighlights: [
      "Open source initiative for transparency",
      "Privacy-first design for user data protection",
      "Multiple language support for wider accessibility",
      "Integration with COWIN platform for vaccination"
    ],
    useCases: [
      { title: "Contact Tracing", description: "Identifying potential exposure to COVID-19 positive cases." },
      { title: "Health Services", description: "Access to telehealth consultations and health resources." },
      { title: "Travel Authorization", description: "Generation of e-passes for travel during restrictions." }
    ]
  },
  "co-win": {
    title: "Co-WIN",
    logo: "https://www.cowin.gov.in/assets/images/Covid19Logo.jpg",
    description: "Co-WIN (COVID-19 Vaccine Intelligence Network) is a robust, scalable, and inclusive digital platform developed by the Government of India to facilitate, monitor, and manage the nationwide COVID-19 vaccination program. It serves as the technological backbone for India's vaccination drive, enabling citizens to register, schedule appointments, and receive digital vaccination certificates.",
    features: [
      "Citizen registration and appointment scheduling",
      "Digital vaccination certificates",
      "Real-time dashboard of vaccination stats",
      "Adverse event reporting system",
      "QR-code based verification",
      "Multiple authentication methods"
    ],
    stats: [
      { label: "Registrations", value: "950 Million+" },
      { label: "Vaccinations Administered", value: "2 Billion+" },
      { label: "Vaccination Centers", value: "50,000+" }
    ],
    leaderInfo: {
      name: "Dr. R.S. Sharma",
      title: "Former CEO, National Health Authority",
      email: "ceo@nha.gov.in"
    },
    websiteUrl: "https://www.cowin.gov.in",
    launchYear: "2021",
    organization: "Ministry of Health & Family Welfare",
    keyHighlights: [
      "World's largest vaccination management platform",
      "APIs for third-party integration",
      "International recognition as a digital public good",
      "Built on open-source technologies"
    ],
    useCases: [
      { title: "Vaccine Management", description: "End-to-end management of the vaccination process from registration to certification." },
      { title: "Health Records", description: "Digital storage and access to vaccination certificates." },
      { title: "Analytics", description: "Real-time monitoring and analysis of vaccination coverage and progress." }
    ]
  },
  "diksha": {
    title: "DIKSHA",
    logo: "https://diksha.gov.in/assets/images/logo.png",
    description: "DIKSHA (Digital Infrastructure for Knowledge Sharing) is India's national digital learning platform for school education. It provides teachers, students, and parents with engaging learning material relevant to the prescribed school curriculum, including textbooks, video lessons, worksheets, and assessments.",
    features: [
      "Interactive digital content for all subjects",
      "QR-coded textbooks for easy access to resources",
      "Teacher training modules and certifications",
      "Content creation and collaboration tools",
      "Offline access to learning materials",
      "Analytics for learning progress"
    ],
    stats: [
      { label: "Registered Users", value: "165 Million+" },
      { label: "Content Pieces", value: "2 Million+" },
      { label: "States Onboarded", value: "36" }
    ],
    leaderInfo: {
      name: "Ms. Anita Karwal",
      title: "Secretary, Department of School Education & Literacy",
      email: "secy.sel@education.gov.in"
    },
    websiteUrl: "https://diksha.gov.in",
    launchYear: "2017",
    organization: "Ministry of Education",
    keyHighlights: [
      "Largest open digital learning platform in the world",
      "Supports 31 Indian languages",
      "Zero-rated access on multiple telecom networks",
      "Energized textbooks with QR codes linking to digital content"
    ],
    useCases: [
      { title: "Remote Learning", description: "Enabling continuity of education during school closures." },
      { title: "Teacher Professional Development", description: "Continuous capacity building and skill enhancement for teachers." },
      { title: "Parent Engagement", description: "Resources for parents to support children's learning at home." }
    ]
  },
  "gem": {
    title: "Government e-Marketplace (GeM)",
    logo: "https://assets-gem.s3.ap-south-1.amazonaws.com/resources/upload/shared/gem-new-logo.svg",
    description: "Government e-Marketplace (GeM) is an online platform for public procurement in India, which has been envisaged as a National Procurement Portal to provide an end-to-end solution for all procurement needs of Central and State Government departments, PSUs, autonomous institutions and local bodies.",
    features: [
      "Direct purchase and bidding functionality",
      "Seller rating and product comparison",
      "Price trends and market analysis",
      "E-payment and contract management",
      "Vendor management and assessment",
      "MIS reports and analytics"
    ],
    stats: [
      { label: "Registered Sellers", value: "4 Million+" },
      { label: "Products & Services", value: "10 Million+" },
      { label: "Transaction Value", value: "₹350,000 Crore+" }
    ],
    leaderInfo: {
      name: "Mr. Prashant Kumar Singh",
      title: "CEO, Government e-Marketplace",
      email: "ceo-gem@gov.in"
    },
    websiteUrl: "https://gem.gov.in",
    launchYear: "2016",
    organization: "Ministry of Commerce and Industry",
    keyHighlights: [
      "Transparent and efficient procurement system",
      "MSMEs empowerment through dedicated onboarding",
      "Integration with PFMS for seamless payments",
      "AI-driven analytics for better procurement decisions"
    ],
    useCases: [
      { title: "Government Procurement", description: "Online purchasing of goods and services by government departments." },
      { title: "Vendor Registration", description: "Onboarding of suppliers to offer products to government buyers." },
      { title: "Market Analysis", description: "Price comparison and product specification standardization." }
    ]
  },
  "e-hospital": {
    title: "e-Hospital",
    logo: "https://ehospital.gov.in/ehospital/images/ehospital_logo.png",
    description: "e-Hospital is a Hospital Management Information System (HMIS) that is a workflow-based ICT solution for hospitals specifically meant for healthcare enabling the hospitals to provide more efficient healthcare services. It helps in streamlining the treatment flow of patients in the hospital while tracking the workflow of the hospital electronically.",
    features: [
      "Patient registration and appointment scheduling",
      "Electronic Medical Records (EMR)",
      "Laboratory and Radiology Information Systems",
      "Pharmacy management",
      "Billing and insurance processing",
      "Hospital administration and inventory management"
    ],
    stats: [
      { label: "Hospitals Using", value: "350+" },
      { label: "Patient Records", value: "70 Million+" },
      { label: "Daily Appointments", value: "200,000+" }
    ],
    leaderInfo: {
      name: "Dr. Sanjay Bahl",
      title: "Director General, National Informatics Centre",
      email: "dg@nic.in"
    },
    websiteUrl: "https://ehospital.gov.in",
    launchYear: "2015",
    organization: "National Informatics Centre, MeitY",
    keyHighlights: [
      "Integration with the Ayushman Bharat Digital Mission",
      "Support for telemedicine and remote consultations",
      "Multi-language support for patient communication",
      "Mobile application for patient access"
    ],
    useCases: [
      { title: "Hospital Management", description: "Comprehensive management of hospital operations and patient care." },
      { title: "Patient Care", description: "Digital records for better continuity of care and treatment plans." },
      { title: "Healthcare Analytics", description: "Data-driven insights for healthcare planning and disease surveillance." }
    ]
  },
  "ncd-platform": {
    title: "NCD Platform",
    logo: "https://cdnasb.saas.awsms.com/asb/contentfiles/29/68/2968a69e3ab747a2a1c8b8d159b4a5f3.png",
    description: "The National Non-Communicable Disease (NCD) Platform is a digital initiative aimed at screening, prevention, control, and management of non-communicable diseases like diabetes, hypertension, and cancer in India. It enables population-based screening, referral, and follow-up care for NCDs across primary, secondary, and tertiary healthcare levels.",
    features: [
      "Digital screening tools for NCDs",
      "Risk assessment algorithms",
      "Referral management system",
      "Treatment protocols and guidelines",
      "Patient follow-up reminders",
      "Health worker mobile applications"
    ],
    stats: [
      { label: "Individuals Screened", value: "80 Million+" },
      { label: "Health Facilities Connected", value: "15,000+" },
      { label: "High-Risk Cases Identified", value: "12 Million+" }
    ],
    leaderInfo: {
      name: "Dr. Sujeet Kumar Singh",
      title: "Director, National Centre for Disease Control",
      email: "director-ncdc@gov.in"
    },
    websiteUrl: "https://ncdsc.mohfw.gov.in",
    launchYear: "2018",
    organization: "Ministry of Health & Family Welfare",
    keyHighlights: [
      "Integration with Ayushman Bharat Health & Wellness Centers",
      "AI-based risk prediction models",
      "Continuum of care from screening to treatment",
      "Training modules for healthcare workers"
    ],
    useCases: [
      { title: "Population Screening", description: "Large-scale screening of population for early detection of NCDs." },
      { title: "Clinical Decision Support", description: "Guidance for healthcare providers on NCD management protocols." },
      { title: "Patient Self-Management", description: "Tools for patients to monitor and manage their chronic conditions." }
    ]
  },
  "abdm": {
    title: "Ayushman Bharat Digital Mission",
    logo: "https://abdm.gov.in/assets/images/abdm_logo.svg",
    description: "Ayushman Bharat Digital Mission (ABDM) aims to develop the backbone necessary to support the integrated digital health infrastructure of India. It bridges the existing gap amongst different stakeholders of the Healthcare ecosystem through digital highways.",
    features: [
      "Health ID for every citizen",
      "Healthcare Professional Registry (HPR)",
      "Health Facility Registry (HFR)",
      "Personal Health Records (PHR) system",
      "Unified Health Interface (UHI)",
      "Consent framework for data sharing"
    ],
    stats: [
      { label: "ABHA IDs Created", value: "250 Million+" },
      { label: "Health Facilities Registered", value: "180,000+" },
      { label: "Health Professionals Registered", value: "80,000+" }
    ],
    leaderInfo: {
      name: "Mr. R.S. Sharma",
      title: "Former CEO, National Health Authority",
      email: "ceo@nha.gov.in"
    },
    websiteUrl: "https://abdm.gov.in",
    launchYear: "2021",
    organization: "National Health Authority",
    keyHighlights: [
      "National Digital Health Blueprint implementation",
      "Open standards and interoperability frameworks",
      "Privacy by design architecture",
      "Health data exchange protocols"
    ],
    useCases: [
      { title: "Digital Health Records", description: "Creation and management of longitudinal health records for citizens." },
      { title: "Health Information Exchange", description: "Secure sharing of health data between healthcare providers." },
      { title: "Telemedicine", description: "Remote delivery of healthcare services through digital channels." }
    ]
  },
  "bharatnet": {
    title: "BharatNet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bharat_Broadband_Network_Limited_Logo.png/800px-Bharat_Broadband_Network_Limited_Logo.png",
    description: "BharatNet is a project of national importance to establish, a highly scalable network infrastructure accessible on a non-discriminatory basis, to provide affordable broadband connectivity of 2 Mbps to 20 Mbps to all households and institutions in partnership with states and the private sector.",
    features: [
      "Fiber optic network to all Gram Panchayats",
      "Broadband connectivity in rural areas",
      "Network Operations Center (NOC)",
      "Last mile connectivity solutions",
      "Wi-Fi hotspots in villages",
      "Dark fiber availability for service providers"
    ],
    stats: [
      { label: "Gram Panchayats Connected", value: "1.7 Lakh+" },
      { label: "Optical Fiber Laid", value: "5.5 Lakh Km+" },
      { label: "Wi-Fi Hotspots", value: "1 Lakh+" }
    ],
    leaderInfo: {
      name: "Mr. Sarvesh Singh",
      title: "CMD, Bharat Broadband Network Limited (BBNL)",
      email: "cmd@bbnl.nic.in"
    },
    websiteUrl: "https://bbnl.nic.in",
    launchYear: "2012",
    organization: "Department of Telecommunications, Ministry of Communications",
    keyHighlights: [
      "World's largest rural broadband connectivity project",
      "Enables delivery of e-governance, e-health, e-education services",
      "Public-Private Partnership (PPP) model in implementation",
      "Supports Digital India vision"
    ],
    useCases: [
      { title: "Rural Connectivity", description: "Providing high-speed internet access to rural areas." },
      { title: "e-Governance Services", description: "Enabling digital service delivery in Gram Panchayats." },
      { title: "Digital Empowerment", description: "Bridging the digital divide between urban and rural India." }
    ]
  },
  "pm-wani": {
    title: "PM-WANI",
    logo: "https://dot.gov.in/sites/default/files/Logo%20of%20PM%20WANI%20Scheme.jpg",
    description: "PM-WANI (Wi-Fi Access Network Interface) is a framework aimed at proliferating broadband internet services through public Wi-Fi networks. It decentralizes the public Wi-Fi ecosystem by focusing on small entrepreneurs and micro, small and medium enterprises to establish, maintain, and operate Wi-Fi access points.",
    features: [
      "No license fee for providing public Wi-Fi services",
      "Simplified regulatory framework",
      "App-based authentication for users",
      "Single-click login through mobile phone",
      "Interoperability between public Wi-Fi networks",
      "Standardized payment gateways"
    ],
    stats: [
      { label: "Public Data Offices (PDOs)", value: "50,000+" },
      { label: "Active Wi-Fi Access Points", value: "200,000+" },
      { label: "Unique Users", value: "20 Million+" }
    ],
    leaderInfo: {
      name: "Mr. K. Rajaraman",
      title: "Secretary, Department of Telecommunications",
      email: "secy-dot@nic.in"
    },
    websiteUrl: "https://dot.gov.in/pm-wani",
    launchYear: "2020",
    organization: "Department of Telecommunications, Ministry of Communications",
    keyHighlights: [
      "Democratization of Wi-Fi service provision",
      "Last mile connectivity enhancement",
      "Employment generation through local entrepreneurs",
      "Advancement of 'Ease of Doing Business'"
    ],
    useCases: [
      { title: "Public Internet Access", description: "Affordable Wi-Fi connectivity in public spaces and commercial areas." },
      { title: "Digital Entrepreneurship", description: "Enabling small businesses to become Wi-Fi service providers." },
      { title: "Smart Cities", description: "Supporting public connectivity infrastructure in urban development." }
    ]
  },
  "cert-in": {
    title: "CERT-In",
    logo: "https://www.cert-in.org.in/CERT-In/images/certinlogo.png",
    description: "Indian Computer Emergency Response Team (CERT-In) is a functional organization of the Ministry of Electronics and Information Technology, Government of India, with the objective of securing Indian cyberspace. It collects, analyzes and disseminates information on cyber incidents, provides forecasts and alerts of cybersecurity incidents, takes emergency measures for handling cybersecurity incidents, and coordinates cyber incident response activities.",
    features: [
      "Cyber threat intelligence gathering and analysis",
      "Incident response coordination",
      "Security advisories and vulnerability notes",
      "Botnet cleaning and malware analysis center",
      "Critical information infrastructure protection",
      "Security audit and training programs"
    ],
    stats: [
      { label: "Incidents Handled", value: "14 Lakh+ annually" },
      { label: "Security Advisories Issued", value: "400+ annually" },
      { label: "Empanelled Security Auditors", value: "150+" }
    ],
    leaderInfo: {
      name: "Dr. Sanjay Bahl",
      title: "Director General, CERT-In",
      email: "info@cert-in.org.in"
    },
    websiteUrl: "https://www.cert-in.org.in",
    launchYear: "2004",
    organization: "Ministry of Electronics & Information Technology",
    keyHighlights: [
      "24x7 cybersecurity incident response capability",
      "International collaboration with other CERTs",
      "Information security assurance framework",
      "Cybersecurity exercises and drills"
    ],
    useCases: [
      { title: "Incident Response", description: "Coordinating response to cybersecurity incidents affecting Indian cyberspace." },
      { title: "Threat Mitigation", description: "Providing advisories and technical solutions to counter cyber threats." },
      { title: "Capacity Building", description: "Training and awareness programs for organizations on cybersecurity." }
    ]
  },
  "digiyatra": {
    title: "DigiYatra",
    logo: "https://digiyatra.com/images/logo.png",
    description: "DigiYatra is a transformational initiative by the Ministry of Civil Aviation aimed at creating a seamless, paperless, and contactless travel experience for passengers at airports through facial recognition technology. It enables biometric boarding system and self-bag drop for air travelers, enhancing security while improving passenger experience.",
    features: [
      "Facial recognition-based passenger verification",
      "Paperless travel through airports",
      "Single token face biometric for all checkpoints",
      "Automated e-Gates at terminals",
      "Real-time flight information updates",
      "Decentralized identity management"
    ],
    stats: [
      { label: "Airports Implemented", value: "10+" },
      { label: "Registered Users", value: "5 Million+" },
      { label: "Average Time Saved", value: "30-40% per passenger" }
    ],
    leaderInfo: {
      name: "Mr. Rajiv Bansal",
      title: "Secretary, Ministry of Civil Aviation",
      email: "secy.moca@nic.in"
    },
    websiteUrl: "https://www.digiyatra.com",
    launchYear: "2022",
    organization: "Ministry of Civil Aviation",
    keyHighlights: [
      "Privacy-focused architecture with data retention limits",
      "Integration with airline departure control systems",
      "Blockchain-based secure passenger data management",
      "Standards-based implementation for interoperability"
    ],
    useCases: [
      { title: "Airport Entry", description: "Contactless verification for terminal access using facial recognition." },
      { title: "Security Check", description: "Seamless movement through security checkpoints without showing physical ID." },
      { title: "Boarding", description: "Paperless boarding process at gates using facial biometrics." }
    ]
  },
  "swayam": {
    title: "SWAYAM",
    logo: "https://swayam.gov.in/assets/images/swayam_logo.png",
    description: "SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) is an integrated platform for offering online courses, covering school (9th to 12th) to Post Graduate Level. The courses are interactive, prepared by the best teachers in the country and are available, free of cost to any learner in the country.",
    features: [
      "High-quality learning material in multiple formats",
      "Video lectures by top educators",
      "Self-assessment quizzes and assignments",
      "Discussion forums for peer learning",
      "Free certification examinations",
      "Credit transfer framework for formal education"
    ],
    stats: [
      { label: "Courses Offered", value: "3,000+" },
      { label: "Registered Learners", value: "22 Million+" },
      { label: "Certifications Issued", value: "1.5 Million+" }
    ],
    leaderInfo: {
      name: "Prof. Anil D. Sahasrabudhe",
      title: "Chairman, AICTE",
      email: "chairman@aicte-india.org"
    },
    websiteUrl: "https://swayam.gov.in",
    launchYear: "2017",
    organization: "Ministry of Education",
    keyHighlights: [
      "Four quadrant approach to e-learning",
      "Integration with academic credit system",
      "National MOOCs platform with indigenous technology",
      "Support for 10 Indian languages"
    ],
    useCases: [
      { title: "Higher Education", description: "Access to quality university courses regardless of location." },
      { title: "Professional Development", description: "Skill enhancement and career advancement opportunities." },
      { title: "Lifelong Learning", description: "Continuous education resources for all age groups." }
    ]
  },
  "ndl": {
    title: "National Digital Library",
    logo: "https://ndl.iitkgp.ac.in/assets/images/logos/logo.png",
    description: "The National Digital Library of India (NDL) is a virtual repository of learning resources with a single-window search facility. It is designed to hold content of any language and provides interface support for leading Indian languages. It is built to provide support for all academic levels including researchers and life-long learners, all disciplines, all popular forms of access devices and differently-abled learners.",
    features: [
      "Unified search interface for multiple repositories",
      "Personalized learning space for users",
      "Content recommendation system",
      "Multi-lingual support for content and interface",
      "Learning analytics platform",
      "Content filtering by education level and type"
    ],
    stats: [
      { label: "Learning Resources", value: "82 Million+" },
      { label: "Contributing Sources", value: "250+" },
      { label: "Registered Users", value: "10 Million+" }
    ],
    leaderInfo: {
      name: "Prof. Partha Pratim Chakrabarti",
      title: "Former Principal Investigator, NDL Project",
      email: "ndl-support@iitkgp.ac.in"
    },
    websiteUrl: "https://ndl.iitkgp.ac.in",
    launchYear: "2018",
    organization: "Ministry of Education",
    keyHighlights: [
      "Integration with school and higher education frameworks",
      "Federated architecture for content aggregation",
      "Open APIs for third-party applications",
      "Accessibility features for differently-abled learners"
    ],
    useCases: [
      { title: "Academic Research", description: "Access to research papers, theses, and scholarly content." },
      { title: "School Education", description: "Curriculum-aligned learning resources for students." },
      { title: "Cultural Preservation", description: "Digitization and access to rare books and manuscripts." }
    ]
  },
  "parivahan-sewa": {
    title: "Parivahan Sewa",
    logo: "https://parivahan.gov.in/parivahan/sites/default/files/logo_parivahan.png",
    description: "Parivahan Sewa is an integrated platform offering a bouquet of transport-related online services to citizens and other stakeholders. It provides various services related to vehicle registration, driving license, permits, and other transport-related documentations in a transparent and efficient manner.",
    features: [
      "Online application for driving license and vehicle registration",
      "Vehicle and driving license information retrieval",
      "Fee payment and e-challan services",
      "Dealer point registration",
      "Fancy number booking system",
      "National permit system"
    ],
    stats: [
      { label: "Registered Vehicles", value: "300 Million+" },
      { label: "Active Driving Licenses", value: "200 Million+" },
      { label: "Daily Transactions", value: "1 Million+" }
    ],
    leaderInfo: {
      name: "Mr. Giridhar Aramane",
      title: "Secretary, Ministry of Road Transport & Highways",
      email: "secyship-morth@gov.in"
    },
    websiteUrl: "https://parivahan.gov.in",
    launchYear: "2016",
    organization: "Ministry of Road Transport & Highways",
    keyHighlights: [
      "Integration with DigiLocker for digital documents",
      "Unified database of vehicles and drivers across India",
      "AI-based number plate recognition system",
      "Mobile app for on-the-go services"
    ],
    useCases: [
      { title: "Vehicle Registration", description: "Online processing of new vehicle registrations and transfers." },
      { title: "License Management", description: "Application, renewal, and verification of driving licenses." },
      { title: "Traffic Enforcement", description: "Digital challan generation and payment for traffic violations." }
    ]
  },
  "fastag": {
    title: "FASTag",
    logo: "https://www.ihmcl.co.in/img/logo-ntaei.png",
    description: "FASTag is an electronic toll collection system in India, operated by the National Highway Authority of India (NHAI). It employs Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid or savings account linked to it. It enables vehicles to drive through toll plazas without stopping for cash transactions.",
    features: [
      "Contactless toll payments",
      "Automatic recharge facility",
      "SMS alerts for transactions",
      "Online account management",
      "Electronic toll collection at parking lots",
      "Integration with banking applications"
    ],
    stats: [
      { label: "Active FASTags", value: "60 Million+" },
      { label: "Toll Plazas Equipped", value: "900+" },
      { label: "Daily Transactions", value: "10 Million+" }
    ],
    leaderInfo: {
      name: "Mr. Alka Upadhyaya",
      title: "Chairperson, National Highways Authority of India",
      email: "chairman@nhai.org"
    },
    websiteUrl: "https://www.ihmcl.co.in/fastag",
    launchYear: "2016",
    organization: "National Highways Authority of India, Ministry of Road Transport & Highways",
    keyHighlights: [
      "Reduction in waiting time at toll plazas",
      "Fuel savings and reduced emissions",
      "Enhanced transparency in toll collection",
      "Integration with VAHAN database for vehicle verification"
    ],
    useCases: [
      { title: "Highway Tolling", description: "Automated toll collection at national and state highways." },
      { title: "Commercial Fleet Management", description: "Centralized toll payment solution for transport companies." },
      { title: "Parking Solutions", description: "FASTag-based payments at parking facilities in cities." }
    ]
  },
  "vahan-sarathi": {
    title: "VAHAN & SARATHI",
    logo: "https://vahan.parivahan.gov.in/vahan4dashboard/images/logo.png",
    description: "VAHAN and SARATHI are flagship e-Governance applications under the National Transport Project that have automated the RTO operations related to Vehicle Registration (VAHAN) and Driving License (SARATHI) in India. These standardized applications with a centralized database ensure seamless services and information availability.",
    features: [
      "Centralized vehicle registration system",
      "Driving license issuance and management",
      "Online tax payment and permit services",
      "Transfer of ownership and NOC issuance",
      "Dealer point registration",
      "Integration with law enforcement agencies"
    ],
    stats: [
      { label: "RTOs Computerized", value: "1,300+" },
      { label: "Vehicle Records", value: "320 Million+" },
      { label: "License Records", value: "215 Million+" }
    ],
    leaderInfo: {
      name: "Mr. Giridhar Aramane",
      title: "Secretary, Ministry of Road Transport & Highways",
      email: "secyship-morth@gov.in"
    },
    websiteUrl: "https://vahan.gov.in",
    launchYear: "2006",
    organization: "Ministry of Road Transport & Highways",
    keyHighlights: [
      "Nationwide standardization of RTO processes",
      "Centralized database for vehicle and license information",
      "Enhanced security features to prevent document forgery",
      "Citizen-centric service delivery model"
    ],
    useCases: [
      { title: "Vehicle Management", description: "Comprehensive vehicle registration and related services." },
      { title: "License Administration", description: "End-to-end management of driving licenses and permits." },
      { title: "Enforcement Support", description: "Data sharing with police and other enforcement agencies." }
    ]
  },
  "passport-seva": {
    title: "Passport Seva",
    logo: "https://www.passportindia.gov.in/AppOnlineProject/images/passportsevaLogo.jpg",
    description: "Passport Seva is a Mission Mode Project under the National e-Governance Plan, aimed at delivering passport-related services to citizens in a timely, transparent, and reliable manner. It has transformed the passport issuance system in India through process re-engineering, technology upgrades, and enhanced service delivery mechanisms.",
    features: [
      "Online application submission and appointment scheduling",
      "Digital document upload and verification",
      "SMS and email status updates",
      "Integration with police verification system",
      "Mobile app for passport services",
      "Payment gateway integration"
    ],
    stats: [
      { label: "Passport Seva Kendras", value: "430+" },
      { label: "Passports Issued Annually", value: "12 Million+" },
      { label: "Average Processing Time", value: "5-7 days" }
    ],
    leaderInfo: {
      name: "Dr. Ausaf Sayeed",
      title: "Secretary, Ministry of External Affairs",
      email: "secretary@mea.gov.in"
    },
    websiteUrl: "https://www.passportindia.gov.in",
    launchYear: "2010",
    organization: "Ministry of External Affairs",
    keyHighlights: [
      "Drastic reduction in passport issuance time",
      "Post Office Passport Seva Kendras for wider reach",
      "Digital integration with DigiLocker",
      "Awarded for excellence in public service delivery"
    ],
    useCases: [
      { title: "Passport Issuance", description: "End-to-end processing of passport applications." },
      { title: "Consular Services", description: "Various attestation and apostille services for international documents." },
      { title: "Identity Verification", description: "Support for various government verification requirements." }
    ]
  },
  "enam": {
    title: "eNAM",
    logo: "https://enam.gov.in/web/assets/images/logos/enam-logo.png",
    description: "Electronic National Agriculture Market (eNAM) is a pan-India electronic trading portal that networks existing APMC mandis to create a unified national market for agricultural commodities. It promotes genuine price discovery by integrating APMCs across the country with a common online platform, enabling transparent and competitive online trading.",
    features: [
      "Online bidding system for agricultural produce",
      "Quality assaying infrastructure",
      "Electronic payment settlement",
      "Commodity price information dissemination",
      "Mobile app for farmers and traders",
      "Integration with warehouse repositories"
    ],
    stats: [
      { label: "Mandis Integrated", value: "1,000+" },
      { label: "Registered Farmers", value: "1.7 Crore+" },
      { label: "Trade Value", value: "₹2 Lakh Crore+" }
    ],
    leaderInfo: {
      name: "Mr. P.K. Swain",
      title: "Secretary, Ministry of Agriculture & Farmers Welfare",
      email: "secy-agri@gov.in"
    },
    websiteUrl: "https://enam.gov.in",
    launchYear: "2016",
    organization: "Ministry of Agriculture & Farmers Welfare",
    keyHighlights: [
      "Direct market access for farmers across the country",
      "Reduction in intermediaries and improved price realization",
      "Standardization of quality parameters for agricultural produce",
      "Promotion of scientific storage practices"
    ],
    useCases: [
      { title: "Agricultural Trading", description: "Online marketplace for buying and selling farm produce." },
      { title: "Price Discovery", description: "Transparent mechanism for determining commodity prices." },
      { title: "Market Linkage", description: "Connecting farmers to a wider network of buyers across India." }
    ]
  },
  "kisan-suvidha": {
    title: "Kisan Suvidha",
    logo: "https://farmer.gov.in/images/logo_new.png",
    description: "Kisan Suvidha is a mobile application that aims to help farmers by providing them with relevant information instantly on their fingertips. It provides information on weather, market prices, agriculture advisories, plant protection, and government schemes and services for farmers, thus helping them make informed decisions.",
    features: [
      "Weather forecast and alerts",
      "Market price information for crops",
      "Information on inputs like seeds and fertilizers",
      "Plant protection and disease management",
      "Government scheme notifications",
      "Expert advisories on farming practices"
    ],
    stats: [
      { label: "Downloads", value: "10 Million+" },
      { label: "Active Users", value: "5 Million+" },
      { label: "States Covered", value: "All 28 states and 8 UTs" }
    ],
    leaderInfo: {
      name: "Mr. P.K. Swain",
      title: "Secretary, Ministry of Agriculture & Farmers Welfare",
      email: "secy-agri@gov.in"
    },
    websiteUrl: "https://farmer.gov.in",
    launchYear: "2016",
    organization: "Ministry of Agriculture & Farmers Welfare",
    keyHighlights: [
      "Multi-language support for regional accessibility",
      "Integration with IMD for weather information",
      "Market intelligence system for price trends",
      "Toll-free helpline connection for direct support"
    ],
    useCases: [
      { title: "Farm Management", description: "Access to crucial information for day-to-day farming decisions." },
      { title: "Market Intelligence", description: "Current and historical price data to plan crop sales." },
      { title: "Disaster Preparedness", description: "Weather alerts to protect crops from adverse conditions." }
    ]
  },
  "rapdrp": {
    title: "RAPDRP",
    logo: "https://powermin.gov.in/sites/default/files/uploads/ministry-logo.png",
    description: "Restructured Accelerated Power Development and Reforms Programme (RAPDRP) is a flagship program of the Ministry of Power aimed at reducing Aggregate Technical & Commercial (AT&C) losses in the power distribution sector. It focuses on establishing baseline data, strengthening distribution networks, and adopting IT-enabled solutions for energy accounting and auditing.",
    features: [
      "IT enablement of power distribution",
      "SCADA/DMS implementation in urban areas",
      "Consumer indexing and GIS mapping",
      "Meter data acquisition system",
      "Billing efficiency improvement",
      "Distribution network strengthening"
    ],
    stats: [
      { label: "Towns Covered", value: "1,900+" },
      { label: "Distribution Transformers Monitored", value: "10 Lakh+" },
      { label: "Reduction in AT&C Losses", value: "15-20% in project areas" }
    ],
    leaderInfo: {
      name: "Mr. Alok Kumar",
      title: "Secretary, Ministry of Power",
      email: "secy-power@nic.in"
    },
    websiteUrl: "https://powermin.gov.in",
    launchYear: "2008",
    organization: "Ministry of Power",
    keyHighlights: [
      "Establishment of data centers and customer care centers",
      "Energy accounting and auditing systems",
      "Reduction in commercial losses through technology",
      "Improved quality and reliability of power supply"
    ],
    useCases: [
      { title: "Loss Reduction", description: "Identification and reduction of technical and commercial losses in power distribution." },
      { title: "Network Management", description: "Real-time monitoring and control of power distribution networks." },
      { title: "Consumer Service", description: "Improved billing accuracy and customer service for electricity consumers." }
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
