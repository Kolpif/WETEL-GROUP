'use client';

import { useState } from 'react';
import { Search, MapPin, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

type EligibilityStatus = 'idle' | 'loading' | 'eligible' | 'not-eligible' | 'partial';

export default function EligibilityWidget() {
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<EligibilityStatus>('idle');
  const [result, setResult] = useState<{
    fibre: boolean;
    adsl: boolean;
    speed?: string;
  } | null>(null);

  const checkEligibility = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    setStatus('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock result based on address
    const isFibreEligible = Math.random() > 0.3;
    const mockResult = {
      fibre: isFibreEligible,
      adsl: true,
      speed: isFibreEligible ? '1 Gbps' : '20 Mbps',
    };

    setResult(mockResult);
    setStatus(isFibreEligible ? 'eligible' : mockResult.adsl ? 'partial' : 'not-eligible');
  };

  const reset = () => {
    setAddress('');
    setStatus('idle');
    setResult(null);
  };

  return (
    <section id="eligibilite" className="section-padding bg-wetel-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 network-pattern opacity-30" />
      
      <div className="container-wide relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-wetel-orange" />
              <span className="text-sm font-medium text-wetel-orange">Test d&apos;éligibilité gratuit</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Êtes-vous éligible à la{' '}
              <span className="text-gradient-orange">fibre pro</span> ?
            </h2>
            <p className="text-xl text-wetel-gray-400 max-w-2xl mx-auto">
              Vérifiez en 30 secondes si votre adresse est éligible à la fibre optique professionnelle.
            </p>
          </div>

          {/* Widget Card */}
          <div className="bg-wetel-gray-900 rounded-3xl border border-wetel-gray-800 p-8 lg:p-12 shadow-2xl">
            {status === 'idle' || status === 'loading' ? (
              <form onSubmit={checkEligibility} className="space-y-6">
                {/* Input Field */}
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-wetel-gray-500">
                    <Search className="w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Entrez votre adresse professionnelle..."
                    className="w-full pl-14 pr-6 py-5 bg-wetel-gray-800 border border-wetel-gray-700 rounded-2xl text-lg text-white placeholder:text-wetel-gray-500 focus:border-wetel-orange focus:ring-2 focus:ring-wetel-orange/20 focus:outline-none transition-all"
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Helper Text */}
                <p className="text-sm text-wetel-gray-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Exemple : 25 rue Tronchet, 75008 Paris
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || !address.trim()}
                  className="w-full btn-primary text-lg !py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Vérification en cours...
                    </>
                  ) : (
                    <>
                      Vérifier mon éligibilité
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-8 animate-fade-in">
                {/* Result Header */}
                <div className="flex items-center gap-4">
                  {status === 'eligible' && (
                    <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                  )}
                  {status === 'partial' && (
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 text-yellow-500" />
                    </div>
                  )}
                  {status === 'not-eligible' && (
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {status === 'eligible' && 'Excellente nouvelle !'}
                      {status === 'partial' && 'Bonne nouvelle !'}
                      {status === 'not-eligible' && 'Pas encore éligible'}
                    </h3>
                    <p className="text-wetel-gray-400">
                      {status === 'eligible' && 'Votre adresse est éligible à la fibre optique pro'}
                      {status === 'partial' && 'Votre adresse est éligible à l\'ADSL pro'}
                      {status === 'not-eligible' && 'Nous pouvons vous proposer des alternatives'}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="p-4 bg-wetel-gray-800/50 rounded-xl">
                  <p className="text-sm text-wetel-gray-500 mb-1">Adresse vérifiée</p>
                  <p className="text-white font-medium">{address}</p>
                </div>

                {/* Results */}
                {result && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className={`p-6 rounded-xl border ${result.fibre ? 'bg-green-500/10 border-green-500/30' : 'bg-wetel-gray-800/50 border-wetel-gray-700'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        {result.fibre ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-wetel-gray-500" />
                        )}
                        <span className="font-semibold text-white">Fibre optique</span>
                      </div>
                      <p className={`text-sm ${result.fibre ? 'text-green-400' : 'text-wetel-gray-500'}`}>
                        {result.fibre ? `Éligible - jusqu'à ${result.speed}` : 'Non disponible'}
                      </p>
                    </div>
                    <div className={`p-6 rounded-xl border ${result.adsl ? 'bg-wetel-orange/10 border-wetel-orange/30' : 'bg-wetel-gray-800/50 border-wetel-gray-700'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        {result.adsl ? (
                          <CheckCircle2 className="w-5 h-5 text-wetel-orange" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-wetel-gray-500" />
                        )}
                        <span className="font-semibold text-white">ADSL / VDSL</span>
                      </div>
                      <p className={`text-sm ${result.adsl ? 'text-wetel-orange' : 'text-wetel-gray-500'}`}>
                        {result.adsl ? 'Éligible' : 'Non disponible'}
                      </p>
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="flex-1 btn-primary justify-center">
                    Recevoir une offre personnalisée
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={reset}
                    className="flex-1 btn-secondary justify-center"
                  >
                    Tester une autre adresse
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust Elements */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-wetel-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Résultat instantané</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
