import Link from 'next/link';
import { ArrowRight, Phone, Shield, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-wetel-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-wetel-orange/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wetel-orange/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-wide relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-wetel-orange rounded-full animate-pulse" />
            <span className="text-sm font-medium text-wetel-orange">Prêt à franchir le pas ?</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-wetel-ink mb-6 leading-tight">
            Transformez votre{' '}
            <span className="text-gradient-orange">télécom</span>
            <br />
            dès aujourd&apos;hui
          </h2>

          {/* Description */}
          <p className="text-xl text-wetel-muted mb-10 max-w-2xl mx-auto">
            Rejoignez les centaines d&apos;entreprises qui ont déjà fait confiance à WETEL GROUP pour leur transition vers la téléphonie moderne.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary text-lg !py-4 !px-8 group">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:0188812227"
              className="btn-secondary text-lg !py-4 !px-8"
            >
              <Phone className="w-5 h-5" />
              01 88 81 22 27
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-wetel-muted">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-wetel-orange" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-wetel-orange" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-wetel-orange" />
              <span>Devis gratuit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
