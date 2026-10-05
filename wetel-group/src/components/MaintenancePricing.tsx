import Link from 'next/link';
import { Headphones, Monitor, Router, ArrowRight, Check } from 'lucide-react';

const items = [
  { label: 'Forfait d’assistance', price: 17, unit: 'par installation', icon: Headphones },
  { label: 'Poste téléphonique IP', price: 8, unit: 'par poste couvert', icon: Monitor },
  { label: 'Routeur', price: 5, unit: 'par routeur couvert', icon: Router },
];

export default function MaintenancePricing() {
  return <section id="maintenance" className="section-padding bg-wetel-canvas border-y border-wetel-line">
    <div className="container-wide grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
      <div>
        <span className="badge mb-5">Maintenance de votre installation</span>
        <h2 className="text-3xl lg:text-4xl text-wetel-ink mb-5">Un accompagnement qui continue après la première année.</h2>
        <p className="text-wetel-muted mb-6">Lorsque la maintenance est commandée avec une première année offerte, sa facturation commence au treizième mois. Le montant et la durée sont acceptés dès la signature du devis.</p>
        <ul className="space-y-3 text-wetel-ink-soft">
          {['Diagnostic à distance', 'Assistance à la configuration', 'Correction des anomalies du périmètre convenu'].map(item => <li key={item} className="flex gap-3"><Check className="w-5 h-5 text-wetel-orange flex-shrink-0 mt-1" />{item}</li>)}
        </ul>
        <p className="text-sm text-wetel-muted mt-5">Pièces, remplacements, déplacements et interventions sur site sur devis, sauf inclusion expresse. Horaires et délais selon les conditions de votre offre. Abonnements et loyers de matériel facturés séparément.</p>
        <Link href="/cgv#article-10" className="inline-flex gap-2 items-center text-wetel-orange font-semibold mt-6">Consulter les conditions de maintenance<ArrowRight className="w-4 h-4" /></Link>
      </div>
      <div className="card p-6 sm:p-8">
        <h3 className="text-xl text-wetel-ink mb-6">Grille mensuelle de maintenance</h3>
        <div className="space-y-5">
          {items.map(item => <div key={item.label} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3"><item.icon className="w-5 h-5 text-wetel-orange flex-shrink-0" /><div><p className="font-semibold text-wetel-ink">{item.label}</p><p className="text-sm text-wetel-muted">{item.unit}</p></div></div>
            <span className="font-bold text-wetel-ink whitespace-nowrap">{item.price} € HT</span>
          </div>)}
        </div>
        <div className="mt-7 pt-6 border-t border-wetel-line">
          <p className="text-sm text-wetel-muted">Exemple : assistance + 1 poste principal + 1 routeur</p>
          <p className="mt-2"><span className="text-4xl font-bold text-wetel-ink">30 €</span><span className="text-wetel-muted"> HT / mois</span></p>
          <p className="text-sm text-wetel-muted mt-2">À partir du mois 13 si la première année est offerte au devis. Le total dépend des équipements couverts ; les autres configurations sont chiffrées avant signature.</p>
        </div>
        <Link href="/contact" className="btn-primary w-full mt-7">Chiffrer ma maintenance<ArrowRight className="w-4 h-4" /></Link>
      </div>
    </div>
  </section>;
}
