import React from 'react';
import { Calendar, Briefcase, Search, Zap } from 'lucide-react';

const features = [
  {
    icon: <Calendar size={32} />,
    title: "Smart Calendar",
    description: "Effortlessly manage your campaign dates, deliverables, and payments in one unified view."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Portfolio Builder",
    description: "Create a stunning, data-backed portfolio that showcases your past work and real engagement stats."
  },
  {
    icon: <Search size={32} />,
    title: "Transparent Discovery",
    description: "Brands see the real you. No hidden algorithms. Just pure, data-driven matching based on authentic fit."
  },
  {
    icon: <Zap size={32} />,
    title: "Streamlined Workflow",
    description: "From initial contact to final payment, every step is automated to save you time and hassle."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Everything You Need to Run.</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We don't just connect; we equip. InfluRunner provides a suite of tools designed to make your professional life easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-black mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h4 className="text-xl font-bold text-brand-black mb-3">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;