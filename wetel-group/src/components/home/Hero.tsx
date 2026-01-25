'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Shield, Clock, Users } from 'lucide-react';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-wetel-black">
        {/* Parallax Grid */}
        <div ref={parallaxRef} className="absolute inset-0 network-pattern opacity-50" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wetel-orange/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-wetel-orange/5 rounded-full blur-[100px] animate-pulse-slow animate-delay-300" />
        
        {/* Floating Network Nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-wetel-orange/20 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="absolute inset-0 bg-wetel-orange/40 rounded-full animate-ping" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-wetel-orange/10 border border-wetel-orange/20 rounded-full animate-fade-in">
              <span className="w-2 h-2 bg-wetel-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium text-wetel-orange">
                Fin du RTC : préparez votre transition
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in-up">
              <span className="text-white">Votre partenaire</span>
              <br />
              <span className="text-gradient-orange">télécom expert</span>
              <br />
              <span className="text-white">pour les pros</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-wetel-gray-400 max-w-xl leading-relaxed animate-fade-in-up animate-delay-200">
              WETEL GROUP accompagne les entreprises dans leur transition vers la téléphonie IP et la fibre. 
              Un interlocuteur unique pour tous vos besoins télécoms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animate-delay-300">
              <Link href="/contact" className="btn-primary group">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/#eligibilite" className="btn-secondary group">
                <Play className="w-5 h-5" />
                Tester mon éligibilité
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-4 animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wetel-gray-800 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-wetel-orange" />
                </div>
                <div>
                  <p className="text-white font-semibold">Sans engagement</p>
                  <p className="text-sm text-wetel-gray-500">Devis gratuit</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wetel-gray-800 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-wetel-orange" />
                </div>
                <div>
                  <p className="text-white font-semibold">Réponse rapide</p>
                  <p className="text-sm text-wetel-gray-500">Sous 24h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wetel-gray-800 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-wetel-orange" />
                </div>
                <div>
                  <p className="text-white font-semibold">Expert dédié</p>
                  <p className="text-sm text-wetel-gray-500">Un seul contact</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Card */}
          <div className="hidden lg:block relative">
            <div className="relative animate-fade-in-up animate-delay-300">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-wetel-gray-900 to-wetel-gray-800 rounded-3xl p-8 border border-wetel-gray-700 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-wetel-orange/20 to-transparent rounded-3xl blur-xl opacity-50" />
                
                <div className="relative">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-wetel-orange rounded-full animate-pulse" />
                      <span className="text-wetel-gray-400 text-sm font-medium">Tableau de bord</span>
                    </div>
                    <div className="text-wetel-orange text-sm font-semibold">En direct</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="p-4 bg-wetel-gray-800/50 rounded-xl">
                      <p className="text-wetel-gray-500 text-sm mb-1">Lignes actives</p>
                      <p className="text-3xl font-bold text-white">2,847</p>
                      <p className="text-green-400 text-sm mt-1">+12% ce mois</p>
                    </div>
                    <div className="p-4 bg-wetel-gray-800/50 rounded-xl">
                      <p className="text-wetel-gray-500 text-sm mb-1">Qualité réseau</p>
                      <p className="text-3xl font-bold text-white">99.9%</p>
                      <p className="text-wetel-orange text-sm mt-1">Uptime garanti</p>
                    </div>
                    <div className="p-4 bg-wetel-gray-800/50 rounded-xl">
                      <p className="text-wetel-gray-500 text-sm mb-1">Clients satisfaits</p>
                      <p className="text-3xl font-bold text-white">98%</p>
                      <p className="text-wetel-gray-500 text-sm mt-1">Taux de satisfaction</p>
                    </div>
                    <div className="p-4 bg-wetel-gray-800/50 rounded-xl">
                      <p className="text-wetel-gray-500 text-sm mb-1">Support 24/7</p>
                      <p className="text-3xl font-bold text-white">&lt;2h</p>
                      <p className="text-wetel-gray-500 text-sm mt-1">Temps de réponse</p>
                    </div>
                  </div>

                  {/* Connection Visual */}
                  <div className="flex items-center justify-center gap-4 p-4 bg-wetel-orange/10 rounded-xl border border-wetel-orange/20">
                    <div className="w-10 h-10 bg-wetel-orange rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Votre téléphonie connectée</p>
                      <p className="text-sm text-wetel-gray-400">IP · Mobile · Standard Cloud</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">Actif</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-wetel-orange/20 rounded-2xl flex items-center justify-center animate-float border border-wetel-orange/30">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-wetel-orange" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-wetel-gray-800 rounded-2xl flex items-center justify-center animate-float animate-delay-200 border border-wetel-gray-700">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-wetel-orange" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-wetel-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-wetel-orange rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
