import { motion } from 'motion/react';
import { UserCheck, Target, Sparkles, AlertTriangle, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-sky-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-teal-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      default:
        return <UserCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  const getIconBg = (name: string) => {
    switch (name) {
      case 'UserCheck': return 'bg-blue-500/10 border-blue-500/25';
      case 'Target': return 'bg-emerald-500/10 border-emerald-500/25';
      case 'Sparkles': return 'bg-indigo-500/10 border-indigo-500/25';
      case 'AlertTriangle': return 'bg-amber-500/10 border-amber-500/25';
      case 'Eye': return 'bg-teal-500/10 border-teal-500/25';
      case 'HeartHandshake': return 'bg-rose-500/10 border-rose-500/25';
      default: return 'bg-white/5 border-white/10';
    }
  };

  return (
    <section id="why-us" className="py-20 bg-transparent relative overflow-hidden">
      {/* Decorative background grid vector */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/25 inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Core Principles</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Why Individual Investors Trust Our Practice
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Distributing investments isn't just about selling a fund. It's about securing your peace of mind and building reliable structures for lifelong financial safety.
          </p>
        </div>

        {/* 6 Grid points layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
              id={`why-us-card-${idx}`}
            >
              <div>
                {/* Custom icon rounded capsule */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${getIconBg(item.iconName)}`}>
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2.5">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Little detail spacer */}
              <div className="mt-4 w-12 h-0.5 bg-white/10 rounded"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
