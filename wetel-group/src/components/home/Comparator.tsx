'use client';

import { ArrowRight, Check, X, TrendingDown, TrendingUp } from 'lucide-react';

const comparisonData = {
  before: {
    title: 'Avant WETEL',
    items: [
      { label: 'Coût mensuel moyen', value: '180€', negative: true },
      { label: 'Nombre d\'interlocuteurs', value: '3-4', negative: true },
      { label: 'Technologie', value: 'RTC / Analogique', negative: true },
      { label: 'Qualité audio', value: 'Variable', negative: true },
      { label: 'Fonctionnalités', value: 'Basiques', negative: true },
      { label: 'Support technique', value: 'Hotline payante', negative: true },
    ],
  },
  after: {
    title: 'Avec WETEL',
    items: [
      { label: 'Coût mensuel moyen', value: '99€', positive: true },
      { label: 'Nombre d\'interlocuteurs', value: '1 expert dédié', positive: true },
      { label: 'Technologie', value: 'IP / Fibre', positive: true },
      { label: 'Qualité audio', value: 'HD garantie', positive: true },
      { label: 'Fonctionnalités', value: 'Avancées incluses', positive: true },
      { label: 'Support technique', value: 'Inclus 24/7', positive: true },
    ],
  },
};

export default function Comparator() {
  return (
    <section className="section-padding bg-wetel-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Comparateur</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Votre situation{' '}
            <span className="text-gradient-orange">avant vs après</span>
          </h2>
          <p className="text-xl text-wetel-gray-400 max-w-2xl mx-auto">
            Découvrez les économies et les gains de qualité que vous pouvez réaliser avec WETEL GROUP.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="card p-8 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{comparisonData.before.title}</h3>
            </div>
            <div className="space-y-4">
              {comparisonData.before.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-wetel-gray-800 last:border-0">
                  <span className="text-wetel-gray-400">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-red-400">{item.value}</span>
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative">
              <div className="w-24 h-24 bg-wetel-orange rounded-full flex items-center justify-center shadow-glow-md">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wetel-orange">-45%</div>
                  <div className="text-sm text-wetel-gray-400">d&apos;économies</div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-center">
              <p className="text-wetel-gray-500 text-sm">Économisez en moyenne</p>
              <p className="text-2xl font-bold text-white">
                970€ <span className="text-wetel-gray-500 text-lg font-normal">/ an</span>
              </p>
            </div>
          </div>

          <div className="card p-8 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent relative">
            <div className="absolute -top-3 right-8">
              <span className="badge-popular">Recommandé</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{comparisonData.after.title}</h3>
            </div>
            <div className="space-y-4">
              {comparisonData.after.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-wetel-gray-800 last:border-0">
                  <span className="text-wetel-gray-400">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-green-400">{item.value}</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/contact" className="btn-primary">
            Calculer mes économies personnalisées
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
