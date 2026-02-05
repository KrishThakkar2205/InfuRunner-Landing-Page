import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">Privacy Policy</h1>
        <p className="text-gray-500 font-medium mb-12">Last Updated: 04 Feb 2026</p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            Influrunner Technologies LLP (“Influrunner”, “we”, “our”, “us”) is committed to protecting the privacy of users (“you”, “your”) who access or use our platform. This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website and services.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following categories of information:</p>
            <div className="pl-6 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">a) Personal Information</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact details</li>
                  <li>Account login credentials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">b) Social Media Account Data (Via APIs)</h3>
                <p className="mt-2">When users connect their social media accounts (such as Instagram, Facebook, or YouTube), we may access:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Public profile information</li>
                  <li>Follower count and reach metrics</li>
                  <li>Engagement metrics (likes, comments, views)</li>
                  <li>Recent posts or content (e.g., last 10 posts/reels)</li>
                </ul>
                <p className="mt-2 italic text-sm">We only access data that users explicitly authorize via official APIs.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">2. Purpose of Data Collection</h2>
            <p className="mb-2">We collect and use data strictly for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To display influencer analytics and reach insights</li>
              <li>To help brands evaluate influencer performance</li>
              <li>To improve platform features and user experience</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
            <p className="mt-4 font-bold text-brand-black">We do NOT sell, rent, or misuse user data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">3. Use of Meta & Third-Party APIs</h2>
            <p className="mb-2">Influrunner integrates official APIs provided by:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Meta Platforms, Inc. (Instagram & Facebook)</li>
              <li>Google (YouTube)</li>
            </ul>
            <p>Data obtained via these APIs is:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Used only within the Influrunner platform</li>
              <li>Displayed only to authorized users</li>
              <li>Never stored beyond permitted scope</li>
              <li>Never used for advertising or resale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">4. Data Storage & Security</h2>
            <p className="mb-4">We implement industry-standard security practices including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Secure servers and encrypted connections</li>
              <li>Access controls and limited internal access</li>
              <li>Regular security monitoring</li>
            </ul>
            <p className="mt-4">Despite best efforts, no system is 100% secure. Users share data at their own discretion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">5. Data Sharing</h2>
            <p className="mb-2">We may share data only:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>With user consent</li>
              <li>To comply with legal obligations</li>
              <li>With service providers under strict confidentiality</li>
            </ul>
            <p className="mt-4">We do not share personal or social data with unauthorized third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">6. User Rights</h2>
            <p className="mb-2">Users have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access their data</li>
              <li>Revoke social media permissions at any time</li>
              <li>Request deletion of their account and data</li>
            </ul>
            <p className="mt-4">Requests can be sent to: <span className="font-bold text-brand-orange">business@influrunner.com</span></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">7. Data Retention</h2>
            <p className="mb-2">We retain user data only as long as necessary to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide services</li>
              <li>Fulfill legal obligations</li>
              <li>Resolve disputes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Continued use of the platform implies acceptance of updated terms.</p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-black mb-4">9. Contact Information</h2>
            <div className="space-y-1 font-medium">
              <p className="text-gray-900">Influrunner Technologies LLP</p>
              <p>Email: <a href="mailto:business@influrunner.com" className="text-brand-orange">business@influrunner.com</a></p>
              <p>Website: <a href="https://influrunner.com" className="text-brand-orange">https://influrunner.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;