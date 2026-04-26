import { motion } from 'motion/react';
import { Sparkles, BarChart, Rocket, Filter, ShieldCheck, ShoppingBag, ArrowRight, Zap, Target, Users } from 'lucide-react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const roiData = [
  { name: 'Broadcast Campaign', roi: 60, cost: 'High' },
  { name: 'SmartRetailX Personalized', roi: 566.7, cost: 'Low' },
];

const conversionData = [
  { name: 'Baseline', value: 10 },
  { name: 'SmartRetailX', value: 25 },
];

export default function PromotionEngine() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Subsystem 04
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Personalized <br /> Promotion Engine
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Moving beyond simple recommendations to causal intervention. 
            Our engine determines which specific loyalty treatment—discount, bundle, or cross-sell—will maximize incremental sales uplift for every unique customer.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
               <div className="text-orange-400 text-xl font-bold">5.7x</div>
               <div className="text-gray-500 text-xs uppercase tracking-widest ">Marketing Efficiency</div>
            </div>
            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
               <div className="text-orange-400 text-xl font-bold">75%</div>
               <div className="text-gray-500 text-xs uppercase tracking-widest ">Cost Reduction</div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-[450px] bg-black/40 border border-white/10 rounded-[32px] p-8 space-y-6">
          <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest">ROI Benchmark (%)</h4>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBar data={roiData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={10} width={120} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px' }}
                />
                <Bar dataKey="roi" radius={[0, 4, 4, 0]} barSize={20}>
                  {roiData.map((entry, index) => (
                    <Cell key={index} fill={index === 0 ? '#4b5563' : '#f97316'} />
                  ))}
                </Bar>
              </RechartsBar>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 italic text-center italic">
            "We prioritize the 'persuadables'—those who only purchase when given that specific nudge."
          </p>
        </div>
      </div>

      {/* Uplift Formula */}
      <section className="bg-white/5 border border-white/10 rounded-[40px] p-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-sm font-mono text-orange-400 uppercase tracking-[0.3em]">Causal Inference Core</h2>
          <div className="text-3xl md:text-5xl font-black text-white font-mono tracking-tighter">
            Uplift = P(A|T) - P(A|C)
          </div>
          <p className="text-gray-400 text-sm leading-loose">
            By estimating the probability of a purchase <span className="text-white font-bold">with</span> treatment (T) versus control (C), 
            we avoid wasting budget on customers who would buy anyway and focus solely on driving incremental revenue.
          </p>
        </div>
      </section>

      {/* Implementation Mix */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">The Multi-Model Pipeline</h2>
          <p className="text-gray-400">
            Our pipeline integrates four distinct machine learning archetypes to ensure 100% coverage across the product catalog and customer base.
          </p>
          <div className="grid gap-4">
             {[
               { title: 'Random Forest', desc: 'Predicting individual purchase probability based on feature vectors.', icon: Target },
               { title: 'Collaborative Filtering (SVD)', desc: 'User-product affinity modeling for latent preference discovery.', icon: Users },
               { title: 'Content-Based Filtering', desc: 'Attribute matching to solve the "cold-start" problem for new items.', icon: Filter },
               { title: 'FP-Growth Mining', desc: 'Discovering co-purchase rules for high-confidence product bundling.', icon: Zap }
             ].map((node) => (
               <div key={node.title} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all">
                 <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <node.icon className="w-5 h-5 text-orange-400" />
                 </div>
                 <div>
                   <h5 className="text-white font-bold text-sm">{node.title}</h5>
                   <p className="text-gray-500 text-xs mt-1">{node.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
        
        <div className="space-y-8">
           <div className="bg-black/40 border border-white/10 rounded-[32px] p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Conversion Lift</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBar data={conversionData}>
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px' }} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40}>
                      {conversionData.map((entry, index) => (
                        <Cell key={index} fill={index === 0 ? '#4b5563' : '#f97316'} />
                      ))}
                    </Bar>
                  </RechartsBar>
                </ResponsiveContainer>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Baseline (Broadcast) vs. SmartRetailX (Targeted) Conversion Rates
              </p>
           </div>
           
           <div className="p-8 bg-orange-500/5 border border-orange-500/20 rounded-[32px] space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                Business Rule Layer
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                <li>Budget Limits</li>
                <li>Fairness Logic</li>
                <li>Inventory Checks</li>
                <li>Promo Exclusivity</li>
              </ul>
           </div>
        </div>
      </section>

      {/* Campaign Use Cases */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Actionable Use Cases</h2>
          <p className="text-gray-400">Transforming insights into strategic revenue outcomes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 group transition-all hover:bg-white/[0.08]">
             <ShoppingBag className="w-8 h-8 text-orange-400 mb-2" />
             <h3 className="text-2xl font-bold text-white">Cross-Sell Delivery</h3>
             <p className="text-gray-400 leading-relaxed">
               Applying Association Rules (e.g., Bread → Milk, Confidence: 0.42) to trigger real-time offers when a primary item is added to the basket.
             </p>
             <div className="pt-4 flex items-center text-orange-400 font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               Explore logic <ArrowRight className="w-4 h-4" />
             </div>
           </div>
           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 group transition-all hover:bg-white/[0.08]">
             <Rocket className="w-8 h-8 text-orange-400 mb-2" />
             <h3 className="text-2xl font-bold text-white">Win-Back Campaigns</h3>
             <p className="text-gray-400 leading-relaxed">
               Automatically targeting the "At-Risk" segment with deep percentage discounts timed to their historical shopping cadence.
             </p>
             <div className="pt-4 flex items-center text-orange-400 font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               Explore logic <ArrowRight className="w-4 h-4" />
             </div>
           </div>
        </div>
      </section>

      {/* Tech Stack Footer */}
      <section className="pt-12 border-t border-white/5">
        <div className="flex flex-wrap gap-8 justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {['Flask', 'TensorFlow', 'PyTorch', 'Surprise', 'Mlxtend', 'React Native', 'SQLite/Postgres'].map(tech => (
             <span key={tech} className="text-xs font-mono tracking-widest text-gray-400">{tech}</span>
           ))}
        </div>
      </section>
    </div>
  );
}
