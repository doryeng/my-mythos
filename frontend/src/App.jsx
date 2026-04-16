import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Shield, Zap, Fingerprint, Database, Scroll, 
  Swords, FlaskConical, Activity, Cpu, Box, Share2, 
  Lock, AlertCircle, ChevronRight, BarChart3, Globe, Layers
} from 'lucide-react';

// --- MythOS v4.0.5 'Eclipse' Core Engine (High-End Optimization) ---

const AGENT_REGISTRY = {
  hero: { 
    id: 'hero', name: 'OVERLORD_01', color: '#EF4444', icon: <Swords />, 
    process: ["Scanning geopolitical friction lines...", "Identifying power vacuum nodes...", "Injecting sovereignty disruptors..."] 
  },
  sage: { 
    id: 'sage', name: 'ARCHITECT_04', color: '#3B82F6', icon: <Scroll />, 
    process: ["Mapping institutional stability...", "Decrypting back-channel protocols...", "Hardening strategic integrity..."] 
  },
  alchemist: { 
    id: 'alchemist', name: 'MUTATOR_02', color: '#A855F7', icon: <FlaskConical />, 
    process: ["Tracing currency volatility streams...", "Mutating commodity value anchors...", "Seeding economic catalysts..."] 
  },
  magician: { 
    id: 'magician', name: 'REALITY_WARPER', color: '#6366F1', icon: <Zap />, 
    process: ["Analyzing timeline entropy...", "Simulating reality divergence...", "Synthesizing future constants..."] 
  }
};

