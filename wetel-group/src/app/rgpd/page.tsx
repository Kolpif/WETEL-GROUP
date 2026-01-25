import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité RGPD',
  description: 'Politique de protection des données personnelles de WETEL GROUP.',
};

export default function RGPDPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-black">
        <div className="container-narrow">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Politique de Confidentialité</h1>
          <p className="text-wetel-gray-400">Protection de vos données personnelles - Janvier 2024</p>
        </div>
      </section>
      <section className="section-padding bg-wetel-gray-900">
        <div className="container-narrow prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">1. Responsable du traitement</h2>
          <div className="card p-6 mb-8">
            <p className="text-wetel-gray-300">WETEL GROUP - 25 rue Tronchet, 75008 Paris - SIREN : 979 507 639</p>
            <p className="text-wetel-gray-300">Email DPO : contact@wetelgroup.com</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">2. Données collectées</h2>
          <p className="text-wetel-gray-300 mb-6">Nous collectons : données d&apos;identification (nom, prénom, entreprise), coordonnées (email, téléphone, adresse), données de connexion (IP, cookies), données contractuelles et techniques.</p>

          <h2 className="text-2xl font-bold text-white mb-4">3. Finalités</h2>
          <p className="text-wetel-gray-300 mb-6">Vos données servent à : gérer la relation client, fournir nos services, facturer, assurer le support technique, améliorer nos services et communiquer (avec consentement).</p>

          <h2 className="text-2xl font-bold text-white mb-4">4. Durée de conservation</h2>
          <p className="text-wetel-gray-300 mb-6">Données clients : 3 ans après fin de relation. Facturation : 10 ans. Prospection : 3 ans après dernier contact. Cookies : 13 mois max.</p>

          <h2 className="text-2xl font-bold text-white mb-4">5. Vos droits</h2>
          <p className="text-wetel-gray-300 mb-4">Vous disposez des droits suivants : accès, rectification, effacement, limitation, portabilité, opposition. Pour exercer vos droits :</p>
          <div className="card p-6 mb-6">
            <p className="text-wetel-gray-300">Email : contact@wetelgroup.com</p>
            <p className="text-wetel-gray-300">Courrier : WETEL GROUP - DPO, 25 rue Tronchet, 75008 Paris</p>
          </div>
          <p className="text-wetel-gray-300 mb-6">Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>

          <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
          <p className="text-wetel-gray-300 mb-4">Nous utilisons :</p>
          <ul className="text-wetel-gray-300 mb-6 space-y-2 list-disc list-inside">
            <li><strong className="text-white">Cookies essentiels :</strong> fonctionnement du site, préférences</li>
            <li><strong className="text-white">Cookies analytiques :</strong> mesure d&apos;audience (Google Analytics)</li>
            <li><strong className="text-white">Cookies marketing :</strong> publicité ciblée (avec consentement)</li>
          </ul>
          <p className="text-wetel-gray-300 mb-6">Vous pouvez gérer vos préférences via notre bandeau cookies ou les paramètres de votre navigateur.</p>

          <h2 className="text-2xl font-bold text-white mb-4">7. Sécurité</h2>
          <p className="text-wetel-gray-300 mb-6">Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement, contrôles d&apos;accès, sauvegardes, formation du personnel.</p>

          <h2 className="text-2xl font-bold text-white mb-4">8. Modifications</h2>
          <p className="text-wetel-gray-300">Cette politique peut être modifiée. Toute modification significative sera notifiée sur notre site.</p>
        </div>
      </section>
    </>
  );
}
