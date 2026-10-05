'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Star, Phone, Smartphone, Wifi, Headphones, ArrowRight } from 'lucide-react';

const packs = [
  {
    id: 'starter',
    name: 'Starter Pro',
    description: 'Idéal pour les indépendants et micro-entreprises',
    price: '59',
    installation: '200',
    popular: false,
    features: [
      { text: '1 ligne fixe professionnelle', included: true },
      { text: '1 poste téléphonique IP', included: true },
      { text: '1 ligne mobile professionnelle', included: true },
      { text: 'Internet haut débit (fibre ou ADSL)', included: true },
      { text: 'Portabilité de vos numéros', included: true },
      { text: 'Installation & configuration', included: true },
      { text: 'Support technique', included: true },
      { text: 'Standard téléphonique cloud', included: false },
      { text: 'Support prioritaire', included: false },
    ],
  },
  {
    id: 'business',
    name: 'Business Pro',
    description: 'Notre pack le plus populaire pour les TPE/PME',
    price: '99',
    installation: '250',
    popular: true,
    features: [
      { text: '2 lignes fixes professionnelles', included: true },
      { text: '2 postes téléphoniques IP', included: true },
      { text: '2 lignes mobiles professionnelles', included: true },
      { text: 'Internet haut débit (fibre ou ADSL)', included: true },
      { text: 'Standard téléphonique cloud', included: true },
      { text: 'Portabilité de vos numéros', included: true },
      { text: 'Installation & configuration', included: true },
      { text: 'Support technique', included: true },
      { text: 'Support prioritaire', included: false },
    ],
  },
  {
    id: 'entreprise',
    name: 'Entreprise Pro',
    description: 'Pour les équipes en croissance',
    price: '169',
    installation: '350',
    popular: false,
    features: [
      { text: '5 lignes fixes professionnelles', included: true },
      { text: '5 postes téléphoniques IP', included: true },
      { text: '3 lignes mobiles professionnelles', included: true },
      { text: 'Internet haut débit (fibre ou ADSL)', included: true },
      { text: 'Standard avancé', included: true },
      { text: 'Supervision & qualité de service', included: true },
      { text: 'Portabilité de vos numéros', included: true },
      { text: 'Installation & configuration', included: true },
      { text: 'Support prioritaire', included: true },
    ],
  },
];

export default function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="tarifs" className="section-padding bg-wetel-canvas relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 network-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-wetel-orange/5 rounded-full blur-[200px]" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Nos offres</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-4">
            Des tarifs{' '}
            <span className="text-gradient-orange">transparents</span>
          </h2>
          <p className="text-xl text-wetel-muted max-w-2xl mx-auto">
            Choisissez le pack adapté à votre entreprise. Tous nos tarifs sont sans engagement.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packs.map((pack) => (
            <div
              key={pack.id}
              id={pack.id}
              className={`relative transition-all duration-500 ${
                hoveredCard && hoveredCard !== pack.id ? 'opacity-60 scale-[0.98]' : ''
              }`}
              onMouseEnter={() => setHoveredCard(pack.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="badge-popular">
                    <Star className="w-4 h-4" />
                    Le plus populaire
                  </span>
                </div>
              )}

              {/* Glow Effect for Popular */}
              {pack.popular && (
                <div className="absolute -inset-1 bg-gradient-to-br from-wetel-orange/30 to-wetel-orange/10 rounded-3xl blur-xl" />
              )}

              {/* Card */}
              <div
                className={`relative card h-full p-8 ${
                  pack.popular
                    ? 'border-wetel-orange/50 bg-gradient-to-br from-wetel-orange/10 to-transparent'
                    : ''
                }`}
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-wetel-ink mb-2">{pack.name}</h3>
                  <p className="text-wetel-muted text-sm">{pack.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-wetel-muted">À partir de</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-wetel-ink">{pack.price}€</span>
                    <span className="text-wetel-muted">HT/mois</span>
                  </div>
                  <p className="text-sm text-wetel-muted mt-2">
                    Installation : à partir de {pack.installation}€ HT
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pack.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 ${
                        feature.included ? 'text-wetel-ink-soft' : 'text-wetel-muted'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.included
                            ? 'bg-green-500/20 text-green-700'
                            : 'bg-wetel-surface-soft text-wetel-muted'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className={`w-full justify-center ${
                      pack.popular ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    Demander un devis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:0188812227"
                    className="btn-ghost w-full justify-center text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Être rappelé
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Mentions */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-6 bg-wetel-surface/50 rounded-xl border border-wetel-line">
            <p className="text-xs text-wetel-muted text-center leading-relaxed">
              Tous les tarifs sont indiqués à titre indicatif. Les offres sont soumises à étude technique,
              éligibilité réseau et validation du dossier. Internet fourni en fibre ou ADSL selon éligibilité.
              Les prix peuvent varier selon la zone géographique, le matériel nécessaire et la complexité de l&apos;installation.
            </p>
          </div>
        </div>

        {/* Features Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 bg-wetel-surface-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-wetel-orange" />
            </div>
            <h4 className="text-wetel-ink font-semibold mb-1">Téléphonie IP</h4>
            <p className="text-sm text-wetel-muted">Qualité HD garantie</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-wetel-surface-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-7 h-7 text-wetel-orange" />
            </div>
            <h4 className="text-wetel-ink font-semibold mb-1">Mobile Pro</h4>
            <p className="text-sm text-wetel-muted">Forfaits illimités</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-wetel-surface-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-7 h-7 text-wetel-orange" />
            </div>
            <h4 className="text-wetel-ink font-semibold mb-1">Internet Pro</h4>
            <p className="text-sm text-wetel-muted">Fibre ou ADSL</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-wetel-surface-soft rounded-xl flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-7 h-7 text-wetel-orange" />
            </div>
            <h4 className="text-wetel-ink font-semibold mb-1">Support</h4>
            <p className="text-sm text-wetel-muted">Assistance dédiée</p>
          </div>
        </div>
      </div>
    </section>
  );
}
