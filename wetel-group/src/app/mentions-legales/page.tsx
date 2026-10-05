import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de WETEL GROUP - Intégrateur télécom B2B.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-canvas">
        <div className="container-narrow">
          <h1 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-6">Mentions Légales</h1>
          <p className="text-wetel-muted">Dernière mise à jour : Janvier 2024</p>
        </div>
      </section>

      <section className="section-padding bg-wetel-surface">
        <div className="container-narrow prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-wetel-ink mb-4">1. Éditeur du site</h2>
          <div className="card p-6 mb-8">
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Raison sociale :</strong> WETEL GROUP</p>
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">SIREN :</strong> 979 507 639</p>
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Siège social :</strong> 25 rue Tronchet, 75008 Paris, France</p>
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Téléphone :</strong> 01 88 81 22 27</p>
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Email :</strong> contact@wetelgroup.com</p>
            <p className="text-wetel-ink-soft"><strong className="text-wetel-ink">Directeur de la publication :</strong> Le Président de WETEL GROUP</p>
          </div>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">2. Hébergement</h2>
          <div className="card p-6 mb-8">
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Hébergeur :</strong> Vercel Inc.</p>
            <p className="text-wetel-ink-soft mb-2"><strong className="text-wetel-ink">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p className="text-wetel-ink-soft"><strong className="text-wetel-ink">Site web :</strong> https://vercel.com</p>
          </div>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">3. Propriété intellectuelle</h2>
          <p className="text-wetel-ink-soft mb-6">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de WETEL GROUP ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de WETEL GROUP.
          </p>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">4. Limitation de responsabilité</h2>
          <p className="text-wetel-ink-soft mb-6">
            WETEL GROUP s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, WETEL GROUP ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site. En conséquence, WETEL GROUP décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
          </p>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">5. Liens hypertextes</h2>
          <p className="text-wetel-ink-soft mb-6">
            Le site peut contenir des liens hypertextes vers d&apos;autres sites. WETEL GROUP n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La décision d&apos;activer ces liens relève de la pleine et entière responsabilité de l&apos;utilisateur.
          </p>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">6. Données personnelles</h2>
          <p className="text-wetel-ink-soft mb-6">
            Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre <a href="/rgpd" className="text-wetel-orange hover:underline">Politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">7. Cookies</h2>
          <p className="text-wetel-ink-soft mb-6">
            Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour plus d&apos;informations sur l&apos;utilisation des cookies, veuillez consulter notre <a href="/rgpd" className="text-wetel-orange hover:underline">Politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-bold text-wetel-ink mb-4">8. Droit applicable</h2>
          <p className="text-wetel-ink-soft">
            Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l&apos;utilisation du site sera soumis à la compétence exclusive des tribunaux français.
          </p>
        </div>
      </section>
    </>
  );
}
