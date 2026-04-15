import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Book, Compass, Moon, Sun, Send, Shield, Info, ExternalLink } from 'lucide-react';
import axios from 'axios';

const App = () => {
  // --- Local Data (Integrated for GitHub Pages Compatibility) ---
  const initialArchetypes = [
    { id: 'hero', name: 'The Hero', culture: 'Universal', color: '#EF4444', icon: '⚔️', description: 'The brave adventurer seeking glory and transformation.' },
    { id: 'sage', name: 'The Sage', culture: 'Greek', color: '#3B82F6', icon: '📜', description: 'The wise teacher who seeks truth and understanding.' },
    { id: 'creator', name: 'The Creator', culture: 'Norse', color: '#A855F7', icon: '🔨', description: 'The innovative spirit who brings new things into being.' },
    { id: 'lover', name: 'The Lover', culture: 'Roman', color: '#EC4899', icon: '❤️', description: 'The passionate soul who values intimacy and beauty.' },
    { id: 'jester', name: 'The Jester', culture: 'Celtic', color: '#EAB308', icon: '🎭', description: 'The trickster who uses humor to speak truth to power.' },
    { id: 'magician', name: 'The Magician', culture: 'Egyptian', color: '#6366F1', icon: '🔮', description: 'The visionary who transforms the world through knowledge.' }
  ];

  const initialWisdom = [
    { title: 'Odysseus & The Sirens', culture: 'Greek', message: 'Sometimes the greatest strength is knowing when to resist temptation.', application: 'Career decisions, avoiding distractions' },
    { title: 'The Phoenix Rising', culture: 'Egyptian', message: 'Every ending contains the seed of a new beginning.', application: 'Personal transformation, overcoming setbacks' },
    { title: "Thor's Hammer", culture: 'Norse', message: 'True power comes from worthiness, not just strength.', application: 'Leadership development, earning respect' }
  ];

  const [activeTab, setActiveTab] = useState('oracle');
  const [darkMode, setDarkMode] = useState(true);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  // No longer fetching from backend
  const archetypes = initialArchetypes;
  const wisdom = initialWisdom;

  const handleAskOracle = () => {
    if (!question.trim()) return;
    setLoading(true);
    
    // Simulate divine processing locally
    setTimeout(() => {
      const randomArchetype = archetypes[Math.floor(Math.random() * archetypes.length)];
      const randomWisdom = wisdom[Math.floor(Math.random() * wisdom.length)];

      setResult({
        archetype: randomArchetype,
        wisdom: randomWisdom,
        guidance: `Channel your inner ${randomArchetype.name}. ${randomWisdom.message}`,
        confidence: 85 + Math.floor(Math.random() * 15)
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-mythos-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-purple-600 transition-all duration-1000 ${darkMode ? 'scale-100' : 'scale-0'}`}></div>
        <div className={`absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-blue-600 transition-all duration-1000 ${darkMode ? 'scale-100' : 'scale-0'}`}></div>
      </div>

      {/* Navigation Desktop */}
      <nav className="fixed left-0 top-0 h-full w-20 flex-col items-center py-8 glass border-r hidden md:flex z-50">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-12 shadow-lg shadow-indigo-500/20">
          <Sparkles className="text-white" size={24} />
        </div>
        
        <div className="flex flex-col gap-8">
          {[
            { id: 'oracle', icon: Compass, label: 'Oracle' },
            { id: 'archetypes', icon: Shield, label: 'Patterns' },
            { id: 'wisdom', icon: Book, label: 'Librarium' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-xl transition-all duration-300 relative group ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-indigo-400'}`}
            >
              <tab.icon size={24} />
              <span className="absolute left-full ml-4 px-2 py-1 bg-indigo-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-6">
          <button onClick={() => setDarkMode(!darkMode)} className="p-3 text-slate-500 hover:text-yellow-400 transition-colors">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="p-3 text-slate-500 hover:text-white transition-colors">
            <Info size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-20 min-h-screen relative z-10">
        
        {/* Header */}
        <header className="px-8 py-6 flex justify-between items-center border-b glass">
          <div>
            <h1 className="text-xl font-bold tracking-tight">MythOS <span className="text-indigo-500 font-light italic">v1.2</span></h1>
            <p className="text-xs opacity-50 uppercase tracking-widest">Divine Intelligence Interface</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-mythos-900 bg-red-500"></div>
              <div className="w-8 h-8 rounded-full border-2 border-mythos-900 bg-blue-500"></div>
              <div className="w-8 h-8 rounded-full border-2 border-mythos-900 bg-purple-500"></div>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            
            {/* Oracle Tab */}
            {activeTab === 'oracle' && (
              <motion.div 
                key="oracle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Consult the Great Oracle
                  </h2>
                  <p className="text-lg opacity-60">
                    Enter the chamber of wisdom. Your question will be echoed through the halls of history.
                  </p>
                </div>

                <div className="glass-card p-1 rounded-3xl mb-12 shadow-2xl overflow-hidden focus-within:ring-2 ring-indigo-500/50 transition-all">
                  <div className="p-8">
                    <textarea 
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="What is the burden of your heart? Seek mythological guidance..."
                      className="w-full bg-transparent border-none outline-none text-xl resize-none h-40 placeholder:opacity-30"
                    />
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xs opacity-30 italic">Encryption: DIVINE-RSA-4096</p>
                      <button 
                        onClick={handleAskOracle}
                        disabled={loading || !question.trim()}
                        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-8 py-3 rounded-2xl flex items-center gap-3 font-semibold transition-all shadow-lg shadow-indigo-600/20"
                      >
                        {loading ? 'Consulting...' : <><Send size={18} /> Cast Question</>}
                      </button>
                    </div>
                  </div>
                </div>

                {result && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-card p-10 rounded-3xl"
                  >
                    <div className="flex items-start gap-8 flex-col md:flex-row">
                      <div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-xl flex-shrink-0"
                        style={{ backgroundColor: result.archetype.color }}
                      >
                        {result.archetype.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold">{result.archetype.name} Guidance</h3>
                          <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-indigo-400 font-mono">
                            STABILITY: {result.confidence}%
                          </span>
                        </div>
                        <p className="text-2xl font-medium italic mb-8 leading-relaxed opacity-90">
                          "{result.guidance}"
                        </p>
                        
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                          <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">
                            <Book size={14} /> Historical Context: {result.wisdom.title}
                          </h4>
                          <p className="opacity-70 mb-4">{result.wisdom.message}</p>
                          <div className="flex justify-between items-center pt-4 border-t border-white/10">
                            <span className="text-xs opacity-40">Origin: {result.wisdom.culture}</span>
                            <button className="text-xs text-indigo-400 hover:underline flex items-center gap-1">
                              Read Original Text <ExternalLink size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Archetypes Tab */}
            {activeTab === 'archetypes' && (
              <motion.div 
                key="archetypes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {archetypes.map((arch, idx) => (
                  <motion.div 
                    key={arch.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-8 rounded-3xl text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: `${arch.color}33`, color: arch.color }}>
                      {arch.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{arch.name}</h3>
                    <p className="text-sm opacity-40 uppercase tracking-widest mb-4">{arch.culture} Origin</p>
                    <p className="text-sm opacity-60 line-clamp-2">{arch.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Wisdom Tab */}
            {activeTab === 'wisdom' && (
              <motion.div 
                key="wisdom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 max-w-4xl mx-auto"
              >
                {wisdom.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-8 rounded-3xl flex items-start gap-8"
                  >
                    <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Book size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] rounded uppercase font-bold tracking-widest">{item.culture}</span>
                      </div>
                      <p className="text-lg italic opacity-90 mb-4">"{item.message}"</p>
                      <div className="flex items-center gap-2 text-xs opacity-40">
                        <span className="font-bold text-indigo-400">Application:</span>
                        {item.application}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </section>
      </main>

      {/* Mobile Nav */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full glass border-t flex justify-around py-4 z-50 px-4">
        {[
          { id: 'oracle', icon: Compass },
          { id: 'archetypes', icon: Shield },
          { id: 'wisdom', icon: Book }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 rounded-xl transition-all ${activeTab === tab.id ? 'bg-indigo-600' : 'text-slate-500'}`}
          >
            <tab.icon size={24} />
          </button>
        ))}
        <button onClick={() => setDarkMode(!darkMode)} className="p-3 text-slate-500">
           {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </footer>

    </div>
  );
};

export default App;
