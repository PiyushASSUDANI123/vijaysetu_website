'use client';

import React, { useState } from 'react';
import {
  Search,
  Users,
  Activity,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Vote,
  Target,
  Check,
  X,
  Menu,
  ChevronDown,
  Layers,
  FileSpreadsheet,
  Lock,
  Headphones,
  Database,
  Globe,
  ExternalLink,
} from 'lucide-react';

const WHATSAPP_NUMBER = '917231077770';
const DISPLAY_PHONE = '+91 72310 77770';

export default function LandingPage() {
  // Mobile Nav State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Slip Simulator State
  const [slipMode, setSlipMode] = useState<'photo' | 'text'>('photo');
  const [candidateName, setCandidateName] = useState('रोहित शर्मा');
  const [candidateParty, setCandidateParty] = useState('विकास मोर्चा');
  const [candidateSymbol, setCandidateSymbol] = useState('कमल / टॉर्च / कप-प्लेट');
  const [voterName, setVoterName] = useState('सुरेश कुमार वर्मा');
  const [voterFather, setVoterFather] = useState('रामनारायण वर्मा');
  const [voterWard, setVoterWard] = useState('4');
  const [voterBooth, setVoterBooth] = useState('37');
  const [voterSerial, setVoterSerial] = useState('342');
  const [voterHouse, setVoterHouse] = useState('27क');
  const [voterEpic, setVoterEpic] = useState('SSB0683086');
  const [pollingStation, setPollingStation] = useState('राजकीय उच्च माध्यमिक विद्यालय, कमरा नं. 2');

  // Role Tab State
  const [activeTab, setActiveTab] = useState<'worker' | 'warroom' | 'polling'>('warroom');

  // Lead Modal
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    constituency: '',
    electionType: 'विधानसभा (Assembly)',
  });

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const modules = [
    {
      id: 'search',
      title: 'सुपरफास्ट वोटर सर्च',
      subtitle: '0.2s Instant Search Engine',
      icon: Search,
      badge: 'बिजली जैसी गति',
      description: 'नाम, पिता/पति के नाम, मकान संख्या, वार्ड या EPIC नंबर से मात्र 0.2 सेकंड में मतदाता खोजें। हिंदी और अंग्रेजी दोनों में बिना किसी स्पेलिंग गलती के सटीक परिणाम।',
      features: [
        'देवनागरी व अंग्रेज़ी दोनों में तेज़ फॉनेटिक सर्च',
        'अल्फाबेटिकल व मकानवार तुरंत फ़िल्टरिंग',
        '2G / कमजोर इंटरनेट पर भी बिना रुकावट सर्च',
        'मोबाइल व डेस्कटॉप दोनों के लिए अनुकूलित'
      ],
      metric: '0.2 सेकंड',
      metricSub: 'लाखों वोटर्स में तुरंत रिजल्ट'
    },
    {
      id: 'whatsapp',
      title: 'ऑटोमैटिक WhatsApp पर्ची',
      subtitle: '1-Click Digital Photo Slip',
      icon: MessageCircle,
      badge: 'सबसे लोकप्रिय',
      description: 'प्रत्याशी की फोटो, चुनाव चिन्ह और मतदान केंद्र के गूगल मैप्स लोकेशन के साथ 1-क्लिक में डिजिटल पर्ची सीधे मतदाता के WhatsApp पर भेजें।',
      features: [
        'प्रत्याशी की फोटो व चुनाव चिन्ह के साथ आकर्षक ब्रांडिंग',
        'मतदान केंद्र का नाम व कमरा नंबर ऑटो-शामिल',
        'सत्यापित QR कोड से तुरंत वोटर पर्ची वेरिफिकेशन',
        'परिवार के सभी सदस्यों की पर्चियां एक साथ भेजने की सुविधा'
      ],
      metric: '100% डिलीवरी',
      metricSub: 'कागजी पर्ची से 80% सस्ता व असरदार'
    },
    {
      id: 'warroom',
      title: 'लाइव पोलिंग डे वॉर-रूम',
      subtitle: 'Real-time Election Day Intelligence',
      icon: Activity,
      badge: 'जीत का निर्णय',
      description: 'मतदान दिवस पर बूथ-वार और घंटे-वार मतदान प्रतिशत (Turnout %) का लाइव ट्रैक। दोपहर 2 बजे पता लगाएं कि हमारे किस बूथ पर वोटिंग कम है ताकि तुरंत टीम भेजी जा सके।',
      features: [
        'घंटेवार (सुबह 7 से शाम 6) लाइव मतदान प्रतिशत',
        'कमजोर और मजबूत बूथों का तत्काल रेड-अलर्ट',
        'परिवारवार मार्किंग — कौन आया, कौन बाकी है',
        'बड़ी स्क्रीन (LED Wall) पर लाइव वॉर-रूम डिस्प्ले'
      ],
      metric: 'लाइव घंटेवार',
      metricSub: 'जीत का अंतर तय करने वाला टूल'
    },
    {
      id: 'workers',
      title: 'कार्यकर्ता व पन्ना प्रमुख प्रबंधन',
      subtitle: 'Booth & Panna Pramukh App',
      icon: Users,
      badge: 'ग्राउंड कमांड',
      description: 'हर पन्ना प्रमुख को उसके 30 से 60 मतदाताओं की लिस्ट मोबाइल पर दें। कार्यकर्ता की ग्राउंड सक्रियता, कॉलिंग रिपोर्ट और वोटर समर्थन स्टेटस को लाइव ट्रैक करें।',
      features: [
        'पन्ना प्रमुखों को उनके पन्ने की एक्सक्लूसिव डिजिटल लिस्ट',
        'सपोर्टर (पक्ष), न्यूट्रल (तटस्थ) व विरोधी (विपक्ष) टैगिंग',
        'घर-घर जनसंपर्क की जीपीएस व समय-वार ट्रैकिंग',
        'बूथ एजेंट को मतदान दिवस पर सरल मार्किंग इंटरफेस'
      ],
      metric: '100% बूथ कवरेज',
      metricSub: 'हर टेबल व कार्यकर्ता पर नियंत्रण'
    },
    {
      id: 'family',
      title: 'पारिवारिक क्लस्टरिंग व समीकरण',
      subtitle: 'Family Grouping & Caste Intelligence',
      icon: Layers,
      badge: 'माइक्रो-टारगेटिंग',
      description: 'मकान संख्या और उपनाम से परिवारों का स्वतः समूह बनाएं। एक मकान के 10 सदस्यों को एक साथ संपर्क करें और वार्ड के सामाजिक-जातिगत समीकरण समझें।',
      features: [
        'एक मकान के सभी वोटरों का स्वतः पारिवारिक ग्रुप',
        'मुखिया (Head of Family) की पहचान व सीधा संपर्क',
        'जातिगत व सामाजिक वर्ग वार मतदाता वर्गीकरण',
        'प्रवासी मतदाताओं (Outstation Voters) की अलग सूची'
      ],
      metric: '1-क्लिक परिवार',
      metricSub: 'संपूर्ण परिवार का एकमुश्त संपर्क'
    },
    {
      id: 'export',
      title: 'प्रिंट-रेडी लिस्ट व एक्सेल एक्सपोर्ट',
      subtitle: 'ECI Standard Print & Excel Engine',
      icon: FileSpreadsheet,
      badge: '100% सटीक ECI फॉर्मेट',
      description: 'नामावली को वर्णमाला (Alphabetical), मकानवार (House-wise) और क्रमांकवार (Serial-wise) एक क्लिक में डाउनलोड करें या प्रिंट निकालें।',
      features: [
        'ECI अधिकृत फॉर्मेट में सुव्यवस्थित एक्सेल (.xlsx)',
        'बूथ एजेंट टेबल के लिए प्रिंट-रेडी PDF फॉर्मेट',
        'विलोपित (Deleted) वोटरों का स्वतः निष्कासन',
        'अल्फाबेटिकल वोटर सर्च स्लिप डायरेक्ट प्रिंटिंग'
      ],
      metric: '1-क्लिक डाउनलोड',
      metricSub: 'बिना कंप्यूटर ऑपरेटर के तुरंत तैयार'
    }
  ];

  const faqs = [
    {
      q: 'हमारी विधानसभा या वार्ड का डेटा सॉफ्टवेयर में कैसे लोड होगा?',
      a: 'आपको बस अपनी आधिकारिक PDF मतदाता सूची (Voter List) देनी होती है। हमारा आधुनिक OCR व डेटा इंजन मात्र 24 घंटे के अंदर आपकी पूरी विधानसभा या वार्ड का 100% सटीक डेटा सॉफ्टवेयर में प्री-लोड कर देता है।'
    },
    {
      q: 'क्या कार्यकर्ताओं को इसे चलाने के लिए ट्रेनिंग की ज़रूरत होगी?',
      a: 'बिल्कुल नहीं! हमारा मोबाइल ऐप विशेष रूप से ग्रामीण व शहरी कार्यकर्ताओं की सहूलियत के लिए शुद्ध सरल हिंदी में डिज़ाइन किया गया है। 2 मिनट में कोई भी कार्यकर्ता इसे आसानी से चलाना सीख जाता है।'
    },
    {
      q: 'WhatsApp पर्ची में क्या-क्या जानकारी भेजी जाती है?',
      a: 'पर्ची में प्रत्याशी की फोटो, पार्टी का चुनाव चिन्ह, मतदाता का नाम, पिता/पति का नाम, वार्ड व बूथ संख्या, क्रम संख्या, मकान नंबर, EPIC नंबर और मतदान केंद्र का पूरा पता व कमरा नंबर भेजा जाता है।'
    },
    {
      q: 'मतदान के दिन यह सॉफ्टवेयर कैसे मदद करता है?',
      a: 'मतदान के दिन बूथ पर बैठे कार्यकर्ता आते ही वोटर को "मार्क" कर देते हैं। वॉर रूम में मुख्य प्रत्याशी को हर घंटे का लाइव पोलिंग प्रतिशत दिखता है और शाम 3 बजे बचे हुए समर्थकों की लिस्ट निकाल कर तुरंत गाड़ियां भेजी जा सकती हैं।'
    },
    {
      q: 'क्या हमारा चुनावी डेटा पूरी तरह सुरक्षित और गोपनीय रहेगा?',
      a: 'हाँ, 100% सुरक्षित। आपका पूरा डेटा 256-बिट एन्क्रिप्शन के साथ क्लाउड पर सुरक्षित रहता है। केवल आपके द्वारा अधिकृत प्रत्याशी और मुख्य एडमिन ही इस डेटा को एक्सेस कर सकते हैं।'
    },
    {
      q: 'सॉफ्टवेयर चालू होने में कितना समय लगता है?',
      a: 'डेटा प्राप्त होने के 24 घंटे के भीतर आपका संपूर्ण वॉर रूम और कार्यकर्ता ऐप चालू कर दिया जाता है। आपको और आपकी टीम को पूरा लाइव सपोर्ट दिया जाता है।'
    }
  ];

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitting(true);

    const waText = `नमस्ते VijaySetu टीम, मुझे चुनाव वॉर-रूम और वोटर सॉफ्टवेयर का लाइव डेमो चाहिए।\n\nउम्मीदवार / नाम: ${leadForm.name}\nमोबाइल: ${leadForm.phone}\nक्षेत्र / वार्ड: ${leadForm.constituency}\nचुनाव स्तर: ${leadForm.electionType}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

    try {
      // Post to backend database so it appears in Admin Panel
      const targets = [
        'https://vijaysetu.vercel.app/api/admin/leads',
        'https://vijaysetu.piyushassudani.in/api/admin/leads',
        'http://localhost:5002/api/admin/leads',
      ];
      for (const target of targets) {
        try {
          const res = await fetch(target, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadForm),
          });
          if (res.ok) break;
        } catch {
          // try next target
        }
      }
    } catch (err) {
      console.warn('Backend leads API warning:', err);
    }

    setLeadSubmitting(false);
    setLeadSubmitted(true);

    // Open WhatsApp to +91 72310 77770
    window.open(waUrl, '_blank');

    setTimeout(() => {
      setLeadModalOpen(false);
      setLeadSubmitted(false);
      setLeadForm({ name: '', phone: '', constituency: '', electionType: 'विधानसभा (Assembly)' });
    }, 2800);
  };

  const getWaLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-emerald-500 selection:text-white">
      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center font-medium shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase shrink-0">New 2026 Edition</span>
          <span>100% प्री-लोडेड वोटर डेटा • 24 घंटे में लाइव वॉर रूम • WhatsApp पर्ची</span>
          <a
            href={getWaLink('नमस्ते VijaySetu टीम, मुझे चुनाव वॉर-रूम सॉफ्टवेयर का लाइव डेमो चाहिए।')}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center space-x-1 underline font-bold ml-1.5 hover:text-emerald-200"
          >
            <span>डेमो लें ({DISPLAY_PHONE})</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 glass-nav bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo (shrink-0 prevents crushing) */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
              <img
                src="/logo.png"
                alt="VijaySetu Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl shadow-sm ring-1 ring-slate-200/80 group-hover:scale-105 transition-transform bg-white shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 flex items-center">
                  Vijay<span className="text-emerald-700">Setu</span>
                  <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                    विजयसेतु
                  </span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 block tracking-wider -mt-0.5 whitespace-nowrap">
                  हर वोट • सही दिशा • जीत की ओर
                </span>
              </div>
            </a>

            {/* Desktop Nav Links (Clean, concise Hindi labels with safe gap) */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-semibold text-slate-700">
              <a href="#features" className="hover:text-emerald-600 transition-colors whitespace-nowrap">सुविधाएं</a>
              <a href="#simulator" className="hover:text-emerald-600 transition-colors whitespace-nowrap">पर्ची डेमो</a>
              <a href="#roles" className="hover:text-emerald-600 transition-colors whitespace-nowrap">वॉर-रूम</a>
              <a href="#comparison" className="hover:text-emerald-600 transition-colors whitespace-nowrap">तुलना</a>
              <a href="#plans" className="hover:text-emerald-600 transition-colors whitespace-nowrap">पैकेजेस</a>
              <a href="#faq" className="hover:text-emerald-600 transition-colors whitespace-nowrap">FAQ</a>
            </div>

            {/* Nav Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <a
                href={getWaLink('नमस्ते VijaySetu टीम, मुझे सॉफ्टवेयर के बारे में जानकारी चाहिए।')}
                target="_blank"
                rel="noreferrer"
                className="hidden 2xl:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors whitespace-nowrap"
              >
                <Phone size={13} className="text-emerald-600" />
                <span>{DISPLAY_PHONE}</span>
              </a>

              <a
                href="https://vijaysetu.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-600 px-3.5 py-2 rounded-xl transition-colors border border-slate-200 hover:border-slate-300 whitespace-nowrap"
              >
                लॉगिन
              </a>

              <button
                onClick={() => setLeadModalOpen(true)}
                className="glow-btn px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center space-x-1.5 cursor-pointer shadow-md shrink-0 whitespace-nowrap"
              >
                <Sparkles size={15} />
                <span>फ्री लाइव डेमो</span>
              </button>

              {/* Hamburger Button (shown on screens < xl) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer shrink-0"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1 text-sm font-bold text-slate-800">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                सुविधाएं (Features)
              </a>
              <a
                href="#simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                लाइव पर्ची डेमो (Voter Slip Simulator)
              </a>
              <a
                href="#roles"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                मोबाइल व वॉर रूम (Roles & Interface)
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                कागजी पर्ची बनाम VijaySetu (Comparison)
              </a>
              <a
                href="#plans"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                पैकेजेस (Pricing Plans)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                FAQ (सामान्य प्रश्न)
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://vijaysetu.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                एडमिन व क्लाइंट लॉगिन करें
              </a>
              <a
                href={getWaLink('नमस्ते VijaySetu टीम, मुझे सॉफ्टवेयर के बारे में जानकारी चाहिए।')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center justify-center space-x-1.5"
              >
                <Phone size={14} className="text-emerald-600" />
                <span>कॉल / WhatsApp: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-grid-pattern">
        {/* Ambient Gradient Glow Orbs */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-transparent blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-emerald-600/10 blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>भारत का नंबर 1 चुनाव प्रबंधन व डिजिटल वॉर रूम सॉफ्टवेयर</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                हर बूथ पर पकड़, हर वोट पर नजर —{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 bg-clip-text text-transparent">
                  जीत की पक्की गारंटी
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                <strong className="text-emerald-800 font-bold">VijaySetu (विजयसेतु)</strong> के साथ 1-सेकंड में मतदाता खोजें, 
                प्रत्याशी की फोटो वाली आधिकारिक WhatsApp पर्ची भेजें, पन्ना प्रमुखों को लाइव ट्रैक करें और 
                मतदान के दिन वॉर-रूम से हर घंटे का टर्नआउट देखें।
              </p>

              {/* Trust Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-700 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>100% सटीक ECI डिजिटल वोटर डेटा</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>24 घंटे में आपके क्षेत्र के लिए लाइव</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>फोटो व QR कोड सहित WhatsApp पर्ची</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>2G व कमजोर इंटरनेट पर भी सुपरफ़ास्ट</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <button
                  onClick={() => setLeadModalOpen(true)}
                  className="glow-btn px-7 py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                >
                  <Vote size={20} />
                  <span>लाइव वॉर-रूम डेमो बुक करें</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={getWaLink('नमस्ते VijaySetu टीम, मुझे चुनाव वॉर-रूम सॉफ्टवेयर के बारे में बात करनी है।')}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 rounded-2xl text-base font-bold text-emerald-800 bg-white hover:bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <MessageCircle size={20} className="text-emerald-600" />
                  <span>WhatsApp पर बात करें ({DISPLAY_PHONE})</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-black text-emerald-700">4+ करोड़</div>
                  <div className="text-xs text-slate-500 font-medium">वोटर्स मैनेज्ड</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">1,200+</div>
                  <div className="text-xs text-slate-500 font-medium">सफल चुनाव</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-700">99.8%</div>
                  <div className="text-xs text-slate-500 font-medium">डेटा शुद्धता</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">8.4x</div>
                  <div className="text-xs text-slate-500 font-medium">तेज़ वोटर संपर्क</div>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Live Phone Mockup Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md bg-slate-900 rounded-[44px] p-4 border-4 border-slate-800 shadow-2xl relative animate-float">
                {/* Speaker & Sensor */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                {/* WhatsApp Chat Header */}
                <div className="bg-[#075e54] p-3 rounded-2xl flex items-center space-x-3 mb-3 text-white shadow-sm">
                  <img
                    src="/logo.png"
                    alt="VijaySetu"
                    className="w-9 h-9 rounded-full bg-white object-contain p-0.5 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">VijaySetu Bot • चुनाव सेवा</div>
                    <div className="text-[10px] text-emerald-100 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                      <span>Verified Business Account</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-100 font-mono">10:42 AM</span>
                </div>

                {/* Voter Slip Message Bubble */}
                <div className="bg-[#dcf8c6] p-3 sm:p-4 rounded-2xl border border-emerald-200 text-slate-900 space-y-2.5 shadow-md">
                  {/* Slip Card Header */}
                  <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-3 rounded-xl shadow-sm text-center">
                    <div className="text-[11px] font-semibold text-emerald-200">विधानसभा चुनाव 2026 • विकास मोर्चा</div>
                    <div className="text-base font-black tracking-wide">प्रत्याशी: {candidateName}</div>
                    <div className="text-[10px] text-emerald-100">चुनाव चिन्ह: {candidateSymbol}</div>
                  </div>

                  {/* ECI Slip Box */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-inner space-y-2 text-xs">
                    <div className="text-center font-bold text-slate-800 border-b border-slate-200 pb-1 text-[11px] uppercase tracking-wider text-emerald-800">
                      मतदाता सूचना पर्ची (VOTER SLIP)
                    </div>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                      <div>
                        <span className="text-slate-500 block text-[10px]">मतदाता का नाम:</span>
                        <strong className="text-slate-900">{voterName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">संबंधी का नाम:</span>
                        <strong className="text-slate-900">{voterFather}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">वार्ड / भाग संख्या:</span>
                        <strong className="text-emerald-700 font-bold">वार्ड {voterWard} (भाग {voterBooth})</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">क्रम संख्या (Serial):</span>
                        <strong className="text-emerald-700 font-black text-sm">{voterSerial}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">मकान संख्या:</span>
                        <strong className="text-slate-900">{voterHouse}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">EPIC ID:</span>
                        <strong className="text-slate-900 font-mono">{voterEpic}</strong>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-1.5">
                      <span className="text-slate-500 block text-[10px]">मतदान केंद्र:</span>
                      <strong className="text-slate-800 text-[11px]">{pollingStation}</strong>
                    </div>
                  </div>

                  {/* Appeal message */}
                  <div className="text-center text-[11px] font-bold text-emerald-900 pt-1">
                    ★ अपना अमूल्य मत देकर भारी मतों से विजयी बनाएं! ★
                  </div>

                  {/* WhatsApp Action Buttons */}
                  <div className="pt-1 flex space-x-2">
                    <a
                      href="#simulator"
                      className="flex-1 py-2 bg-[#128c7e] hover:bg-[#075e54] text-white text-[11px] font-bold rounded-lg text-center transition-colors shadow-sm flex items-center justify-center space-x-1"
                    >
                      <Sparkles size={12} />
                      <span>लाइव एडिट करें</span>
                    </a>
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="flex-1 py-2 bg-white border border-slate-300 text-slate-800 text-[11px] font-bold rounded-lg text-center hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                    >
                      डेमो पर्ची भेजें
                    </button>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 CORE MODULES (SMARTBOOTH ARCHITECTURE) */}
      <section id="features" className="py-20 relative bg-white border-t border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              संपूर्ण चुनावी समाधान
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              चुनाव प्रबंधन के 6 मुख्य स्तंभ
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              मतदाता सूची अपलोड से लेकर मतदान के आखिरी घंटे तक — आपकी जीत सुनिश्चित करने वाले शक्तिशाली टूल्स।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-100 hover:border-emerald-500 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold">
                        <Icon size={26} />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-1">{m.title}</h3>
                    <div className="text-xs font-semibold text-emerald-700 mb-3">{m.subtitle}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                      {m.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {m.features.map((f, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Metric */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-slate-900">{m.metric}</div>
                      <div className="text-[11px] text-slate-500">{m.metricSub}</div>
                    </div>
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1 cursor-pointer"
                    >
                      <span>डेमो देखें</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE VOTER SLIP SIMULATOR SECTION */}
      <section id="simulator" className="py-20 relative bg-[#f1f5f9] border-t border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              लाइव पर्ची सिम्युलेटर
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              डिजिटल मतदाता पर्ची कस्टमाइज़ करें
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              नीचे जानकारी बदलें और देखें कि मतदाता के WhatsApp पर फोटो वाली पर्ची या टेक्स्ट संदेश कैसा दिखाई देता है।
            </p>

            {/* Toggle Mode: Photo Slip vs Text Slip */}
            <div className="mt-8 flex flex-col sm:inline-flex sm:flex-row items-stretch sm:items-center p-1.5 rounded-2xl bg-white border border-slate-300 shadow-sm gap-1.5 sm:gap-0 max-w-full">
              <button
                onClick={() => setSlipMode('photo')}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  slipMode === 'photo'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📸 फोटो वाली पर्ची (Photo Slip)
              </button>
              <button
                onClick={() => setSlipMode('text')}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  slipMode === 'text'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📝 टेक्स्ट पर्ची (Text Slip)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Config Controls */}
            <div className="lg:col-span-5 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Target size={18} className="text-emerald-600" />
                <span>पर्ची कस्टमाइज़ेशन पैनल</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">प्रत्याशी का नाम</label>
                  <input
                    type="text"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">दल / पार्टी</label>
                  <input
                    type="text"
                    value={candidateParty}
                    onChange={(e) => setCandidateParty(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">चुनाव चिन्ह / सिंबल</label>
                <input
                  type="text"
                  value={candidateSymbol}
                  onChange={(e) => setCandidateSymbol(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">मतदाता का नाम</label>
                  <input
                    type="text"
                    value={voterName}
                    onChange={(e) => setVoterName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">पिता/पति का नाम</label>
                  <input
                    type="text"
                    value={voterFather}
                    onChange={(e) => setVoterFather(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">वार्ड नं.</label>
                  <input
                    type="text"
                    value={voterWard}
                    onChange={(e) => setVoterWard(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">बूथ / भाग नं.</label>
                  <input
                    type="text"
                    value={voterBooth}
                    onChange={(e) => setVoterBooth(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">क्रम संख्या</label>
                  <input
                    type="text"
                    value={voterSerial}
                    onChange={(e) => setVoterSerial(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white font-bold text-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">मकान संख्या</label>
                  <input
                    type="text"
                    value={voterHouse}
                    onChange={(e) => setVoterHouse(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">EPIC No</label>
                  <input
                    type="text"
                    value={voterEpic}
                    onChange={(e) => setVoterEpic(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">मतदान केंद्र (Polling Station)</label>
                <input
                  type="text"
                  value={pollingStation}
                  onChange={(e) => setPollingStation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900">
                💡 <strong>स्मार्टबूथ टेक्नोलॉजी:</strong> वास्तविक चुनाव में यह पर्ची 1-क्लिक में आधिकारिक WhatsApp Cloud API से सीधे मतदाता के मोबाइल पर डिलीवर होती है।
              </div>
            </div>

            {/* Simulated WhatsApp Phone Screen */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-md bg-slate-900 rounded-[44px] p-4 border-4 border-slate-700 shadow-2xl relative">
                {/* Speaker & Camera Notch */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                {/* WhatsApp Chat Top Header */}
                <div className="bg-[#075e54] p-3 rounded-2xl flex items-center space-x-3 mb-3 text-white shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm text-white">
                    {candidateName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">{candidateName} चुनाव कार्यालय</div>
                    <div className="text-[10px] text-emerald-100 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                      <span>Online • Verified Business</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-100 font-mono">10:45 AM</span>
                </div>

                {/* Simulated Conversation */}
                <div className="space-y-3 p-1">
                  {/* Incoming user message */}
                  <div className="flex justify-end">
                    <div className="bg-[#e7ffdb] p-2.5 rounded-2xl rounded-tr-none text-xs text-slate-800 max-w-[80%] shadow-sm">
                      नमस्ते, मुझे मेरी वोटर पर्ची चाहिए। नाम: {voterName}
                      <div className="text-[9px] text-slate-400 text-right mt-1">10:44 AM ✓✓</div>
                    </div>
                  </div>

                  {/* Outgoing Bot response: Photo Slip or Text Slip */}
                  {slipMode === 'photo' ? (
                    <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200 text-slate-900 space-y-2.5 shadow-md">
                      {/* Photo Banner */}
                      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-3 rounded-xl shadow-sm text-center">
                        <div className="text-[11px] font-semibold text-emerald-200">{candidateParty}</div>
                        <div className="text-base font-black tracking-wide">{candidateName}</div>
                        <div className="text-[10px] text-emerald-100">चुनाव चिन्ह: {candidateSymbol}</div>
                      </div>

                      {/* Official ECI Voter Slip Box */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-inner space-y-2 text-xs">
                        <div className="text-center font-bold text-slate-800 border-b border-slate-200 pb-1 text-[11px] uppercase tracking-wider text-emerald-800">
                          भारत निर्वाचन आयोग प्रारूप अनुसार मतदाता पर्ची
                        </div>

                        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                          <div>
                            <span className="text-slate-500 block text-[10px]">मतदाता का नाम:</span>
                            <strong className="text-slate-900">{voterName}</strong>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">पिता/पति का नाम:</span>
                            <strong className="text-slate-900">{voterFather}</strong>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">वार्ड व भाग संख्या:</span>
                            <strong className="text-emerald-700 font-bold">वार्ड {voterWard} • भाग {voterBooth}</strong>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">क्रमांक संख्या (Serial):</span>
                            <strong className="text-emerald-700 font-black text-sm">{voterSerial}</strong>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">मकान संख्या:</span>
                            <strong className="text-slate-900">{voterHouse}</strong>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">EPIC नंबर:</span>
                            <strong className="text-slate-900 font-mono">{voterEpic}</strong>
                          </div>
                        </div>

                        <div className="border-t border-slate-200 pt-1.5">
                          <span className="text-slate-500 block text-[10px]">मतदान केंद्र का पता:</span>
                          <strong className="text-slate-800 text-[11px]">{pollingStation}</strong>
                        </div>
                      </div>

                      <div className="text-center text-[11px] font-bold text-emerald-900">
                        ★ अपील: अपना अमूल्य मत देकर भारी मतों से विजयी बनाएं! ★
                      </div>

                      <div className="text-[9px] text-slate-400 text-right">10:45 AM ✓✓</div>
                    </div>
                  ) : (
                    <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200 text-slate-900 space-y-2 shadow-md text-xs font-mono leading-relaxed">
                      <div className="font-bold text-emerald-800">🇮🇳 *मतदाता सूचना पर्ची (VOTER SLIP)* 🇮🇳</div>
                      <div>*प्रत्याशी:* {candidateName} ({candidateParty})</div>
                      <div>*चुनाव चिन्ह:* {candidateSymbol}</div>
                      <div className="border-b border-dashed border-slate-300 py-1" />
                      <div>*मतदाता का नाम:* {voterName}</div>
                      <div>*पिता/पति का नाम:* {voterFather}</div>
                      <div>*वार्ड संख्या:* {voterWard} | *भाग संख्या:* {voterBooth}</div>
                      <div>*क्रम संख्या (Serial):* *{voterSerial}*</div>
                      <div>*मकान संख्या:* {voterHouse}</div>
                      <div>*पहचान पत्र (EPIC):* {voterEpic}</div>
                      <div>*मतदान केंद्र:* {pollingStation}</div>
                      <div className="border-b border-dashed border-slate-300 py-1" />
                      <div className="font-bold text-emerald-800">★ कृपया अपना अमूल्य मत देकर विजयी बनाएं! ★</div>
                      <div className="text-[9px] text-slate-400 text-right font-sans">10:45 AM ✓✓</div>
                    </div>
                  )}

                  {/* Quick Reply WhatsApp CTA */}
                  <div className="pt-2">
                    <a
                      href={getWaLink(`नमस्ते, मुझे VijaySetu की यह लाइव वोटर पर्ची टेस्ट करनी है:\nप्रत्याशी: ${candidateName} (${candidateParty})\nमतदाता: ${voterName}\nवार्ड ${voterWard}, भाग ${voterBooth}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-md transition-colors text-center"
                    >
                      <MessageCircle size={15} />
                      <span>यह पर्ची अपने WhatsApp पर टेस्ट करें ({DISPLAY_PHONE})</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Home Line */}
                <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE PERSONAS: WORKER APP vs WAR ROOM vs POLLING DAY */}
      <section id="roles" className="py-20 relative bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              हर भूमिका के लिए अलग इंटरफेस
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              कार्यकर्ता से लेकर प्रत्याशी वॉर-रूम तक
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              प्रत्येक टीम सदस्य को वही जानकारी मिलती है जो उसके कार्य के लिए आवश्यक है।
            </p>

            {/* Persona Tabs */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full">
              <button
                onClick={() => setActiveTab('warroom')}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === 'warroom'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🖥️ प्रत्याशी वॉर-रूम (Candidate Cockpit)
              </button>
              <button
                onClick={() => setActiveTab('worker')}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === 'worker'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📱 कार्यकर्ता व पन्ना प्रमुख ऐप
              </button>
              <button
                onClick={() => setActiveTab('polling')}
                className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === 'polling'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🗳️ पोलिंग एजेंट डेस्क (Voting Day)
              </button>
            </div>
          </div>

          {/* Active Tab Showcase */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-inner">
            {activeTab === 'warroom' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                    मुख्य प्रत्याशी व रणनीतिकार
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    पूरी विधानसभा की रियल-टाइम लाइव स्थिति
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    वॉर रूम में मुख्य प्रत्याशी को हर बूथ का लाइव वोटिंग प्रतिशत, मजबूत व कमजोर क्षेत्रों का मैप और कार्यकर्ताओं की ग्राउंड सक्रियता 1-स्क्रीन पर दिखती है।
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>हर घंटे का पोलिंग प्रतिशत (Turnout %) ट्रैक</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>जातिगत व सामाजिक वर्ग वार वोटिंग समीकरण</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>कमजोर बूथों के लिए इमरजेंसी अलर्ट्स</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md cursor-pointer"
                    >
                      वॉर-रूम का लाइव एक्सेस लें
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div className="font-bold text-slate-900 text-sm">लाइव वॉर-रूम मॉनिटर (37-पचपदरा)</div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      LIVE • 2:30 PM
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-lg font-black text-slate-900">2,42,100</div>
                      <div className="text-[10px] text-slate-500">कुल मतदाता</div>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                      <div className="text-lg font-black text-emerald-700">54.8%</div>
                      <div className="text-[10px] text-emerald-800">वर्तमान पोलिंग</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-lg font-black text-slate-900">238 / 238</div>
                      <div className="text-[10px] text-slate-500">बूथ कनेक्टेड</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'worker' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                    फील्ड कार्यकर्ता व पन्ना प्रमुख
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    हर कार्यकर्ता की जेब में उसका पन्ना
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    कार्यकर्ता को पूरे क्षेत्र की लंबी लिस्ट में उलझने की ज़रूरत नहीं। उसे केवल उसके 60 मतदाताओं की लिस्ट दिखती है, जिसे वह घर-घर जाकर मार्क कर सकता है।
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>सिर्फ 1-क्लिक में सपोर्टर / न्यूट्रल / विरोधी मार्किंग</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>सीधे ऐप से वोटर को कॉल या WhatsApp पर्ची</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>बिना इंटरनेट के भी ऑफलाइन कार्य करने में सक्षम</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md cursor-pointer"
                    >
                      कार्यकर्ता ऐप डेमो देखें
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
                  <div className="font-bold text-slate-900 text-sm">पन्ना प्रमुख: मोहन लाल (पन्ना नं. 14)</div>
                  <div className="space-y-2">
                    <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200 flex justify-between items-center text-xs">
                      <div>
                        <strong>रमेश कुमार शर्मा (क्र. 121)</strong>
                        <div className="text-[10px] text-slate-500">मकान 42 • पक्षधर (Core Supporter)</div>
                      </div>
                      <span className="text-emerald-700 font-bold bg-white px-2 py-1 rounded-md border border-emerald-200">सत्यापित</span>
                    </div>
                    <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 flex justify-between items-center text-xs">
                      <div>
                        <strong>कैलाश चंद्र जाट (क्र. 122)</strong>
                        <div className="text-[10px] text-slate-500">मकान 43 • न्यूट्रल (Swing Voter)</div>
                      </div>
                      <span className="text-amber-700 font-bold bg-white px-2 py-1 rounded-md border border-amber-200">फॉलो-अप</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'polling' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                    मतदान दिवस (D-Day Operations)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    बूथ पर 1 सेकंड में मार्किंग — कौन आया, कौन बाकी
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    मतदान के दिन टेबल पर बैठे एजेंट को केवल वोटर के क्रमांक पर टैप करना होता है। तुरंत वॉर-रूम में अपडेट हो जाता है कि उस परिवार ने मतदान कर दिया है।
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>क्रमांक या नाम से बिजली की गति से सर्च</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>दोपहर 3 बजे बचे हुए समर्थकों की गाड़ियां रवाना</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>फर्जी वोटिंग पर तुरंत अलर्ट</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md cursor-pointer"
                    >
                      पोलिंग डे इंटरफेस देखें
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
                  <div className="font-bold text-slate-900 text-sm">बूथ डेस्क • कमरा नं. 2 (भाग 37)</div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                    <span>मतदान स्थिति: <strong>642 / 980 मत डाले गए</strong></span>
                    <span className="text-emerald-700 font-black">65.5%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="comparison" className="py-20 relative bg-[#f8fafc] border-b border-slate-200 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              पारंपरिक बनाम आधुनिक तकनीक
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              कागजी पर्ची बनाम VijaySetu डिजिटल वॉर-रूम
            </h2>
            <p className="text-base text-slate-600">
              जानें क्यों पुराने तरीकों से चुनाव लड़ना हार का सबसे बड़ा कारण बनता है।
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Mobile swipe helper indicator */}
            <div className="text-[11px] font-semibold text-slate-500 text-center py-2 px-3 sm:hidden flex items-center justify-center gap-1.5 bg-slate-50 border-b border-slate-200">
              <span>👉 पूरी तुलना देखने के लिए दायें-बायें स्वाइप करें 👈</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700">
                    <th className="p-4 sm:p-5 font-bold">सुविधा / पैरामीटर</th>
                    <th className="p-4 sm:p-5 font-bold text-red-600 bg-red-50/50">पुराना कागजी तरीका</th>
                    <th className="p-4 sm:p-5 font-bold text-emerald-700 bg-emerald-50">VijaySetu डिजिटल वॉर रूम</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">वोटर सर्च गति</td>
                    <td className="p-4 sm:p-5 text-slate-500 bg-red-50/30">2 से 5 मिनट (कागज़ पलटना)</td>
                    <td className="p-4 sm:p-5 text-emerald-700 font-bold bg-emerald-50/30">0.2 सेकंड (तुरंत रिजल्ट)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">पर्ची वितरण लागत</td>
                    <td className="p-4 sm:p-5 text-slate-500 bg-red-50/30">₹3 - ₹5 प्रति पर्ची (छपाई + मजदूरी)</td>
                    <td className="p-4 sm:p-5 text-emerald-700 font-bold bg-emerald-50/30">लगभग 80% सस्ती (डिजिटल 1-क्लिक)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">पर्ची खोने का खतरा</td>
                    <td className="p-4 sm:p-5 text-slate-500 bg-red-50/30">70% मतदाता पर्ची फेंक या भूल जाते हैं</td>
                    <td className="p-4 sm:p-5 text-emerald-700 font-bold bg-emerald-50/30">हमेशा मतदाता के WhatsApp में सुरक्षित</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">पोलिंग डे लाइव टर्नआउट</td>
                    <td className="p-4 sm:p-5 text-slate-500 bg-red-50/30">अंधेरे में तीर (शाम 5 बजे तक पता नहीं)</td>
                    <td className="p-4 sm:p-5 text-emerald-700 font-bold bg-emerald-50/30">हर घंटे लाइव बूथ-वार प्रतिशत</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">पन्ना प्रमुख निगरानी</td>
                    <td className="p-4 sm:p-5 text-slate-500 bg-red-50/30">शून्य (कोई रिपोर्टिंग नहीं)</td>
                    <td className="p-4 sm:p-5 text-emerald-700 font-bold bg-emerald-50/30">100% लाइव कॉलिंग व संपर्क ट्रैकिंग</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / PLANS SECTION */}
      <section id="plans" className="py-20 relative bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              पारदर्शी चुनावी पैकेजेस
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              अपने चुनाव स्तर के अनुसार चुनें
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              पार्षद, ब्लॉक, विधानसभा से लेकर लोकसभा तक — हर स्तर के लिए कस्टमाइज्ड समाधान।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Ward */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 hover:border-emerald-500 flex flex-col justify-between shadow-md transition-all">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold">वार्ड / नगर पालिका / पार्षद</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">वार्ड पैकेज</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                  1 से 3 वार्डों के प्रत्याशियों के लिए सटीक और बजट-अनुकूल समाधान।
                </p>
                <div className="space-y-3 text-xs text-slate-700 mb-8 font-medium">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>अप टू 15,000 वोटर्स क्षमता</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>त्वरित मतदाता पर्ची सर्च व डाउनलोड</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>WhatsApp पर्ची शेयरिंग सपोर्ट</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>10 कार्यकर्ता / बूथ एजेंट्स लॉगिन</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>मतदान दिवस बूथ मार्किंग</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setLeadForm({ ...leadForm, electionType: 'वार्ड / पार्षद (Ward)' });
                  setLeadModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-all cursor-pointer hover:border-emerald-500"
              >
                इस प्लान के लिए संपर्क करें
              </button>
            </div>

            {/* Plan 2: Assembly (Featured) */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-emerald-500 flex flex-col justify-between relative shadow-2xl shadow-emerald-600/10 md:scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-md shrink-0">
                सर्वाधिक अनुशंसित (MOST POPULAR)
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold">विधानसभा निर्वाचन क्षेत्र</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">विधानसभा वॉर-रूम प्रो</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                  संपूर्ण विधानसभा सीट (1.5L - 3.5L मतदाता) का संपूर्ण डिजिटल प्रबंधन व वॉर रूम।
                </p>
                <div className="space-y-3 text-xs text-slate-800 mb-8 font-medium">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span className="font-bold text-slate-900">असीमित मतदाता (पूरी विधानसभा)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>आधिकारिक Meta Cloud WhatsApp API इंजन</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>घंटेवार लाइव पोलिंग टर्नआउट व वॉर रूम डैशबोर्ड</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>जातिगत व सामाजिक समीकरण विश्लेषण</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>पन्ना प्रमुख व 250+ बूथ एजेंट्स प्रबंधन</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>प्रवासी मतदाता कॉलिंग व परिवहन मॉड्यूल</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>24x7 डेडीकेटेड टेक्निकल टीम सपोर्ट</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setLeadForm({ ...leadForm, electionType: 'विधानसभा (Assembly)' });
                  setLeadModalOpen(true);
                }}
                className="w-full glow-btn py-4 rounded-xl font-bold text-sm text-white transition-all cursor-pointer shadow-md"
              >
                विधानसभा डेमो व कोटेशन लें
              </button>
            </div>

            {/* Plan 3: Lok Sabha */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 hover:border-emerald-500 flex flex-col justify-between shadow-md transition-all">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold">संसदीय सीट / पॉलिटिकल कंसल्टेंसी</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">लोकसभा / एंटरप्राइज</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                  लोकसभा सांसद प्रत्याशियों और चुनावी एजेंसियों के लिए मल्टी-विधानसभा कस्टम सॉल्यूशन।
                </p>
                <div className="space-y-3 text-xs text-slate-700 mb-8 font-medium">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>मल्टी-विधानसभा (15 लाख से 25 लाख वोटर्स)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>कस्टम डोमेन व पूर्ण व्हाइट-लेबल ब्रांडिंग</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>सेंट्रल वॉर-रूम + 8 विधानसभा सब-वॉर रूम्स</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>ऑन-साइट टेक्निकल एक्सपर्ट डिप्लॉयमेंट</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>कस्टम AI सर्वे व ओपिनियन पोलिंग</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setLeadForm({ ...leadForm, electionType: 'लोकसभा (Lok Sabha)' });
                  setLeadModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-all cursor-pointer hover:border-emerald-500"
              >
                एंटरप्राइज डेमो के लिए संपर्क करें
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 relative bg-slate-50 border-t border-slate-200 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              सामान्य प्रश्न
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              अक्सर पूछे जाने वाले सवाल (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isExpanded = expandedFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : i)}
                    className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center cursor-pointer hover:bg-slate-50"
                  >
                    <span className="text-sm sm:text-base pr-4">{f.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-emerald-700 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800 relative overflow-hidden">
        {/* Ambient Footer Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OFFICIAL LIVE PORTAL CARD / REDIRECT BANNER */}
          <div className="bg-gradient-to-r from-emerald-950/90 via-slate-900 to-emerald-950/90 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 mb-14 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-4 relative z-10 w-full lg:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                <Globe size={28} />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-[10.5px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/30 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  आधिकारिक लाइव वेब पोर्टल • Official Website
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  VijaySetu आधिकारिक वेबसाइट
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  VijaySetu (विजयसेतु) चुनाव प्रबंधन प्रणाली की आधिकारिक वेबसाइट। डिजिटल वोटर पर्ची, वॉर रूम व कैंपेन कंसोल के लिए सीधे विजिट करें।
                </p>
              </div>
            </div>
            <a
              href="https://vijaysetu-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full lg:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm px-7 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 cursor-pointer shrink-0"
            >
              <span>वेबसाइट पर जाएं</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="VijaySetu Logo"
                  className="w-12 h-12 object-contain rounded-xl bg-white/10 p-1 ring-1 ring-white/10"
                />
                <div>
                  <div className="text-2xl font-black tracking-tight">
                    Vijay<span className="text-emerald-400">Setu</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">राजनीतिक चुनाव प्रबंधन व डिजिटल वॉर रूम</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                भारत का अत्याधुनिक राजनीतिक चुनाव सॉफ्टवेयर। मतदाता खोज, WhatsApp पर्ची, 
                पन्ना प्रमुख ट्रैकिंग और पोलिंग टर्नआउट का संपूर्ण डिजिटल समाधान।
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://vijaysetu-website.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-lg hover:bg-emerald-900/60 transition-colors"
                >
                  <Globe size={13} />
                  <span>आधिकारिक वेबसाइट</span>
                  <ExternalLink size={11} />
                </a>
                <span className="text-xs text-slate-500">|</span>
                <span className="text-xs font-semibold text-slate-300">Roots Reach Media</span>
              </div>
            </div>

            <div>
              <div className="font-bold text-sm text-white mb-3">त्वरित लिंक्स</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#features" className="hover:text-emerald-400">सुविधाएं (Features)</a></li>
                <li><a href="#simulator" className="hover:text-emerald-400">लाइव पर्ची डेमो</a></li>
                <li><a href="#roles" className="hover:text-emerald-400">वॉर-रूम डैशबोर्ड</a></li>
                <li><a href="#plans" className="hover:text-emerald-400">पैकेजेस (Pricing)</a></li>
                <li>
                  <a
                    href="https://vijaysetu-website.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
                  >
                    <span>आधिकारिक वेबसाइट</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-sm text-white mb-3">संपर्क व एजेंसी</div>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="text-sm font-bold text-white">Roots Reach Media</div>
                <div>
                  <a
                    href={getWaLink('नमस्ते Roots Reach Media, मुझे VijaySetu सॉफ्टवेयर डेमो के लिए संपर्क करना है।')}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400 font-bold flex items-center gap-1.5 text-emerald-400"
                  >
                    <MessageCircle size={14} className="text-emerald-400" />
                    <span>WhatsApp: {DISPLAY_PHONE}</span>
                  </a>
                </div>
                <div>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Phone size={14} className="text-emerald-400" />
                    <span>कॉल: {DISPLAY_PHONE}</span>
                  </a>
                </div>
                <div className="text-emerald-400 font-medium">🇮🇳 मेड इन इंडिया • भारतीय चुनावों के लिए समर्पित</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              © 2026 VijaySetu (विजयसेतु) &bull; Roots Reach Media. सर्वाधिकार सुरक्षित। &bull;{' '}
              <a
                href="https://vijaysetu-website.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-bold hover:underline"
              >
                आधिकारिक वेबसाइट
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://vijaysetu-website.vercel.app" className="hover:text-emerald-400 font-semibold">वेबसाइट</a>
              <a href="/privacy" className="hover:text-slate-300">गोपनीयता नीति (Privacy Policy)</a>
              <a href="/terms" className="hover:text-slate-300">नियम व शर्तें (Terms)</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CTA BUTTON */}
      <a
        href={getWaLink('नमस्ते VijaySetu टीम, मुझे चुनाव वॉर-रूम और वोटर पर्ची का लाइव डेमो चाहिए।')}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-transform hover:scale-105 cursor-pointer font-bold text-xs sm:text-sm"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp पर बात करें ({DISPLAY_PHONE})</span>
      </a>

      {/* LEAD CAPTURE MODAL */}
      {leadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setLeadModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer p-1"
            >
              <X size={20} />
            </button>

            {leadSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-black text-slate-900">धन्यवाद! अनुरोध प्राप्त हुआ</h3>
                <p className="text-xs text-slate-600 font-medium">
                  आपकी पूछताछ सीधे एडमिन पैनल में दर्ज हो गई है। हमारी टीम WhatsApp पर आपसे तुरंत संपर्क करेगी।
                </p>
                <div className="pt-2">
                  <a
                    href={getWaLink(`नमस्ते, मैंने वेबसाइट पर डेमो फॉर्म भरा है। नाम: ${leadForm.name}, क्षेत्र: ${leadForm.constituency}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25d366] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp पर डायरेक्ट बात करें</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex items-start space-x-3.5">
                  <img
                    src="/logo.png"
                    alt="VijaySetu"
                    className="w-12 h-12 object-contain rounded-2xl p-1 bg-emerald-50 border border-emerald-200 shadow-sm shrink-0"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      मुफ़्त लाइव डेमो • VIP एक्सेस
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      अपने क्षेत्र का चुनाव वॉर-रूम देखें
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      नीचे विवरण भरें, हमारी टीम आपको तुरंत लाइव डेमो व सटीक कोटेशन प्रदान करेगी।
                    </p>
                  </div>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">आपका नाम / प्रत्याशी का नाम</label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. रोहित शर्मा"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">मोबाइल नंबर (WhatsApp वाला)</label>
                    <input
                      type="tel"
                      required
                      placeholder="उदा. 98290XXXXX"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">विधानसभा / नगर निगम / वार्ड का नाम</label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. 37-पचपदरा या वार्ड 14"
                      value={leadForm.constituency}
                      onChange={(e) => setLeadForm({ ...leadForm, constituency: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">चुनाव स्तर (Election Type)</label>
                    <select
                      value={leadForm.electionType}
                      onChange={(e) => setLeadForm({ ...leadForm, electionType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    >
                      <option value="विधानसभा (Assembly)">विधानसभा (Assembly)</option>
                      <option value="वार्ड / पार्षद (Ward)">वार्ड / पार्षद / नगर पालिका</option>
                      <option value="लोकसभा (Lok Sabha)">लोकसभा (Lok Sabha)</option>
                      <option value="पंचायत / जिला परिषद">पंचायत / जिला परिषद</option>
                    </select>
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center space-x-1.5 pt-1">
                    <Lock size={12} className="text-emerald-600" />
                    <span>🔒 आपका चुनावी डेटा 100% सुरक्षित और गोपनीय रहेगा।</span>
                  </div>

                  <button
                    type="submit"
                    disabled={leadSubmitting}
                    className="w-full glow-btn py-3.5 rounded-xl font-bold text-sm text-white shadow-lg cursor-pointer mt-2 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={17} />
                    <span>{leadSubmitting ? 'अनुरोध भेजा जा रहा है...' : `डेमो शुरू करें & WhatsApp चैट (${DISPLAY_PHONE})`}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
