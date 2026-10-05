import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Wifi, Smartphone, Cloud, Server, Shield, Zap, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Solutions Télécom',
  description: 'Solutions complètes de téléphonie IP, Internet professionnel, mobile et standard cloud pour entreprises.',
};

const solutions = [
  {
    id: 'telephonie-ip',
    icon: Phone,
    title: 'Téléphonie IP',
    subtitle: 'La téléphonie nouvelle génération',
    description: 'Remplacez vos lignes analogiques par une solution IP moderne, fiable et économique.',
    features: ['Qualité audio HD', 'Appels illimités France', 'Numéros portés', 'Messagerie vocale', 'Renvoi d\'appels intelligent', 'Conférences téléphoniques'],
    benefits: ['Réduction des coûts jusqu\'à 50%', 'Flexibilité et mobilité', 'Évolutivité selon vos besoins'],
  },
  {
    id: 'internet-pro',
    icon: Wifi,
    title: 'Internet Professionnel',
    subtitle: 'Une connexion adaptée à votre activité',
    description: 'Accès Internet professionnel selon éligibilité, avec garanties et options précisées dans votre offre.',
    features: ['Fibre jusqu\'à 1 Gbps', 'ADSL/VDSL backup', 'IP fixe dédiée', 'GTR selon offre souscrite', 'Supervision selon contrat', 'Débit garanti sur offres éligibles'],
    benefits: ['Connexion stable et performante', 'Continuité de service', 'Support prioritaire'],
  },
  {
    id: 'mobile-pro',
    icon: Smartphone,
    title: 'Mobile Professionnel',
    subtitle: 'Restez connecté partout',
    description: 'Forfaits mobiles adaptés aux professionnels avec data généreuse.',
    features: ['Appels illimités', 'Data 100Go+', 'Roaming Europe inclus', '5G disponible', 'Multi-SIM', 'Gestion de flotte'],
    benefits: ['Maîtrise du budget', 'Couverture optimale', 'Administration centralisée'],
  },
  {
    id: 'standard-cloud',
    icon: Cloud,
    title: 'Standard Cloud',
    subtitle: 'Votre standard sans matériel',
    description: 'Gérez vos appels entrants avec un standard téléphonique hébergé.',
    features: ['Accueil vocal personnalisé', 'Distribution intelligente', 'Musique d\'attente', 'Files d\'attente', 'Statistiques d\'appels', 'Interface web'],
    benefits: ['Aucun investissement matériel', 'Mise à jour automatique', 'Accessible partout'],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-canvas relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-wide relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Solutions complètes</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-wetel-ink mb-6">Nos <span className="text-gradient-orange">solutions télécom</span></h1>
          <p className="text-xl text-wetel-muted">Des solutions professionnelles pour accompagner votre entreprise dans sa transition numérique.</p>
        </div>
      </section>

      {solutions.map((solution, index) => (
        <section key={solution.id} id={solution.id} className={`section-padding ${index % 2 === 0 ? 'bg-wetel-surface' : 'bg-wetel-canvas'}`}>
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wetel-orange/10 rounded-2xl mb-6">
                  <solution.icon className="w-8 h-8 text-wetel-orange" />
                </div>
                <h2 className="text-4xl font-bold text-wetel-ink mb-2">{solution.title}</h2>
                <p className="text-xl text-wetel-orange mb-4">{solution.subtitle}</p>
                <p className="text-wetel-muted text-lg mb-8">{solution.description}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-wetel-orange flex-shrink-0" />
                      <span className="text-wetel-ink-soft">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary">Demander un devis<ArrowRight className="w-5 h-5" /></Link>
              </div>
              <div className={`card p-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-xl font-bold text-wetel-ink mb-6">Avantages clés</h3>
                <div className="space-y-4">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-4 p-4 bg-wetel-surface-soft/50 rounded-xl">
                      <div className="w-10 h-10 bg-wetel-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-wetel-orange" />
                      </div>
                      <p className="text-wetel-ink-soft font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-wetel-surface">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-wetel-ink mb-4">Prêt à moderniser votre télécom ?</h2>
          <p className="text-xl text-wetel-muted max-w-2xl mx-auto mb-8">Contactez-nous pour un audit gratuit de votre installation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Demander un devis<ArrowRight className="w-5 h-5" /></Link>
            <Link href="/offres" className="btn-secondary">Voir nos offres</Link>
          </div>
        </div>
      </section>
    </>
  );
}
