import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import LaunchingSoon from './components/LaunchingSoon';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

export type RoutePath = '/' | '/privacy-policy' | '/terms-and-conditions';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  // Listen for browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const navigate = (path: RoutePath) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/privacy-policy':
        return <PrivacyPolicy onBack={() => navigate('/')} />;
      case '/terms-and-conditions':
        return <TermsAndConditions onBack={() => navigate('/')} />;
      default:
        return (
          <>
            <Hero navigate={navigate} />
            <About />
            <Features />
            <LaunchingSoon />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigate} currentPath={currentPath} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;