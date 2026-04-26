import { motion } from 'motion/react';
import { TrendingUp, Activity, AlertTriangle, Info, BarChart3, LineChart as LineIcon, CheckCircle2, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';

const forecastData = [
  { day: 0, actual: 150, forecast: 148 },
  { day: 10, actual: 165, forecast: 160 },
  { day: 20, actual: 155, forecast: 162 },
  { day: 30, actual: 180, forecast: 175 },
  { day: 40, actual: 170, forecast: 172 },
  { day: 50, actual: 190, forecast: 185 },
  { day: 60, actual: 205, forecast: 198 },
  { day: 70, actual: 185, forecast: 202 },
  { day: 80, actual: 215, forecast: 208 },
  { day: 90, actual: 210, forecast: 212 },
];

const mapeData = [
  { model: 'Prophet', '30d': 10.8, '90d': 14.2 },
  { model: 'XGBoost', '30d': 8.9, '90d': 11.8 },
  { model: 'Ensemble', '30d': 7.1, '90d': 13.7 },
];

export default function BIDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold tracking-widest uppercase">
          <TrendingUp className="w-3.5 h-3.5" /> Subsystem 03
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          BI Dashboard ML Service
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed font-light max-w-4xl">
          The analytical engine of SmartRetailX, providing standalone predictive power. 
          We combine statistical time-series modeling with high-performance gradient boosting to forecast retail demand 90 days into the future.
        </p>
      </div>

      {/* Main Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Forecast Accuracy (30d)', value: '92.9%', icon: Activity, color: 'text-green-400' },
          { label: 'Explanatory Clarity', value: '91.5%', icon: Info, color: 'text-blue-400' },
          { label: 'Alert Precision', value: '91.2%', icon: AlertTriangle, color: 'text-orange-400' }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <div className="p-3 bg-white/5 w-fit rounded-2xl">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Forecasting Visualization */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Demand Forecasting Pipeline</h2>
            <p className="text-gray-400">Comparing Ensemble Forecast accuracy against a 90-day time horizon.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-gray-400 uppercase">Actual Sales</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="w-3 h-3 border border-blue-400 rounded-full" />
              <span className="text-gray-400 uppercase">Forecast Model</span>
            </div>
          </div>
        </div>
        
        <div className="h-[400px] w-full bg-black/40 border border-white/10 rounded-[32px] p-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis dataKey="day" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Days Out', position: 'bottom', fill: '#4b5563', fontSize: 10 }} />
              <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" />
              <Line type="monotone" dataKey="forecast" stroke="#60a5fa" strokeDasharray="5 5" dot={false} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="h-[350px] bg-white/5 rounded-3xl border border-white/10 p-8">
          <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Model Performance (MAPE)</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mapeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis dataKey="model" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} unit="%" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px' }}
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="30d" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="90d" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white tracking-tight">Hybrid Intelligence</h3>
          <p className="text-gray-400">
            Our ensemble strategy proves that mixing Meta's Prophet with XGBoost delivers superior short-term accuracy while maintaining seasonal robustness for long-term planning.
          </p>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex gap-4">
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                 <Zap className="w-5 h-5 text-blue-400" />
               </div>
               <div>
                 <h5 className="text-white font-bold text-sm">Feature Engineering</h5>
                 <p className="text-gray-500 text-xs mt-1">Automatic extraction of cyclic seasonality, lag patterns, and promotional impacts.</p>
               </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex gap-4">
               <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0" >
                 <CheckCircle2 className="w-5 h-5 text-green-400" />
               </div>
               <div>
                 <h5 className="text-white font-bold text-sm">SHAP Explainability</h5>
                 <p className="text-gray-500 text-xs mt-1">Breaking the "black-box" by identifying the exact features driving every prediction.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert System */}
      <section className="bg-gradient-to-r from-blue-900/40 to-green-900/40 border border-white/10 rounded-[32px] p-12 text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white tracking-tight">Proactive Inventory Management</h2>
          <p className="text-gray-300">
            Automated alerts triggered by stockout risk scores and demand anomalies before they impact revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {['Critical Stockout Risk', 'Sudden Demand Spike', 'Promotion Uplift Signal', 'Seasonal Trend Shift'].map((alert) => (
              <div key={alert} className="bg-black/40 backdrop-blur px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-widest">
                {alert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Footer */}
      <section className="pt-12 border-t border-white/5">
        <div className="flex flex-wrap gap-8 justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {['FastAPI', 'Uvicorn', 'Prophet', 'XGBoost', 'SHAP', 'SQLAlchemy', 'Pydantic', 'Pytest'].map(tech => (
             <span key={tech} className="text-xs font-mono tracking-widest text-gray-400">{tech}</span>
           ))}
        </div>
      </section>
    </div>
  );
}
