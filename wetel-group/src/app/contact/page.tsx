import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
export const metadata: Metadata = { title: 'Contact', description: 'Contactez WETEL GROUP pour votre projet télécom professionnel et votre étude d’éligibilité.' };
export default function ContactPage() {
  return <>
    <section className="py-16 lg:py-20 bg-wetel-canvas border-b border-wetel-line">
      <div className="container-wide max-w-3xl text-center"><span className="badge mb-5">Parlons de votre projet</span><h1 className="text-4xl lg:text-5xl text-wetel-ink">Une solution adaptée à votre entreprise.</h1><p className="text-lg text-wetel-muted mt-6">Décrivez vos besoins. Nous vous accompagnons dans le choix de votre téléphonie, de votre connexion et de votre maintenance.</p></div>
    </section>
    <section className="section-padding bg-wetel-surface"><div className="container-wide grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 card p-6 sm:p-8"><ContactForm /></div>
      <aside className="card p-6"><h2 className="text-xl text-wetel-ink mb-6">Votre contact WETEL</h2><div className="space-y-5 text-wetel-ink-soft">
        <a href="tel:0188812227" className="flex items-center gap-3"><Phone className="w-5 h-5 text-wetel-orange flex-shrink-0" />01 88 81 22 27</a>
        <a href="mailto:contact@wetelgroup.com" className="flex items-center gap-3 break-all"><Mail className="w-5 h-5 text-wetel-orange flex-shrink-0" />contact@wetelgroup.com</a>
        <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-wetel-orange flex-shrink-0 mt-1" /><span>25 rue Tronchet<br />75008 Paris</span></p>
      </div><a href="https://wa.me/33189293421" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full mt-7"><MessageCircle className="w-4 h-4" />Ouvrir WhatsApp</a>
      <p className="text-sm text-wetel-muted mt-5">Le formulaire prépare un courriel dans votre messagerie. Vous pouvez aussi nous écrire directement.</p></aside>
    </div></section>
  </>;
}
