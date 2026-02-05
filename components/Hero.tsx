import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RoutePath } from '../App';

interface HeroProps {
  navigate: (path: RoutePath) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-black/5 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 text-brand-orange text-sm font-bold mb-8 border border-orange-100">
            <span className="w-2 h-2 bg-brand-orange rounded-full mr-2 animate-pulse"></span>
            Launching Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-black tracking-tight mb-8 leading-tight">
            Connecting <span className="text-brand-orange relative whitespace-nowrap">
              Influencers
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> <br className="hidden md:block"/>
            to Brands with Transparency.
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            From local vendors to big business. We bridge the gap with clear metrics, smart tools, and equal opportunities for every creator.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={(e) => scrollToSection(e, 'launch')} className="px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2">
              Get Early Access <ArrowRight size={20} />
            </button>
            <button onClick={(e) => scrollToSection(e, 'about')} className="px-8 py-4 bg-white text-brand-black border-2 border-gray-100 text-lg font-bold rounded-full hover:border-brand-black hover:bg-gray-50 transition-all flex items-center justify-center">
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-8">
            <div>
              <p className="text-3xl font-bold text-brand-black">100%</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Transparency</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-black">All</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Niches Covered</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-brand-black">AI</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Driven Matching</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-black">0</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Hidden Fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;