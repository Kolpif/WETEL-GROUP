import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Migration vers la Téléphonie IP : Les 7 Étapes Clés',
  description: 'Guide pratique pour réussir votre migration du RTC vers l\'IP sans interruption de service.',
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
            <span className="badge">Tutoriel</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Clock className="w-4 h-4" />6 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Calendar className="w-4 h-4" />25 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Migration IP : Les 7 Étapes pour Réussir</h1>
          <p className="text-xl text-wetel-gray-400">Suivez ce guide étape par étape pour migrer vers la téléphonie IP sans stress et sans coupure.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-gray-900">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <div className="relative mb-12">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-wetel-blue via-wetel-green to-wetel-orange rounded-full" />
              <div className="space-y-8">
                {[
                  {
                    number: 1,
                    title: 'Audit de l\'existant',
                    desc: 'Recensez toutes vos lignes téléphoniques actuelles, numéros à conserver, équipements (fax, alarmes, TPE) connectés au RTC.',
                    duration: '1 journée',
                    color: 'blue'
                  },
                  {
                    number: 2,
                    title: 'Choix de la solution IP',
                    desc: 'Sélectionnez votre pack (Starter, Business ou Entreprise) et les fonctionnalités nécessaires : standard, mobilité, enregistrement...',
                    duration: '2-3 jours',
                    color: 'green'
                  },
                  {
                    number: 3,
                    title: 'Test d\'éligibilité fibre',
                    desc: 'Vérification de la disponibilité fibre sur votre site. Si indisponible, prévoir un raccordement (délai 3-6 mois).',
                    duration: 'Immédiat',
                    color: 'purple'
                  },
                  {
                    number: 4,
                    title: 'Commande et portabilité',
                    desc: 'Validation du devis, demande de portabilité des numéros existants. WETEL gère tout le processus administratif.',
                    duration: '1 semaine',
                    color: 'orange'
                  },
                  {
                    number: 5,
                    title: 'Installation et configuration',
                    desc: 'Livraison des téléphones IP, configuration du standard cloud, paramétrage des postes. Tout est fait à distance.',
                    duration: '1-2 jours',
                    color: 'blue'
                  },
                  {
                    number: 6,
                    title: 'Formation des équipes',
                    desc: 'Session de formation sur les nouveaux outils : utilisation du téléphone IP, interface web, application mobile.',
                    duration: '2 heures',
                    color: 'green'
                  },
                  {
                    number: 7,
                    title: 'Bascule et mise en service',
                    desc: 'Migration finale un jour J défini. Bascule en heures creuses pour minimiser l\'impact. Support technique renforcé.',
                    duration: '1 journée',
                    color: 'orange'
                  }
                ].map((step) => (
                  <div key={step.number} className="relative flex gap-8">
                    <div className={`w-16 h-16 bg-wetel-${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 z-10 shadow-glow-sm`}>
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <div className="card p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <span className="text-wetel-orange text-sm font-semibold px-3 py-1 bg-wetel-orange/10 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-wetel-gray-400 text-lg">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 border-l-4 border-wetel-green mb-12">
              <p className="text-white text-lg leading-relaxed">
                ⏱️ <strong>Durée totale moyenne :</strong> 3 à 4 semaines du premier contact à la mise en service complète, hors délai de raccordement fibre si nécessaire.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Conseils pour une migration réussie</h2>
            <ul className="space-y-3 mb-12 text-lg">
              <li className="text-wetel-gray-300">✅ Planifiez la bascule un jour creux (mercredi ou jeudi)</li>
              <li className="text-wetel-gray-300">✅ Prévoyez une période tampon où les deux systèmes coexistent</li>
              <li className="text-wetel-gray-300">✅ Communiquez en interne sur le changement</li>
              <li className="text-wetel-gray-300">✅ Gardez quelques lignes RTC de backup temporairement</li>
              <li className="text-wetel-gray-300">✅ Testez intensément avant la bascule définitive</li>
            </ul>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-blue/10 to-transparent rounded-2xl border border-wetel-blue/20">
            <h3 className="text-2xl font-bold text-white mb-4">WETEL gère votre migration de A à Z</h3>
            <p className="text-wetel-gray-400 mb-6 text-lg">Zéro stress, zéro coupure. Notre équipe s&apos;occupe de tout.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Planifier ma migration<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0188812227" className="btn-secondary"><Phone className="w-5 h-5" />01 88 81 22 27</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
