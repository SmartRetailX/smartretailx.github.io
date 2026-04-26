import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, MessageSquare, Users, TrendingUp, Sparkles, Menu, X, ChevronRight, Github, ExternalLink } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import VoiceAssistant from './pages/VoiceAssistant';
import Segmentation from './pages/Segmentation';
import BIDashboard from './pages/BIDashboard';
import PromotionEngine from './pages/PromotionEngine';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', path: '/', icon: LayoutDashboard },
    { name: 'Voice AI', path: '/voice', icon: MessageSquare },
    { name: 'Segmentation', path: '/segmentation', icon: Users },
    { name: 'Analytics', path: '/analytics', icon: TrendingUp },
    { name: 'Promotions', path: '/promotions', icon: Sparkles },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">S</div>
              <span className="tracking-tight">SmartRetailX</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-400 bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                    location.pathname === link.path
                      ? 'text-blue-400 bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/voice" element={<PageTransition><VoiceAssistant /></PageTransition>} />
              <Route path="/segmentation" element={<PageTransition><Segmentation /></PageTransition>} />
              <Route path="/analytics" element={<PageTransition><BIDashboard /></PageTransition>} />
              <Route path="/promotions" element={<PageTransition><PromotionEngine /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="bg-black/50 border-t border-white/5 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs">S</div>
                  SmartRetailX
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Next-generation e-commerce platform bridging the gap between raw data and personalized human experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Platform</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li><Link to="/voice" className="hover:text-blue-400">Voice AI</Link></li>
                    <li><Link to="/segmentation" className="hover:text-blue-400">Segments</Link></li>
                    <li><Link to="/analytics" className="hover:text-blue-400">Analytics</Link></li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Tech</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li><span className="opacity-70">Deep Learning</span></li>
                    <li><span className="opacity-70">Microservices</span></li>
                    <li><span className="opacity-70">Explainable AI</span></li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4 flex flex-col items-start md:items-end">
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-500 text-xs mt-auto">
                  © 2026 SmartRetailX. Built for Sri Lankan Retail Innovation.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
