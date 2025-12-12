import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const LaunchingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      // Simulate API call
      setTimeout(() => setSubscribed(true), 800);
    }
  };

  return (
    <section id="launch" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[128px] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-2">Early Access</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Be the First to Run.</h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are launching soon. Join the waitlist to get exclusive early access, lower commission rates for the first year, and priority support.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {subscribed ? (
            <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl flex flex-col items-center gap-4 text-green-400 animate-fade-in">
              <div className="p-3 bg-green-500/20 rounded-full">
                <CheckCircle size={40} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-white mb-1">You're on the list!</h4>
                <p className="text-green-400/80">We'll notify you as soon as we launch.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Join Waitlist <Send size={18} />
              </button>
            </form>
          )}
          
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Limited spots available for beta release.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LaunchingSoon;