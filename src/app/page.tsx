'use client';

import React, { useState } from 'react';
import {
  Search,
  Send,
  Users,
  BarChart3,
  CalendarDays,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Vote,
  Target,
  Smartphone,
  Check,
  X,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Layers,
  MapPin,
  Printer,
  FileSpreadsheet,
  Clock,
  Zap,
  Award
} from 'lucide-react';

export default function LandingPage() {
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

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadModalOpen(false);
      setLeadSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-emerald-500 selection:text-white">
      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs py-2 px-4 text-center font-medium shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase">New 2026 Edition</span>
          <span>100% प्री-लोडेड वोटर डेटा • 24 घंटे में लाइव वॉर रूम • ECI फॉर्मेट WhatsApp पर्ची</span>
          <a
            href="https://wa.me/919999999999?text=Hello%20VijaySetu%20Team%2C%20I%20want%20a%20demo%20of%20the%20Election%20War%20Room%20Software"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center space-x-1 underline font-bold ml-2 hover:text-emerald-200"
          >
            <span>डेमो लें</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md font-black text-xl">
                V
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Vijay<span className="text-emerald-700">Setu</span>
                </span>
                <span className="text-[10px] font-bold text-slate-700 block tracking-wider uppercase -mt-1">
                  विजयसेतु • डिजिटल वॉर रूम
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-600">
              <a href="#features" className="hover:text-emerald-700 transition-colors">सुविधाएं (Features)</a>
              <a href="#simulator" className="hover:text-emerald-700 transition-colors">लाइव पर्ची डेमो</a>
              <a href="#roles" className="hover:text-emerald-700 transition-colors">मोबाइल व वॉर रूम</a>
              <a href="#comparison" className="hover:text-emerald-700 transition-colors">अंतर (Comparison)</a>
              <a href="#plans" className="hover:text-emerald-700 transition-colors">पैकेजेस (Pricing)</a>
              <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
            </div>

            {/* Nav Actions */}
            <div className="flex items-center space-x-3">
              <a
                href="http://localhost:3000/login"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 px-4 py-2 rounded-xl transition-colors"
              >
                लॉगिन करें
              </a>

              <button
                onClick={() => setLeadModalOpen(true)}
                className="glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center space-x-2 cursor-pointer shadow-md"
              >
                <Sparkles size={16} />
                <span>फ्री लाइव डेमो</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-grid-pattern">
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
                  href="https://wa.me/919999999999?text=Hello%20VijaySetu%20Team%2C%20I%20want%20a%20demo%20of%20the%20Election%20War%20Room%20Software"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 rounded-2xl text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageCircle size={20} className="text-emerald-700" />
                  <span>सीधे WhatsApp पर बात करें</span>
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
              <div className="w-full max-w-sm sm:max-w-md bg-slate-900 rounded-[44px] p-4 border-4 border-slate-800 shadow-2xl relative">
                {/* Speaker & Sensor */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                {/* WhatsApp Chat Header */}
                <div className="bg-[#075e54] p-3 rounded-2xl flex items-center space-x-3 mb-3 text-white shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm text-white">
                    V
                  </div>
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
                        <span className="text-slate-700 block text-[10px]">मतदाता का नाम:</span>
                        <strong className="text-slate-900">{voterName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px]">संबंधी का नाम:</span>
                        <strong className="text-slate-900">{voterFather}</strong>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px]">वार्ड / भाग संख्या:</span>
                        <strong className="text-emerald-800 font-bold">वार्ड {voterWard} (भाग {voterBooth})</strong>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px]">क्रम संख्या (Serial):</span>
                        <strong className="text-emerald-800 font-black text-sm">{voterSerial}</strong>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px]">मकान संख्या:</span>
                        <strong className="text-slate-900">{voterHouse}</strong>
                      </div>
                      <div>
                        <span className="text-slate-700 block text-[10px]">EPIC ID:</span>
                        <strong className="text-slate-900 font-mono">{voterEpic}</strong>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-1.5">
                      <span className="text-slate-700 block text-[10px]">मतदान केंद्र:</span>
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
                      className="flex-1 py-1.5 bg-[#128c7e] hover:bg-[#075e54] text-white text-[11px] font-bold rounded-lg text-center transition-colors shadow-sm flex items-center justify-center space-x-1"
                    >
                      <Sparkles size={12} />
                      <span>लाइव एडिट करें</span>
                    </a>
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="flex-1 py-1.5 bg-white border border-slate-300 text-slate-800 text-[11px] font-bold rounded-lg text-center hover:bg-slate-50 transition-colors shadow-sm"
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
      <section id="features" className="py-20 relative bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
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
                  className="p-7 rounded-3xl glass-card flex flex-col justify-between border-slate-200 hover:border-emerald-500 bg-slate-50/50 hover:bg-white transition-all shadow-sm hover:shadow-xl"
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-1">{m.title}</h3>
                    <div className="text-xs font-semibold text-emerald-800 mb-3">{m.subtitle}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                      {m.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {m.features.map((f, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Metric Footer */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-emerald-800">{m.metric}</div>
                      <div className="text-[10px] text-slate-500">{m.metricSub}</div>
                    </div>
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center space-x-1"
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
      <section id="simulator" className="py-20 relative bg-[#f1f5f9] border-t border-b border-slate-200">
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
            <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-300 shadow-sm">
              <button
                onClick={() => setSlipMode('photo')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  slipMode === 'photo'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📸 फोटो वाली पर्ची (Photo Slip)
              </button>
              <button
                onClick={() => setSlipMode('text')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border-slate-200 space-y-4 bg-white shadow-md">
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

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
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
                            <span className="text-slate-700 block text-[10px]">मतदाता का नाम:</span>
                            <strong className="text-slate-900">{voterName}</strong>
                          </div>
                          <div>
                            <span className="text-slate-700 block text-[10px]">पिता/पति का नाम:</span>
                            <strong className="text-slate-900">{voterFather}</strong>
                          </div>
                          <div>
                            <span className="text-slate-700 block text-[10px]">वार्ड व भाग संख्या:</span>
                            <strong className="text-emerald-800 font-bold">वार्ड {voterWard} • भाग {voterBooth}</strong>
                          </div>
                          <div>
                            <span className="text-slate-700 block text-[10px]">क्रमांक संख्या (Serial):</span>
                            <strong className="text-emerald-800 font-black text-sm">{voterSerial}</strong>
                          </div>
                          <div>
                            <span className="text-slate-700 block text-[10px]">मकान संख्या:</span>
                            <strong className="text-slate-900">{voterHouse}</strong>
                          </div>
                          <div>
                            <span className="text-slate-700 block text-[10px]">EPIC नंबर:</span>
                            <strong className="text-slate-900 font-mono">{voterEpic}</strong>
                          </div>
                        </div>

                        <div className="border-t border-slate-200 pt-1.5">
                          <span className="text-slate-700 block text-[10px]">मतदान केंद्र का पता:</span>
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
                    <button
                      onClick={() => setLeadModalOpen(true)}
                      className="w-full py-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-md transition-colors"
                    >
                      <MessageCircle size={15} />
                      <span>यह पर्ची अपने WhatsApp पर टेस्ट करें</span>
                    </button>
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
      <section id="roles" className="py-20 relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              हर भूमिका के लिए अलग इंटरफेस
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              कार्यकर्ता से लेकर प्रत्याशी वॉर-रूम तक
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              प्रत्येक टीम सदस्य को वही जानकारी मिलती है जो उसके कार्य के लिए आवश्यक है।
            </p>

            {/* Persona Tabs */}
            <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab('warroom')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'warroom'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🖥️ प्रत्याशी वॉर-रूम (Candidate Cockpit)
              </button>
              <button
                onClick={() => setActiveTab('worker')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'worker'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📱 कार्यकर्ता मोबाइल ऐप (Panna Pramukh)
              </button>
              <button
                onClick={() => setActiveTab('polling')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'polling'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🗳️ मतदान दिवस पोलिंग डेस्क (Election Day)
              </button>
            </div>
          </div>

          {/* Dynamic Tab Content */}
          <div className="p-8 rounded-3xl glass-card border-slate-200 bg-slate-50/50">
            {activeTab === 'warroom' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Supreme Command Center</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    प्रत्याशी व चुनाव रणनीतिकारों का वॉर-रूम
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    संपूर्ण विधानसभा या नगर निगम का 360-डिग्री दृश्य। कुल मतदाता, महिला-पुरुष अनुपात, जातिगत आंकड़े, 
                    वार्ड-वार बढ़त का लक्ष्य और पन्ना प्रमुखों की ग्राउंड रिपोर्ट का एक संपूर्ण डैशबोर्ड।
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>घंटेवार लाइव मतदान प्रतिशत (Hourly Turnout Graph)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>स्विंग बूथ्स (Swing Booths) व रिस्क ज़ोन की ऑटो-पहचान</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>बड़ी LED स्क्रीन और प्रोजेक्टर पर लाइव वॉर रूम डिस्प्ले</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="font-bold text-xs text-slate-800">लाइव वॉर रूम स्थिति (WAR-ROOM METRICS)</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>LIVE</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <div className="text-xl font-black text-slate-900">2,48,510</div>
                      <div className="text-[10px] text-slate-500">कुल मतदाता (Total Voters)</div>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                      <div className="text-xl font-black text-emerald-700">64.8%</div>
                      <div className="text-[10px] text-emerald-800">लाइव टर्नआउट (Turnout)</div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>बूथ 37 (पचपदरा)</span>
                      <span className="text-emerald-700">71.2% मतदान</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[71.2%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'worker' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Ground Mobilization Tool</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    पन्ना प्रमुख व बूथ कार्यकर्ता मोबाइल ऐप
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    हर पन्ना प्रमुख को उसके 30 से 60 मतदाताओं की डिजिटल सूची मिलती है। एक टैप में कॉल करें, 
                    WhatsApp पर्ची भेजें और मतदाता का समर्थन स्टेटस (सपोर्टर/तटस्थ/विरोधी) रिकॉर्ड करें।
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>2G व बिना इंटरनेट के भी सुपरफास्ट काम</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>एक क्लिक में कॉल व WhatsApp पर्ची शेयरिंग</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>कार्यकर्ता की दैनिक जनसंपर्क रिपोर्ट स्वतः तैयार</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3">
                  <div className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-2">पन्ना प्रमुख: राजेश सोलंकी (पन्ना नं. 14)</div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">सुरेश कुमार वर्मा (क्र. 342)</div>
                        <div className="text-[10px] text-slate-500">मकान 27क • उम्र 50 • पुरुष</div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">पक्का समर्थक</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">कैलाश तापड़िया (क्र. 343)</div>
                        <div className="text-[10px] text-slate-500">मकान 28 • उम्र 54 • पुरुष</div>
                      </div>
                      <span className="text-[10px] font-bold text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-300">तटस्थ (संपर्क शेष)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'polling' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Election Day Table Desk</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    मतदान दिवस पोलिंग डेस्क इंटरफेस
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    मतदान केंद्र की टेबल पर बैठे एजेंट के लिए सुपर-सरल इंटरफ़ेस। जैसे ही मतदाता वोट डालकर निकले, 
                    "वोट डल गया" बटन दबाएं। वॉर-रूम को सेकंडों में पता चल जाता है कि किस परिवार का वोट बचा है।
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>शाम 3 बजे न आए वोटरों की ऑटो-लिस्ट</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>परिवारवार वोटिंग ट्रैकिंग (पूरा परिवार आया या कुछ शेष)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>विपक्ष के मजबूत बूथों पर तुरंत अलर्ट</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3">
                  <div className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-2">बूथ 37 • पोलिंग टेबल इंटरफेस</div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-slate-900">कुल वोटर: 1,775</div>
                      <div className="text-emerald-700 font-bold">वोट डल चुके: 1,280 (72%)</div>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-emerald-600 px-3 py-1.5 rounded-lg">495 वोट शेष</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION (SMARTBOOTH vs TRADITIONAL PAPER) */}
      <section id="comparison" className="py-20 relative bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              तुलना व अंतर
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              विजयसेतु बनाम पुरानी कागजी पर्ची
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              जानिए क्यों आधुनिक प्रत्याशी कागजी पर्चियों की बर्बादी छोड़ डिजिटल वॉर रूम अपना रहे हैं।
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl glass-card overflow-hidden border-slate-200 bg-white shadow-lg">
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 font-bold text-xs sm:text-sm">
              <div className="col-span-4 sm:col-span-4">मापदंड (Metric)</div>
              <div className="col-span-4 sm:col-span-4 text-red-300">पुरानी कागजी पर्ची</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-400">VijaySetu डिजिटल वॉर रूम</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-4 font-bold text-slate-900">पर्ची वितरण गति</div>
                <div className="col-span-4 text-slate-500">10 से 15 दिन (घर-घर बांटने में)</div>
                <div className="col-span-4 text-emerald-800 font-bold">मात्र 1 सेकंड (सीधे WhatsApp पर)</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center bg-slate-50/50">
                <div className="col-span-4 font-bold text-slate-900">खर्च में बचत</div>
                <div className="col-span-4 text-slate-500">लाखों रुपये प्रिंटिंग व वितरण में व्यर्थ</div>
                <div className="col-span-4 text-emerald-800 font-bold">80% बजट की सीधी बचत</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-4 font-bold text-slate-900">मतदान दिवस ट्रैकिंग</div>
                <div className="col-span-4 text-slate-500">कोई डेटा नहीं, केवल अंदाज लगाना</div>
                <div className="col-span-4 text-emerald-800 font-bold">घंटेवार लाइव टर्नआउट प्रतिशत</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center bg-slate-50/50">
                <div className="col-span-4 font-bold text-slate-900">कार्यकर्ता जवाबदेही</div>
                <div className="col-span-4 text-slate-500">किसने कितना काम किया, अज्ञात</div>
                <div className="col-span-4 text-emerald-800 font-bold">पन्ना प्रमुखों की लाइव रिपोर्टिंग</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-4 font-bold text-slate-900">पर्ची खोने का खतरा</div>
                <div className="col-span-4 text-slate-500">बहुत ज्यादा (वोटर अक्सर भूल जाते हैं)</div>
                <div className="col-span-4 text-emerald-800 font-bold">शून्य (हमेशा मोबाइल में सुरक्षित)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS & PACKAGES */}
      <section id="plans" className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              कस्टमाइज्ड पैकेजेस
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              हर चुनाव के लिए तैयार पैकेज
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              नगर निगम वार्ड से लेकर लोकसभा संसदीय सीट तक — आपकी आवश्यकता अनुसार संपूर्ण तकनीकी समाधान।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Ward */}
            <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-slate-200 bg-slate-50/50">
              <div>
                <span className="text-xs font-mono text-emerald-800 font-bold">वार्ड / पार्षद / पंचायत</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">वार्ड पैकेज</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  1 से 3 वार्डों के प्रत्याशियों के लिए सटीक और बजट-अनुकूल समाधान।
                </p>
                <div className="space-y-3 text-xs text-slate-700 mb-8">
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
            <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-emerald-500 relative shadow-xl shadow-emerald-600/10 bg-gradient-to-b from-emerald-50/80 to-white">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                सर्वाधिक अनुशंसित (MOST POPULAR)
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-800 font-bold">विधानसभा निर्वाचन क्षेत्र</span>
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
            <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-slate-200 bg-slate-50/50">
              <div>
                <span className="text-xs font-mono text-emerald-800 font-bold">संसदीय सीट / पॉलिटिकल कंसल्टेंसी</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">लोकसभा / एंटरप्राइज</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  लोकसभा सांसद प्रत्याशियों और चुनावी एजेंसियों के लिए मल्टी-विधानसभा कस्टम सॉल्यूशन।
                </p>
                <div className="space-y-3 text-xs text-slate-700 mb-8">
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
      <section id="faq" className="py-20 relative bg-slate-50 border-t border-slate-200">
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
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center font-black text-xl text-white">
                  V
                </div>
                <div>
                  <div className="text-2xl font-black">VijaySetu</div>
                  <div className="text-xs text-slate-400">राजनीतिक चुनाव प्रबंधन व डिजिटल वॉर रूम</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                भारत का अत्याधुनिक राजनीतिक चुनाव सॉफ्टवेयर। मतदाता खोज, WhatsApp पर्ची, 
                पन्ना प्रमुख ट्रैकिंग और पोलिंग टर्नआउट का संपूर्ण डिजिटल समाधान।
              </p>
            </div>

            <div>
              <div className="font-bold text-sm text-white mb-3">त्वरित लिंक्स</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#features" className="hover:text-emerald-400">सुविधाएं (Features)</a></li>
                <li><a href="#simulator" className="hover:text-emerald-400">लाइव पर्ची डेमो</a></li>
                <li><a href="#roles" className="hover:text-emerald-400">वॉर-रूम डैशबोर्ड</a></li>
                <li><a href="#plans" className="hover:text-emerald-400">पैकेजेस (Pricing)</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-sm text-white mb-3">संपर्क व सहायता</div>
              <div className="space-y-2 text-xs text-slate-400">
                <div>📞 +91 91166 12345 / 99999 99999</div>
                <div>💬 support@vijaysetu.in</div>
                <div>🇮🇳 मेड इन इंडिया • भारतीय चुनावों के लिए समर्पित</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© 2026 VijaySetu (विजयसेतु). सर्वाधिकार सुरक्षित।</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-slate-300">गोपनीयता नीति (Privacy Policy)</a>
              <a href="#" className="hover:text-slate-300">नियम व शर्तें (Terms)</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CTA BUTTON */}
      <a
        href="https://wa.me/919999999999?text=Hello%20VijaySetu%20Team%2C%20I%20want%20a%20demo%20of%20the%20Election%20War%20Room%20Software"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-transform hover:scale-105 cursor-pointer font-bold text-xs sm:text-sm"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp पर बात करें</span>
      </a>

      {/* LEAD CAPTURE MODAL */}
      {leadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setLeadModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X size={20} />
            </button>

            {leadSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">धन्यवाद! अनुरोध प्राप्त हुआ</h3>
                <p className="text-xs text-slate-600">
                  हमारी तकनीकी टीम अगले 15 मिनट में आपके नंबर पर संपर्क करके लाइव डेमो शुरू करेगी।
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    मुफ़्त लाइव डेमो
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">
                    अपने क्षेत्र का चुनाव वॉर-रूम देखें
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    नीचे विवरण भरें, हमारी टीम आपको तुरंत लाइव डेमो व सटीक कोटेशन प्रदान करेगी।
                  </p>
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

                  <button
                    type="submit"
                    className="w-full glow-btn py-3.5 rounded-xl font-bold text-sm text-white shadow-lg cursor-pointer mt-2"
                  >
                    डेमो शुरू करें (Instant Access)
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
