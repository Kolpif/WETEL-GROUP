import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fin du RTC : Guide complet pour les entreprises',
  description: 'Tout ce que vous devez savoir sur l\'arrêt du réseau téléphonique commuté et comment préparer votre transition.',
};

const timeline = [
  { year: '2018', title: 'Annonce officielle', description: 'Orange annonce l\'arrêt progressif du RTC.' },
  { year: '2023', title: 'Fermeture commerciale', description: 'Fin de la commercialisation des nouvelles lignes RTC.' },
  { year: '2025-2028', title: 'Migration progressive', description: 'Fermeture technique par zones géographiques.' },
  { year: '2030', title: 'Extinction totale', description: 'Arrêt définitif du réseau RTC en France.' },
];

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
            <span className="badge">Guide</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Clock className="w-4 h-4" />8 min de lecture</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Calendar className="w-4 h-4" />15 janvier 2024</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Fin du RTC : Guide complet pour les entreprises</h1>
          <p className="text-xl text-wetel-gray-400">Tout ce que vous devez savoir sur l&apos;arrêt du réseau téléphonique commuté et comment préparer votre transition vers la téléphonie IP.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-gray-900">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Qu&apos;est-ce que le RTC ?</h2>
            <p className="text-wetel-gray-300 mb-6 leading-relaxed">
              Le RTC (Réseau Téléphonique Commuté) est le réseau téléphonique historique qui a servi les communications en France pendant plus d&apos;un siècle. Basé sur une technologie analogique utilisant des fils de cuivre, ce réseau a permis à des millions de foyers et d&apos;entreprises de communiquer.
            </p>
            <p className="text-wetel-gray-300 mb-8 leading-relaxed">
              Cependant, face à l&apos;évolution technologique et l&apos;essor de la fibre optique, Orange (ex-France Télécom) a décidé de mettre fin à ce réseau vieillissant pour concentrer ses investissements sur les infrastructures modernes.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Calendrier de fermeture du RTC</h2>
            <div className="relative mb-12">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-wetel-orange/30" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative flex gap-8">
                    <div className="w-16 h-16 bg-wetel-orange rounded-2xl flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div className="card p-6 flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-wetel-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Impact pour votre entreprise</h2>
            <p className="text-wetel-gray-300 mb-6 leading-relaxed">
              Si votre entreprise utilise encore des lignes RTC, vous êtes directement concerné par cette transition. Les équipements connectés au réseau analogique devront être remplacés ou adaptés : téléphones fixes, fax, alarmes, terminaux de paiement, ascenseurs...
            </p>
            <div className="card p-6 mb-8 border-l-4 border-wetel-orange">
              <p className="text-white font-medium">⚠️ Attention : Ne pas anticiper cette migration peut entraîner une coupure de vos lignes téléphoniques lors de la fermeture de votre zone.</p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Comment se préparer ?</h2>
            <div className="space-y-4 mb-8">
              {[
                'Réaliser un audit de vos équipements actuels',
                'Identifier tous les appareils connectés au RTC',
                'Choisir une solution de téléphonie IP adaptée',
                'Planifier la migration avec un expert',
                'Former vos équipes aux nouveaux outils',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-wetel-gray-800/50 rounded-xl">
                  <div className="w-8 h-8 bg-wetel-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <p className="text-wetel-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-orange/10 to-transparent rounded-2xl border border-wetel-orange/20">
            <h3 className="text-2xl font-bold text-white mb-4">Besoin d&apos;accompagnement ?</h3>
            <p className="text-wetel-gray-400 mb-6">WETEL GROUP vous accompagne dans votre transition RTC vers IP. Audit gratuit et devis personnalisé.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Demander un audit gratuit<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0189293421" className="btn-secondary"><Phone className="w-5 h-5" />01 89 29 34 21</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
