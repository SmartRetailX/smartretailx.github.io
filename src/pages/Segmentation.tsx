import { motion } from 'motion/react';
import { Users, Target, UserCheck, UserMinus, Shield, Award, PieChart as PieIcon, Layers } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const segmentData = [
  { name: 'Frequent Shoppers', value: 28, color: '#3b82f6', desc: 'High frequency, low recency' },
  { name: 'Regular Shoppers', value: 35, color: '#8b5cf6', desc: 'Medium frequency, medium recency' },
  { name: 'Occasional Shoppers', value: 22, color: '#10b981', desc: 'Low frequency, high recency' },
  { name: 'At-Risk / Churned', value: 15, color: '#ef4444', desc: 'Very low frequency, very high recency' },
];

const tiers = [
  { name: 'Platinum', color: 'bg-indigo-500', range: '0.80 - 1.00', benefits: '12% Cashback, VIP Concierge' },
  { name: 'Gold', color: 'bg-yellow-500', range: '0.60 - 0.80', benefits: '8% Cashback, Early Sale Access' },
  { name: 'Silver', color: 'bg-gray-400', range: '0.40 - 0.60', benefits: '5% Cashback, Free Shipping' },
  { name: 'Bronze', color: 'bg-orange-600', range: '0.00 - 0.40', benefits: '2% Cashback, Birthday Voucher' },
];

export default function Segmentation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" /> Subsystem 02
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Dynamic Customer <br /> Segmentation & Loyalty
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Beyond broad demographic categories, SmartRetailX employs behavior-first segmentation. 
            By analyzing Recency, Frequency, and Monetary (RFM) variables, we map every customer to an actionable archetype.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Target className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-bold text-sm">K-Means Clustering</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">Unsupervised ML</div>
                </div>
             </div>
             <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Layers className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-bold text-sm">Two-Level Hierarchy</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">Parent & Sub-clusters</div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="w-full lg:w-[450px] aspect-video lg:aspect-square bg-gradient-to-tr from-purple-600/10 to-purple-900/20 rounded-[48px] border border-white/10 p-8 flex items-center justify-center relative shadow-2xl">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Methodology Section */}
      <section className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
             <h2 className="text-3xl font-bold text-white">The RFM Framework</h2>
             <p className="text-gray-400 leading-relaxed">
               Every transaction is condensed into three interpretable signals that are highly predictive of future behavior. 
               This "behavioral fingerprint" allows us to differentiate between a high-spending "Champion" and a newly acquired high-value customer.
             </p>
             <div className="space-y-4">
                {[
                  { label: 'Recency (R)', color: 'text-blue-400', desc: 'Days since last purchase (lower is better)' },
                  { label: 'Frequency (F)', color: 'text-purple-400', desc: 'Total number of distinct transactions' },
                  { label: 'Monetary (M)', color: 'text-green-400', desc: 'Total spend volume (revenue)' }
                ].map((stat) => (
                  <div key={stat.label} className="flex gap-4 items-start">
                    <div className={`mt-1 font-mono font-bold ${stat.color} text-lg shrink-0`}>•</div>
                    <div>
                      <h4 className={`font-bold ${stat.color}`}>{stat.label}</h4>
                      <p className="text-gray-500 text-sm">{stat.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              {segmentData.map((s) => (
                <div key={s.name} className="p-6 bg-black/40 border border-white/5 rounded-2xl">
                  <div className={`w-2 h-2 rounded-full mb-3`} style={{ backgroundColor: s.color }} />
                  <h4 className="text-white font-bold text-sm mb-1">{s.name}</h4>
                  <div className="text-blue-400 text-xl font-bold mb-2">{s.value}%</div>
                  <p className="text-gray-500 text-xs leading-tight">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Loyalty Tiers */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
           <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
             <Award className="w-4 h-4" /> Rewards Program
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Structured Loyalty Tiers</h2>
           <p className="text-gray-400">Our dynamic assignment engine ensures customers are rewarded based on their multi-dimensional lifecycle score.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:translate-y-[-4px] hover:bg-white/[0.08]">
               <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 bg-gradient-to-bl scale-150 rounded-full -mr-4 -mt-4`} />
               <h3 className="text-2xl font-black text-white mb-2">{t.name}</h3>
               <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">Score: {t.range}</div>
               <div className="h-0.5 bg-white/10 w-full mb-6 relative overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '100%' }}
                   viewport={{ once: true }}
                   className={`h-full ${t.color}`} 
                 />
               </div>
               <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
                 {t.benefits}
               </p>
            </div>
          ))}
        </div>
        
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6 text-center">
          <p className="text-indigo-400 text-sm font-medium">
            <span className="font-bold">Insight:</span> Optimized Platinum recruitment achieved a <span className="text-white font-bold text-lg">19.2%</span> increase in repeat-purchase revenue.
          </p>
        </div>
      </section>

      {/* Tech Stack Footer */}
      <section className="pt-12 border-t border-white/5">
        <div className="flex flex-wrap gap-8 justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {['K-Means++', 'PostgreSQL', 'Flask-RESTful', 'Pandas', 'NumPy', 'Scikit-learn', 'React 18'].map(tech => (
             <span key={tech} className="text-xs font-mono tracking-widest text-gray-400">{tech}</span>
           ))}
        </div>
      </section>
    </div>
  );
}
