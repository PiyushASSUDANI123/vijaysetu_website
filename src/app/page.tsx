'use client';

import React, { useState } from 'react';
import {
  Search,
  Send,
  Users,
  BarChart3,
  CalendarDays,
  Activity,
  Briefcase,
  Plane,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles,
  Lock,
  ArrowRight,
  Vote,
  Target,
  Smartphone,
  Check,
  X,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function LandingPage() {
  // Interactive Voter Slip Simulator State
  const [candidateName, setCandidateName] = useState('रोहित शर्मा');
  const [candidateParty, setCandidateParty] = useState('विकास मोर्चा');
  const [voterName, setVoterName] = useState('सुरेश कुमार वर्मा');
  const [voterFather, setVoterFather] = useState('रामनारायण वर्मा');
  const [voterWard, setVoterWard] = useState('14');
  const [voterSerial, setVoterSerial] = useState('342');
  const [voterEpic, setVoterEpic] = useState('RJ/02/142/098712');

  // Active module tab
  const [activeModule, setActiveModule] = useState(0);

  // Lead Modal
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    constituency: '',
    electionType: 'विधानसभा (Assembly)',
  });

  const modules = [
    {
      id: 'search',
      title: 'मतदाता खोज व डिजिटल पर्ची',
      subtitle: 'Instant Voter Search & WhatsApp Slip',
      icon: Search,
      badge: 'सबसे लोकप्रिय',
      description: 'नाम, पिता/पति के नाम, मकान नंबर, वार्ड या EPIC नंबर से मात्र 0.3 सेकंड में मतदाता खोजें। एक क्लिक में प्रत्याशी के नाम, चुनाव चिन्ह व बूथ पते के साथ डिजिटल पर्ची सीधे WhatsApp पर भेजें।',
      features: [
        'देवनागरी व अंग्रेज़ी दोनों में तेज़ फॉनेटिक सर्च',
        'प्रत्याशी की ब्रांडिंग व चुनाव चिन्ह के साथ आकर्षक पर्ची',
        'बूथ का सटीक गूगल मैप्स व कमरा नंबर ऑटो-शामिल',
        'परिवार के सभी सदस्यों की पर्चियां एक साथ बंडल में भेजने की सुविधा',
      ],
      metric: '0.3s सर्च स्पीड',
      metricSub: 'लाखों रिकॉर्ड्स में भी बिना अटके',
    },
    {
      id: 'polling-desk',
      title: 'मतदान दिवस पोलिंग डेस्क',
      subtitle: 'Polling Day Booth Management',
      icon: CalendarDays,
      badge: 'मतदान दिवस विशेष',
      description: 'मतदान के दिन हर बूथ पर बैठे कार्यकर्ताओं के लिए विशेष मोबाइल इंटरफ़ेस। वोटर आते ही "वोट डल गया" मार्क करें और वॉर रूम को रियल-टाइम पता चले कि किस परिवार का वोट बचा है।',
      features: [
        'कमज़ोर इंटरनेट व 2G पर भी बिजली की तेज़ी से काम',
        'परिवारवार मार्किंग — पूरा परिवार आया या कुछ सदस्य शेष',
        'बूथ एजेंट के लिए सरल हिंदी यूज़र इंटरफ़ेस',
        'दोपहर 3 बजे के बाद न आए वोटरों की ऑटो-लिस्ट',
      ],
      metric: '100% बूथ कवरेज',
      metricSub: 'हर टेबल पर सटीक कंट्रोल',
    },
    {
      id: 'turnout',
      title: 'लाइव मतदान दर व टर्नआउट',
      subtitle: 'Real-Time Turnout Analytics',
      icon: Activity,
      badge: 'लाइव ट्रैकर',
      description: 'बूथ-वार और वार्ड-वार प्रति घंटा पोलिंग प्रतिशत का लाइव विश्लेषण। पता लगाएं कि हमारे मजबूत बूथों पर वोटिंग सुस्त है या तेज़, ताकि तुरंत मोबिलाइज़ेशन टीम भेजी जा सके।',
      features: [
        'घंटे-वार (सुबह 7 से शाम 6) मतदान दर का ग्राफ',
        'कम वोटिंग वाले बूथों के लिए तत्काल रेड अलर्ट',
        'पिछले चुनाव से वोट प्रतिशत की तुलना',
        'वॉर रूम में बड़ी स्क्रीन (LED Wall) पर लाइव डिस्प्ले',
      ],
      metric: 'लाइव घंटेवार डेटा',
      metricSub: 'जीत का अंतर बढ़ाने हेतु रणनीतिक निर्णय',
    },
    {
      id: 'warroom',
      title: 'पॉलिटिकल वॉर-रूम इंटेलिजेंस',
      subtitle: 'Strategic Command Cockpit',
      icon: BarChart3,
      badge: 'निर्णय केंद्र',
      description: 'प्रत्याशी और मुख्य रणनीतिकारों के लिए सुप्रीम कमांड सेंटर। कुल वोटर्स, महिला-पुरुष अनुपात, मोबाइल वेरिफाइड संख्या, जीत का लक्ष्य मार्जिन और बूथ प्राथमिकता का एक संपूर्ण डैशबोर्ड।',
      features: [
        'जीत के आवश्यक जादुई आंकड़े (Victory Margin) का ऑटो-कैलकुलेटर',
        'वार्ड-वार जीत-हार की संवेदनशीलता (Swing Booths) की मैपिंग',
        'पन्ना प्रमुखों की ग्राउंड रिपोर्ट का स्वचालित एकत्रीकरण',
        'एक्सपोर्ट एक्सेल व प्रिंटेड रिपोर्ट्स एक क्लिक में',
      ],
      metric: '360° विज़न',
      metricSub: 'हर बूथ का सूक्ष्म राजनीतिक विश्लेषण',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp पर्ची ऑटोमेशन व ऑडिट',
      subtitle: 'Official Meta Cloud API Engine',
      icon: Send,
      badge: 'स्मार्ट डिलीवरी',
      description: 'आधिकारिक WhatsApp डिलीवरी इंजन जो बिना किसी बैन के हज़ारों मतदाताओं को सेकंडों में उनकी व्यक्तिगत पर्ची व प्रत्याशी का संदेश डिलीवर करता है।',
      features: [
        'एंटी-बैन इंटेलिजेंट डिलीवरी कतार (Rate-limited Safe Queue)',
        'डिलीवरी ऑडिट: कौन सा मैसेज डिलीवर हुआ, कौन सा पढ़ा गया',
        'कस्टम ग्रीटिंग व अपील संदेश के साथ वोटर पर्ची',
        'मतदाता का सीधा रिप्लाई वॉर-रूम टीम को प्राप्त',
      ],
      metric: '99.8% डिलीवरी',
      metricSub: 'सीधा मतदाता के पर्सनल फोन पर',
    },
    {
      id: 'community',
      title: 'जातीय समीकरण व सामाजिक विश्लेषण',
      subtitle: 'Demographic & Community Profiling',
      icon: Users,
      badge: 'माइक्रो टारगेटिंग',
      description: 'उपनाम (Surname) और स्थानीय मोहल्लों के आधार पर जातिगत व सामाजिक आंकड़े। प्रभावशाली परिवारों, समाज के वरिष्ठजनों और प्रमुख मतदाताओं की पहचान करें।',
      features: [
        'जातिवार व समाजवार वोट संख्या का अनुमानित वर्गीकरण',
        'मोहल्ले व कॉलोनी के हिसाब से प्रभाव-क्षेत्र विश्लेषण',
        'समुदाय के प्रमुख प्रभावशाली व्यक्तियों के टैगिंग टूल्स',
        'विशिष्ट समाज के कार्यक्रमों हेतु टारगेटेड कॉलिंग लिस्ट',
      ],
      metric: 'सटीक वर्गीकरण',
      metricSub: 'सामाजिक समीकरण साधने में मददगार',
    },
    {
      id: 'workers',
      title: 'कार्यकर्ता व पन्ना प्रमुख प्रबंधन',
      subtitle: 'Field Team & Panna Pramukh Ops',
      icon: Briefcase,
      badge: 'ग्राउंड टीम',
      description: 'हर पन्ना प्रमुख को 30-50 मतदाताओं की जिम्मेदारी सौंपें। कार्यकर्ता अपने मोबाइल से संपर्क किए गए वोटरों को टिक करें और वॉर-रूम से उनकी प्रगति लाइव देखें।',
      features: [
        'पन्ना-वार व बूथ-वार कार्यकर्ताओं का आवंटन',
        'घर-घर संपर्क का लाइव स्टेटस व सत्यापन',
        'सर्वश्रेष्ठ प्रदर्शन करने वाले कार्यकर्ताओं का लीडरबोर्ड',
        'कार्यकर्ताओं को केवल उनकी सूची देखने का सुरक्षित एक्सेस',
      ],
      metric: 'जवाबदेही तय',
      metricSub: 'हर पन्ने पर एक जिम्मेदार कार्यकर्ता',
    },
    {
      id: 'migrants',
      title: 'प्रवासी मतदाता समन्वय',
      subtitle: 'Migrant & Outstation Voter Tracking',
      icon: Plane,
      badge: 'निर्णायक वोटर्स',
      description: 'दूसरे शहरों या राज्यों में रहने वाले प्रवासी मतदाताओं की अलग सूची। उनकी कॉलिंग स्थिति, आने की तारीख, टिकट समन्वय और मतदान की प्रतिबद्धता दर्ज करें।',
      features: [
        'शहर-वार प्रवासी वोटर्स का डेटा (मुंबई, सूरत, दिल्ली, आदि)',
        'कॉलिंग फॉलो-अप व रिस्पॉन्स ट्रैकिंग',
        'यात्रा व वाहन व्यवस्था समन्वय शीट',
        'क्लोज कॉन्टेस्ट में निर्णायक 2000-5000 वोटों का पक्का प्रबंधन',
      ],
      metric: 'गेम चेंजर वोट्स',
      metricSub: 'जो अंतर जीत और हार तय करता है',
    },
  ];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadModalOpen(false);
      setLeadSubmitted(false);
      setLeadForm({ name: '', phone: '', constituency: '', electionType: 'विधानसभा (Assembly)' });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-emerald-500 selection:text-white">
      {/* Background ambient glow effects */}
      <div className="glow-subtle bg-emerald-200/50 w-[600px] h-[600px] top-[-100px] left-1/2 -translate-x-1/2" />
      <div className="glow-subtle bg-emerald-100/60 w-[500px] h-[500px] top-[1400px] left-[-100px]" />
      <div className="glow-subtle bg-emerald-200/40 w-[700px] h-[700px] top-[2800px] right-[-100px]" />

      {/* STICKY GLASS NAVBAR (LIGHT THEME) */}
      <nav className="sticky top-0 z-50 glass-nav transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-0.5 shadow-md shadow-emerald-500/20 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="VijaySetu Logo" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">VijaySetu</span>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                  विजयसेतु
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">Election War Room & Voter Intelligence</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-emerald-700 transition-colors">मुख्य फ़ीचर्स</a>
            <a href="#simulator" className="hover:text-emerald-700 transition-colors">पर्ची सिम्युलेटर</a>
            <a href="#workflow" className="hover:text-emerald-700 transition-colors">कार्यप्रणाली</a>
            <a href="#comparison" className="hover:text-emerald-700 transition-colors">तुलना</a>
            <a href="#plans" className="hover:text-emerald-700 transition-colors">पैकेज व प्लान</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">सवाल-जवाब</a>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://vijaysetu.piyushassudani.in/login"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
            >
              क्लाइंट लॉगिन
              <ExternalLink size={13} className="ml-1.5 opacity-80" />
            </a>

            <button
              onClick={() => setLeadModalOpen(true)}
              className="glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center space-x-2 cursor-pointer shadow-md"
            >
              <Sparkles size={16} />
              <span>डेमो बुक करें</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (LIGHT THEME) */}
      <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Live Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping inline-block" />
              <span>भारत का नंबर 1 राजनीतिक चुनाव प्रबंधन व वॉर-रूम सॉफ्टवेयर</span>
              <span className="text-emerald-700 font-bold">• 2026 EDITION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              बूथ से लेकर वॉर-रूम तक,{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 bg-clip-text text-transparent">
                हर वोट पर सटीक नियंत्रण
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
              <strong className="text-emerald-800 font-bold">VijaySetu (विजयसेतु)</strong> प्रत्याशियों, राजनीतिक दलों और चुनाव प्रबंधकों को देता है 
              1-सेकंड डिजिटल मतदाता पर्ची, WhatsApp ऑटोमेशन, पन्ना प्रमुख ट्रैकिंग और रियल-टाइम पोलिंग टर्नआउट का संपूर्ण कंट्रोल।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => setLeadModalOpen(true)}
                className="w-full sm:w-auto glow-btn px-8 py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center space-x-3 cursor-pointer shadow-lg"
              >
                <Vote size={20} />
                <span>फ्री लाइव वॉर-रूम डेमो देखें</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm flex items-center justify-center space-x-2 transition-all hover:border-emerald-500"
              >
                <Smartphone size={19} className="text-emerald-600" />
                <span>मतदाता पर्ची सिम्युलेटर आज़माएं</span>
              </a>

              <a
                href="https://wa.me/919999999999?text=Hello%20VijaySetu%20Team%2C%20I%20want%20a%20demo%20of%20the%20Election%20War%20Room%20Software"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl text-base font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center justify-center space-x-2 transition-all"
              >
                <MessageCircle size={19} />
                <span>WhatsApp पर बात करें</span>
              </a>
            </div>

            {/* Live Metrics Trust Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-card text-left max-w-4xl mx-auto border-slate-200">
              <div className="p-2 border-r border-slate-100">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">50,00,000+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">वोटर्स डेटा प्रोसेस किया गया</div>
              </div>
              <div className="p-2 border-r border-slate-100">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">99.8%</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">WhatsApp पर्ची डिलीवरी दर</div>
              </div>
              <div className="p-2 border-r border-slate-100">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">0.3 सेकंड</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">सुपरफ़ास्ट वोटर सर्च गति</div>
              </div>
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">250+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">सफल चुनाव विधानसभा/वार्ड</div>
              </div>
            </div>
          </div>

          {/* MOCKUP WAR ROOM COCKPIT (LIGHT THEME) */}
          <div className="mt-14 max-w-5xl mx-auto rounded-3xl overflow-hidden glass-card p-4 sm:p-6 border-slate-200 shadow-xl bg-white">
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 px-2">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-semibold">
                  VIJAYSETU // WAR-ROOM COMMAND v4.2 [LIVE DEMO]
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-emerald-700 font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="hidden sm:inline">LIVE SYNC ACTIVE</span>
              </div>
            </div>

            {/* Cockpit Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stat 1 */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
                  <span>कुल मतदाता (Total Voters)</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">वार्ड 14</span>
                </div>
                <div className="text-3xl font-black text-slate-900">1,48,290</div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>पुरुष: 78,140 (52.7%)</span>
                  <span>महिला: 70,150 (47.3%)</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[52.7%]" />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
                  <span>मतदान दिवस टर्नआउट (Live Polling)</span>
                  <span className="text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded">दोपहर 2:00 बजे</span>
                </div>
                <div className="text-3xl font-black text-emerald-600">62.8%</div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>डाले गए वोट: 93,126</span>
                  <span className="text-emerald-700 font-semibold">लक्ष्य: 75%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full w-[62.8%]" />
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
                  <span>WhatsApp पर्चियां (Slips Dispatched)</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">ऑटो-कतार</span>
                </div>
                <div className="text-3xl font-black text-slate-900">41,850</div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>डिलीवर: 41,720</span>
                  <span className="text-slate-600 font-semibold">सफलता दर: 99.7%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[99.7%]" />
                </div>
              </div>
            </div>

            {/* Live Feed ticker */}
            <div className="mt-4 p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700 gap-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px] uppercase">
                  Live Feed
                </span>
                <span className="truncate font-medium">बूथ 38: पन्ना प्रमुख महेश ने 24 परिवारों को पर्ची हैंडओवर की • मतदान दर 68% पार</span>
              </div>
              <span className="text-emerald-700 font-mono text-[11px] shrink-0 font-semibold">12 सेकंड पूर्व अपडेटेड</span>
            </div>
          </div>
        </div>
      </section>

      {/* ALL CUSTOMER OPTIONS & FEATURES SECTION (LIGHT THEME) */}
      <section id="features" className="py-24 relative bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              संपूर्ण सुविधाएं व फीचर्स
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-5">
              चुनाव जीतने के लिए हर वह टूल, जिसकी आपको ज़रूरत है
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              सामान्य एक्सेल शीट या कागज़ी पर्चियों के दिन गए। विजयसेतु आपको और आपकी टीम को आधुनिकतम तकनीकों से लैस करता है।
            </p>
          </div>

          {/* Module Tabs Header */}
          <div className="flex overflow-x-auto pb-4 mb-8 space-x-2 custom-scrollbar">
            {modules.map((m, index) => {
              const Icon = m.icon;
              const isSelected = activeModule === index;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(index)}
                  className={`flex items-center space-x-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 border border-emerald-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  <Icon size={16} />
                  <span>{m.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Module Detail Spotlight */}
          <div className="glass-card p-6 sm:p-10 rounded-3xl border-slate-200 bg-slate-50/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                  <Sparkles size={13} />
                  <span>{modules[activeModule].badge}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
                  {modules[activeModule].title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 font-mono font-semibold mb-4">
                  {modules[activeModule].subtitle}
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                  {modules[activeModule].description}
                </p>

                <div className="space-y-3 mb-8">
                  {modules[activeModule].features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm text-slate-700">
                      <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        <Check size={14} />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setLeadModalOpen(true)}
                    className="glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center space-x-2 cursor-pointer shadow-md"
                  >
                    <span>इस फ़ीचर का डेमो लें</span>
                    <ArrowRight size={15} />
                  </button>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs shadow-sm">
                    <span className="text-slate-500">प्रभाव: </span>
                    <strong className="text-emerald-700 font-bold">{modules[activeModule].metric}</strong>
                    <span className="text-slate-500"> ({modules[activeModule].metricSub})</span>
                  </div>
                </div>
              </div>

              {/* Graphic / Interactive representation for active module */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="text-xs font-mono text-emerald-700 font-bold mb-4 flex justify-between items-center">
                  <span>LIVE PREVIEW PANEL</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px]">ACTIVE</span>
                </div>

                {activeModule === 0 && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-xs text-slate-500 font-medium">सर्च इनपुट:</div>
                      <div className="text-sm font-mono text-emerald-700 font-bold">"सुरेश वर्मा वार्ड 14"</div>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-xs space-y-2">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>सुरेश कुमार वर्मा</span>
                        <span className="text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">क्र. 342</span>
                      </div>
                      <div className="text-slate-600">पिता: रामनारायण वर्मा • आयु: 42 • मकान: 104/A</div>
                      <div className="text-slate-500 font-mono">EPIC: RJ/02/142/098712</div>
                      <div className="pt-2 flex gap-2">
                        <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm">
                          <Send size={13} />
                          <span>WhatsApp पर्ची भेजें</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule === 1 && (
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">बूथ 12: राजकीय उच्च प्राथमिक विद्यालय</div>
                        <div className="text-slate-500 text-[11px]">कुल वोटर: 950 • डले वोट: 618</div>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-black text-xs">65%</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-800">सुरेश वर्मा (मकान 104)</span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">वोट डल गया ✓</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-800">सुनीता वर्मा (मकान 104)</span>
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-bold text-[10px]">बाकी है ⏳</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule >= 2 && (
                  <div className="space-y-3">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>वॉर रूम इंटेलिजेंस इंडेक्स</span>
                        <span className="text-emerald-700 font-bold">ऑप्टिमाइज़्ड</span>
                      </div>
                      <div className="text-xl font-black text-slate-900 mb-2">98.4% डेटा सटीकता</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {modules[activeModule].title} मॉड्यूल आपके अभियान को वास्तविक समय की रणनीतिक बढ़त देता है।
                      </p>
                    </div>
                    <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center space-x-3 text-xs text-emerald-900">
                      <ShieldCheck size={20} className="text-emerald-700 shrink-0" />
                      <span className="font-medium">100% डेटा गोपनीयता और मल्टी-लेवल रोल एक्सेस सुरक्षित।</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Grid of all other customer modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  onClick={() => setActiveModule(idx)}
                  className={`p-6 rounded-2xl glass-card transition-all cursor-pointer ${
                    activeModule === idx ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/30' : 'hover:border-emerald-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{m.title}</h4>
                  <p className="text-xs text-emerald-700 font-mono font-semibold mb-2">{m.subtitle}</p>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{m.description}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>विस्तार से देखें</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIVE INTERACTIVE VOTER SLIP SIMULATOR (LIGHT THEME) */}
      <section id="simulator" className="py-24 relative bg-[#f1f5f9] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              लाइव सिम्युलेटर
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              डिजिटल मतदाता पर्ची चलाकर देखें
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              नीचे प्रत्याशी और मतदाता की जानकारी बदलें और देखें कि मतदाता के WhatsApp पर पर्ची कैसी दिखाई देती है।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Config Controls */}
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border-slate-200 space-y-4 bg-white shadow-md">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Target size={18} className="text-emerald-600" />
                <span>पर्ची कस्टमाइज़ करें</span>
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">प्रत्याशी का नाम (Candidate Name)</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">दल / पार्टी या स्लोगन (Party / Slogan)</label>
                <input
                  type="text"
                  value={candidateParty}
                  onChange={(e) => setCandidateParty(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">क्रम संख्या</label>
                  <input
                    type="text"
                    value={voterSerial}
                    onChange={(e) => setVoterSerial(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">EPIC ID</label>
                  <input
                    type="text"
                    value={voterEpic}
                    onChange={(e) => setVoterEpic(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white font-mono"
                  />
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                💡 वास्तविक सॉफ्टवेयर में यह पर्ची 1-क्लिक में आधिकारिक WhatsApp API से सीधे मतदाता के मोबाइल पर डिलीवर होती है।
              </div>
            </div>

            {/* Simulated WhatsApp Phone Screen */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-md bg-slate-900 rounded-[38px] p-4 border-4 border-slate-700 shadow-2xl relative">
                {/* Phone Speaker & Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                {/* WhatsApp Chat Header */}
                <div className="bg-[#075e54] p-3 rounded-2xl flex items-center space-x-3 mb-3 text-white shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-emerald-400/20 border border-white/30 flex items-center justify-center font-bold text-sm">
                    {candidateName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">{candidateName} कार्यालय</div>
                    <div className="text-[10px] text-emerald-100">आधिकारिक चुनाव सहायता डेस्क</div>
                  </div>
                  <span className="text-[10px] text-emerald-100 font-mono">10:42 AM</span>
                </div>

                {/* WhatsApp Chat Bubble: Voter Slip Card */}
                <div className="bg-[#e7fedb] p-4 rounded-2xl border border-emerald-200 text-slate-900 space-y-3 shadow-md">
                  {/* Candidate Header */}
                  <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white p-3 rounded-xl flex justify-between items-center shadow-sm">
                    <div>
                      <div className="text-xs text-emerald-200 font-semibold">{candidateParty}</div>
                      <div className="text-base font-black">{candidateName}</div>
                      <div className="text-[10px] text-emerald-100">आपकी सेवा में समर्पित प्रत्याशी</div>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center shadow">
                      <img src="/logo.png" alt="Symbol" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Election Slip Title */}
                  <div className="text-center py-1 bg-white rounded-lg text-xs font-bold text-emerald-800 border border-emerald-300 shadow-xs">
                    डिजिटल मतदाता सूचना पर्ची (VOTER SLIP)
                  </div>

                  {/* Voter Details Table */}
                  <div className="bg-white p-3 rounded-xl space-y-2 text-xs border border-emerald-100 shadow-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">मतदाता का नाम:</span>
                      <strong className="text-slate-900 font-bold">{voterName}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">पिता/पति का नाम:</span>
                      <span className="text-slate-800 font-medium">{voterFather}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">मतदाता क्रम संख्या:</span>
                      <strong className="text-emerald-700 font-black text-sm">क्र. {voterSerial}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">वार्ड नंबर:</span>
                      <span className="text-slate-800 font-semibold">वार्ड नं. {voterWard}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">पहचान पत्र (EPIC):</span>
                      <span className="font-mono text-emerald-800 font-bold">{voterEpic}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-500">मतदान केंद्र:</span>
                      <span className="text-slate-800 text-right text-[11px] font-bold max-w-[200px]">
                        रा. उ. प्रा. विद्यालय, कमरा नं. 02, गांधी नगर
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Action Buttons on Slip */}
                  <div className="space-y-1.5 pt-1">
                    <div className="w-full py-2 bg-[#25d366] hover:bg-[#20ba59] text-center rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center space-x-2 shadow-xs cursor-pointer">
                      <Send size={13} />
                      <span>बूथ का लोकेशन मैप खोलें (Google Maps)</span>
                    </div>
                    <div className="w-full py-1.5 bg-white text-center rounded-xl text-[11px] font-bold text-emerald-800 border border-emerald-200">
                      सहायता हेतु कॉल करें: +91 98765 43210
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center text-[10px] text-slate-400">
                  VijaySetu Cloud Dispatch Engine • 100% EC Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW ARCHITECTURE (LIGHT THEME) */}
      <section id="workflow" className="py-24 relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              4-चरणों की जीत की कार्यप्रणाली
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              डेटा से लेकर मतदान केंद्र तक की रणनीति
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              विजयसेतु आपके अभियान को कैसे व्यवस्थित और अजेय बनाता है:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl glass-card relative border-slate-200 bg-slate-50/50">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">मास्टर डेटा अंतर्ग्रहण</h3>
              <p className="text-xs text-emerald-700 font-mono font-semibold mb-3">AI PDF & Excel OCR</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                चुनाव आयोग की हिंदी या अंग्रेजी वोटर लिस्ट PDF को हमारे AI OCR से 10 मिनट में सीधे डेटाबेस में बदलें। डुप्लीकेट व पते ऑटो-सॉर्ट।
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card relative border-slate-200 bg-slate-50/50">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">पन्ना प्रमुख नेटवर्क</h3>
              <p className="text-xs text-emerald-700 font-mono font-semibold mb-3">Ground Mobilization</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                हर कार्यकर्ता को उसके 30-50 मतदाताओं की सूची दें। मोबाइल से हर घर का संपर्क, समर्थन स्तर और प्रवासी मतदाताओं की स्थिति ट्रैक करें।
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card relative border-slate-200 bg-slate-50/50">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">मतदान दिवस डेस्क</h3>
              <p className="text-xs text-emerald-700 font-mono font-semibold mb-3">Polling Day Execution</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                बूथ के बाहर बैठे एजेंट मतदाता को तुरंत पर्ची दें और मार्क करें। वॉर-रूम को रियल-टाइम पता चले कि किस मोहल्ले के वोटर अभी नहीं आए।
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card relative border-slate-200 bg-slate-50/50">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">लाइव टर्नआउट व जीत</h3>
              <p className="text-xs text-emerald-700 font-mono font-semibold mb-3">Decisive Turnout Boost</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                दोपहर 2 बजे के बाद कम वोटिंग वाले फ्रेंडली बूथों पर तुरंत अतिरिक्त वाहन और टीम भेजकर 5-10% निर्णायक टर्नआउट बढ़ाएं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE: OLD METHOD VS VIJAYSETU (LIGHT THEME) */}
      <section id="comparison" className="py-24 relative bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              पारंपरिक बनाम आधुनिक चुनाव
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              पुराने तरीके बनाम विजयसेतु वॉर-रूम
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              जानिए विजयसेतु का इस्तेमाल करने वाले उम्मीदवार हमेशा एक कदम आगे क्यों रहते हैं:
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border-slate-200 max-w-4xl mx-auto bg-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100 p-4 sm:p-6 border-b border-slate-200 text-xs sm:text-sm font-bold">
              <div className="md:col-span-4 text-slate-700">कार्य / चुनौती (Operation)</div>
              <div className="md:col-span-4 text-red-600">पारंपरिक चुनाव (Old Way)</div>
              <div className="md:col-span-4 text-emerald-700">विजयसेतु वॉर-रूम (VijaySetu)</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center">
                <div className="md:col-span-4 font-bold text-slate-900">मतदाता पर्ची वितरण</div>
                <div className="md:col-span-4 text-slate-500 flex items-center space-x-2">
                  <X size={16} className="text-red-500 shrink-0" />
                  <span>कागजी पर्चियां खो जाती हैं, 40% तक नहीं पहुंचतीं</span>
                </div>
                <div className="md:col-span-4 text-emerald-700 font-bold flex items-center space-x-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>1-सेकंड में सीधा WhatsApp पर 99.8% डिलीवरी</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center bg-slate-50/70">
                <div className="md:col-span-4 font-bold text-slate-900">मतदान दिवस पर मॉनिटरिंग</div>
                <div className="md:col-span-4 text-slate-500 flex items-center space-x-2">
                  <X size={16} className="text-red-500 shrink-0" />
                  <span>अंधेरे में तीर चलाना, शाम 6 बजे तक पता नहीं चलता</span>
                </div>
                <div className="md:col-span-4 text-emerald-700 font-bold flex items-center space-x-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>घंटेवार लाइव बूथ टर्नआउट व बचे हुए वोटर्स की लिस्ट</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center">
                <div className="md:col-span-4 font-bold text-slate-900">पन्ना प्रमुख व कार्यकर्ता</div>
                <div className="md:col-span-4 text-slate-500 flex items-center space-x-2">
                  <X size={16} className="text-red-500 shrink-0" />
                  <span>कार्यकर्ता काम कर रहे हैं या नहीं, कोई सबूत नहीं</span>
                </div>
                <div className="md:col-span-4 text-emerald-700 font-bold flex items-center space-x-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>मोबाइल पर डिजिटल वेरिफिकेशन व लाइव रिपोर्टिंग</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center bg-slate-50/70">
                <div className="md:col-span-4 font-bold text-slate-900">प्रवासी वोटर प्रबंधन</div>
                <div className="md:col-span-4 text-slate-500 flex items-center space-x-2">
                  <X size={16} className="text-red-500 shrink-0" />
                  <span>अंतिम समय में 70% प्रवासी वोट छूट जाते हैं</span>
                </div>
                <div className="md:col-span-4 text-emerald-700 font-bold flex items-center space-x-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>शहर-वार कॉलिंग शेड्यूल व यात्रा ट्रैकिंग शीट</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 items-center">
                <div className="md:col-span-4 font-bold text-slate-900">वोटर लिस्ट डेटा एंट्री</div>
                <div className="md:col-span-4 text-slate-500 flex items-center space-x-2">
                  <X size={16} className="text-red-500 shrink-0" />
                  <span>कंप्यूटर ऑपरेटरों को 15 दिन और हज़ारों रुपये देना</span>
                </div>
                <div className="md:col-span-4 text-emerald-700 font-bold flex items-center space-x-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>AI PDF OCR इंजन से केवल 10 मिनट में रेडी</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS & PACKAGES SECTION (LIGHT THEME) */}
      <section id="plans" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              कस्टमाइज्ड पैकेजेस
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              हर स्तर के चुनाव के लिए तैयार पैकेज
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              नगर निगम वार्ड से लेकर लोकसभा संसदीय सीट तक — आपकी ज़रूरत के अनुसार संपूर्ण तकनीकी सेटअप।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1 */}
            <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-slate-200 bg-slate-50/50">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold">नगर निगम / पंचायत / वार्ड</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">वार्ड / पार्षद पैकेज</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  1 से 3 वार्डों के प्रत्याशियों के लिए सटीक और किफायती समाधान।
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

            {/* Plan 2: FEATURED */}
            <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-emerald-500 relative shadow-xl shadow-emerald-600/10 bg-gradient-to-b from-emerald-50/80 to-white">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
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

            {/* Plan 3 */}
            <div className="p-8 rounded-3xl glass-card flex flex-col justify-between border-slate-200 bg-slate-50/50">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold">संसदीय सीट / पॉलिटिकल कंसल्टेंसी</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">लोकसभा / एंटरप्राइज</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  लोकसभा सांसद प्रत्याशियों और चुनावी एजेंसियों के लिए मल्टी-विधानसभा कस्टम सॉल्यूशन।
                </p>
                <div className="space-y-3 text-xs text-slate-700 mb-8">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>15 लाख से 25 लाख+ मतदाता क्षमता</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>7-8 विधानसभाओं का सेंट्रलाइज़्ड कंट्रोल रूम</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>कस्टम डोमेन व पूर्ण व्हाइट-लेबलिंग विकल्प</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>ऑन-ग्राउंड वॉर-रूम टेक्निकल इंजीनियर्स टीम</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-emerald-600" />
                    <span>कस्टम AI प्रेडिक्टिव एनालिसिस व सर्वे इंटीग्रेशन</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setLeadForm({ ...leadForm, electionType: 'लोकसभा (Parliament)' });
                  setLeadModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-all cursor-pointer hover:border-emerald-500"
              >
                कंसल्टेंसी चर्चा बुक करें
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & DATA INTEGRITY BADGE (LIGHT THEME) */}
      <section className="py-16 relative bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-emerald-100 text-emerald-700 mb-4 border border-emerald-200">
            <Lock size={28} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            100% डेटा गोपनीयता और मिलिट्री-ग्रेड सुरक्षा
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            आपका मतदाता डेटा और राजनीतिक समीकरण केवल आपके और आपके अधिकृत वॉर-रूम तक सीमित रहते हैं। 
            प्रत्येक क्लाइंट का डेटा अलग डेटाबेस आइसोलेशन में रहता है, जिसे किसी भी अन्य पार्टी या प्रत्याशी के साथ साझा नहीं किया जाता।
          </p>
        </div>
      </section>

      {/* FAQ SECTION (LIGHT THEME) */}
      <section id="faq" className="py-24 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full">
              अक्सर पूछे जाने वाले सवाल
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
              एफएक्यू (FAQ)
            </h2>
            <p className="text-base text-slate-600">
              विजयसेतु के बारे में उम्मीदवारों और कैंपेन प्रबंधकों के सामान्य सवाल:
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'क्या यह सॉफ्टवेयर चुनाव आयोग (ECI) के नियमों का पालन करता है?',
                a: 'हाँ, बिल्कुल। विजयसेतु केवल सार्वजनिक मतदाता सूची का डेटा और आधिकारिक प्रत्याशी जानकारी का उपयोग करता है। यह किसी भी गोपनीयता कानून का उल्लंघन नहीं करता और 100% अनुपालन पर आधारित है।'
              },
              {
                q: 'अगर हमारे पास केवल चुनाव आयोग की स्कैन की हुई हिंदी PDF वोटर लिस्ट है तो?',
                a: 'आपको किसी भी ऑपरेटर से टाइप करवाने की ज़रूरत नहीं है। विजयसेतु में इन-बिल्ट देवनागरी AI OCR इंजन है जो हिंदी PDF वोटर लिस्ट को सीधे डिजिटल डेटाबेस में बदल देता है।'
              },
              {
                q: 'क्या मतदान के दिन बूथ पर कमजोर इंटरनेट में भी काम करेगा?',
                a: 'हाँ। विजयसेतु का पोलिंग डेस्क और कार्यकर्ता इंटरफ़ेस अल्ट्रा-लाइटवेट है। यह 2G या कमजोर सिग्नल में भी तेज़ी से खुलता है और डेटा को सुचारू रूप से सिंक करता है।'
              },
              {
                q: 'WhatsApp पर पर्ची भेजने पर क्या नंबर बैन होने का खतरा होता है?',
                a: 'नहीं। विजयसेतु आधिकारिक Meta WhatsApp Cloud API और स्मार्ट रेट-लिमिटिंग क्यू का उपयोग करता है, जिससे सामान्य बल्क स्पैम के विपरीत आधिकारिक व सुरक्षित तरीके से पर्चियां डिलीवर होती हैं।'
              },
              {
                q: 'क्या हमारे कार्यकर्ताओं को सॉफ्टवेयर चलाने के लिए ट्रेनिंग दी जाएगी?',
                a: 'हाँ, हमारी टीम आपके वॉर-रूम ऑपरेटर्स, वार्ड कोऑर्डिनेटर्स और पन्ना प्रमुखों को लाइव ऑनलाइन या ऑन-साइट ट्रेनिंग प्रदान करती है और चुनाव के दिन 24x7 इमरजेंसी सपोर्ट उपलब्ध रहता है।'
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl glass-card border-slate-200 bg-slate-50/50">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center space-x-2">
                  <HelpCircle size={16} className="text-emerald-600 shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA (LIGHT THEME) */}
      <section className="py-20 relative bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            अपने चुनाव अभियान को दें विजय की शक्ति
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            आज ही अपने क्षेत्र का डेटा अपलोड करें और देखें कि कैसे डेटा-संचालित वॉर रूम आपके वोट मार्जिन को कई गुना बढ़ा सकता है।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setLeadModalOpen(true)}
              className="w-full sm:w-auto glow-btn px-9 py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center space-x-3 cursor-pointer shadow-lg"
            >
              <Vote size={20} />
              <span>अभी डेमो बुक करें</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="https://wa.me/919999999999?text=Hello%20VijaySetu%20Team%2C%20I%20want%20a%20demo%20of%20the%20Election%20War%20Room%20Software"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-emerald-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>हेल्पलाइन से संपर्क करें</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white">VijaySetu (विजयसेतु)</span>
              <span>• सर्वाधिकार सुरक्षित © 2026</span>
            </div>
            <div className="flex space-x-6 text-slate-400">
              <span>गोपनीयता नीति (Privacy)</span>
              <span>नियम व शर्तें (Terms)</span>
              <span>सिक्योरिटी ऑडिट</span>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD INQUIRY MODAL */}
      {leadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setLeadModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
            >
              <X size={20} />
            </button>

            {leadSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">धन्यवाद! अनुरोध प्राप्त हुआ</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  हमारी इलेक्शन वॉर-रूम टेक्निकल टीम अगले 15 मिनट में आपके नंबर पर संपर्क करेगी और लाइव डेमो सेट करेगी।
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase mb-2">
                  <Sparkles size={14} />
                  <span>लाइव वॉर-रूम डेमो व परामर्श</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">प्रत्याशी / कैंपेन विवरण दर्ज करें</h3>
                <p className="text-xs text-slate-500 mb-6">
                  नीचे अपना विवरण भरें, हमारी सीनियर चुनाव कंसल्टेंट टीम तुरंत आपको संपर्क करेगी।
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">आपका नाम / प्रत्याशी का नाम *</label>
                    <input
                      required
                      type="text"
                      placeholder="उदा. राजेश चौधरी"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">मोबाइल नंबर (WhatsApp) *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">विधानसभा / वार्ड / जिला *</label>
                      <input
                        required
                        type="text"
                        placeholder="उदा. हवामहल, जयपुर"
                        value={leadForm.constituency}
                        onChange={(e) => setLeadForm({ ...leadForm, constituency: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">चुनाव प्रकार</label>
                      <select
                        value={leadForm.electionType}
                        onChange={(e) => setLeadForm({ ...leadForm, electionType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                      >
                        <option value="विधानसभा (Assembly)">विधानसभा (Assembly)</option>
                        <option value="वार्ड / पार्षद (Ward)">वार्ड / पार्षद (Ward)</option>
                        <option value="लोकसभा (Parliament)">लोकसभा (Parliament)</option>
                        <option value="छात्रसंघ / अन्य">छात्रसंघ / अन्य</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full glow-btn py-3.5 rounded-xl font-bold text-sm text-white mt-4 flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <span>डेमो व कोटेशन अनुरोध सबमिट करें</span>
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[10px] text-slate-500 text-center">
                    🔒 आपका डेटा पूर्णतः गोपनीय रहेगा। कोई स्पैम नहीं।
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
