'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowSettings(true);
  };

  const handleSavePreferences = (preferences) => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  if (showSettings) {
    return <CookieSettings onSave={handleSavePreferences} onCancel={() => setShowSettings(false)} />;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container">
        <div className="bg-white dark:bg-[#0f1419] rounded-2xl shadow-xl border border-third/10 dark:border-white/5 p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-first/10 dark:bg-first/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-first" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-second dark:text-white mb-2">
                Privacy & Cookie Preferences
              </h3>
              <p className="text-third dark:text-gray-400 text-sm leading-relaxed mb-4">
                We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements.
                By continuing to browse this site, you consent to our use of cookies as described in our{' '}
                <Link href="/privacy" className="text-first font-semibold hover:underline">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link href="/terms" className="text-first font-semibold hover:underline">
                  Cookie Policy
                </Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 bg-first hover:bg-first/90 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleReject}
                  className="px-6 py-3 bg-third/10 hover:bg-third/20 dark:bg-white/5 dark:hover:bg-white/10 text-third dark:text-gray-400 font-semibold rounded-lg transition-all duration-300 text-sm"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={handleCustomize}
                  className="px-6 py-3 border-2 border-third/20 hover:border-first dark:border-white/10 dark:hover:border-first text-third dark:text-gray-400 hover:text-first dark:hover:text-first font-semibold rounded-lg transition-all duration-300 text-sm"
                >
                  Customize Preferences
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-third/5 hover:bg-third/10 dark:bg-white/5 dark:hover:bg-white/10 flex items-center justify-center transition-colors duration-300 group"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-third dark:text-gray-400 group-hover:text-second dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CookieSettings = ({ onSave, onCancel }) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  const togglePreference = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#0f1419] rounded-2xl shadow-2xl border border-third/10 dark:border-white/5 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#0f1419] border-b border-third/10 dark:border-white/5 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-second dark:text-white">
              Cookie Preferences
            </h2>
            <button
              onClick={onCancel}
              className="w-10 h-10 rounded-full bg-third/5 hover:bg-third/10 dark:bg-white/5 dark:hover:bg-white/10 flex items-center justify-center transition-colors duration-300 group"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-third dark:text-gray-400 group-hover:text-second dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Necessary Cookies */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="w-5 h-5 rounded border-third/30 dark:border-white/20 cursor-not-allowed"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-second dark:text-white mb-1">
                Strictly Necessary Cookies
              </h4>
              <p className="text-third dark:text-gray-400 text-sm">
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies.
              </p>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => togglePreference('analytics')}
                className="w-5 h-5 rounded border-third/30 dark:border-white/20 text-first focus:ring-first focus:ring-2 cursor-pointer"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-second dark:text-white mb-1">
                Analytics Cookies
              </h4>
              <p className="text-third dark:text-gray-400 text-sm">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website's performance and user experience.
              </p>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => togglePreference('marketing')}
                className="w-5 h-5 rounded border-third/30 dark:border-white/20 text-first focus:ring-first focus:ring-2 cursor-pointer"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-second dark:text-white mb-1">
                Marketing & Advertising Cookies
              </h4>
              <p className="text-third dark:text-gray-400 text-sm">
                These cookies are used to deliver relevant advertisements and measure campaign effectiveness. They track visitors across websites and may be used to build a profile of your interests.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="pt-4 border-t border-third/10 dark:border-white/5">
            <p className="text-sm text-third dark:text-gray-400 mb-2">
              For more information, please read our{' '}
              <Link href="/privacy" className="text-first font-semibold hover:underline">
                Privacy Policy
              </Link>
              {' '}and{' '}
              <Link href="/terms" className="text-first font-semibold hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white dark:bg-[#0f1419] border-t border-third/10 dark:border-white/5 p-6 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={onCancel}
              className="px-6 py-3 bg-third/10 hover:bg-third/20 dark:bg-white/5 dark:hover:bg-white/10 text-third dark:text-gray-400 font-semibold rounded-lg transition-all duration-300 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-first hover:bg-first/90 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
