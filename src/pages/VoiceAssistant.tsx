import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mic, Zap, Search, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const performanceData = [
  { name: 'ASR Accuracy', value: 87, full: 100, color: '#3b82f6' },
  { name: 'Intent Detection', value: 85, full: 100, color: '#8b5cf6' },
  { name: 'User Satisfaction', value: 92, full: 100, color: '#10b981' },
];

const features = [
  {
    title: 'Retail-Specific ASR',
    desc: 'Fine-tuned SinLlama model optimized for product names, pricing terminology, and transactional queries.',
    icon: Mic
  },
  {
    title: 'Explainable Response',
    desc: 'Integrated XAI engine providing transparent justifications for recommendations and system actions.',
    icon: ShieldCheck
  },
  {
    title: 'Real-time Interaction',
    desc: 'Sub-3 second response latency ensuring smooth conversational flow for mobile and web users.',
    icon: Zap
  },
  {
    title: 'Semantic Intent Logic',
    desc: 'Advanced NLP pipeline capable of mapping ambiguous speech to precise e-commerce actions.',
    icon: Search
  }
];

export default function VoiceAssistant() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5" /> Subsystem 01
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Sinhala Voice Assistant
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Empowering the underserved Sinhala-speaking market with a localized, voice-driven retail experience. 
            By eliminating language barriers, we enable inclusive digital commerce for rural and semi-urban populations.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> SinLlama Fine-tuned
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> WER 13.5%
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-[400px] aspect-square bg-gradient-to-br from-blue-600/10 to-blue-900/20 rounded-3xl border border-white/10 p-8 flex flex-col justify-center items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center mb-6"
          >
            <Mic className="w-12 h-12 text-blue-400" />
          </motion.div>
          <div className="text-center relative z-10">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5 ">Audio Stream</div>
            <div className="h-1 bg-white/10 w-48 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ['20%', '80%', '40%', '90%', '20%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-full bg-blue-500" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats and Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Performance Metrics</h2>
          <p className="text-gray-400">
            Rigorous testing across diverse accents and environments proves the viability of our 
            localized ASR model. We maintain high accuracy even in semi-noisy retail conditions.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-blue-500 font-bold text-2xl mb-1 flex items-baseline gap-1">
                2.1 <span className="text-xs uppercase tracking-tighter">sec</span>
              </div>
              <div className="text-gray-400 text-sm">Avg. Response Latency</div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-blue-500 font-bold text-2xl mb-1 flex items-baseline gap-1">
                85%<span className="text-xs uppercase tracking-tighter">+</span>
              </div>
              <div className="text-gray-400 text-sm">Intent Accuracy</div>
            </div>
          </div>
        </div>
        
        <div className="h-[300px] w-full bg-white/5 rounded-3xl border border-white/10 p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData} layout="vertical" margin={{ left: 40, right: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={100} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-white">System Capabilities</h2>
          <p className="text-gray-400">Modular design allowing for continuous model improvement and scalability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-colors">
              <f.icon className="w-6 h-6 text-blue-400 mb-4" />
              <h4 className="text-white font-bold mb-2">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Workflow */}
      <section className="bg-black/40 border border-white/10 rounded-[40px] p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px]" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          <div className="col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">Interaction Pipeline</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From raw audio to actionable insight, our pipeline ensures minimal information loss and maximal context retention.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: '01', title: 'Capture', desc: 'Audio Processing' },
              { step: '02', title: 'ASR', desc: 'Llama Inference' },
              { step: '03', title: 'NLP', desc: 'Intent Logic' },
              { step: '04', title: 'XAI', desc: 'Explain Engine' }
            ].map((node, i) => (
              <React.Fragment key={i}>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400 font-mono text-sm font-bold">
                    {node.step}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{node.title}</h5>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider">{node.desc}</p>
                  </div>
                </div>
                {i < 3 && <div className="hidden md:block w-12 h-px bg-white/10" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Footer */}
      <section className="pt-12 border-t border-white/5">
        <div className="flex flex-wrap gap-8 justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {['SinLlama', 'FastAPI', 'NestJS', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Kubernetes'].map(tech => (
             <span key={tech} className="text-xs font-mono tracking-widest text-gray-400">{tech}</span>
           ))}
        </div>
      </section>
    </div>
  );
}
