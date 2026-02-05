import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewType } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    if (currentView !== 'home') {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button className="flex-shrink-0 flex items-center cursor-pointer focus:outline-none" onClick={scrollToTop}>
            <span className="text-3xl font-extrabold tracking-tighter text-brand-black">Influ</span>
            <span className="text-3xl font-extrabold tracking-tighter text-brand-orange">Runner</span>
          </button>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={(e) => handleLinkClick(e, 'about')} className="text-brand-black hover:text-brand-orange font-medium transition-colors focus:outline-none">About Us</button>
            <button onClick={(e) => handleLinkClick(e, 'features')} className="text-brand-black hover:text-brand-orange font-medium transition-colors focus:outline-none">Features</button>
            <button onClick={(e) => handleLinkClick(e, 'launch')} className="px-6 py-2.5 bg-brand-black text-white font-bold rounded-full hover:bg-brand-orange transition-all duration-300 shadow-lg hover:shadow-brand-orange/20 focus:outline-none">
              Join Waitlist
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-brand-black hover:text-brand-orange focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <button onClick={(e) => handleLinkClick(e, 'about')} className="block w-full text-center py-2 text-lg text-brand-black font-medium focus:outline-none">About Us</button>
            <button onClick={(e) => handleLinkClick(e, 'features')} className="block w-full text-center py-2 text-lg text-brand-black font-medium focus:outline-none">Features</button>
            <button onClick={(e) => handleLinkClick(e, 'launch')} className="block w-full text-center py-3 bg-brand-orange text-white font-bold rounded-lg focus:outline-none">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;