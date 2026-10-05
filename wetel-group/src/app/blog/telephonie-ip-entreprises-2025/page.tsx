import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Wifi, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Téléphonie IP pour Entreprises : Guide Complet 2025',
  description: 'Découvrez tous les avantages de la téléphonie IP pour votre entreprise en 2025. Fonctionnalités, coûts, et mise en place.',
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
            <span className="badge">Guide Technique</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Clock className="w-4 h-4" />10 min de lecture</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Calendar className="w-4 h-4" />20 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">Téléphonie IP pour Entreprises : Guide Complet 2025</h1>
          <p className="text-xl text-wetel-muted">Tout comprendre sur la VoIP : fonctionnement, avantages, coûts et comment migrer facilement.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-surface">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Qu&apos;est-ce que la téléphonie IP ?</h2>
            <p className="text-wetel-ink-soft mb-6 text-lg leading-relaxed">
              La téléphonie IP (ou VoIP - Voice over Internet Protocol) est une technologie qui permet de passer des appels téléphoniques via Internet plutôt que par les lignes téléphoniques traditionnelles. Au lieu d&apos;utiliser le réseau cuivre classique, vos communications passent par votre connexion Internet.
            </p>
            <p className="text-wetel-ink-soft mb-8 text-lg leading-relaxed">
              Cette technologie transforme votre voix en données numériques qui transitent sur le réseau Internet, offrant une qualité d&apos;appel HD et de nombreuses fonctionnalités avancées impossibles avec les lignes analogiques.
            </p>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Les avantages majeurs pour votre entreprise</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card p-6 border-l-4 border-wetel-blue">
                <Wifi className="w-10 h-10 text-wetel-blue mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Économies substantielles</h3>
                <p className="text-wetel-muted text-lg">Jusqu&apos;à 50% d&apos;économies sur vos coûts de téléphonie, notamment sur les communications internationales.</p>
              </div>

              <div className="card p-6 border-l-4 border-wetel-green">
                <Phone className="w-10 h-10 text-wetel-green mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Mobilité totale</h3>
                <p className="text-wetel-muted text-lg">Vos collaborateurs peuvent appeler depuis n&apos;importe où avec leur numéro professionnel.</p>
              </div>

              <div className="card p-6 border-l-4 border-wetel-purple">
                <Shield className="w-10 h-10 text-wetel-purple mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Fonctionnalités avancées</h3>
                <p className="text-wetel-muted text-lg">Standard virtuel, transfert d&apos;appels, messagerie vocale par email, conférences...</p>
              </div>

              <div className="card p-6 border-l-4 border-wetel-orange">
                <ArrowRight className="w-10 h-10 text-wetel-orange mb-4" />
                <h3 className="text-xl font-bold text-wetel-ink mb-3">Installation rapide</h3>
                <p className="text-wetel-muted text-lg">Déploiement en quelques jours sans travaux d&apos;infrastructure lourds.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Fonctionnalités essentielles</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: 'Standard téléphonique virtuel', desc: 'Gérez vos appels avec un SVI personnalisé' },
                { title: 'Mobilité des postes', desc: 'Utilisez votre ligne depuis n\'importe quel appareil' },
                { title: 'Conférences téléphoniques', desc: 'Organisez des réunions avec plusieurs participants' },
                { title: 'Enregistrement d\'appels', desc: 'Archivez vos conversations importantes' },
                { title: 'Statistiques détaillées', desc: 'Analysez vos communications en temps réel' },
                { title: 'Intégration CRM', desc: 'Connectez votre téléphonie à vos outils métier' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-wetel-surface-soft/50 rounded-xl hover:bg-wetel-surface-soft transition-colors">
                  <div className="w-10 h-10 bg-wetel-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wetel-ink font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-wetel-ink font-bold mb-1 text-lg">{feature.title}</h4>
                    <p className="text-wetel-muted text-lg">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Comparaison de coûts</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-wetel-surface-soft">
                    <th className="p-4 text-left text-wetel-ink font-bold text-lg">Type de ligne</th>
                    <th className="p-4 text-left text-wetel-ink font-bold text-lg">Coût mensuel</th>
                    <th className="p-4 text-left text-wetel-ink font-bold text-lg">Fonctionnalités</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-t border-wetel-line">
                    <td className="p-4 text-wetel-ink-soft">Ligne RTC classique</td>
                    <td className="p-4 text-wetel-ink-soft">45-60€ HT</td>
                    <td className="p-4 text-wetel-ink-soft">Basiques uniquement</td>
                  </tr>
                  <tr className="border-t border-wetel-line bg-wetel-orange/10">
                    <td className="p-4 text-wetel-ink font-semibold">Ligne IP professionnelle</td>
                    <td className="p-4 text-wetel-green font-bold">20-35€ HT</td>
                    <td className="p-4 text-wetel-ink">Complètes + mobilité</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-blue/10 to-transparent rounded-2xl border border-wetel-blue/20">
            <h3 className="text-2xl font-bold text-wetel-ink mb-4">Passez à la téléphonie IP avec WETEL</h3>
            <p className="text-wetel-muted mb-6 text-lg">Nos experts vous accompagnent dans votre migration. Audit gratuit et devis sous 24h.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Demander un devis<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0188812227" className="btn-secondary"><Phone className="w-5 h-5" />01 88 81 22 27</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
