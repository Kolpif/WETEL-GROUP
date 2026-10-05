'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';
import Link from 'next/link';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, can't be changed
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Apply preferences
    if (prefs.analytics) {
      // Enable Google Analytics
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    }

    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    savePreferences(defaultPreferences);
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-500 pointer-events-auto ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setShowDetails(false)}
      />

      {/* Cookie Banner */}
      <div
        className={`relative w-full max-w-3xl bg-wetel-surface rounded-2xl border border-wetel-line shadow-2xl pointer-events-auto transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Close button */}
        <button
          onClick={rejectAll}
          className="absolute top-4 right-4 p-2 text-wetel-muted hover:text-wetel-ink transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-wetel-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-wetel-orange" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-wetel-ink mb-1">Gestion des cookies</h2>
              <p className="text-wetel-muted text-sm">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez personnaliser vos préférences ci-dessous.
              </p>
            </div>
          </div>

          {/* Detailed Settings */}
          {showDetails && (
            <div className="mb-6 space-y-4 animate-fade-in">
              {/* Necessary Cookies */}
              <div className="p-4 bg-wetel-surface-soft/50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-wetel-line-strong rounded flex items-center justify-center">
                      <Check className="w-3 h-3 text-wetel-ink" />
                    </div>
                    <span className="font-semibold text-wetel-ink">Cookies nécessaires</span>
                  </div>
                  <span className="text-xs text-wetel-muted bg-wetel-surface-soft px-2 py-1 rounded">Toujours actifs</span>
                </div>
                <p className="text-sm text-wetel-muted ml-8">
                  Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-wetel-surface-soft/50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 bg-wetel-line rounded flex items-center justify-center peer-checked:bg-wetel-orange transition-colors">
                      {preferences.analytics && <Check className="w-3 h-3 text-wetel-ink" />}
                    </div>
                    <span className="font-semibold text-wetel-ink">Cookies analytiques</span>
                  </label>
                </div>
                <p className="text-sm text-wetel-muted ml-8">
                  Ces cookies nous permettent d&apos;analyser l&apos;utilisation du site pour améliorer nos services (Google Analytics).
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 bg-wetel-surface-soft/50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 bg-wetel-line rounded flex items-center justify-center peer-checked:bg-wetel-orange transition-colors">
                      {preferences.marketing && <Check className="w-3 h-3 text-wetel-ink" />}
                    </div>
                    <span className="font-semibold text-wetel-ink">Cookies marketing</span>
                  </label>
                </div>
                <p className="text-sm text-wetel-muted ml-8">
                  Ces cookies permettent de vous proposer des publicités personnalisées sur d&apos;autres sites.
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {!showDetails ? (
              <>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2 px-4 py-2.5 text-wetel-muted hover:text-wetel-ink transition-colors order-3 sm:order-1"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser
                </button>
                <button
                  onClick={rejectAll}
                  className="w-full sm:w-auto px-6 py-2.5 bg-wetel-surface-soft text-wetel-ink rounded-xl font-medium hover:bg-wetel-line transition-colors order-2"
                >
                  Refuser tout
                </button>
                <button
                  onClick={acceptAll}
                  className="w-full sm:w-auto px-6 py-2.5 bg-wetel-orange text-white rounded-xl font-medium hover:bg-wetel-orange-light transition-colors order-1 sm:order-3"
                >
                  Accepter tout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2.5 text-wetel-muted hover:text-wetel-ink transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={rejectAll}
                  className="w-full sm:w-auto px-6 py-2.5 bg-wetel-surface-soft text-wetel-ink rounded-xl font-medium hover:bg-wetel-line transition-colors"
                >
                  Refuser tout
                </button>
                <button
                  onClick={acceptSelected}
                  className="w-full sm:w-auto px-6 py-2.5 bg-wetel-orange text-white rounded-xl font-medium hover:bg-wetel-orange-light transition-colors"
                >
                  Enregistrer mes choix
                </button>
              </>
            )}
          </div>

          {/* Legal Link */}
          <div className="mt-4 pt-4 border-t border-wetel-line text-center">
            <Link href="/rgpd" className="text-xs text-wetel-muted hover:text-wetel-orange transition-colors">
              En savoir plus sur notre politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
