import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, MessageSquare, Users, TrendingUp, Sparkles, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const subsystems = [
  {
    title: 'Sinhala Voice Assistant',
    description: 'Bridging the linguistic gap in e-commerce with a fine-tuned ASR model optimized for retail vocabulary.',
    icon: MessageSquare,
    bgClass: 'bg-blue-600/20',
    iconClass: 'text-blue-400',
    link: '/voice'
  },
  {
    title: 'Customer Segmentation',
    description: 'Advanced RFM analysis and K-Means clustering to define actionable customer archetypes and loyalty tiers.',
    icon: Users,
    bgClass: 'bg-purple-600/20',
    iconClass: 'text-purple-400',
    link: '/segmentation'
  },
  {
    title: 'BI Dashboard ML Service',
    description: 'Predictive demand forecasting using Prophet and XGBoost ensemble models with integrated explainability.',
    icon: TrendingUp,
    bgClass: 'bg-green-600/20',
    iconClass: 'text-green-400',
    link: '/analytics'
  },
  {
    title: 'Personalized Promotion Engine',
    description: 'High-ROI promotional treatments based on uplift modeling, collaborative filtering, and business rule logic.',
    icon: Sparkles,
    bgClass: 'bg-orange-600/20',
    iconClass: 'text-orange-400',
    link: '/promotions'
  }
];

const StatCard = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group">
    <div className="text-gray-400 text-sm font-medium mb-1">{label}</div>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{value}</span>
      <span className="text-gray-500 text-sm">{unit}</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
              Future of Retail Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Elevating Retail through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Personalized Experiences
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              SmartRetailX is an integrated ecosystem designed to bridge the gap between data and human-centric e-commerce. 
              Our multi-layered AI architecture transforms raw transactions into meaningful retail journeys.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/analytics" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#subsystems" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10">
                Explore Subsystems
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="User ROI" value="566.7" unit="%" />
          <StatCard label="Forecast Accuracy" value="86" unit="%" />
          <StatCard label="ASR Word Error Rate" value="13" unit="%" />
          <StatCard label="Conversion Lift" value="25" unit="%" />
        </div>
      </section>

      {/* Subsystems Section */}
      <section id="subsystems" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The SmartRetailX Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Four independent yet collaborative microservices working in harmony to deliver end-to-end personalization.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subsystems.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07]"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.bgClass} flex items-center justify-center mb-6`}>
                <s.icon className={`w-7 h-7 ${s.iconClass} underline decoration-2`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {s.title}
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {s.description}
              </p>
              <Link to={s.link} className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-2 tracking-wide uppercase">
                View Specification <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white/5 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Enterprise Infrastructure <br />
                Built for Scalability
              </h2>
              <div className="grid gap-6">
                {[
                  { title: 'Containerized Microservices', icon: Database, desc: 'Independently deployable units using Docker and orchestrated by Kubernetes.' },
                  { title: 'Multi-Model Pipeline', icon: Zap, desc: 'Ensemble methods leveraging Prophet, XGBoost, and SHAP for high-reliability outputs.' },
                  { title: 'Explainable AI Core', icon: Shield, desc: 'Transparent decision-making processes to build trust with both managers and end-users.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start text-left bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="p-2 bg-blue-600/20 rounded-lg shrink-0">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 blur-3xl animate-pulse" />
               <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 blur-3xl animate-pulse delay-1000" />
               
               <div className="grid grid-cols-2 gap-4 relative z-10 w-full max-w-sm">
                  {['React', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'K8s', 'Prophet', 'PyTorch'].map((tech) => (
                    <div key={tech} className="bg-black/40 backdrop-blur shadow-xl border border-white/10 p-4 rounded-xl text-center text-gray-300 font-mono text-sm tracking-wider uppercase">
                      {tech}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
