import MaintenancePricing from '@/components/MaintenancePricing';
import Hero from '@/components/home/Hero';
import EligibilityWidget from '@/components/home/EligibilityWidget';
import Stats from '@/components/home/Stats';
import Comparator from '@/components/home/Comparator';
import PackCalculator from '@/components/home/PackCalculator';
import FAQ from '@/components/home/FAQ';
import RTCTimeline from '@/components/home/RTCTimeline';
import { ArrowRight, Phone, Wifi, Smartphone, Cloud, Shield, HeadphonesIcon } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Phone,
    title: 'Téléphonie IP',
    description: 'Passez à la téléphonie nouvelle génération avec une qualité audio HD et des fonctionnalités avancées.',
    href: '/solutions#telephonie-ip',
  },
  {
    icon: Wifi,
    title: 'Internet Pro',
    description: 'Connexion professionnelle selon votre éligibilité, avec des engagements de service précisés au devis.',
    href: '/solutions#internet-pro',
  },
  {
    icon: Smartphone,
    title: 'Mobile Pro',
    description: 'Forfaits mobiles professionnels avec data généreuse et options adaptées aux déplacements.',
    href: '/solutions#mobile-pro',
  },
  {
    icon: Cloud,
    title: 'Standard Cloud',
    description: 'Gérez vos appels entrants avec un standard téléphonique moderne, sans matériel à installer.',
    href: '/solutions#standard-cloud',
  },
];

const advantages = [
  {
    icon: Shield,
    title: 'Interlocuteur unique',
    description: 'Un expert dédié qui connaît votre dossier et répond à toutes vos questions.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Assistance adaptée',
    description: 'Des prestations et des horaires définis dans votre offre, avec un contact identifié.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="section-padding bg-wetel-surface">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-4">
              Nos <span className="text-gradient-orange">solutions</span>
            </h2>
            <p className="text-xl text-wetel-muted max-w-2xl mx-auto">
              Des solutions télécoms complètes pour accompagner votre entreprise dans sa transition numérique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-glow p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-wetel-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wetel-orange/20 transition-colors">
                  <service.icon className="w-7 h-7 text-wetel-orange" />
                </div>
                <h3 className="text-xl font-bold text-wetel-ink mb-3 group-hover:text-wetel-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-wetel-muted mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-wetel-orange font-medium">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EligibilityWidget />
      <Stats />
      <RTCTimeline />
      <Comparator />
      <PackCalculator />

      {/* Advantages Section */}
      <section className="section-padding bg-wetel-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">
                Pourquoi choisir{' '}
                <span className="text-gradient-orange">WETEL GROUP</span> ?
              </h2>
              <p className="text-xl text-wetel-muted mb-8">
                Nous simplifions la téléphonie professionnelle. Un seul interlocuteur, des solutions claires, un accompagnement de A à Z.
              </p>
              <div className="space-y-6 mb-8">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wetel-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-6 h-6 text-wetel-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-wetel-ink mb-1">{advantage.title}</h3>
                      <p className="text-wetel-muted">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Discutons de votre projet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="card p-8 bg-gradient-to-br from-wetel-surface-soft to-wetel-surface">
                <div className="text-center">
                  <div className="text-4xl font-bold text-wetel-orange mb-3">Un seul interlocuteur</div>
                  <p className="text-xl text-wetel-ink mb-4">pour votre projet télécom</p>
                  <p className="text-wetel-muted">
                    Du choix des équipements à la maintenance, les prestations et les coûts sont définis dans votre devis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MaintenancePricing />
      <FAQ />

      {/* Final CTA Section */}
      <section className="section-padding bg-wetel-canvas relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-wetel-orange/10 to-transparent" />
        </div>
        <div className="container-wide relative text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">
            Prêt à moderniser votre téléphonie ?
          </h2>
          <p className="text-xl text-wetel-muted max-w-2xl mx-auto mb-8">
            Contactez-nous pour un audit gratuit de votre installation actuelle et recevez un devis personnalisé.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:0188812227" className="btn-secondary text-lg">
              <Phone className="w-5 h-5" />
              01 88 81 22 27
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
