'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, Building2, User, ArrowRight, Check, Loader2 } from 'lucide-react';

const situations = [
  { value: 'new', label: 'Nouvelle installation' },
  { value: 'migration', label: 'Migration RTC vers IP' },
  { value: 'upgrade', label: 'Évolution de mon installation' },
  { value: 'audit', label: 'Audit de mon installation' },
  { value: 'other', label: 'Autre demande' },
];

const sizes = [
  { value: '1', label: '1 personne (indépendant)' },
  { value: '2-5', label: '2 à 5 personnes' },
  { value: '6-20', label: '6 à 20 personnes' },
  { value: '20+', label: 'Plus de 20 personnes' },
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    situation: '',
    companySize: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    if (step === 1) return formData.situation && formData.companySize;
    if (step === 2) return formData.company && formData.name && formData.email && formData.phone;
    return true;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wetel-black px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Demande envoyée !</h1>
          <p className="text-wetel-gray-400 mb-8">Merci pour votre demande. Un expert vous contactera sous 24h pour discuter de votre projet.</p>
          <a href="/" className="btn-primary">Retour à l&apos;accueil</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-wide relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">Réponse sous 24h</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Contactez-<span className="text-gradient-orange">nous</span></h1>
          <p className="text-xl text-wetel-gray-400">Discutons de votre projet télécom. Audit gratuit et devis personnalisé.</p>
        </div>
      </section>

      <section className="section-padding bg-wetel-gray-900">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card p-8 lg:p-10">
                {/* Progress */}
                <div className="flex items-center gap-4 mb-10">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-wetel-orange text-white' : 'bg-wetel-gray-800 text-wetel-gray-500'}`}>{s}</div>
                      {s < 3 && <div className={`flex-1 h-1 rounded ${step > s ? 'bg-wetel-orange' : 'bg-wetel-gray-800'}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-8 animate-fade-in">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Votre situation</h2>
                        <p className="text-wetel-gray-400">Aidez-nous à mieux comprendre vos besoins.</p>
                      </div>
                      <div>
                        <label className="label">Dans quelle situation êtes-vous ?</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {situations.map((s) => (
                            <button key={s.value} type="button" onClick={() => updateField('situation', s.value)} className={`p-4 rounded-xl border text-left transition-all ${formData.situation === s.value ? 'border-wetel-orange bg-wetel-orange/10 text-white' : 'border-wetel-gray-700 text-wetel-gray-400 hover:border-wetel-gray-600'}`}>
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="label">Taille de votre entreprise</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {sizes.map((s) => (
                            <button key={s.value} type="button" onClick={() => updateField('companySize', s.value)} className={`p-4 rounded-xl border text-left transition-all ${formData.companySize === s.value ? 'border-wetel-orange bg-wetel-orange/10 text-white' : 'border-wetel-gray-700 text-wetel-gray-400 hover:border-wetel-gray-600'}`}>
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Vos coordonnées</h2>
                        <p className="text-wetel-gray-400">Pour vous recontacter rapidement.</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="label">Entreprise</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wetel-gray-500" />
                            <input type="text" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="input-field pl-12" placeholder="Nom de l'entreprise" />
                          </div>
                        </div>
                        <div>
                          <label className="label">Nom complet</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wetel-gray-500" />
                            <input type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="input-field pl-12" placeholder="Prénom Nom" />
                          </div>
                        </div>
                        <div>
                          <label className="label">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wetel-gray-500" />
                            <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input-field pl-12" placeholder="email@entreprise.com" />
                          </div>
                        </div>
                        <div>
                          <label className="label">Téléphone</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wetel-gray-500" />
                            <input type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="input-field pl-12" placeholder="01 23 45 67 89" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Votre message</h2>
                        <p className="text-wetel-gray-400">Décrivez votre projet ou vos besoins.</p>
                      </div>
                      <div>
                        <label className="label">Message (optionnel)</label>
                        <textarea value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="input-field min-h-[150px]" placeholder="Décrivez votre projet, vos besoins, vos questions..." />
                      </div>
                      <div className="p-4 bg-wetel-gray-800/50 rounded-xl">
                        <h3 className="text-white font-medium mb-2">Récapitulatif</h3>
                        <div className="text-sm text-wetel-gray-400 space-y-1">
                          <p><span className="text-wetel-gray-500">Situation :</span> {situations.find(s => s.value === formData.situation)?.label}</p>
                          <p><span className="text-wetel-gray-500">Taille :</span> {sizes.find(s => s.value === formData.companySize)?.label}</p>
                          <p><span className="text-wetel-gray-500">Entreprise :</span> {formData.company}</p>
                          <p><span className="text-wetel-gray-500">Contact :</span> {formData.name}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-wetel-gray-800">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)} className="btn-ghost">Retour</button>
                    ) : <div />}
                    {step < 3 ? (
                      <button type="button" onClick={() => setStep(step + 1)} disabled={!canProceed()} className="btn-primary disabled:opacity-50">
                        Continuer<ArrowRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
                        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Envoi...</> : <><Send className="w-5 h-5" />Envoyer ma demande</>}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-bold text-white mb-4">Nous contacter</h3>
                <div className="space-y-4">
                  <a href="tel:0189293421" className="flex items-center gap-4 p-3 rounded-xl bg-wetel-gray-800/50 hover:bg-wetel-gray-800 transition-colors">
                    <div className="w-10 h-10 bg-wetel-orange/10 rounded-lg flex items-center justify-center"><Phone className="w-5 h-5 text-wetel-orange" /></div>
                    <div><p className="text-sm text-wetel-gray-500">Téléphone</p><p className="text-white font-medium">01 89 29 34 21</p></div>
                  </a>
                  <a href="mailto:contact@wetelgroup.com" className="flex items-center gap-4 p-3 rounded-xl bg-wetel-gray-800/50 hover:bg-wetel-gray-800 transition-colors">
                    <div className="w-10 h-10 bg-wetel-orange/10 rounded-lg flex items-center justify-center"><Mail className="w-5 h-5 text-wetel-orange" /></div>
                    <div><p className="text-sm text-wetel-gray-500">Email</p><p className="text-white font-medium">contact@wetelgroup.com</p></div>
                  </a>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-wetel-gray-800/50">
                    <div className="w-10 h-10 bg-wetel-orange/10 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-wetel-orange" /></div>
                    <div><p className="text-sm text-wetel-gray-500">Adresse</p><p className="text-white font-medium">25 rue Tronchet<br />75008 Paris</p></div>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-bold text-white mb-4">WhatsApp</h3>
                <p className="text-wetel-gray-400 text-sm mb-4">Contactez-nous directement sur WhatsApp pour une réponse rapide.</p>
                <a href="https://wa.me/33189293421" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                  <MessageCircle className="w-5 h-5" />Ouvrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
