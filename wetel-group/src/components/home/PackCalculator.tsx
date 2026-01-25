'use client';

import { useState } from 'react';
import { Calculator, Phone, Smartphone, Monitor, ArrowRight, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

const packs = {
  starter: { name: 'Starter Pro', price: 59, installation: 200 },
  business: { name: 'Business Pro', price: 99, installation: 250, popular: true },
  enterprise: { name: 'Entreprise Pro', price: 169, installation: 350 },
};

export default function PackCalculator() {
  const [fixedLines, setFixedLines] = useState(1);
  const [mobileLines, setMobileLines] = useState(1);
  const [phones, setPhones] = useState(1);

  const getRecommendedPack = () => {
    if (fixedLines > 2 || mobileLines > 2 || phones > 2) return 'enterprise';
    if (fixedLines > 1 || mobileLines > 1 || phones > 1) return 'business';
    return 'starter';
  };

  const recommendedPack = getRecommendedPack();
  const pack = packs[recommendedPack as keyof typeof packs];

  return (
    <section className="section-padding bg-wetel-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-20" />
      <div className="container-wide relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Calculateur de pack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trouvez le pack <span className="text-gradient-orange">idéal pour vous</span>
          </h2>
          <p className="text-xl text-wetel-gray-400 max-w-2xl mx-auto">
            Répondez à quelques questions et nous vous recommandons le pack le plus adapté.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="card p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-8">Vos besoins</h3>
            <div className="space-y-8">
              <div>
                <label className="flex items-center gap-3 text-white font-medium mb-4">
                  <div className="w-10 h-10 bg-wetel-orange/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-wetel-orange" />
                  </div>
                  Combien de lignes fixes ?
                </label>
                <div className="flex items-center gap-4">
                  <input type="range" min="1" max="10" value={fixedLines} onChange={(e) => setFixedLines(Number(e.target.value))} className="flex-1 h-2 bg-wetel-gray-700 rounded-full appearance-none cursor-pointer accent-wetel-orange" />
                  <span className="w-12 h-12 bg-wetel-gray-800 rounded-xl flex items-center justify-center text-xl font-bold text-wetel-orange">{fixedLines}</span>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-3 text-white font-medium mb-4">
                  <div className="w-10 h-10 bg-wetel-orange/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-wetel-orange" />
                  </div>
                  Combien de lignes mobiles ?
                </label>
                <div className="flex items-center gap-4">
                  <input type="range" min="0" max="10" value={mobileLines} onChange={(e) => setMobileLines(Number(e.target.value))} className="flex-1 h-2 bg-wetel-gray-700 rounded-full appearance-none cursor-pointer accent-wetel-orange" />
                  <span className="w-12 h-12 bg-wetel-gray-800 rounded-xl flex items-center justify-center text-xl font-bold text-wetel-orange">{mobileLines}</span>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-3 text-white font-medium mb-4">
                  <div className="w-10 h-10 bg-wetel-orange/10 rounded-xl flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-wetel-orange" />
                  </div>
                  Combien de postes téléphoniques IP ?
                </label>
                <div className="flex items-center gap-4">
                  <input type="range" min="1" max="10" value={phones} onChange={(e) => setPhones(Number(e.target.value))} className="flex-1 h-2 bg-wetel-gray-700 rounded-full appearance-none cursor-pointer accent-wetel-orange" />
                  <span className="w-12 h-12 bg-wetel-gray-800 rounded-xl flex items-center justify-center text-xl font-bold text-wetel-orange">{phones}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-wetel-orange/30 to-transparent rounded-3xl blur-xl opacity-50" />
            <div className="card p-8 lg:p-10 relative border-wetel-orange/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-2 bg-wetel-orange rounded-full">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">Pack recommandé</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-3xl font-bold text-white mb-2">{pack.name}</h3>
                <p className="text-wetel-gray-400 mb-6">
                  Le pack idéal pour vos {fixedLines} ligne{fixedLines > 1 ? 's' : ''} fixe{fixedLines > 1 ? 's' : ''}, {mobileLines} mobile{mobileLines > 1 ? 's' : ''} et {phones} poste{phones > 1 ? 's' : ''} IP.
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-sm text-wetel-gray-500">À partir de</span>
                  <span className="text-5xl font-bold text-white">{pack.price}€</span>
                  <span className="text-wetel-gray-400">HT / mois</span>
                </div>
                <div className="space-y-3 mb-8">
                  {['Internet haut débit inclus', 'Portabilité de vos numéros', 'Installation & configuration', 'Support technique dédié'].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-wetel-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-wetel-gray-800/50 rounded-xl mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-wetel-gray-400">Installation</span>
                    <span className="font-semibold text-white">À partir de {pack.installation}€ HT</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary w-full justify-center text-lg">
                  Demander un devis personnalisé
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-center text-sm text-wetel-gray-500 mt-4">Sans engagement · Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
