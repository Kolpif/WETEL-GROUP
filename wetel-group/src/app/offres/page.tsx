import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Star, ArrowRight, Phone, Smartphone, Monitor, Wifi, Cloud, HeadphonesIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Offres & Tarifs',
  description: 'Découvrez nos packs télécom professionnels : Starter Pro, Business Pro et Entreprise Pro.',
};

const packs = [
  {
    id: 'starter', name: 'Starter Pro', description: 'Idéal pour les indépendants', price: 59, installation: 200, popular: false,
    features: [
      { icon: Phone, text: '1 ligne fixe professionnelle' },
      { icon: Monitor, text: '1 poste téléphonique IP' },
      { icon: Smartphone, text: '1 ligne mobile professionnelle' },
      { icon: Wifi, text: 'Internet haut débit (fibre ou ADSL)' },
      { icon: Check, text: 'Portabilité de vos numéros' },
      { icon: Check, text: 'Installation & configuration' },
      { icon: HeadphonesIcon, text: 'Support technique' },
    ],
  },
  {
    id: 'business', name: 'Business Pro', description: 'Notre offre la plus populaire', price: 99, installation: 250, popular: true,
    features: [
      { icon: Phone, text: '2 lignes fixes professionnelles' },
      { icon: Monitor, text: '2 postes téléphoniques IP' },
      { icon: Smartphone, text: '2 lignes mobiles professionnelles' },
      { icon: Wifi, text: 'Internet haut débit (fibre ou ADSL)' },
      { icon: Cloud, text: 'Standard téléphonique cloud' },
      { icon: Check, text: 'Portabilité de vos numéros' },
      { icon: Check, text: 'Installation & configuration' },
      { icon: HeadphonesIcon, text: 'Support technique' },
    ],
  },
  {
    id: 'entreprise', name: 'Entreprise Pro', description: 'Pour les équipes en croissance', price: 169, installation: 350, popular: false,
    features: [
      { icon: Phone, text: '5 lignes fixes professionnelles' },
      { icon: Monitor, text: '5 postes téléphoniques IP' },
      { icon: Smartphone, text: '3 lignes mobiles professionnelles' },
      { icon: Wifi, text: 'Internet haut débit (fibre ou ADSL)' },
      { icon: Cloud, text: 'Standard avancé' },
      { icon: Check, text: 'Supervision & qualité de service' },
      { icon: HeadphonesIcon, text: 'Support prioritaire' },
      { icon: Check, text: 'Portabilité & Installation' },
    ],
  },
];

export default function OffresPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-wide relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Tarifs transparents</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Nos <span className="text-gradient-orange">offres & tarifs</span></h1>
          <p className="text-xl text-wetel-gray-400">Des packs complets pour équiper votre entreprise en téléphonie professionnelle.</p>
        </div>
      </section>

      <section className="section-padding bg-wetel-gray-900">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {packs.map((pack) => (
              <div key={pack.id} id={pack.id} className={`relative card p-8 ${pack.popular ? 'border-wetel-orange/50 bg-gradient-to-br from-wetel-orange/5 to-transparent' : ''}`}>
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="badge-popular"><Star className="w-4 h-4" />Le plus populaire</span>
                  </div>
                )}
                <div className={pack.popular ? 'pt-4' : ''}>
                  <h2 className="text-2xl font-bold text-white mb-2">{pack.name}</h2>
                  <p className="text-wetel-gray-400 mb-6">{pack.description}</p>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-wetel-gray-500">À partir de</span>
                      <span className="text-5xl font-bold text-white">{pack.price}€</span>
                      <span className="text-wetel-gray-400">HT / mois</span>
                    </div>
                    <p className="text-sm text-wetel-gray-500">Installation : à partir de {pack.installation}€ HT</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    {pack.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-wetel-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-wetel-orange" />
                        </div>
                        <span className="text-wetel-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <Link href="/contact" className={`w-full justify-center ${pack.popular ? 'btn-primary' : 'btn-secondary'}`}>Demander un devis<ArrowRight className="w-5 h-5" /></Link>
                    <a href="tel:0189293421" className="btn-ghost w-full justify-center"><Phone className="w-4 h-4" />Être rappelé</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-wetel-gray-800/50 rounded-2xl">
            <p className="text-sm text-wetel-gray-500 text-center">
              Tous les tarifs sont indiqués à titre indicatif. Les offres sont soumises à étude technique, éligibilité réseau et validation du dossier. Internet fourni en fibre ou ADSL selon éligibilité. Les prix peuvent varier selon la zone géographique, le matériel nécessaire et la complexité de l&apos;installation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-wetel-black">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Besoin d&apos;une offre sur-mesure ?</h2>
          <p className="text-xl text-wetel-gray-400 max-w-2xl mx-auto mb-8">Nos experts analysent vos besoins et vous proposent une solution adaptée.</p>
          <Link href="/contact" className="btn-primary text-lg">Demander un devis personnalisé<ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </>
  );
}
