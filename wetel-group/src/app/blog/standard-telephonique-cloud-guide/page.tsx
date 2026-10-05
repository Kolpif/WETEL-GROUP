import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Cloud, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Standard Téléphonique Cloud : Le Guide Complet',
  description: 'Tout savoir sur les standards téléphoniques cloud pour moderniser la gestion de vos appels.',
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
            <span className="badge">Guide</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Clock className="w-4 h-4" />9 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Calendar className="w-4 h-4" />23 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">Standard Téléphonique Cloud : Révolutionnez Votre Accueil</h1>
          <p className="text-xl text-wetel-muted">Découvrez comment un standard virtuel améliore l&apos;image de votre entreprise et optimise la gestion de vos appels.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-surface">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Qu&apos;est-ce qu&apos;un standard cloud ?</h2>
            <p className="text-wetel-ink-soft mb-8 text-lg leading-relaxed">
              Un standard téléphonique cloud (ou IPBX hébergé) est une solution de gestion d&apos;appels entièrement virtualisée. Plus besoin de matériel physique coûteux : tout est géré en ligne via une interface web intuitive.
            </p>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Fonctionnalités principales</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card p-6 border-l-4 border-wetel-blue">
                <Users className="w-10 h-10 text-wetel-blue mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Serveur Vocal Interactif (SVI)</h3>
                <p className="text-wetel-muted text-lg">Orientez automatiquement vos appelants vers le bon service avec un menu vocal personnalisé.</p>
              </div>

              <div className="card p-6 border-l-4 border-wetel-green">
                <Cloud className="w-10 h-10 text-wetel-green mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">File d&apos;attente intelligente</h3>
                <p className="text-wetel-muted text-lg">Gérez les pics d&apos;appels avec musique d&apos;attente et annonces personnalisées.</p>
              </div>

              <div className="card p-6 border-l-4 border-wetel-purple">
                <Zap className="w-10 h-10 text-wetel-purple mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Renvoi conditionnel</h3>
                <p className="text-wetel-muted text-lg">Transférez les appels selon l&apos;horaire, la disponibilité ou le type d&apos;appelant.</p>
              </div>

              <div className="card p-6 border-l-4 border-wetel-orange">
                <Phone className="w-10 h-10 text-wetel-orange mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Messagerie vocale par email</h3>
                <p className="text-wetel-muted text-lg">Recevez vos messages vocaux directement dans votre boîte mail en fichier audio.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Avantages vs standard traditionnel</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: 'Sans matériel', desc: 'Pas de PABX physique à acheter ou maintenir' },
                { title: 'Évolutif instantanément', desc: 'Ajoutez des lignes en quelques clics' },
                { title: 'Accessible partout', desc: 'Gérez votre standard depuis n\'importe où' },
                { title: 'Mises à jour automatiques', desc: 'Nouvelles fonctionnalités sans intervention' },
                { title: 'Coûts prévisibles', desc: 'Abonnement mensuel fixe sans surprises' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-wetel-surface-soft/50 rounded-xl">
                  <div className="w-10 h-10 bg-wetel-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wetel-ink font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-wetel-ink font-bold mb-1 text-lg">{item.title}</h4>
                    <p className="text-wetel-muted text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6 border-l-4 border-wetel-green mb-12">
              <p className="text-wetel-ink text-lg leading-relaxed">
                💡 <strong>Bon à savoir :</strong> Un standard cloud coûte en moyenne 3 à 5 fois moins cher qu&apos;un PABX traditionnel, sans les contraintes de maintenance et d&apos;obsolescence matérielle.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-purple/10 to-transparent rounded-2xl border border-wetel-purple/20">
            <h3 className="text-2xl font-bold text-wetel-ink mb-4">Déployez votre standard cloud</h3>
            <p className="text-wetel-muted mb-6 text-lg">WETEL configure votre standard virtuel personnalisé en 48h. Démonstration gratuite.</p>
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
