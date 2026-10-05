import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Cloud, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Standard téléphonique cloud : 5 avantages pour votre entreprise',
  description: 'Pourquoi le standard cloud remplace les PABX traditionnels et comment il peut transformer votre communication.',
};

export default function ArticlePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-canvas relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-narrow relative">
          <Link href="/blog" className="inline-flex items-center gap-2 text-wetel-muted hover:text-wetel-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Retour au blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="badge">Solutions</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Clock className="w-4 h-4" />5 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Calendar className="w-4 h-4" />5 janvier 2024</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">Standard téléphonique cloud : 5 avantages pour votre entreprise</h1>
          <p className="text-xl text-wetel-muted">Pourquoi le standard cloud remplace les PABX traditionnels et comment il peut transformer votre communication.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-surface">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Qu&apos;est-ce qu&apos;un standard cloud ?</h2>
            <p className="text-wetel-ink-soft mb-6 leading-relaxed">
              Un standard téléphonique cloud (ou IPBX hébergé) est une solution de téléphonie d&apos;entreprise entièrement dématérialisée. Contrairement aux PABX traditionnels qui nécessitent du matériel sur site, le standard cloud fonctionne via Internet et est hébergé dans des datacenters sécurisés.
            </p>

            <div className="flex items-center justify-center gap-8 p-6 bg-wetel-surface-soft/50 rounded-xl mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <X className="w-8 h-8 text-red-700" />
                </div>
                <p className="text-wetel-muted">PABX Traditionnel</p>
                <p className="text-sm text-wetel-muted">Matériel sur site</p>
              </div>
              <ArrowRight className="w-8 h-8 text-wetel-orange" />
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Cloud className="w-8 h-8 text-green-700" />
                </div>
                <p className="text-wetel-muted">Standard Cloud</p>
                <p className="text-sm text-wetel-muted">100% dématérialisé</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Les 5 avantages du standard cloud</h2>

            {[
              { num: 1, title: 'Aucun investissement matériel', desc: 'Pas d\'achat de serveur ni de maintenance. Vous payez un abonnement mensuel prévisible qui inclut les mises à jour et le support.' },
              { num: 2, title: 'Flexibilité totale', desc: 'Ajoutez ou supprimez des lignes en quelques clics. Idéal pour les entreprises en croissance ou avec des besoins saisonniers.' },
              { num: 3, title: 'Mobilité', desc: 'Vos collaborateurs peuvent utiliser leur ligne professionnelle depuis n\'importe où : bureau, domicile, déplacement.' },
              { num: 4, title: 'Fonctionnalités avancées', desc: 'Accueil vocal, distribution automatique, files d\'attente, statistiques, intégration CRM... sans surcoût.' },
              { num: 5, title: 'Continuité de service', desc: 'Hébergement redondant dans plusieurs datacenters. Votre standard fonctionne même si vos locaux sont inaccessibles.' },
            ].map((item) => (
              <div key={item.num} className="mb-8 p-6 bg-wetel-surface-soft/50 rounded-xl border-l-4 border-wetel-orange">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wetel-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wetel-ink font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wetel-ink mb-2">{item.title}</h3>
                    <p className="text-wetel-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Fonctionnalités incluses</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Accueil vocal personnalisé',
                'Distribution intelligente des appels',
                'Files d\'attente',
                'Musique d\'attente',
                'Messagerie vocale par email',
                'Renvoi d\'appels',
                'Conférences téléphoniques',
                'Statistiques en temps réel',
                'Interface web de gestion',
                'Application mobile',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-3 bg-wetel-surface-soft/30 rounded-lg">
                  <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                  <span className="text-wetel-ink-soft">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-orange/10 to-transparent rounded-2xl border border-wetel-orange/20">
            <h3 className="text-2xl font-bold text-wetel-ink mb-4">Passez au standard cloud</h3>
            <p className="text-wetel-muted mb-6">WETEL GROUP vous accompagne dans la mise en place de votre standard téléphonique cloud.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Demander une démo<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0188812227" className="btn-secondary"><Phone className="w-5 h-5" />01 88 81 22 27</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
