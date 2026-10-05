import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Actualités',
  description: 'Actualités télécom, guides sur la fin du RTC, transition fibre et conseils pour les professionnels.',
};

const articles = [
  {
    slug: 'fin-rtc-guide-complet',
    title: 'Fin du RTC : Guide complet pour les entreprises',
    excerpt: 'Tout ce que vous devez savoir sur l\'arrêt du réseau téléphonique commuté et comment préparer votre transition vers la téléphonie IP.',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'Guide',
  },
  {
    slug: 'telephonie-ip-entreprises-2025',
    title: 'Téléphonie IP pour Entreprises : Guide Complet 2025',
    excerpt: 'Découvrez tous les avantages de la téléphonie IP pour votre entreprise en 2025. Fonctionnalités, coûts, et mise en place.',
    date: '2025-01-20',
    readTime: '10 min',
    category: 'Guide Technique',
  },
  {
    slug: 'voip-vs-rtc-comparatif',
    title: 'VoIP vs RTC : Comparatif Complet 2025',
    excerpt: 'Comparaison détaillée entre téléphonie IP et RTC. Quel est le meilleur choix pour votre entreprise ?',
    date: '2025-01-22',
    readTime: '7 min',
    category: 'Comparatif',
  },
  {
    slug: 'standard-telephonique-cloud-guide',
    title: 'Standard Téléphonique Cloud : Le Guide Complet',
    excerpt: 'Tout savoir sur les standards téléphoniques cloud pour moderniser la gestion de vos appels.',
    date: '2025-01-23',
    readTime: '9 min',
    category: 'Guide',
  },
  {
    slug: 'choisir-operateur-telecom-professionnel',
    title: 'Comment Choisir son Opérateur Télécom Pro en 2025',
    excerpt: 'Les critères essentiels pour sélectionner le meilleur opérateur télécom pour votre entreprise.',
    date: '2025-01-24',
    readTime: '8 min',
    category: 'Conseils',
  },
  {
    slug: 'migration-telephonie-ip-etapes',
    title: 'Migration vers la Téléphonie IP : Les 7 Étapes Clés',
    excerpt: 'Guide pratique pour réussir votre migration du RTC vers l\'IP sans interruption de service.',
    date: '2025-01-25',
    readTime: '6 min',
    category: 'Tutoriel',
  },
  {
    slug: 'cout-telephonie-ip-entreprise',
    title: 'Coût Réel de la Téléphonie IP en Entreprise',
    excerpt: 'Analyse complète des coûts : abonnement, installation, matériel. Économies vs RTC.',
    date: '2025-01-24',
    readTime: '7 min',
    category: 'Analyse',
  },
  {
    slug: 'securite-telephonie-ip',
    title: 'Sécurité de la Téléphonie IP : Guide Complet',
    excerpt: 'Tout savoir sur la sécurisation de votre système de téléphonie IP : menaces, protections, bonnes pratiques.',
    date: '2025-01-25',
    readTime: '9 min',
    category: 'Sécurité',
  },
  {
    slug: 'migration-fibre-entreprise',
    title: 'Migration vers la fibre : étapes clés pour les entreprises',
    excerpt: 'Découvrez les étapes essentielles pour migrer votre entreprise vers la fibre optique sans interruption de service.',
    date: '2024-01-10',
    readTime: '6 min',
    category: 'Conseils',
  },
  {
    slug: 'standard-cloud-avantages',
    title: 'Standard téléphonique cloud : 5 avantages pour votre entreprise',
    excerpt: 'Pourquoi le standard cloud remplace les PABX traditionnels et comment il peut transformer votre communication.',
    date: '2024-01-05',
    readTime: '5 min',
    category: 'Solutions',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-canvas relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-wide relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Ressources</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-wetel-ink mb-6">Blog & <span className="text-gradient-orange">Actualités</span></h1>
          <p className="text-xl text-wetel-muted">Guides, conseils et actualités pour accompagner votre transition télécom.</p>
        </div>
      </section>

      <section className="section-padding bg-wetel-surface">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="card group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-wetel-orange/20 to-wetel-surface-soft flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-wetel-orange/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="badge">{article.category}</span>
                    <span className="flex items-center gap-1 text-sm text-wetel-muted">
                      <Clock className="w-4 h-4" />{article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-wetel-ink mb-3 group-hover:text-wetel-orange transition-colors">{article.title}</h2>
                  <p className="text-wetel-muted mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-wetel-muted">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1 text-wetel-orange font-medium">
                      Lire<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
