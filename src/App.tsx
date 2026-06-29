import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, 
  Layers, 
  CalendarDays, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  X,
  Users,
  Award,
  ClipboardList,
  UserCheck
} from "lucide-react";

interface WebApp {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  badge: string;
  features: string[];
  colorTheme: {
    accent: string;
    bgGlow: string;
    iconBg: string;
    borderHover: string;
    badgeText: string;
    badgeBg: string;
    buttonBg: string;
    buttonHover: string;
  };
  icon: any;
}

export default function App() {
  const [time, setTime] = useState<string>("");
  const [showPwaModal, setShowPwaModal] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // SJAM Details
  const sjamLogoUrl = "https://i.postimg.cc/g0f0gH3y/SJAM-logo-2015.png";
  const mobileAppLogoUrl = "https://i.postimg.cc/Hxyrmhpp/Gemini-Generated-Image-l2vpxfl2vpxfl2vp.png";
  
  const webApps: WebApp[] = [
    {
      id: "memberinfo",
      title: "KMT | MemberInfo",
      subtitle: "Member Registry & Profiles",
      description: "Access, view, and manage SJAMKMT division rosters, member qualifications, and profile credentials securely.",
      url: "https://sjamkmt-memberinfo-179938547952.us-west1.run.app",
      badge: "Roster Management",
      features: ["Roster synchronization", "Qualifications database", "Division stats & insights"],
      icon: Users,
      colorTheme: {
        accent: "text-emerald-400",
        bgGlow: "bg-emerald-500/10",
        iconBg: "bg-emerald-600 group-hover:bg-emerald-500",
        borderHover: "hover:border-emerald-500/30",
        badgeText: "text-emerald-300",
        badgeBg: "bg-emerald-500/10 border-emerald-500/20",
        buttonBg: "bg-emerald-600 hover:bg-emerald-500",
        buttonHover: "text-emerald-400"
      }
    },
    {
      id: "tracker",
      title: "KMT | CPB & GPA Tracker",
      subtitle: "Performance & Credit Analytics",
      description: "Track and monitor CPB training hours, grade point averages, and annual evaluation markers for active members.",
      url: "https://sjamkmt-cpb-gpa-tracker-589482097141.us-west1.run.app",
      badge: "Performance Engine",
      features: ["Real-time point auditing", "CPB compliance tracker", "Grade averages tracker"],
      icon: Award,
      colorTheme: {
        accent: "text-amber-400",
        bgGlow: "bg-amber-500/10",
        iconBg: "bg-amber-600 group-hover:bg-amber-500",
        borderHover: "hover:border-amber-500/30",
        badgeText: "text-amber-300",
        badgeBg: "bg-amber-500/10 border-amber-500/20",
        buttonBg: "bg-amber-600 hover:bg-amber-500",
        buttonHover: "text-amber-400"
      }
    },
    {
      id: "pdr",
      title: "KMT | PDR Records",
      subtitle: "Duty Hour Submission Hub",
      description: "Submit duty hours, view historic operation logs, and audit public duty record entries with supervisor approval routes.",
      url: "https://sjamkmt-duty-record-submission-platform-589482097141.us-west1.run.app",
      badge: "Duty Submission",
      features: ["Digital duty log sheets", "Automated validation flow", "State-level report export"],
      icon: ClipboardList,
      colorTheme: {
        accent: "text-red-400",
        bgGlow: "bg-red-500/10",
        iconBg: "bg-red-600 group-hover:bg-red-500",
        borderHover: "hover:border-red-500/30",
        badgeText: "text-red-300",
        badgeBg: "bg-red-500/10 border-red-500/20",
        buttonBg: "bg-red-600 hover:bg-red-500",
        buttonHover: "text-red-400"
      }
    },
    {
      id: "booking",
      title: "KMT | Training Hall Booking",
      subtitle: "Facilities & Schedulers",
      description: "Book training halls, check availability, and manage event schedules seamlessly.",
      url: "https://sjam-melaka-tengah-hall-booking-589482097141.us-west1.run.app",
      badge: "Facilities Management",
      features: ["Real-time availability", "Instant booking requests", "Melaka Tengah Hall scheduler"],
      icon: CalendarDays,
      colorTheme: {
        accent: "text-blue-400",
        bgGlow: "bg-blue-500/10",
        iconBg: "bg-blue-600 group-hover:bg-blue-500",
        borderHover: "hover:border-blue-500/30",
        badgeText: "text-blue-300",
        badgeBg: "bg-blue-500/10 border-blue-500/20",
        buttonBg: "bg-blue-600 hover:bg-blue-500",
        buttonHover: "text-blue-400"
      }
    },
    {
      id: "distribution",
      title: "KMT | Item Distribution",
      subtitle: "Listing & Generation Tool",
      description: "Manage, track, and generate item distribution lists efficiently for Melaka Tengah Area.",
      url: "https://sjam-item-distribution-listing-generator-244817207039.asia-southeast1.run.app",
      badge: "Distribution Engine",
      features: ["Automated list generation", "Optimized distribution logs", "Export-ready formatting"],
      icon: Layers,
      colorTheme: {
        accent: "text-purple-400",
        bgGlow: "bg-purple-500/10",
        iconBg: "bg-purple-600 group-hover:bg-purple-500",
        borderHover: "hover:border-purple-500/30",
        badgeText: "text-purple-300",
        badgeBg: "bg-purple-500/10 border-purple-500/20",
        buttonBg: "bg-purple-600 hover:bg-purple-500",
        buttonHover: "text-purple-400"
      }
    },
    {
      id: "nco-nomination",
      title: "KMT | NCO Nomination Portal",
      subtitle: "NCO Evaluation & Leadership Nominees",
      description: "Submit, evaluate, and track Non-Commissioned Officer (NCO) nominations and leadership selections for Melaka Tengah Area.",
      url: "https://kmt-nco-nomination-portal-179938547952.asia-southeast1.run.app/",
      badge: "NCO Nominations",
      features: ["Candidate assessment criteria", "Structured division voting", "Leader selection workflow"],
      icon: UserCheck,
      colorTheme: {
        accent: "text-rose-400",
        bgGlow: "bg-rose-500/10",
        iconBg: "bg-rose-600 group-hover:bg-rose-500",
        borderHover: "hover:border-rose-500/30",
        badgeText: "text-rose-300",
        badgeBg: "bg-rose-500/10 border-rose-500/20",
        buttonBg: "bg-rose-600 hover:bg-rose-500",
        buttonHover: "text-rose-400"
      }
    }
  ];

  // Real-time local clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-MY", { 
        timeZone: "Asia/Kuala_Lumpur", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async (url: string, title: string) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        navigator.clipboard.writeText(url);
        setCopiedLink(title);
        setTimeout(() => setCopiedLink(null), 2000);
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopiedLink(title);
      setTimeout(() => setCopiedLink(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white flex flex-col font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-red-900/15 rounded-full blur-[70px] transform-gpu pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[70px] transform-gpu pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[70px] transform-gpu pointer-events-none"></div>

      {/* HEADER BAR */}
      <header className="sticky top-0 z-40 bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10 px-4 py-3 md:py-5 transform-gpu">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2.5 md:text-center">
            <img 
              src={sjamLogoUrl} 
              alt="SJAM Logo" 
              className="h-10 w-auto object-contain md:h-14 md:mx-auto md:mb-1"
              referrerPolicy="no-referrer"
              id="sjam-header-logo"
            />
            <div className="h-8 w-[1px] bg-white/20 md:hidden"></div>
            <div className="flex flex-col md:items-center">
              <h1 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5 animate-pulse" id="sjam-header-title">
                SJAMKMT <span className="bg-emerald-800 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-widest shadow-sm shadow-emerald-950">SuperApp</span>
              </h1>
              <p className="text-[10px] text-white/55 font-medium">Melaka Tengah Area</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Clock Indicator */}
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full font-mono">
              <Clock className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>{time || "Melaka Time"}</span>
            </div>

            <button 
              onClick={() => setShowPwaModal(true)}
              className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-md backdrop-blur-md"
            >
              <Smartphone className="w-3.5 h-3.5 text-red-400" />
              <span>Get Mobile App</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-grow flex flex-col justify-center max-w-6xl w-full mx-auto px-4 py-8 md:py-12 relative z-10">
        
        {/* HERO BRANDING */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative inline-block"
          >
            {/* Ambient light glow behind the logo */}
            <div className="absolute inset-0 bg-red-600/30 rounded-full blur-3xl opacity-60 -z-10 transform scale-125"></div>
            
            <img 
              src={sjamLogoUrl} 
              alt="St. John Ambulance Malaysia Melaka Tengah Logo" 
              className="h-24 md:h-28 mx-auto drop-shadow-xl object-contain hover:scale-105 transition-transform duration-300 transform-gpu"
              referrerPolicy="no-referrer"
              id="sjam-hero-logo"
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white mt-8 leading-tight px-4 md:whitespace-nowrap flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0"
            id="main-app-title"
          >
            <span>St. John Ambulance of Malaysia</span>
            <span className="hidden md:inline text-white/40 font-light mx-2">|</span>
            <span className="inline md:hidden w-16 h-[1.5px] bg-white/25 my-1 rounded-full"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400">Melaka Tengah Area</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-white/70 max-w-2xl mx-auto mt-4 font-medium leading-relaxed"
          >
            A unified, high-performance operational hub connecting critical services for St. John Ambulance of Malaysia, Melaka Tengah Area. Select an active portal system below.
          </motion.p>
        </div>

        {/* 5 REDIRECT BUTTONS/CARDS - Frosted Glass Grid Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {webApps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className={`relative flex flex-col h-full rounded-3xl bg-[#121a2e]/60 backdrop-blur-md border border-white/10 p-6 hover:bg-[#16203a]/80 hover:border-white/20 shadow-2xl transition-all duration-300 transform-gpu group overflow-hidden ${app.colorTheme.borderHover}`}
              >
                {/* Visual background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${app.colorTheme.bgGlow} rounded-bl-full -z-10 group-hover:scale-115 transition-transform duration-300`}></div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold ${app.colorTheme.badgeText} ${app.colorTheme.badgeBg} border uppercase tracking-wider px-2.5 py-1 rounded-md`}>
                      {app.badge}
                    </span>
                    <span className="text-white/40 font-mono text-xs font-semibold">PORTAL {index + 1}</span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-3 rounded-2xl flex items-center justify-center shadow-lg text-white ${app.colorTheme.iconBg} transition-colors duration-300`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className={`font-extrabold text-white text-base md:text-lg group-hover:${app.colorTheme.buttonHover} transition-colors line-clamp-1`}>
                        {app.title}
                      </h3>
                      <p className="text-[11px] text-white/40 font-medium line-clamp-1">{app.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-white/75 mb-6 leading-relaxed min-h-[50px] line-clamp-3">
                    {app.description}
                  </p>

                  {/* Bullet Features */}
                  <div className="space-y-2 mb-6">
                    {app.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/60 font-medium">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${app.colorTheme.accent} flex-shrink-0`} />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redirection Actions */}
                <div className="mt-auto space-y-2.5">
                  <a 
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-between ${app.colorTheme.buttonBg} text-white font-bold text-xs px-4 py-3 rounded-xl transition-all shadow-lg active:scale-[0.99] cursor-pointer`}
                  >
                    <span>Launch Portal</span>
                    <span className="flex items-center gap-1">
                      <span>Redirect</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare(app.url, app.title)}
                      className="flex-grow text-center text-[11px] font-bold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      {copiedLink === app.title ? "Copied! ✓" : "Share URL"}
                    </button>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white rounded-lg transition-colors"
                      title="Direct Open Link"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950/60 backdrop-blur-xl text-slate-400 py-12 px-4 mt-auto border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
          <div>
            <h5 className="text-sm font-bold text-white tracking-wide">
              St. John Ambulance of Malaysia
            </h5>
            <p className="text-xs text-white/50 mt-0.5">
              Melaka Tengah Area, State of Melaka (SJAMKMT)
            </p>
          </div>
          <div className="w-12 h-[1px] bg-white/10 my-1"></div>
          <p className="font-serif italic text-xs text-white/50">
            Pro Utilitate Hominum - In the Service of Humanity
          </p>
          <p className="text-[10px] text-white/30 mt-2 font-mono">
            &copy; 2026 SJAM Melaka Tengah Area. All rights reserved.
          </p>
        </div>
      </footer>

      {/* MODAL: PWA SETUP INSTRUCTIONS - Frosted Glass Theme */}
      <AnimatePresence>
        {showPwaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050811]/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#0f172a]/90 backdrop-blur-2xl border border-white/15 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Banner */}
              <div className="bg-[#050811] p-6 flex items-center justify-between text-white border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img 
                    src={mobileAppLogoUrl} 
                    alt="SJAMKMT Logo Mobile" 
                    className="w-10 h-10 rounded-xl object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-extrabold text-sm tracking-wide">SJAMKMT SuperApp</h3>
                    <p className="text-[10px] text-white/50 font-medium">Add to Home Screen Guide</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPwaModal(false)}
                  className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 text-sm leading-relaxed text-white/80">
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black">1</span>
                    <span>For iOS Devices (Safari)</span>
                  </h4>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-white/60">
                    <li>Open Safari and navigate to this SuperApp URL.</li>
                    <li>Tap the <strong className="text-white">Share</strong> button at the bottom of the screen.</li>
                    <li>Scroll down and tap <strong className="text-white">"Add to Home Screen"</strong>.</li>
                    <li>Confirm by tapping <strong className="text-white">"Add"</strong> in the top right.</li>
                  </ol>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-black">2</span>
                    <span>For Android Devices (Chrome)</span>
                  </h4>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-white/60">
                    <li>Open Google Chrome and go to the SuperApp URL.</li>
                    <li>Tap the menu button (<strong className="text-white">3 vertical dots</strong>) in the top-right corner.</li>
                    <li>Select <strong className="text-white">"Add to Home Screen"</strong> or <strong className="text-white">"Install app"</strong>.</li>
                    <li>Follow the prompt to add the icon to your home screen.</li>
                  </ol>
                </div>

                <div className="bg-white/5 p-4 rounded-xl flex gap-3 items-start border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <h5 className="font-bold text-white">Secure Operations</h5>
                    <p className="text-white/50 mt-0.5 leading-normal">
                      The SJAMKMT SuperApp protects credentials and accesses linked sub-applications securely in sandboxed mobile browsers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-[#050811] px-6 py-4 border-t border-white/10 flex justify-end">
                <button 
                  onClick={() => setShowPwaModal(false)}
                  className="bg-white hover:bg-white/90 text-slate-900 text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
                >
                  Got It, Thanks!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
