import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'CGV de WETEL GROUP - Services de téléphonie professionnelle.',
};

export default function CGVPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-black">
        <div className="container-narrow">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Conditions Générales de Vente</h1>
          <p className="text-wetel-gray-400">Applicables aux services de télécommunications professionnelles - Dernière mise à jour : Janvier 2024</p>
        </div>
      </section>

      <section className="section-padding bg-wetel-gray-900">
        <div className="container-narrow prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Article 1 - Objet</h2>
          <p className="text-wetel-gray-300 mb-6">
            Les présentes Conditions Générales de Vente (CGV) définissent les droits et obligations de WETEL GROUP (ci-après &quot;le Prestataire&quot;) et de ses clients professionnels (ci-après &quot;le Client&quot;) dans le cadre de la fourniture de services de télécommunications incluant : téléphonie IP, accès Internet professionnel, téléphonie mobile, standard téléphonique cloud et services associés.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 2 - Champ d&apos;application</h2>
          <p className="text-wetel-gray-300 mb-6">
            Les présentes CGV s&apos;appliquent à toutes les prestations de services conclues entre le Prestataire et le Client. Elles prévalent sur tout autre document, sauf accord contraire écrit entre les parties. Le Client reconnaît avoir pris connaissance des présentes CGV préalablement à sa commande.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 3 - Services proposés</h2>
          <p className="text-wetel-gray-300 mb-4">Le Prestataire propose les services suivants :</p>
          <ul className="text-wetel-gray-300 mb-6 space-y-2 list-disc list-inside">
            <li>Fourniture de lignes téléphoniques IP (VoIP)</li>
            <li>Accès Internet professionnel (Fibre optique, ADSL, VDSL)</li>
            <li>Forfaits mobiles professionnels</li>
            <li>Standard téléphonique cloud (IPBX hébergé)</li>
            <li>Installation et configuration des équipements</li>
            <li>Maintenance et support technique</li>
            <li>Portabilité des numéros</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Article 4 - Commande et entrée en vigueur</h2>
          <p className="text-wetel-gray-300 mb-6">
            La commande est considérée comme acceptée après signature du bon de commande ou du devis par le Client. Les services entrent en vigueur à la date d&apos;activation définie dans le bon de commande, sous réserve de la réalisation des prérequis techniques et administratifs nécessaires.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 5 - Tarifs et facturation</h2>
          <p className="text-wetel-gray-300 mb-4">
            Les tarifs sont indiqués en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation. Les factures sont émises mensuellement et payables à réception, sauf mention contraire.
          </p>
          <div className="card p-6 mb-6">
            <p className="text-wetel-gray-300 mb-2"><strong className="text-white">Frais d&apos;installation :</strong> Facturés une fois à l&apos;activation du service</p>
            <p className="text-wetel-gray-300 mb-2"><strong className="text-white">Abonnements :</strong> Facturés mensuellement à terme à échoir</p>
            <p className="text-wetel-gray-300"><strong className="text-white">Consommations :</strong> Facturées mensuellement à terme échu</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Article 6 - Conditions de paiement</h2>
          <p className="text-wetel-gray-300 mb-6">
            Le paiement s&apos;effectue par prélèvement automatique, virement bancaire ou carte bancaire. En cas de retard de paiement, des pénalités de retard seront appliquées au taux de 3 fois le taux d&apos;intérêt légal. Une indemnité forfaitaire de 40€ pour frais de recouvrement sera également due.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 7 - Durée et résiliation</h2>
          <p className="text-wetel-gray-300 mb-4">
            Les contrats sont conclus pour une durée initiale définie dans le bon de commande (12 ou 24 mois). Au terme de cette période, le contrat est reconduit tacitement pour des périodes successives d&apos;un an, sauf dénonciation par l&apos;une des parties avec un préavis de 3 mois.
          </p>
          <p className="text-wetel-gray-300 mb-6">
            En cas de résiliation anticipée du fait du Client, celui-ci reste redevable des sommes dues jusqu&apos;au terme de la période d&apos;engagement en cours.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 8 - Obligations du Prestataire</h2>
          <p className="text-wetel-gray-300 mb-4">Le Prestataire s&apos;engage à :</p>
          <ul className="text-wetel-gray-300 mb-6 space-y-2 list-disc list-inside">
            <li>Fournir les services conformément aux caractéristiques décrites</li>
            <li>Assurer la continuité et la qualité des services</li>
            <li>Informer le Client de toute interruption programmée</li>
            <li>Mettre à disposition un support technique</li>
            <li>Respecter la confidentialité des données du Client</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Article 9 - Obligations du Client</h2>
          <p className="text-wetel-gray-300 mb-4">Le Client s&apos;engage à :</p>
          <ul className="text-wetel-gray-300 mb-6 space-y-2 list-disc list-inside">
            <li>Fournir des informations exactes et complètes</li>
            <li>Régler les factures dans les délais convenus</li>
            <li>Utiliser les services conformément à leur destination</li>
            <li>Ne pas revendre les services sans autorisation</li>
            <li>Informer le Prestataire de tout changement de situation</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Article 10 - Niveaux de service (SLA)</h2>
          <p className="text-wetel-gray-300 mb-6">
            Le Prestataire s&apos;engage sur des niveaux de service adaptés à chaque offre. Les engagements de temps de rétablissement (GTR) et de disponibilité sont précisés dans les conditions particulières de chaque service.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 11 - Responsabilité</h2>
          <p className="text-wetel-gray-300 mb-6">
            La responsabilité du Prestataire est limitée aux dommages directs et prévisibles. En aucun cas, le Prestataire ne pourra être tenu responsable des dommages indirects tels que perte de chiffre d&apos;affaires, perte de données, préjudice commercial. La responsabilité totale du Prestataire est plafonnée au montant des sommes versées par le Client au cours des 12 derniers mois.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 12 - Force majeure</h2>
          <p className="text-wetel-gray-300 mb-6">
            Aucune des parties ne sera tenue responsable d&apos;un manquement à ses obligations contractuelles si ce manquement résulte d&apos;un cas de force majeure tel que défini par la jurisprudence française.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 13 - Protection des données</h2>
          <p className="text-wetel-gray-300 mb-6">
            Le Prestataire s&apos;engage à traiter les données personnelles du Client conformément au Règlement Général sur la Protection des Données (RGPD). Les modalités de traitement sont détaillées dans la <a href="/rgpd" className="text-wetel-orange hover:underline">Politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 14 - Propriété intellectuelle</h2>
          <p className="text-wetel-gray-300 mb-6">
            Tous les éléments fournis par le Prestataire (logiciels, documentation, etc.) restent sa propriété exclusive. Le Client bénéficie d&apos;une licence d&apos;utilisation non exclusive pour la durée du contrat.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 15 - Modification des CGV</h2>
          <p className="text-wetel-gray-300 mb-6">
            Le Prestataire se réserve le droit de modifier les présentes CGV. Toute modification sera notifiée au Client avec un préavis de 30 jours. L&apos;absence de contestation dans ce délai vaut acceptation des nouvelles conditions.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 16 - Loi applicable et juridiction</h2>
          <p className="text-wetel-gray-300 mb-6">
            Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents de Paris.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Article 17 - Contact</h2>
          <div className="card p-6">
            <p className="text-wetel-gray-300 mb-2"><strong className="text-white">WETEL GROUP</strong></p>
            <p className="text-wetel-gray-300 mb-2">25 rue Tronchet, 75008 Paris</p>
            <p className="text-wetel-gray-300 mb-2">Téléphone : 01 89 29 34 21</p>
            <p className="text-wetel-gray-300">Email : contact@wetelgroup.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
