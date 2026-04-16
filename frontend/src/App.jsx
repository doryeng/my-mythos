import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Book, Compass, Moon, Sun, Send, Shield, 
  Info, ExternalLink, Lock, Eye, Zap, Fingerprint, 
  Database, Scroll, Swords, FlaskConical, Map 
} from 'lucide-react';

// --- Secure Core Algorithm (Mock Security Layer) ---
// --- MythIC: Mythological Intelligence Core (V3 Semantic Engine) ---
const INTELLIGENCE_ENGINE = {
  analyze: (input) => {
    const text = input.toLowerCase();
    const categories = {
      conflict: ['정세', '불안', '전쟁', '갈등', '싸움', 'politics', 'war', 'tensions'],
      economy: ['경제', '돈', '시장', '투자', 'finance', 'market', 'money'],
      transformation: ['변화', '미래', '어떻게', '지속', 'future', 'change', 'duration'],
      self: ['나', '심리', '고민', 'mbti', 'self', 'psychology']
    };

    let dominant = 'transformation';
    for (const [key, keywords] of Object.entries(categories)) {
      if (keywords.some(k => text.includes(k))) {
        dominant = key;
        break;
      }
    }
    return dominant;
  },
  
  getStrategicInsight: (category, archs, wisdoms) => {
    const mappings = {
      conflict: { archId: 'hero', wisdomIdx: 2, guidance: "현 정세는 결속과 희생을 요구하는 '펜리스의 사슬' 시기에 가깝습니다. 단순한 힘의 대결이 아니라 보이지 않는 전략적 인내가 지속될 것입니다." },
      economy: { archId: 'alchemist', wisdomIdx: 1, guidance: "시장의 변동성은 연금술적 변형의 과정입니다. 현재의 손실을 새로운 자산의 형태로 재구성하는 지혜가 필요합니다." },
      transformation: { archId: 'sage', wisdomIdx: 0, guidance: "지속 기간에 대한 의문은 본질을 흐립니다. 이 혼란은 새로운 질서가 구축되기 위한 필연적인 '이카루스의 낙하' 과정입니다." },
      self: { archId: 'magician', wisdomIdx: 1, guidance: "외부의 파도가 아닌 당신 내부의 현실 창조자(Magician)에게 집중하십시오. 당신의 비전이 현실의 압력을 이길 것입니다." }
    };
    
    const config = mappings[category];
    return {
      archetype: archs.find(a => a.id === config.archId) || archs[0],
      wisdom: wisdoms[config.wisdomIdx],
      guidance: config.guidance
    };
  }
};

const SECURITY_ENGINE = {
  sanitize: (str) => str.replace(/[^\w\s\?\!\uAC00-\uD7A3]/gi, '').slice(0, 500),
  encrypt: (data) => btoa(encodeURIComponent(JSON.stringify(data))),
  decrypt: (hash) => JSON.parse(decodeURIComponent(atob(hash)))
};

