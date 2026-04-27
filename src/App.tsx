import { useEffect, useState, type ReactNode } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  CalendarCheck,
  FileText,
  Home as HomeIcon,
  Mail,
  Menu,
  Presentation,
  SearchCheck,
  Users,
  X,
} from 'lucide-react';
import About from './pages/About';
import Contact from './pages/Contact';
import Documents from './pages/Documents';
import Domain from './pages/Domain';
import Home from './pages/Home';
import Milestones from './pages/Milestones';
import Presentations from './pages/Presentations';

const navLinks = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Domain', path: '/domain', icon: SearchCheck },
  { name: 'Milestones', path: '/milestones', icon: CalendarCheck },
  { name: 'Documents', path: '/documents', icon: FileText },
  { name: 'Slides', path: '/slides', icon: Presentation },
  { name: 'About Us', path: '/about', icon: Users },
  { name: 'Contact Us', path: '/contact', icon: Mail },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label="SmartRetailX home"
        >
          <img
            src="/images/logo/logo.png"
            alt="SmartRetailX logo"
            className="h-9 w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="text-lg font-black tracking-tight text-slate-950">SmartRetailX</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold ${
                      isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <link.icon className="h-4 w-4" aria-hidden="true" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="SmartRetailX logo"
              className="h-8 w-auto"
              loading="lazy"
              decoding="async"
            />
            <span className="font-black text-slate-950">SmartRetailX</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            An academic project website for a personalized retail intelligence platform built around inclusive voice interaction,
            explainable analytics, and targeted promotions.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Main Tabs</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.slice(0, 6).map((link) => (
              <Link key={link.name} to={link.path} className="text-sm font-semibold text-slate-600 hover:text-blue-700">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Files</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Documents are served from <span className="font-mono text-xs">public/files/documents</span>; slides are served from{' '}
            <span className="font-mono text-xs">public/files/slides</span>.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs font-semibold text-slate-500">
        © 2026 SmartRetailX. Built for Sri Lankan Retail Innovation.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-950">
        <Navbar />
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/domain" element={<PageTransition><Domain /></PageTransition>} />
              <Route path="/milestones" element={<PageTransition><Milestones /></PageTransition>} />
              <Route path="/documents" element={<PageTransition><Documents /></PageTransition>} />
              <Route path="/slides" element={<PageTransition><Presentations /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><Home /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