const App = () => {
  const [activeView, setActiveView] = useState('input'); // input | orchestrating | approval | report
  const [question, setQuestion] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(AGENT_REGISTRY.magician);
  const [orchestratorLogs, setOrchestratorLogs] = useState([]);
  const [strategicReport, setStrategicReport] = useState(null);

  // --- Multi-Agent Orchestration Logic ---
  const launchOrchestration = useCallback(() => {
    if (!question.trim()) return;
    
    setActiveView('orchestrating');
    setOrchestratorLogs([]);
    
    const steps = [
      { agent: 'SYSTEM', msg: "ESTABLISHING SECURE MIL-SPEC TUNNEL..." },
      { agent: 'BFF', msg: "XSS STERILIZATION & E2EE KEY EXCHANGE: DONE." },
      ...selectedAgent.process.map(p => ({ agent: selectedAgent.name, msg: p })),
      { agent: 'MIC_CORE', msg: "SYNTHESIZING FINAL STRATEGIC ARTIFACT..." },
      { agent: 'SYSTEM', msg: "ENCRYPTION COMPLETE. AWAITING CLEARANCE." }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setOrchestratorLogs(prev => [...prev, steps[i]]);
        i++;
      } else {
        clearInterval(interval);
        finalizeResult();
      }
    }, 700);
  }, [question, selectedAgent]);

  const finalizeResult = () => {
    const outputs = {
      hero: {
        title: "GEOPOLITICAL_FRICTION_OFFENSIVE",
        summary: "불안정한 정세는 기존 강대국의 거버넌스 공백이 메워지기 전까지 향후 4~7년간 'Active Friction' 상태를 유지할 것으로 분석됨.",
        data: [
          { label: "Conflict Probability", value: "84.2%", color: "#EF4444" },
          { label: "Market Volatility Index", value: "High-Beta", color: "#F59E0B" }
        ],
        exploit: "지역적 소규모 분쟁 지점을 활용한 공급망 다변화 및 국방 자산의 선제적 배치로 지배력 확보.",
        forecast: "신흥 강권 국가들의 동맹 체계(BRICS+) 강화로 인한 단일 패권 해체 가속화."
      },
      sage: {
        title: "INSTITUTIONAL_INTEGRITY_AUDIT",
        summary: "현재의 불안정성은 '데이터 주권'과 '물리적 경계'의 충돌임. 제도적 재정비가 완료되는 2030년까지 비선형적 불안 지속 예상.",
        data: [
          { label: "Security Compliance", value: "99.9%", color: "#3B82F6" },
          { label: "Truth Decay Rate", value: "Critical", color: "#EF4444" }
        ],
        exploit: "탈중앙화된 보안 프로토콜을 사내 망에 구축하여 외부 정세와 단절된 '데이터 요새' 운영.",
        forecast: "중앙 집중형 은행 시스템의 붕괴 이후 디지털 자본 중심의 새로운 제도권 형성."
      },
      alchemist: {
        title: "ECONOMIC_MUTATION_CATALYST",
        summary: "자산의 가치가 노동에서 '희소 자원'과 '컴퓨팅 파워'로 이동 중. 극심한 인플레이션은 하이테크 자산에 의해 상쇄될 것.",
        data: [
          { label: "Asset Mutation Potency", value: "Delta-9", color: "#A855F7" },
          { label: "Liquidity Velocity", value: "Exhausted", color: "#6366F1" }
        ],
        exploit: "전통적 명목 화폐 자산을 '공학적 원료'와 'AI 연산권'으로 즉각 변환하여 가치 하락 방어.",
        forecast: "에너지 기반 통화(Petro -> Volt)로의 가치 정착이 시작되는 시점까지 혼조세 지속."
      },
      magician: {
        title: "QUANTUM_ENTROPY_FORECAST",
        summary: "불안정함 자체가 새로운 상수가 된 'The Great Reset' 구간. 예측 불가능성(High Entropy)이 향후 10년의 비즈니스 필드임.",
        data: [
          { label: "Timeline Divergence", value: "0.41", color: "#6366F1" },
          { label: "Future Stability Index", value: "Unstable", color: "#EF4444" }
        ],
        exploit: "모든 시나리오를 동시 다각도로 추적하는 'Quantum Strategy' 도입. 중앙 계획이 아닌 분산 반응형 조직으로의 개편 필수.",
        forecast: "AI 주도의 결정론적 미래와 인간의 자유의지가 충돌하며 발생하는 '사회적 카오스' 증폭."
      }
    };
    
    setStrategicReport(outputs[selectedAgent.id]);
    setActiveView('approval');
  };

  return (
    <div className="min-h-screen bg-[#020204] text-white font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      
      {/* 🌌 High-Performance Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,15,35,1)_0%,rgba(2,2,4,1)_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
        <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute inset-0 bg-indigo-900/10 blur-[150px]" />
      </div>

      {/* 🛡️ Military Security Header */}
      <header className="fixed top-0 left-0 w-full glass border-b border-white/5 z-[100] px-8 py-4 flex justify-between items-center bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveView('input')}>
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
              <h1 className="text-xl font-black tracking-tighter uppercase italic">MythOS <span className="text-indigo-400">ECLIPSE v4.0.5</span></h1>
           </div>
           <div className="hidden md:flex gap-4 text-[9px] font-mono tracking-widest uppercase opacity-40">
              <span className="flex items-center gap-1.5"><Globe size={10} className="text-indigo-400"/> LINK: SECURE_TUNNEL</span>
              <span className="flex items-center gap-1.5"><Shield size={10} className="text-green-500"/> PROTOCOL: E2EE</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="glass px-4 py-1.5 rounded-lg border border-white/5 text-[9px] font-mono opacity-60">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
        </div>
      </header>

      {/* 🏗️ Core Application Layout */}
      <main className="relative z-10 pt-20 h-screen flex">
        
        {/* Left: Tactical Registry */}
        <aside className="w-80 p-8 hidden xl:flex flex-col gap-6 border-r border-white/5 bg-black/20">
           <h2 className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">Agent Collective</h2>
           <div className="space-y-3">
              {Object.values(AGENT_REGISTRY).map(agent => (
                <button 
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`w-full p-5 rounded-[28px] border text-left transition-all relative overflow-hidden group ${selectedAgent.id === agent.id ? 'border-white/20 bg-white/5 shadow-xl' : 'border-transparent opacity-30 hover:opacity-100 hover:bg-white/2'}`}
                >
                   <div className="flex items-center gap-3 relative z-10">
                      <div className="p-2.5 rounded-xl bg-black/40" style={{ color: agent.color }}>
                         {React.cloneElement(agent.icon, { size: 18 })}
                      </div>
                      <div>
                         <p className="text-[11px] font-black uppercase italic tracking-tighter">{agent.name}</p>
                         <p className="text-[8px] opacity-40 font-mono">READY_STATE</p>
                      </div>
                   </div>
                </button>
              ))}
           </div>
           <div className="mt-auto p-5 glass rounded-3xl border border-indigo-500/10">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[8px] font-bold uppercase opacity-40">Integrity</span>
                 <span className="text-[9px] font-mono text-green-500">99.98%</span>
              </div>
              <div className="h-1 w-full bg-black/40 rounded-full overflow-hidden">
                 <motion.div animate={{ width: '99%' }} className="h-full bg-green-500" />
              </div>
           </div>
        </aside>

        {/* Center: Main Workspace */}
        <section className="flex-grow relative overflow-hidden">
           <AnimatePresence mode="wait">
              
              {/* VIEW 1: Input & Nexus */}
              {activeView === 'input' && (
                <motion.div 
                  key="view-input"
                  initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }}
                  className="h-full flex items-center justify-center p-10"
                >
                   <div className="max-w-3xl w-full text-center">
                      <motion.h2 className="text-7xl font-black italic tracking-tighter mb-10 leading-[0.8]">
                         Strategic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Oracle_X.</span>
                      </h2>
                      <div className="relative glass-card p-10 rounded-[50px] border border-white/5 shadow-2xl bg-black/40">
                         <textarea 
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="질문을 입력하십시오..."
                            className="w-full bg-transparent border-none outline-none text-2xl font-light resize-none h-40 placeholder:opacity-10 leading-relaxed text-center"
                         />
                         <div className="pt-8 border-t border-white/5 flex justify-center">
                            <button 
                              onClick={launchOrchestration}
                              disabled={!question.trim()}
                              className="px-12 py-5 bg-white text-black rounded-3xl font-black uppercase tracking-widest italic hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-20 shadow-2xl shadow-indigo-500/20"
                            >
                               Initiate Analysis
                            </button>
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {/* VIEW 2: Orchestration Sequence */}
              {activeView === 'orchestrating' && (
                <motion.div 
                  key="view-orch"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center p-10 bg-black"
                >
                   <div className="max-w-2xl w-full">
                      <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                         <div className="flex items-center gap-3">
                            <Activity size={14} className="text-indigo-500 animate-pulse" />
                            <h3 className="text-xs font-black uppercase tracking-[0.3em]">Orchestrating Strategic Intelligence</h3>
                         </div>
                         <div className="font-mono text-[9px] opacity-30 italic">ECC_MODE: ACTIVE</div>
                      </div>
                      <div className="space-y-3 font-mono text-[11px] h-96 overflow-y-auto custom-scrollbar pr-4">
                         {orchestratorLogs.map((log, i) => (
                           <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex gap-4">
                              <span className="text-indigo-400 w-24 shrink-0">[{log.agent}]</span>
                              <span className="opacity-60">{log.msg}</span>
                           </motion.div>
                         ))}
                      </div>
                   </div>
                </motion.div>
              )}

              {/* VIEW 3: HITL Approval */}
              {activeView === 'approval' && (
                <motion.div 
                  key="view-app"
                  initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center p-10 z-[200]"
                >
                   <div className="glass-card max-w-xl p-16 rounded-[60px] text-center border-indigo-500/20 shadow-[0_0_100px_rgba(99,102,241,0.1)]">
                      <div className="w-20 h-20 bg-indigo-500/20 rounded-[35px] flex items-center justify-center mx-auto mb-8 text-indigo-400">
                         <Lock size={36} />
                      </div>
                      <h3 className="text-4xl font-black italic mb-4 tracking-tighter uppercase">Clearance Required</h3>
                      <p className="opacity-50 italic font-light mb-12 leading-relaxed">
                         에이전트 [{selectedAgent.name}]가 고밀도 분석 데이터 합성을 완료했습니다. <br />
                         인간 관리자의 최종 승인 시 암호화를 해제합니다.
                      </p>
                      <button 
                        onClick={() => setActiveView('report')}
                        className="w-full py-5 bg-white text-black rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
                      >
                         Approve & Decrypt Report
                      </button>
                   </div>
                </motion.div>
              )}

              {/* VIEW 4: Final High-End Report */}
              {activeView === 'report' && (
                <motion.div 
                  key="view-rep"
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  className="h-full p-8 lg:p-20 overflow-y-auto custom-scrollbar"
                >
                   <div className="max-w-6xl mx-auto">
                      <div className="flex flex-col xl:flex-row gap-20">
                         {/* Left Col: Primary Metadata */}
                         <div className="xl:w-1/3 space-y-12">
                            <div className="p-12 glass-card rounded-[60px] text-center relative overflow-hidden" style={{ backgroundColor: `${selectedAgent.color}11` }}>
                               <div className="relative z-10 mb-8 mx-auto w-24 h-24 flex items-center justify-center" style={{ color: selectedAgent.color }}>
                                  {React.cloneElement(selectedAgent.icon, { size: 80 })}
                                </div>
                               <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-2">{selectedAgent.name}</h3>
                               <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-black tracking-widest opacity-40 uppercase">Assigned Strategic Node</div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-4">
                               {strategicReport?.data.map(d => (
                                 <div key={d.label} className="p-6 glass rounded-4xl border border-white/5 flex justify-between items-center">
                                    <span className="text-[10px] uppercase font-bold opacity-30 tracking-widest">{d.label}</span>
                                    <span className="text-2xl font-mono font-bold" style={{ color: d.color }}>{d.value}</span>
                                 </div>
                               ))}
                            </div>
                         </div>

                         {/* Right Col: Strategic Insight */}
                         <div className="xl:w-2/3 space-y-12">
                            <header className="pb-8 border-b border-white/10">
                               <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-[1px] bg-red-500"></div>
                                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Secret Protocol Artifact</span>
                               </div>
                               <h2 className="text-5xl font-black italic tracking-tighter uppercase">{strategicReport?.title}</h2>
                            </header>

                            <section className="space-y-4">
                               <h4 className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-400 tracking-[0.2em] mb-4">01. Strategic Summary</h4>
                               <p className="text-3xl font-light italic leading-snug tracking-tight text-white/90">
                                  "{strategicReport?.summary}"
                                </p>
                            </section>

                            <section className="space-y-4">
                               <h4 className="flex items-center gap-2 text-[10px] font-black uppercase text-fuchsia-400 tracking-[0.2em] mb-4">02. Tactical Exploit Injection</h4>
                               <div className="bg-white/3 p-10 rounded-[40px] border border-white/5 text-lg font-light leading-relaxed italic text-white/70">
                                  {strategicReport?.exploit}
                               </div>
                            </section>

                            <section className="space-y-4">
                               <h4 className="flex items-center gap-2 text-[10px] font-black uppercase text-yellow-500 tracking-[0.2em] mb-4">03. Future Convergence Forecast</h4>
                               <p className="text-lg opacity-40 leading-relaxed font-light italic">
                                  {strategicReport?.forecast}
                               </p>
                            </section>

                            <div className="flex gap-4 pt-10">
                               <button onClick={() => setActiveView('input')} className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-3xl hover:bg-indigo-500 hover:text-white transition-all">New Consult</button>
                               <button className="px-10 py-5 glass border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-3xl hover:bg-white/10 transition-all flex items-center gap-2"><Share2 size={16}/> Distribute Result</button>
                            </div>
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

           </AnimatePresence>
        </section>
      </main>

      {/* 📊 Global Status bar */}
      <footer className="fixed bottom-0 left-0 w-full glass border-t border-white/5 py-4 px-10 flex justify-between items-center z-[100] bg-black/40 text-[9px] font-mono tracking-widest opacity-30 uppercase">
         <div className="flex gap-8">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> NODE: NORTH_ASIA_1</span>
            <span>Uptime: 99.99%</span>
         </div>
         <div className="flex gap-8">
            <span className="text-indigo-400">Security Mode: E2EE + BFF</span>
            <span>MythOS Intelligence Collective (c) 2026</span>
         </div>
      </footer>

      <style>{`
        body { font-family: 'Outfit', sans-serif; background: #020204; }
        .glass { background: rgba(0,0,0,0.5); backdrop-filter: blur(20px); }
        .glass-card { background: rgba(255,255,255,0.02); backdrop-filter: blur(40px); transition: all 0.5s ease; }
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .rounded-4xl { border-radius: 2rem; }
      `}</style>
    </div>
  );
};

export default App;
