import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comment Choisir son Opérateur Télécom Pro en 2025',
  description: 'Les critères essentiels pour sélectionner le meilleur opérateur télécom pour votre entreprise.',
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
            <span className="badge">Conseils</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Clock className="w-4 h-4" />8 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-muted"><Calendar className="w-4 h-4" />24 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">Comment Choisir le Bon Opérateur Télécom Pro</h1>
          <p className="text-xl text-wetel-muted">Les 10 critères essentiels pour sélectionner un partenaire télécom fiable et performant.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-surface">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-wetel-ink mb-6">10 critères de sélection</h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  title: '1. Qualité du réseau et couverture',
                  desc: 'Vérifiez la couverture fibre sur vos sites et le taux de disponibilité garanti (SLA). Un bon opérateur affiche 99.9% minimum.'
                },
                {
                  title: '2. Support technique réactif',
                  desc: 'Privilégiez un opérateur avec support 24/7 en français. Temps de réponse < 2h pour les urgences.'
                },
                {
                  title: '3. Interlocuteur unique dédié',
                  desc: 'Avoir un contact commercial ET technique identifié qui connaît votre dossier est un atout majeur.'
                },
                {
                  title: '4. Transparence tarifaire',
                  desc: 'Méfiez-vous des offres trop alléchantes. Vérifiez les frais cachés : installation, résiliation, matériel.'
                },
                {
                  title: '5. Flexibilité contractuelle',
                  desc: 'Contrats sans engagement ou 12 mois maximum. Évitez les engagements 24-36 mois trop contraignants.'
                },
                {
                  title: '6. Évolutivité des offres',
                  desc: 'Possibilité d\'ajouter/retirer des lignes facilement. Votre opérateur doit s\'adapter à votre croissance.'
                },
                {
                  title: '7. Technologies proposées',
                  desc: 'VoIP HD, standard cloud, mobilité, intégrations CRM : vérifiez que l\'opérateur est à jour technologiquement.'
                },
                {
                  title: '8. Accompagnement à la migration',
                  desc: 'Un bon opérateur gère la portabilité, la configuration et forme vos équipes. Vous ne devez rien faire.'
                },
                {
                  title: '9. Réputation et avis clients',
                  desc: 'Consultez les avis Google, Trustpilot. Méfiez-vous des opérateurs avec beaucoup de retours négatifs.'
                },
                {
                  title: '10. Expertise métier B2B',
                  desc: 'Préférez un opérateur spécialisé B2B qui comprend les enjeux professionnels vs un généraliste grand public.'
                }
              ].map((criteria, i) => (
                <div key={i} className="card p-6 hover:border-wetel-orange transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-wetel-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-wetel-ink mb-3">{criteria.title}</h3>
                      <p className="text-wetel-ink-soft text-lg leading-relaxed">{criteria.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-8 border-l-4 border-wetel-orange mb-12">
              <h3 className="text-2xl font-bold text-wetel-ink mb-4">⚠️ Les pièges à éviter</h3>
              <ul className="space-y-3 text-lg">
                <li className="text-wetel-ink-soft">❌ Les offres «trop belles pour être vraies» avec frais cachés</li>
                <li className="text-wetel-ink-soft">❌ Les engagements de 36 mois impossible à résilier</li>
                <li className="text-wetel-ink-soft">❌ Le support technique uniquement par email</li>
                <li className="text-wetel-ink-soft">❌ Les opérateurs qui ne font que du grand public</li>
                <li className="text-wetel-ink-soft">❌ L&apos;absence de garantie de service (SLA)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-wetel-ink mb-6">Pourquoi choisir WETEL GROUP ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Interlocuteur unique', desc: 'Un expert dédié pour tout' },
                { title: 'Assistance adaptée', desc: 'Horaires et délais précisés dans votre offre' },
                { title: 'Sans engagement', desc: 'Flexibilité maximale' },
              ].map((item) => (
                <div key={item.title} className="card p-6 text-center bg-gradient-to-br from-wetel-orange/10 to-transparent border-wetel-orange/30">
                  <h4 className="text-xl font-bold text-wetel-ink mb-2">{item.title}</h4>
                  <p className="text-wetel-muted text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-orange/10 to-transparent rounded-2xl border border-wetel-orange/20">
            <h3 className="text-2xl font-bold text-wetel-ink mb-4">Testez WETEL sans engagement</h3>
            <p className="text-wetel-muted mb-6 text-lg">Découvrez notre approche centrée sur le service client. Audit et devis gratuits.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Nous contacter<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0188812227" className="btn-secondary"><Phone className="w-5 h-5" />01 88 81 22 27</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
