import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsAndConditionsProps {
  onBack: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-orange font-bold hover:text-orange-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">Terms and Conditions</h1>
        <p className="text-gray-500 font-medium mb-12">Last Updated: 04 Feb 2026</p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            These Terms & Conditions govern access to and use of the Influrunner platform. By accessing our website or services, you agree to these terms.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">1. Platform Overview</h2>
            <p className="mb-2">Influrunner is a technology platform that connects:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Influencers who share verified social media data</li>
              <li>Brands seeking influencer insights and reach analytics</li>
            </ul>
            <p className="mt-4 italic">Influrunner does not guarantee partnerships, earnings, or campaign success.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">2. User Eligibility</h2>
            <p className="mb-2">By using the platform, you confirm that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are at least 18 years old</li>
              <li>You have the legal right to connect social media accounts</li>
              <li>All information provided is accurate and lawful</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">3. Social Media Account Linking</h2>
            <p className="mb-4">Users may voluntarily connect their social media accounts through official APIs. By doing so, you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Grant permission to access authorized data</li>
              <li>Confirm ownership or legal access to the account</li>
              <li>Acknowledge that permissions can be revoked anytime</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">4. Acceptable Use</h2>
            <p className="mb-2">Users agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Misuse platform data</li>
              <li>Attempt unauthorized access</li>
              <li>Upload false or misleading information</li>
              <li>Violate third-party platform policies</li>
            </ul>
            <p className="mt-4">Violation may result in account suspension or termination.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">5. Intellectual Property</h2>
            <p className="mb-2">All platform content including software, design, logos, and data presentation is the intellectual property of Influrunner Technologies LLP and may not be copied without written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">6. Limitation of Liability</h2>
            <p className="mb-2">Influrunner is not liable for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Inaccurate third-party data</li>
              <li>Social media API downtime</li>
              <li>Business losses or missed opportunities</li>
              <li>Actions taken based on displayed analytics</li>
            </ul>
            <p className="mt-4 font-bold">The platform is provided “as-is”.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">7. Account Termination</h2>
            <p className="mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Suspend or terminate accounts for policy violations</li>
              <li>Remove access without prior notice if misuse is detected</li>
            </ul>
            <p className="mt-4">Users may also request account deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">8. Governing Law</h2>
            <p className="mb-1">These Terms are governed by the laws of India.</p>
            <p className="font-bold">Jurisdiction: Ahmedabad, Gujarat</p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-black mb-4">9. Contact Us</h2>
            <div className="space-y-1 font-medium">
              <p>Email ID: <a href="mailto:business@influrunner.com" className="text-brand-orange">business@influrunner.com</a></p>
              <p>Website: <a href="https://influrunner.com" className="text-brand-orange">https://influrunner.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;