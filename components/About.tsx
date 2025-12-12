import React from 'react';
import { ShieldCheck, Users, Store, TrendingUp, Handshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-brand-orange rounded-3xl rotate-3 opacity-20 transform scale-105"></div>
            
            {/* Safe Graphical Representation instead of external Image */}
            <div className="relative rounded-3xl shadow-2xl bg-white w-full h-96 lg:h-[500px] border-4 border-white overflow-hidden flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-50 to-gray-200">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <div className="p-6 bg-white rounded-full shadow-lg mb-6 relative z-10 animate-bounce">
                  <Handshake size={64} className="text-brand-orange" />
               </div>
               <h3 className="text-2xl font-bold text-brand-black relative z-10">Connecting Creators <br/> & Businesses</h3>
               <p className="text-gray-500 mt-2 max-w-xs relative z-10">Building bridges for a transparent and profitable future.</p>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <TrendingUp size={20} />
                </div>
                <span className="font-bold text-gray-900">Streamlined Growth</span>
              </div>
              <p className="text-sm text-gray-500">Helping small vendors reach thousands instantly.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-brand-orange font-bold text-lg uppercase tracking-wider mb-2">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight">
              Democratizing the <br/> Influencer Economy.
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The current market is fragmented. Existing players focus only on niche brands, leaving small local vendors and micro-influencers in the dark. There's a lack of transparency that hurts everyone.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              <span className="font-bold text-brand-black">InfluRunner</span> changes the game. We connect everyone—from the corner coffee shop to the global enterprise—with influencers who genuinely align with their values. We provide the tools to manage calendars, build portfolios, and ensure every collaboration is clear, fair, and effective.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-3 bg-brand-black text-white rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Total Transparency</h4>
                  <p className="text-sm text-gray-500 mt-1">Clear metrics and honest pricing for all.</p>
                </div>
              </div>
               <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-3 bg-brand-orange text-white rounded-lg">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Inclusive Network</h4>
                  <p className="text-sm text-gray-500 mt-1">Spotlight for micro-influencers.</p>
                </div>
              </div>
               <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-3 bg-brand-orange text-white rounded-lg">
                  <Store size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Local to Global</h4>
                  <p className="text-sm text-gray-500 mt-1">Shopkeepers to enterprises.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;