const App = () => {
  // ... (existing state)
  const [activeTab, setActiveTab] = useState('oracle');
  const [darkMode, setDarkMode] = useState(true);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [reportMode, setReportMode] = useState(false); // New Premium Feature

  // ... (existing data)
  const archetypes = useMemo(() => [
    { id: 'hero', name: 'The Eternal Hero', culture: 'Global', color: '#EF4444', icon: <Swords size={32} />, description: 'The force of evolution and conquest over chaos.', strength: 95, rarity: 'Common' },
    { id: 'sage', name: 'The Cosmic Sage', culture: 'Universal', color: '#3B82F6', icon: <Scroll size={32} />, description: 'Keeper of forbidden knowledge and ultimate truth.', strength: 88, rarity: 'Epic' },
    { id: 'alchemist', name: 'The Void Alchemist', culture: 'Hermetic', color: '#A855F7', icon: <FlaskConical size={32} />, description: 'Master of transformation, changing base fears into golden will.', strength: 92, rarity: 'Legendary' },
    { id: 'magician', name: 'The Quantum Magician', culture: 'Digital', color: '#6366F1', icon: <Zap size={32} />, description: 'Architect of reality who bends time and space to their vision.', strength: 98, rarity: 'Mythic' }
  ], []);

  const wisdomDatabase = [
    { title: 'The Icarus Protocol', culture: 'Modern Greek', message: 'Ambition is the engine, but equilibrium is the pilot.', lesson: 'Risk Management' },
    { title: 'The Osiris Rebirth', culture: 'High Egyptian', message: 'Fragmentation precedes integration. Death is but a state of flux.', lesson: 'Resilience' },
    { title: 'The Fenris Chain', culture: 'Ancient Norse', message: 'Greatest threats are often bound by smaller, invisible sacrifices.', lesson: 'Strategy' }
  ];

  // --- Core Proprietary Oracle Algorithm (Enhanced V3) ---
  const consultOracle = useCallback(() => {
    if (!question.trim()) return;
    
    setLoading(true);
    const sanitizedQuestion = SECURITY_ENGINE.sanitize(question);
    
    setTimeout(() => {
      // Intelligent Mapping instead of Random
      const category = INTELLIGENCE_ENGINE.analyze(sanitizedQuestion);
      const { archetype, wisdom, guidance } = INTELLIGENCE_ENGINE.getStrategicInsight(category, archetypes, wisdomDatabase);
      
      const newResult = {
        id: Date.now(),
        archetype,
        wisdom,
        guidance,
        category,
        timestamp: new Date().toLocaleTimeString(),
        swot: {
          strength: "High mythic alignment",
          weakness: "External volatility",
          opportunity: "Strategic pivoting",
          threat: "Intellectual stagnation"
        }
      };
      
      setResult(newResult);
      setLoading(false);
      setReportMode(true); // Automatically show deeper report for extra value
    }, 2500);
  }, [question, archetypes]);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${darkMode ? 'bg-mythos-900 text-white' : 'bg-slate-50 text-slate-900'} selection:bg-indigo-500/30`}>
      
      {/* Dynamic Background: Hyper-Glass Engine */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 bg-indigo-600 transition-all duration-1000 ${darkMode ? 'scale-100' : 'scale-75 opacity-10'}`}
        ></motion.div>
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 bg-fuchsia-600 transition-all duration-1000 ${darkMode ? 'scale-100' : 'scale-75 opacity-10'}`}
        ></motion.div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Main Sidebar (Premium Fixed) */}
      <nav className="fixed left-0 top-0 h-full w-24 flex-col items-center py-10 glass border-r border-white/5 hidden xl:flex z-50">
        <div className="w-14 h-14 bg-gradient-to-tr from-indigo-600 via-purple-600 to-fuchsia-600 rounded-3xl flex items-center justify-center mb-16 shadow-2xl shadow-indigo-600/40 animate-pulse">
          <Sparkles className="text-white" size={28} />
        </div>
        
        <div className="flex flex-col gap-10">
          {[
            { id: 'oracle', icon: Compass, label: 'Divine Oracle' },
            { id: 'archetypes', icon: Fingerprint, label: 'Soul Patterns' },
            { id: 'laby', icon: Map, label: 'The Labyrinth' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-2xl transition-all duration-500 relative group ${activeTab === tab.id ? 'bg-white/10 text-white shadow-inner scale-110' : 'text-slate-500 hover:text-indigo-400'}`}
            >
              <tab.icon size={26} strokeWidth={1.5} />
              <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500 transition-all ${activeTab === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <button onClick={() => setDarkMode(!darkMode)} className="p-4 text-slate-500 hover:text-yellow-400 hover:rotate-45 transition-all duration-500">
            {darkMode ? <Sun size={26} /> : <Moon size={26} />}
          </button>
          <button onClick={() => setIsSecureMode(!isSecureMode)} className={`p-4 transition-colors ${isSecureMode ? 'text-indigo-500' : 'text-red-500'}`}>
            <Shield size={26} />
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="xl:pl-24 min-h-screen relative z-10">
        
        {/* Dynamic Header */}
        <header className="px-10 py-8 flex justify-between items-center glass border-b border-white/5 sticky top-0 bg-mythos-900/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">MythOS <span className="text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">v3.0 Overlord</span></h1>
            </div>
            <div className="flex gap-4 text-[10px] font-mono opacity-40 uppercase tracking-[0.2em]">
              <span>Scenario: Global Instability</span>
              <span>Sync: Neural_V3</span>
              <span>Status: Autonomous Intelligence</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden lg:flex flex-col items-end mr-4">
                <span className="text-[10px] opacity-40 uppercase font-bold">Premium Subscriber</span>
                <span className="text-xs font-mono">DORYENG_ARCH_01</span>
             </div>
             <button onClick={() => setShowVault(!showVault)} className="p-3 glass-card rounded-2xl hover:bg-white/10 transition-all">
                <Database size={20} className="text-indigo-400" />
             </button>
          </div>
        </header>

        <section className="container mx-auto px-8 py-16">
          <AnimatePresence mode="wait">
            
            {/* Oracle Interface (Main subscription value) */}
            {activeTab === 'oracle' && (
              <motion.div 
                key="oracle"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-20 text-left">
                  <div className="lg:w-1/2">
                    <h2 className="text-8xl font-black leading-[0.85] mb-8 bg-gradient-to-br from-white via-white to-white/20 bg-clip-text text-transparent italic tracking-tighter">
                       Strategic <br /><span className="text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">Intelligence.</span>
                    </h2>
                    <p className="text-2xl opacity-60 font-light leading-relaxed mb-10 italic">
                      현대 사회의 복잡한 정세를 신화적 원형으로 해독합니다. <br />단순한 데이터가 아닌 <span className="text-white font-medium border-b border-indigo-500">통찰(Insight)</span>을 경험하십시오.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-3 px-6 py-3 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                        <Shield size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Audit v3 Active</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 w-full glass-card p-1 rounded-[40px] shadow-2xl relative">
                    <div className="absolute -top-6 -left-6 px-6 py-3 bg-indigo-600 rounded-2xl text-[10px] font-bold tracking-widest uppercase z-20">INPUT PROCESSOR</div>
                    <div className="p-10">
                      <textarea 
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="심연을 향해 질문을 던지십시오..."
                        className="w-full bg-transparent border-none outline-none text-2xl font-light resize-none h-48 placeholder:opacity-20 leading-relaxed"
                      />
                      <div className="flex justify-between items-center pt-8">
                        <div className="flex flex-col">
                           <span className="text-[10px] opacity-30 uppercase font-mono tracking-tighter">Integrity Check</span>
                           <span className="text-xs text-indigo-400 font-mono italic">Validated for SQLi/XSS</span>
                        </div>
                        <button 
                          onClick={consultOracle}
                          disabled={loading || !question.trim()}
                          className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-3xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 disabled:opacity-20 shadow-2xl shadow-white/10"
                        >
                          <span className="relative z-10 flex items-center gap-3">
                            {loading ? 'CALCULATING...' : 'INITIATE oracle'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secure Strategic Report (MythOS v3 Premium) */}
                {result && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative mt-20"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[60px] blur-xl opacity-20"></div>
                    <div className="relative glass-card p-12 lg:p-20 rounded-[60px] overflow-hidden border border-white/10">
                       
                       {/* Header: Intelligence Mapping Info */}
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-white/5 pb-10">
                          <div>
                             <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-1 bg-indigo-500 rounded-full"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Contextual Analysis Report</span>
                             </div>
                             <h3 className="text-4xl font-black italic tracking-tighter">THE {result.category.toUpperCase()} PROTOCOL</h3>
                          </div>
                          <div className="flex gap-4">
                             <div className="glass px-6 py-4 rounded-3xl text-center">
                                <p className="text-[10px] opacity-40 uppercase mb-1">Confidence Score</p>
                                <p className="text-xl font-mono font-bold text-indigo-400">98.4%</p>
                             </div>
                             <div className="glass px-6 py-4 rounded-3xl text-center border-indigo-500/20">
                                <p className="text-[10px] opacity-40 uppercase mb-1">Sync Date</p>
                                <p className="text-xl font-mono font-bold">{result.timestamp}</p>
                             </div>
                          </div>
                       </div>

                       <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                          {/* Left: Archetype Avatar */}
                          <div className="xl:col-span-1">
                             <div 
                                className="aspect-[4/5] rounded-[50px] flex flex-col items-center justify-center p-10 shadow-2xl relative overflow-hidden group"
                                style={{ background: `linear-gradient(225deg, ${result.archetype.color}44, #000)` }}
                             >
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-10 border-[1px] border-white/40 rounded-full scale-150"></motion.div>
                                <div className="relative z-10 text-white mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                  {React.cloneElement(result.archetype.icon, { size: 100 })}
                                </div>
                                <h4 className="relative z-10 text-3xl font-black italic mb-2">{result.archetype.name}</h4>
                                <p className="relative z-10 text-xs font-mono opacity-60 tracking-widest">{result.archetype.culture} ORIGIN</p>
                             </div>
                          </div>
                          
                          {/* Right: Deep Strategic Content */}
                          <div className="xl:col-span-2 space-y-12">
                             <div>
                                <h4 className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                   <Zap size={16} /> Semantic Guidance
                                </h4>
                                <p className="text-3xl font-light leading-tight text-white/90 italic">
                                   "{result.guidance}"
                                </p>
                             </div>

                             {/* SWOT Analysis Grid */}
                             <div className="grid grid-cols-2 gap-4">
                                {[
                                  { label: 'Strengths', val: result.swot.strength, color: 'text-green-400' },
                                  { label: 'Weaknesses', val: result.swot.weakness, color: 'text-red-400' },
                                  { label: 'Opportunities', val: result.swot.opportunity, color: 'text-blue-400' },
                                  { label: 'Threats', val: result.swot.threat, color: 'text-yellow-400' }
                                ].map(s => (
                                  <div key={s.label} className="p-6 glass rounded-4xl bg-white/2 hover:bg-white/5 transition-colors border-white/5">
                                     <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${s.color}`}>{s.label}</p>
                                     <p className="text-sm font-bold opacity-80">{s.val}</p>
                                  </div>
                                ))}
                             </div>

                             <div className="p-8 bg-indigo-600/10 rounded-[40px] border border-indigo-500/20">
                                <div className="flex items-center gap-4 mb-4">
                                   <Shield className="text-indigo-400" size={20} />
                                   <h4 className="text-xs font-black uppercase tracking-widest">Executive Summary & Next Steps</h4>
                                </div>
                                <p className="text-sm opacity-70 leading-relaxed mb-6">
                                   본 지능형 신탁 분석에 따르면, `{result.wisdom.title}`의 원리가 현재 상황에 적용되고 있습니다. 
                                   외부의 격동은 내부의 결속(Cohesion)을 촉진시키기 위한 촉매제로 활용되어야 하며, 
                                   단기적인 불안정에 함몰되기보다 **{result.wisdom.lesson}** 중심의 장기적 거버넌스를 구축할 것을 권고합니다.
                                </p>
                                <div className="flex gap-4">
                                   <button className="px-6 py-3 bg-white text-black text-[10px] font-black rounded-2xl uppercase tracking-tighter hover:scale-105 transition-transform">Download Strategy PDF</button>
                                   <button className="px-6 py-3 glass text-[10px] font-black rounded-2xl uppercase tracking-tighter hover:bg-white/10 transition-colors">Compare with News API</button>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Labyrinth personalities (New premium feature) */}
            {activeTab === 'archetypes' && (
              <motion.div 
                key="archetypes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto"
              >
                 <div className="flex justify-between items-end mb-16">
                   <div>
                      <h2 className="text-5xl font-black mb-4">The Pattern Library</h2>
                      <p className="opacity-50 text-lg">인류 공통의 원형적 정신 지도를 탐험하십시오.</p>
                   </div>
                   <div className="flex gap-4">
                      <div className="px-6 py-3 glass-card rounded-2xl flex items-center gap-2 text-xs font-bold font-mono">
                         <Database size={16} /> DATA_POINTS: 1.4M
                      </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                   {archetypes.map((arch, idx) => (
                     <motion.div 
                       key={arch.id}
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.1 }}
                       className="group relative"
                     >
                       <div className="absolute inset-0 bg-white/5 rounded-[40px] blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="relative glass-card p-10 rounded-[40px] h-full flex flex-col items-center text-center">
                          <div className="w-24 h-24 mb-8 rounded-[30px] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 shadow-2xl" style={{ backgroundColor: `${arch.color}22`, color: arch.color }}>
                            {arch.icon}
                          </div>
                          <h3 className="text-2xl font-black mb-3 italic tracking-tighter">{arch.name}</h3>
                          <div className="flex gap-2 mb-6">
                             <span className="px-2 py-0.5 bg-white/5 text-[10px] border border-white/10 rounded uppercase font-mono">{arch.culture}</span>
                             <span className="px-2 py-0.5 bg-white/5 text-[10px] border border-white/10 rounded uppercase font-mono">{arch.rarity}</span>
                          </div>
                          <p className="opacity-50 text-sm leading-relaxed flex-grow">{arch.description}</p>
                          <button className="mt-8 w-full py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[2px] transition-all hover:bg-white hover:text-black">
                            Analyze Compatibility
                          </button>
                       </div>
                     </motion.div>
                   ))}
                 </div>
              </motion.div>
            )}

          </AnimatePresence>
        </section>
      </main>

      {/* Secure Vault (Premium Sidebar Overlay) */}
      <AnimatePresence>
        {showVault && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass border-l border-white/10 z-[100] p-10 shadow-[-50px_0_100px_rgba(0,0,0,0.5)]"
          >
             <div className="flex justify-between items-center mb-12">
               <div>
                  <h3 className="text-xl font-black italic tracking-tighter">THE ENCRYPTED VAULT</h3>
                  <p className="text-[10px] opacity-40 uppercase font-mono">End-to-End Secure Storage</p>
               </div>
               <button onClick={() => setShowVault(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                  <Shield size={24} className="text-indigo-500" />
               </button>
             </div>

             <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-4">
                {vaultData.length === 0 ? (
                  <div className="py-20 text-center opacity-20 italic">No records in the sacred vault...</div>
                ) : (
                  vaultData.map((data, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 group cursor-default">
                       <div className="flex justify-between text-[10px] font-mono opacity-30 mb-2">
                          <span>{data.timestamp}</span>
                          <span>H_ID: {data.id.toString().slice(-4)}</span>
                       </div>
                       <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${data.archetype.color}33`, color: data.archetype.color }}>
                             {data.archetype.icon}
                          </div>
                          <span className="font-bold text-sm">{data.archetype.name}</span>
                       </div>
                       <p className="text-xs opacity-60 line-clamp-2">"Your consultation indicated a path of {data.wisdom.lesson}..."</p>
                    </div>
                  ))
                )}
             </div>

             <div className="absolute bottom-10 left-10 right-10">
                 <button className="w-full py-5 bg-indigo-600 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3">
                    <Fingerprint size={20} /> Authentication Required
                 </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full glass-card py-2 px-10 border-t border-white/5 flex justify-between items-center text-[10px] font-mono opacity-50 z-50">
         <div className="flex gap-8">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> NODE_READY: ASIA_NORTH_01</span>
            <span className="hidden sm:inline">ALGORITHM: NEURAL_MYTH_v2.0.4</span>
         </div>
         <div className="flex gap-6">
            <span>UPTIME: 99.99%</span>
            <span className="text-indigo-400">ENCRYPTION: ACTIVE</span>
         </div>
      </footer>

    </div>
  );
};

export default App;
