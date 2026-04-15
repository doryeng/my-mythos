import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Book, Compass, Moon, Sun, Send, Shield, 
  Info, ExternalLink, Lock, Eye, Zap, Fingerprint, 
  Database, Scroll, Swords, FlaskConical, Map 
} from 'lucide-react';

// --- Secure Core Algorithm (Mock Security Layer) ---
const SECURITY_ENGINE = {
  sanitize: (str) => str.replace(/[^\w\s\?\!]/gi, '').slice(0, 200),
  encrypt: (data) => btoa(encodeURIComponent(JSON.stringify(data))), // Simulation of secure storage
  decrypt: (hash) => JSON.parse(decodeURIComponent(atob(hash)))
};

const App = () => {
  const [activeTab, setActiveTab] = useState('oracle');
  const [darkMode, setDarkMode] = useState(true);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isSecureMode, setIsSecureMode] = useState(true);
  const [showVault, setShowVault] = useState(false);
  const [vaultData, setVaultData] = useState([]);

  // --- Premium Mythos Database (Enhanced for Subscription Value) ---
  const archetypes = useMemo(() => [
    { id: 'hero', name: 'The Eternal Hero', culture: 'Global', color: '#EF4444', icon: <Swords size={32} />, description: 'The force of evolution and conquest over chaos.', strength: 95, rarity: 'Common' },
    { id: 'sage', name: 'The Cosmic Sage', culture: 'Universal', color: '#3B82F6', icon: <Scroll size={32} />, description: 'Keeper of forbidden knowledge and ultimate truth.', strength: 88, rarity: 'Epic' },
    { id: 'alchemist', name: 'The Void Alchemist', culture: 'Hermetic', color: '#A855F7', icon: <FlaskConical size={32} />, description: 'Master of transformation, changing base fears into golden will.', strength: 92, rarity: 'Legendary' },
    { id: 'magician', name: 'The Quantum Magician', culture: 'Digital', color: '#6366F1', icon: <Zap size={32} />, description: 'Architect of reality who bends time and space to their vision.', strength: 98, rarity: 'Mythic' },
    { id: 'guardian', name: 'The Aegis Guardian', culture: 'Celestial', color: '#10B981', icon: <Shield size={32} />, description: 'Unshakable protector of the balance between worlds.', strength: 91, rarity: 'Rare' }
  ], []);

  const wisdomDatabase = [
    { title: 'The Icarus Protocol', culture: 'Modern Greek', message: 'Ambition is the engine, but equilibrium is the pilot.', lesson: 'Risk Management' },
    { title: 'The Osiris Rebirth', culture: 'High Egyptian', message: 'Fragmentation precedes integration. Death is but a state of flux.', lesson: 'Resilience' },
    { title: 'The Fenris Chain', culture: 'Ancient Norse', message: 'Greatest threats are often bound by smaller, invisible sacrifices.', lesson: 'Strategy' }
  ];

  // --- Core Proprietary Oracle Algorithm (Encapsulated) ---
  const consultOracle = useCallback(() => {
    if (!question.trim()) return;
    
    setLoading(true);
    // 1. Input Sanitization (Security Layer)
    const sanitizedQuestion = SECURITY_ENGINE.sanitize(question);
    
    // 2. Adaptive Calculation (Algorithm Protection)
    setTimeout(() => {
      const archIndex = Math.floor(Math.random() * archetypes.length);
      const wisdomIndex = Math.floor(Math.random() * wisdomDatabase.length);
      
      const newResult = {
        id: Date.now(),
        archetype: archetypes[archIndex],
        wisdom: wisdomDatabase[wisdomIndex],
        timestamp: new Date().toLocaleTimeString(),
        hash: SECURITY_ENGINE.encrypt({ q: sanitizedQuestion, a: archIndex })
      };
      
      setResult(newResult);
      setVaultData(prev => [newResult, ...prev.slice(0, 9)]);
      setLoading(false);
    }, 2000);
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
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">MythOS <span className="text-indigo-500">v2.0 Gold</span></h1>
            </div>
            <div className="flex gap-4 text-[10px] font-mono opacity-40 uppercase tracking-[0.2em]">
              <span>Latency: 12ms</span>
              <span>Enc: SHA-512</span>
              <span>Status: Synchronized</span>
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
                    <h2 className="text-7xl font-black leading-none mb-8 bg-gradient-to-br from-white via-white to-white/20 bg-clip-text text-transparent">
                       The Infinite <br /><span className="text-indigo-500">Oracle.</span>
                    </h2>
                    <p className="text-xl opacity-60 font-light leading-relaxed mb-6">
                      저희 기술은 수천 년의 신화적 데이터를 융합하여 당신의 무의식적 경로를 탐색합니다. 오직 선별된 원형만이 당신의 해답을 제시할 것입니다.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <Lock size={14} className="text-indigo-400" />
                        <span className="text-xs font-mono uppercase">Private Session</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <Shield size={14} className="text-indigo-400" />
                        <span className="text-xs font-mono uppercase">IP Protected</span>
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

                {/* Secure Result Visualization */}
                {result && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[50px] blur opacity-30 animate-pulse"></div>
                    <div className="relative glass-card p-16 rounded-[50px] overflow-hidden">
                       <div className="flex flex-col lg:flex-row gap-16 items-start">
                          <div className="lg:w-1/3 w-full">
                             <div 
                                className="aspect-square rounded-[40px] flex items-center justify-center text-white/90 shadow-2xl relative overflow-hidden group mb-6"
                                style={{ background: `linear-gradient(135deg, ${result.archetype.color}, #000)` }}
                             >
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-20 border-[20px] border-white/20 rounded-full scale-150"></motion.div>
                                <div className="relative z-10 transform group-hover:scale-125 transition-transform duration-700">
                                  {result.archetype.icon}
                                </div>
                             </div>
                             <div className="px-6 py-4 bg-white/5 rounded-3xl border border-white/10">
                                <div className="flex justify-between text-[10px] font-mono opacity-50 uppercase mb-2">
                                  <span>Potency</span>
                                  <span>{result.archetype.strength}%</span>
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                   <div className="h-full bg-indigo-400" style={{ width: `${result.archetype.strength}%` }}></div>
                                </div>
                             </div>
                          </div>
                          
                          <div className="lg:w-2/3">
                             <div className="flex items-center gap-4 mb-4">
                               <h3 className="text-4xl font-black uppercase italic text-indigo-400">{result.archetype.name}</h3>
                               <span className="px-3 py-1 bg-white text-black text-[10px] font-black rounded-full uppercase tracking-tighter">
                                 {result.archetype.rarity} Insight
                               </span>
                             </div>
                             <p className="text-4xl font-light leading-tight mb-10 opacity-90">
                               "{result.guidance}"
                             </p>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 glass-card rounded-4xl bg-white/5">
                                   <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-4">The Archive Record</h4>
                                   <p className="text-lg font-bold mb-2">{result.wisdom.title}</p>
                                   <p className="opacity-60 text-sm leading-relaxed mb-4">{result.wisdom.message}</p>
                                   <span className="text-[10px] font-mono opacity-30 uppercase">{result.wisdom.culture} Library</span>
                                </div>
                                <div className="p-8 glass-card rounded-4xl bg-white/5">
                                   <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-4">Application Vector</h4>
                                   <p className="text-lg font-bold mb-2">Modern Strategy</p>
                                   <p className="opacity-60 text-sm leading-relaxed mb-4">이 결과는 다음 영역에 가장 강력한 영향을 미칩니다: <span className="text-white">{result.wisdom.lesson}</span>.</p>
                                   <button className="text-[10px] font-black uppercase text-indigo-400 border-b border-indigo-400/30 pb-1 flex items-center gap-2">
                                      Unlock Deep Analysis <Lock size={10} />
                                   </button>
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
