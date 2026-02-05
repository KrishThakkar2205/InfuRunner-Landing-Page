import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import LaunchingSoon from './components/LaunchingSoon';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

export type ViewType = 'home' | 'privacy' | 'terms';

function App() {
  const [view, setView] = useState<ViewType>('home');

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (newView: ViewType) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      <main>
        {view === 'home' && (
          <>
            <Hero />
            <About />
            <Features />
            <LaunchingSoon />
          </>
        )}
        {view === 'privacy' && <PrivacyPolicy onBack={() => setView('home')} />}
        {view === 'terms' && <TermsAndConditions onBack={() => setView('home')} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;