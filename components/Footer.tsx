import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tighter text-brand-black">Influ</span>
            <span className="text-2xl font-extrabold tracking-tighter text-brand-orange">Runner</span>
        </div>
        
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} InfluRunner Inc. All rights reserved.</p>
          <div className="flex gap-4 justify-center md:justify-end mt-2">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;