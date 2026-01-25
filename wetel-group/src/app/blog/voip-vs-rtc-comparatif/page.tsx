import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'VoIP vs RTC : Comparatif Complet 2025',
  description: 'Comparaison détaillée entre téléphonie IP et RTC. Quel est le meilleur choix pour votre entreprise ?',
};

export default function ArticlePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-narrow relative">
          <Link href="/blog" className="inline-flex items-center gap-2 text-wetel-gray-400 hover:text-wetel-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Retour au blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="badge">Comparatif</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Clock className="w-4 h-4" />7 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Calendar className="w-4 h-4" />22 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">VoIP vs RTC : Le Comparatif Définitif</h1>
          <p className="text-xl text-wetel-gray-400">Découvrez les différences majeures entre ces deux technologies et pourquoi la VoIP s&apos;impose comme la solution d&apos;avenir.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-gray-900">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Technologies : Analogique vs Numérique</h2>
            <p className="text-wetel-gray-300 mb-8 text-lg leading-relaxed">
              Le RTC (Réseau Téléphonique Commuté) utilise une technologie analogique vieille de plus d&apos;un siècle, basée sur des signaux électriques transmis par câbles cuivre. La VoIP (Voice over Internet Protocol), au contraire, convertit la voix en données numériques qui transitent sur Internet.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Tableau comparatif complet</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-wetel-gray-800">
                    <th className="p-5 text-left text-white font-bold text-lg">Critère</th>
                    <th className="p-5 text-center text-white font-bold text-lg">RTC (Cuivre)</th>
                    <th className="p-5 text-center text-wetel-green font-bold text-lg">VoIP (IP)</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-t border-wetel-gray-700">
                    <td className="p-5 text-white font-semibold">Coût mensuel</td>
                    <td className="p-5 text-center text-wetel-gray-300">45-60€</td>
                    <td className="p-5 text-center text-wetel-green font-bold">20-35€</td>
                  </tr>
                  <tr className="border-t border-wetel-gray-700 bg-wetel-gray-800/30">
                    <td className="p-5 text-white font-semibold">Qualité audio</td>
                    <td className="p-5 text-center"><span className="text-wetel-gray-400">Standard</span></td>
                    <td className="p-5 text-center"><Check className="w-6 h-6 text-wetel-green mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-wetel-gray-700">
                    <td className="p-5 text-white font-semibold">Mobilité</td>
                    <td className="p-5 text-center"><X className="w-6 h-6 text-red-400 mx-auto" /></td>
                    <td className="p-5 text-center"><Check className="w-6 h-6 text-wetel-green mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-wetel-gray-700 bg-wetel-gray-800/30">
                    <td className="p-5 text-white font-semibold">Fonctionnalités avancées</td>
                    <td className="p-5 text-center"><X className="w-6 h-6 text-red-400 mx-auto" /></td>
                    <td className="p-5 text-center"><Check className="w-6 h-6 text-wetel-green mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-wetel-gray-700">
                    <td className="p-5 text-white font-semibold">Scalabilité</td>
                    <td className="p-5 text-center text-red-400">Limitée</td>
                    <td className="p-5 text-center text-wetel-green font-bold">Illimitée</td>
                  </tr>
                  <tr className="border-t border-wetel-gray-700 bg-wetel-gray-800/30">
                    <td className="p-5 text-white font-semibold">Installation</td>
                    <td className="p-5 text-center text-wetel-gray-400">2-4 semaines</td>
                    <td className="p-5 text-center text-wetel-green font-bold">24-48h</td>
                  </tr>
                  <tr className="border-t border-wetel-gray-700">
                    <td className="p-5 text-white font-semibold">Maintenance</td>
                    <td className="p-5 text-center text-wetel-gray-400">Élevée</td>
                    <td className="p-5 text-center text-wetel-green font-bold">Minimale</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Verdict : Pourquoi choisir la VoIP ?</h2>
            <div className="card p-6 border-l-4 border-wetel-green mb-8">
              <p className="text-white text-lg leading-relaxed">
                ✅ <strong>La VoIP est clairement supérieure</strong> sur tous les aspects : coûts réduits de 40-50%, qualité HD, mobilité totale, fonctionnalités avancées et évolutivité sans limite. Avec la fin programmée du RTC d&apos;ici 2030, la migration vers l&apos;IP n&apos;est plus une option mais une nécessité.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Les idées reçues sur la VoIP</h2>
            <div className="space-y-4 mb-12">
              <div className="card p-6">
                <h4 className="text-xl font-bold text-white mb-3">❌ « La qualité est moins bonne »</h4>
                <p className="text-wetel-gray-300 text-lg">Faux. Avec une connexion fibre, la qualité VoIP HD surpasse largement le RTC analogique.</p>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-bold text-white mb-3">❌ « C&apos;est compliqué à installer »</h4>
                <p className="text-wetel-gray-300 text-lg">Faux. Un opérateur comme WETEL configure tout à distance. Installation en 48h maximum.</p>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-bold text-white mb-3">❌ « C&apos;est moins fiable »</h4>
                <p className="text-wetel-gray-300 text-lg">Faux. Taux de disponibilité de 99.9% avec redondance des serveurs.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-green/10 to-transparent rounded-2xl border border-wetel-green/20">
            <h3 className="text-2xl font-bold text-white mb-4">Migrez vers la VoIP dès maintenant</h3>
            <p className="text-wetel-gray-400 mb-6 text-lg">WETEL GROUP gère votre transition du RTC vers l&apos;IP en toute sérénité.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Obtenir un devis<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0188812227" className="btn-secondary"><Phone className="w-5 h-5" />01 88 81 22 27</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
