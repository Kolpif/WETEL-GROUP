'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce que la fin du RTC et ça veut dire quoi pour mon entreprise ?",
    answer: "Le RTC (Réseau Téléphonique Commuté) est l'ancien réseau téléphonique analogique qui disparaît progressivement. Orange a annoncé l'arrêt total du RTC d'ici 2030. Pour votre entreprise, cela signifie que vos lignes téléphoniques traditionnelles devront être migrées vers la téléphonie IP (sur internet). WETEL GROUP vous accompagne dans cette transition pour planifier la migration et limiter les interruptions."
  },
  {
    question: "Combien de temps prend une migration vers la téléphonie IP ?",
    answer: "La durée de migration dépend de la complexité de votre installation. Pour une TPE avec 1-2 lignes, comptez 1 à 2 semaines. Pour une PME avec un standard téléphonique, prévoyez 2 à 4 semaines. Nous assurons une transition en douceur avec maintien de vos numéros existants (portabilité) et formation de vos équipes."
  },
  {
    question: "Est-ce que je peux garder mon numéro de téléphone actuel ?",
    answer: "Absolument ! La portabilité de vos numéros est incluse dans toutes nos offres. Vos clients, fournisseurs et partenaires continueront à vous joindre sur vos numéros habituels. Le processus de portabilité est géré intégralement par nos équipes."
  },
  {
    question: "Quelle est la différence entre vos packs ?",
    answer: "Nos packs sont dimensionnés selon la taille de votre entreprise. Le pack Starter Pro convient aux indépendants et micro-entreprises (1 ligne fixe, 1 mobile). Le pack Business Pro est idéal pour les TPE/PME (2 lignes, 2 mobiles, standard cloud). Le pack Entreprise Pro s'adresse aux structures plus importantes avec des besoins avancés (5 lignes, 3 mobiles, supervision)."
  },
  {
    question: "Que se passe-t-il si j'ai un problème technique ?",
    answer: "Vous contactez notre assistance avec la référence de votre installation. Les horaires, prestations incluses et éventuels délais garantis sont ceux de votre offre. La maintenance, si commandée avec une première année offerte, devient payante au treizième mois au prix accepté dès la signature. Le devis précise les interventions, pièces et déplacements couverts."
  },
  {
    question: "La fibre est-elle obligatoire pour la téléphonie IP ?",
    answer: "Non, la téléphonie IP fonctionne aussi avec une connexion ADSL/VDSL. Cependant, la fibre offre une meilleure qualité audio, plus de stabilité et permet de gérer plus d'appels simultanés. Nous testons systématiquement l'éligibilité de votre adresse et vous proposons la meilleure solution disponible."
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Le devis distingue les abonnements, consommations hors forfait, loyers de matériel, installation et maintenance. Exemple de maintenance : 17 € HT d’assistance + 8 € HT pour un poste + 5 € HT pour un routeur, soit 30 € HT par mois au treizième mois si la première année est offerte. Quantités, durée et prix total sont acceptés avant signature."
  },
  {
    question: "Puis-je tester avant de m'engager ?",
    answer: "Nous proposons un audit gratuit de votre installation actuelle et une étude personnalisée de vos besoins. Vous recevez un devis complet sans engagement. Certains équipements peuvent être testés sur une période d'essai de 30 jours (selon conditions)."
  },
  {
    question: "Comment fonctionne le standard téléphonique cloud ?",
    answer: "Le standard cloud remplace les autocommutateurs physiques traditionnels. Il permet de gérer vos appels entrants (accueil vocal, distribution aux postes, musique d'attente), les renvois d'appels, la messagerie vocale unifiée et les statistiques d'appels. Tout se configure depuis une interface web simple, accessible partout."
  },
  {
    question: "Quels sont les délais pour obtenir un devis ?",
    answer: "Vous recevez un devis personnalisé sous 24 heures ouvrées après notre premier échange. Ce devis comprend l'analyse de vos besoins, les solutions recommandées, le détail des tarifs et le planning d'installation prévisionnel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-wetel-canvas relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-20" />

      <div className="container-wide relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-wetel-orange" />
            <span className="text-sm font-medium text-wetel-orange">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-wetel-ink mb-4">
            Questions <span className="text-gradient-orange">fréquentes</span>
          </h2>
          <p className="text-xl text-wetel-muted max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur la transition télécom de votre entreprise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-wetel-orange/30' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-wetel-ink pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-wetel-orange flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-wetel-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-wetel-muted mb-4">
              Vous avez d&apos;autres questions ?
            </p>
            <a
              href="https://wa.me/33189293421"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-5 h-5" />
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
