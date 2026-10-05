 'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
export default function EligibilityWidget() {
  const [address, setAddress] = useState('');
  const router = useRouter();
  function requestStudy(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (address.trim()) router.push(`/contact?adresse=${encodeURIComponent(address.trim())}`);
  }
  return <section id="eligibilite" className="section-padding bg-wetel-canvas">
    <div className="container-wide grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="badge mb-5">Fibre professionnelle</span>
        <h2 className="text-3xl lg:text-4xl text-wetel-ink mb-5">Quelle connexion pour votre adresse ?</h2>
        <p className="text-lg text-wetel-muted max-w-xl">Chaque site a ses contraintes. Nous étudions votre adresse et les accès disponibles pour vous proposer une solution adaptée.</p>
        <p className="flex items-center gap-2 text-sm text-wetel-muted mt-5"><CheckCircle2 className="w-4 h-4 text-wetel-orange" />Étude gratuite, sans engagement</p>
      </div>
      <form onSubmit={requestStudy} className="card p-6 sm:p-8">
        <label htmlFor="eligibility-address" className="label">Adresse de votre entreprise</label>
        <div className="relative"><MapPin className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-wetel-muted" /><input id="eligibility-address" name="adresse" required value={address} onChange={event => setAddress(event.target.value)} placeholder="25 rue Tronchet, 75008 Paris" autoComplete="street-address" className="input-field !pl-12" /></div>
        <button type="submit" disabled={!address.trim()} className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed">Demander une étude d’éligibilité<ArrowRight className="w-5 h-5" /></button>
        <p className="text-sm text-wetel-muted mt-4">Vous pourrez compléter votre demande sur la page suivante. La disponibilité et les débits seront confirmés après vérification technique.</p>
      </form>
    </div>
  </section>;
}
