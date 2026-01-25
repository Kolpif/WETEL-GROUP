import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, Phone, Shield, Lock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sécurité de la Téléphonie IP : Guide Complet',
  description: 'Tout savoir sur la sécurisation de votre système de téléphonie IP : menaces, protections, bonnes pratiques.',
};

export default function ArticlePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-wetel-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-narrow relative">
          <Link href="/blog" className="inline-flex items-center gap-2 text-wetel-gray-400 hover:text-wetel-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Retour au blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="badge">Sécurité</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Clock className="w-4 h-4" />9 min</span>
            <span className="flex items-center gap-1 text-sm text-wetel-gray-500"><Calendar className="w-4 h-4" />25 janvier 2025</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Sécuriser sa Téléphonie IP : Le Guide</h1>
          <p className="text-xl text-wetel-gray-400">Menaces, protections et bonnes pratiques pour une VoIP sécurisée en entreprise.</p>
        </div>
      </section>

      <article className="section-padding bg-wetel-gray-900">
        <div className="container-narrow">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Pourquoi sécuriser sa téléphonie IP ?</h2>
            <p className="text-wetel-gray-300 mb-8 text-lg leading-relaxed">
              La téléphonie IP transitant par Internet, elle est exposée aux mêmes risques qu&apos;un système informatique classique : piratage, écoutes clandestines, usurpation d&apos;identité. Une sécurisation rigoureuse est donc indispensable pour protéger vos communications professionnelles.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Les principales menaces</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card p-6 border-l-4 border-red-500">
                <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Vol d&apos;appels (Toll Fraud)</h3>
                <p className="text-wetel-gray-400 text-lg">Des pirates utilisent vos lignes pour passer des appels internationaux à vos frais. Factures de plusieurs milliers d&apos;euros possibles.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-red-500">
                <Lock className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Écoutes clandestines</h3>
                <p className="text-wetel-gray-400 text-lg">Interception de conversations confidentielles si le trafic n&apos;est pas chiffré. Espionnage industriel possible.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-red-500">
                <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Déni de service (DoS)</h3>
                <p className="text-wetel-gray-400 text-lg">Saturation du réseau pour rendre la téléphonie inutilisable. Vos clients ne peuvent plus vous joindre.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-red-500">
                <Shield className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Usurpation d&apos;identité</h3>
                <p className="text-wetel-gray-400 text-lg">Des fraudeurs se font passer pour vous en modifiant le numéro affiché. Arnaque au président possible.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Les protections essentielles</h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  title: 'Chiffrement des communications (TLS/SRTP)',
                  desc: 'Rend les conversations illisibles pour un tiers. Norme obligatoire pour les données sensibles.',
                  level: 'Critique'
                },
                {
                  title: 'Authentification forte',
                  desc: 'Mots de passe complexes + double authentification pour accéder au système.',
                  level: 'Critique'
                },
                {
                  title: 'Pare-feu SIP dédié',
                  desc: 'Filtre les connexions suspectes et bloque les attaques automatisées.',
                  level: 'Essentiel'
                },
                {
                  title: 'Whitelist d&apos;adresses IP',
                  desc: 'Autorise uniquement les connexions depuis des IP connues et approuvées.',
                  level: 'Essentiel'
                },
                {
                  title: 'Limitation des destinations',
                  desc: 'Bloquer les appels vers destinations à risque (numéros surtaxés, certains pays).',
                  level: 'Recommandé'
                },
                {
                  title: 'Monitoring temps réel',
                  desc: 'Alertes automatiques en cas d\'activité anormale (pics d\'appels, destinations inhabituelles).',
                  level: 'Recommandé'
                }
              ].map((protection, i) => (
                <div key={i} className="card p-6 hover:border-wetel-green transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{protection.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      protection.level === 'Critique' 
                        ? 'bg-red-500/20 text-red-400' 
                        : protection.level === 'Essentiel'
                        ? 'bg-wetel-orange/20 text-wetel-orange'
                        : 'bg-wetel-blue/20 text-wetel-blue'
                    }`}>
                      {protection.level}
                    </span>
                  </div>
                  <p className="text-wetel-gray-400 text-lg">{protection.desc}</p>
                </div>
              ))}
            </div>

            <div className="card p-8 border-l-4 border-wetel-green mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">✅ Avec WETEL GROUP</h3>
              <ul className="space-y-3 text-lg">
                <li className="text-wetel-gray-300">🔒 Chiffrement TLS/SRTP activé par défaut</li>
                <li className="text-wetel-gray-300">🛡️ Pare-feu SIP professionnel inclus</li>
                <li className="text-wetel-gray-300">👁️ Monitoring 24/7 avec alertes automatiques</li>
                <li className="text-wetel-gray-300">🔐 Authentification forte obligatoire</li>
                <li className="text-wetel-gray-300">📊 Rapports d&apos;activité hebdomadaires</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Bonnes pratiques utilisateurs</h2>
            <div className="space-y-4 mb-12">
              {[
                'Ne jamais partager vos identifiants de connexion',
                'Utiliser des mots de passe complexes (12+ caractères)',
                'Changer les mots de passe par défaut immédiatement',
                'Ne pas installer de téléphones IP non certifiés',
                'Signaler toute activité suspecte au support',
                'Former vos équipes aux risques (phishing, social engineering)'
              ].map((tip, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-wetel-gray-800/50 rounded-xl">
                  <div className="w-8 h-8 bg-wetel-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <p className="text-wetel-gray-300 text-lg">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-wetel-green/10 to-transparent rounded-2xl border border-wetel-green/20">
            <h3 className="text-2xl font-bold text-white mb-4">Téléphonie IP sécurisée avec WETEL</h3>
            <p className="text-wetel-gray-400 mb-6 text-lg">Protégez vos communications avec notre solution sécurisée par défaut.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Demander un audit<ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:0188812227" className="btn-secondary"><Phone className="w-5 h-5" />01 88 81 22 27</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
