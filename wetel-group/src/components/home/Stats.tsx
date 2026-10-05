import { ClipboardList, Settings, PhoneForwarded, Headphones } from 'lucide-react';
const steps = [
  { icon: ClipboardList, title: 'Comprendre vos besoins', description: 'Votre installation, vos usages et un devis détaillé.' },
  { icon: Settings, title: 'Installer votre solution', description: 'Des équipements configurés pour votre activité.' },
  { icon: PhoneForwarded, title: 'Organiser la transition', description: 'Portabilité et accompagnement de vos équipes.' },
  { icon: Headphones, title: 'Vous accompagner', description: 'Une assistance et une maintenance définies dans votre offre.' },
];
export default function Stats() {
  return <section className="section-padding bg-wetel-surface">
    <div className="container-wide">
      <div className="max-w-2xl mb-10"><span className="badge mb-4">Notre accompagnement</span><h2 className="text-3xl lg:text-4xl text-wetel-ink">Du premier échange au suivi de votre installation.</h2></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, index) => <div key={step.title} className="card p-6">
          <div className="flex items-center justify-between mb-7"><step.icon className="w-7 h-7 text-wetel-orange" /><span className="text-sm font-semibold text-wetel-muted">0{index + 1}</span></div>
          <h3 className="text-lg text-wetel-ink mb-3">{step.title}</h3><p className="text-sm text-wetel-muted">{step.description}</p>
        </div>)}
      </div>
    </div>
  </section>;
}
