import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Migration vers la fibre : étapes clés pour les entreprises',
  description: 'Découvrez les étapes essentielles pour migrer votre entreprise vers la fibre optique sans interruption de service.',
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
            <span className="badge">Conseils</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Clock className="w-4 h-4" />6 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Calendar className="w-4 h-4" />10 janvier 2024</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Migration vers la fibre : étapes clés pour les entreprises</h1>
          <p className="text-xl text-wetel-gray-400">Découvrez les étapes essentielles pour migrer votre entreprise vers la fibre optique sans interruption de service.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-gray-900">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Pourquoi migrer vers la fibre ?</h2>
            <p className="text-wetel-gray-300 mb-6 leading-relaxed">
              La fibre optique offre des performances incomparables par rapport à l&apos;ADSL : débits jusqu&apos;à 100 fois supérieurs, latence réduite, connexion symétrique. Pour une entreprise, ces avantages se traduisent par une productivité accrue et une meilleure qualité de service.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Débit', adsl: 'Jusqu\'à 20 Mbps', fibre: 'Jusqu\'à 10 Gbps' },
                { title: 'Latence', adsl: '30-50 ms', fibre: '< 5 ms' },
                { title: 'Upload', adsl: '1-5 Mbps', fibre: 'Symétrique' },
                { title: 'Stabilité', adsl: 'Variable', fibre: 'Constante' },
              ].map((item) => (
                <div key={item.title} className="card p-4">
                  <p className="text-wetel-orange font-semibold mb-2">{item.title}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-wetel-gray-500">ADSL: {item.adsl}</span>
                    <span className="text-green-400">Fibre: {item.fibre}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Les 5 étapes de la migration</h2>
            <div className="space-y-6 mb-8">
              {[
                { step: 1, title: 'Test d\'éligibilité', desc: 'Vérifiez que votre adresse est éligible à la fibre optique professionnelle.' },
                { step: 2, title: 'Choix de l\'offre', desc: 'Sélectionnez le débit et les options adaptés à vos besoins (GTR, IP fixe...).' },
                { step: 3, title: 'Planification', desc: 'Définissez une date de migration et préparez la transition.' },
                { step: 4, title: 'Installation', desc: 'Un technicien installe la fibre et configure vos équipements.' },
                { step: 5, title: 'Validation', desc: 'Tests de fonctionnement et formation de vos équipes.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 bg-wetel-gray-800/50 rounded-xl">
                  <div className="w-12 h-12 bg-wetel-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-wetel-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Points de vigilance</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Vérifiez la compatibilité de vos équipements (routeur, téléphones IP)',
                'Prévoyez une solution de secours pendant la migration',
                'Informez vos collaborateurs du changement',
                'Conservez votre ancienne ligne quelques jours en parallèle',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-wetel-orange flex-shrink-0 mt-1" />
                  <span className="text-wetel-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-orange/10 to-transparent rounded-2xl border border-wetel-orange/20">
            <h3 className="text-2xl font-bold text-white mb-4">Testez votre éligibilité fibre</h3>
            <p className="text-wetel-gray-400 mb-6">WETEL GROUP vérifie votre éligibilité et vous propose la meilleure offre fibre professionnelle.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#eligibilite" className="btn-primary">Tester mon éligibilité<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0189293421" className="btn-secondary"><Phone className="w-5 h-5" />01 89 29 34 21</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
