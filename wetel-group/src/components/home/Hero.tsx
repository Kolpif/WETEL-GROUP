import Link from 'next/link';
import { ArrowRight, Phone, Wifi, Smartphone, Cloud, Check, Headphones, Building2 } from 'lucide-react';

const solutions = [
  { icon: Phone, label: 'Téléphonie IP' },
  { icon: Wifi, label: 'Fibre professionnelle' },
  { icon: Smartphone, label: 'Mobile pro' },
  { icon: Cloud, label: 'Standard cloud' },
];

export default function Hero() {
  return <section className="relative overflow-hidden bg-wetel-canvas border-b border-wetel-line">
    <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-bl from-orange-100/60 via-orange-50/40 to-transparent pointer-events-none" />
    <div className="container-wide relative pt-14 pb-16 lg:pt-24 lg:pb-24">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <span className="badge mb-7"><span className="w-2 h-2 rounded-full bg-wetel-orange mr-2" />Votre entreprise, bien connectée.</span>
          <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-wetel-ink">
            Vos télécoms.<br /><span className="text-gradient-orange">Tout simplement.</span>
          </h1>
          <p className="text-lg lg:text-xl text-wetel-muted max-w-xl mt-7 leading-relaxed">
            Téléphonie, fibre et mobile : WETEL GROUP réunit les solutions dont votre entreprise a besoin, avec un interlocuteur pour vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/contact" className="btn-primary">Parlons de votre projet<ArrowRight className="w-5 h-5" /></Link>
            <Link href="/solutions" className="btn-secondary">Découvrir nos solutions</Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-wetel-muted mt-7">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-wetel-orange" />Devis gratuit, sans engagement</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-wetel-orange" />Réservé aux professionnels</span>
          </div>
        </div>
        <div className="relative lg:pl-5" aria-label="Téléphonie, Internet et mobile réunis pour votre entreprise">
          <div className="absolute -inset-5 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative bg-white rounded-[2rem] border border-wetel-line p-6 sm:p-8 shadow-[0_24px_70px_-30px_rgba(19,36,59,0.25)]">
            <div className="flex items-center justify-between pb-5 border-b border-wetel-line">
              <div className="flex items-center gap-3"><div className="bg-orange-50 p-3 rounded-xl"><Building2 className="w-5 h-5 text-wetel-orange" /></div><div><p className="text-xs uppercase tracking-widest text-wetel-muted">WETEL GROUP</p><p className="font-semibold text-wetel-ink">Votre entreprise connectée</p></div></div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {solutions.map(solution => <div key={solution.label} className="rounded-2xl bg-wetel-canvas border border-wetel-line p-4 sm:p-5">
                <solution.icon className="w-6 h-6 text-wetel-orange mb-4" />
                <p className="text-sm font-semibold text-wetel-ink">{solution.label}</p>
              </div>)}
            </div>
            <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-5 flex gap-4 items-center">
              <div className="w-11 h-11 bg-wetel-orange text-white rounded-full flex items-center justify-center flex-shrink-0"><Headphones className="w-5 h-5" /></div>
              <div><p className="font-semibold text-wetel-ink">Un contact. Une solution.</p><p className="text-sm text-wetel-muted">Étude, installation et accompagnement.</p></div>
            </div>
          </div>
          <div className="relative mt-4 sm:ml-10 flex items-center gap-3 bg-white border border-wetel-line shadow-sm rounded-2xl px-5 py-4">
            <Phone className="w-5 h-5 text-wetel-orange flex-shrink-0" />
            <p className="text-sm text-wetel-ink-soft">Gardez vos numéros, préparez votre passage à l’IP.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 lg:mt-20 pt-7 border-t border-wetel-line">
        {solutions.map(solution => <div key={solution.label} className="flex items-center gap-3 text-sm font-medium text-wetel-ink-soft"><solution.icon className="w-4 h-4 text-wetel-orange" />{solution.label}</div>)}
      </div>
    </div>
  </section>;
}
