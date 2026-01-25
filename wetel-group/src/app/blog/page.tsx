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
      <section className="pt-32 pb-16 bg-wetel-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-wide relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Ressources</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Blog & <span className="text-gradient-orange">Actualités</span></h1>
          <p className="text-xl text-wetel-gray-400">Guides, conseils et actualités pour accompagner votre transition télécom.</p>
        </div>
      </section>

      <section className="section-padding bg-wetel-gray-900">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="card group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-wetel-orange/20 to-wetel-gray-800 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-wetel-orange/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="badge">{article.category}</span>
                    <span className="flex items-center gap-1 text-sm text-wetel-gray-500">
                      <Clock className="w-4 h-4" />{article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-wetel-orange transition-colors">{article.title}</h2>
                  <p className="text-wetel-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-wetel-gray-500">
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
