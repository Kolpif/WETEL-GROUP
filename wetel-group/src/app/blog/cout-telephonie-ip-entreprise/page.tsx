import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Euro } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coût Réel de la Téléphonie IP en Entreprise',
  description: 'Analyse complète des coûts : abonnement, installation, matériel. Économies vs RTC.',
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
            <span className="badge">Analyse</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Clock className="w-4 h-4" />7 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Calendar className="w-4 h-4" />24 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">Coût Réel de la Téléphonie IP</h1>
          <p className="text-xl text-wetel-muted">Décryptage complet des tarifs : abonnements, installation, matériel et ROI.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-surface">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Structure des coûts</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card p-6 text-center border-wetel-blue border-2">
                <Euro className="w-12 h-12 text-wetel-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-wetel-ink mb-2">Abonnement</h3>
                <p className="text-4xl font-bold text-wetel-blue mb-2">20-35€</p>
                <p className="text-wetel-muted text-lg">par ligne / mois</p>
              </div>

              <div className="card p-6 text-center border-wetel-green border-2">
                <Phone className="w-12 h-12 text-wetel-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-wetel-ink mb-2">Installation</h3>
                <p className="text-4xl font-bold text-wetel-green mb-2">200-500€</p>
                <p className="text-wetel-muted text-lg">forfait unique</p>
              </div>

              <div className="card p-6 text-center border-wetel-purple border-2">
                <Phone className="w-12 h-12 text-wetel-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-wetel-ink mb-2">Téléphones IP</h3>
                <p className="text-4xl font-bold text-wetel-purple mb-2">60-150€</p>
                <p className="text-wetel-muted text-lg">par poste</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Exemple concret : TPE 5 personnes</h2>
            <div className="card p-8 mb-12">
              <h3 className="text-xl font-bold text-wetel-ink mb-6">Configuration : Pack Business Pro</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center p-4 bg-wetel-surface-soft/50 rounded-lg">
                  <span className="text-wetel-ink-soft">2 lignes fixes IP</span>
                  <span className="text-wetel-ink font-semibold">40€/mois</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-wetel-surface-soft/50 rounded-lg">
                  <span className="text-wetel-ink-soft">2 lignes mobiles pro</span>
                  <span className="text-wetel-ink font-semibold">30€/mois</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-wetel-surface-soft/50 rounded-lg">
                  <span className="text-wetel-ink-soft">Standard cloud inclus</span>
                  <span className="text-wetel-green font-semibold">Offert</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-wetel-surface-soft/50 rounded-lg">
                  <span className="text-wetel-ink-soft">Internet fibre pro</span>
                  <span className="text-wetel-ink font-semibold">29€/mois</span>
                </div>
                <div className="border-t-2 border-wetel-orange pt-4 mt-4">
                  <div className="flex justify-between items-center p-4 bg-wetel-orange/10 rounded-lg">
                    <span className="text-wetel-ink font-bold text-xl">Total mensuel HT</span>
                    <span className="text-wetel-orange font-bold text-2xl">99€</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-wetel-surface-soft/50 rounded-lg">
                  <span className="text-wetel-ink-soft">Installation unique</span>
                  <span className="text-wetel-ink font-semibold">250€</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Économies sur 3 ans vs RTC</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-wetel-surface-soft">
                    <th className="p-5 text-left text-wetel-ink font-bold text-lg"></th>
                    <th className="p-5 text-center text-wetel-ink font-bold text-lg">RTC Classique</th>
                    <th className="p-5 text-center text-wetel-green font-bold text-lg">Téléphonie IP</th>
                    <th className="p-5 text-center text-wetel-orange font-bold text-lg">Économie</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-t border-wetel-line">
                    <td className="p-5 text-wetel-ink font-semibold">Coût mensuel</td>
                    <td className="p-5 text-center text-wetel-ink-soft">180€</td>
                    <td className="p-5 text-center text-wetel-green">99€</td>
                    <td className="p-5 text-center text-wetel-orange font-bold">-45%</td>
                  </tr>
                  <tr className="border-t border-wetel-line bg-wetel-surface-soft/30">
                    <td className="p-5 text-wetel-ink font-semibold">Coût sur 36 mois</td>
                    <td className="p-5 text-center text-wetel-ink-soft">6 480€</td>
                    <td className="p-5 text-center text-wetel-green">3 564€</td>
                    <td className="p-5 text-center text-wetel-orange font-bold text-xl">-2 916€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card p-6 border-l-4 border-wetel-green mb-12">
              <p className="text-wetel-ink text-lg leading-relaxed">
                💰 <strong>Économie moyenne :</strong> Une entreprise économise entre 40% et 50% sur ses coûts télécoms en passant à l&apos;IP, soit près de 3000€ sur 3 ans pour une TPE de 5 personnes.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-green/10 to-transparent rounded-2xl border border-wetel-green/20">
            <h3 className="text-2xl font-bold text-wetel-ink mb-4">Calculez vos économies</h3>
            <p className="text-wetel-muted mb-6 text-lg">Obtenez un devis personnalisé et découvrez combien vous pouvez économiser.</p>
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
