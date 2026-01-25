'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Building2, Users, Phone, Mail, Loader2 } from 'lucide-react';

type FormData = {
  situation: string;
  companySize: string;
  needs: string[];
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormData: FormData = {
  situation: '',
  companySize: '',
  needs: [],
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  message: '',
};

const situations = [
  { value: 'new', label: 'Nouvelle installation', icon: '🆕' },
  { value: 'migration', label: 'Migration RTC vers IP', icon: '🔄' },
  { value: 'upgrade', label: 'Amélioration existante', icon: '⬆️' },
  { value: 'comparison', label: 'Comparaison d\'offres', icon: '📊' },
];

const companySizes = [
  { value: '1', label: '1 personne', description: 'Indépendant' },
  { value: '2-5', label: '2-5 personnes', description: 'Micro-entreprise' },
  { value: '6-20', label: '6-20 personnes', description: 'TPE' },
  { value: '20+', label: '20+ personnes', description: 'PME / ETI' },
];

const needsList = [
  { value: 'telephonie-ip', label: 'Téléphonie IP' },
  { value: 'internet-fibre', label: 'Internet Fibre' },
  { value: 'mobile-pro', label: 'Mobile Pro' },
  { value: 'standard-cloud', label: 'Standard Cloud' },
  { value: 'portabilite', label: 'Portabilité numéros' },
  { value: 'autre', label: 'Autre' },
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleNeed = (need: string) => {
    const current = formData.needs;
    if (current.includes(need)) {
      updateFormData('needs', current.filter((n) => n !== need));
    } else {
      updateFormData('needs', [...current, need]);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.situation !== '';
      case 2:
        return formData.companySize !== '';
      case 3:
        return formData.needs.length > 0;
      case 4:
        return (
          formData.companyName !== '' &&
          formData.contactName !== '' &&
          formData.email !== '' &&
          formData.phone !== ''
        );
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Demande envoyée !</h3>
        <p className="text-wetel-gray-400 mb-8 max-w-md mx-auto">
          Merci pour votre demande. Un expert WETEL GROUP vous contactera sous 24h pour discuter de vos besoins.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData(initialFormData);
          }}
          className="btn-secondary"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-wetel-gray-500 mb-2">
          <span>Étape {step} sur {totalSteps}</span>
          <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-wetel-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-wetel-orange rounded-full transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Situation */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-2">Dans quelle situation êtes-vous ?</h3>
          <p className="text-wetel-gray-400 mb-8">Sélectionnez l&apos;option qui vous correspond le mieux.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {situations.map((situation) => (
              <button
                key={situation.value}
                onClick={() => updateFormData('situation', situation.value)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                  formData.situation === situation.value
                    ? 'border-wetel-orange bg-wetel-orange/10'
                    : 'border-wetel-gray-700 bg-wetel-gray-800/50 hover:border-wetel-gray-600'
                }`}
              >
                <span className="text-3xl mb-3 block">{situation.icon}</span>
                <span className="text-white font-semibold">{situation.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Company Size */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-2">Quelle est la taille de votre entreprise ?</h3>
          <p className="text-wetel-gray-400 mb-8">Cela nous aide à vous proposer l&apos;offre adaptée.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {companySizes.map((size) => (
              <button
                key={size.value}
                onClick={() => updateFormData('companySize', size.value)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                  formData.companySize === size.value
                    ? 'border-wetel-orange bg-wetel-orange/10'
                    : 'border-wetel-gray-700 bg-wetel-gray-800/50 hover:border-wetel-gray-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Users className={`w-5 h-5 ${formData.companySize === size.value ? 'text-wetel-orange' : 'text-wetel-gray-500'}`} />
                  <span className="text-white font-semibold">{size.label}</span>
                </div>
                <span className="text-sm text-wetel-gray-500">{size.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Needs */}
      {step === 3 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-2">Quels sont vos besoins ?</h3>
          <p className="text-wetel-gray-400 mb-8">Sélectionnez tous les services qui vous intéressent.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {needsList.map((need) => (
              <button
                key={need.value}
                onClick={() => toggleNeed(need.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                  formData.needs.includes(need.value)
                    ? 'border-wetel-orange bg-wetel-orange/10'
                    : 'border-wetel-gray-700 bg-wetel-gray-800/50 hover:border-wetel-gray-600'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                    formData.needs.includes(need.value)
                      ? 'bg-wetel-orange'
                      : 'bg-wetel-gray-700'
                  }`}
                >
                  {formData.needs.includes(need.value) && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="text-white font-medium">{need.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact Info */}
      {step === 4 && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-2">Vos coordonnées</h3>
          <p className="text-wetel-gray-400 mb-8">Dernière étape ! Nous vous recontacterons rapidement.</p>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <Building2 className="w-4 h-4 inline mr-2" />
                  Nom de l&apos;entreprise *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  className="input-field"
                  placeholder="Votre entreprise"
                />
              </div>
              <div>
                <label className="label">
                  <Users className="w-4 h-4 inline mr-2" />
                  Votre nom *
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => updateFormData('contactName', e.target.value)}
                  className="input-field"
                  placeholder="Prénom Nom"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email professionnel *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="input-field"
                  placeholder="contact@entreprise.com"
                />
              </div>
              <div>
                <label className="label">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="input-field"
                  placeholder="01 23 45 67 89"
                />
              </div>
            </div>
            <div>
              <label className="label">Message (optionnel)</label>
              <textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                className="input-field min-h-[120px] resize-none"
                placeholder="Décrivez votre projet ou posez vos questions..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-wetel-gray-800">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-wetel-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuer
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                Envoyer ma demande
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
