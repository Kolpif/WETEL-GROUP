'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, PhoneCall, ThumbsUp, Clock } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 850,
    suffix: '+',
    label: 'Entreprises accompagnées',
    description: 'PME et grands comptes',
  },
  {
    icon: PhoneCall,
    value: 12500,
    suffix: '+',
    label: 'Lignes migrées',
    description: 'Vers la téléphonie IP',
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: '%',
    label: 'Clients satisfaits',
    description: 'Taux de satisfaction',
  },
  {
    icon: Clock,
    value: 24,
    suffix: 'h',
    label: 'Réponse garantie',
    description: 'Délai de réponse max',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl lg:text-6xl font-bold text-white">
      {count.toLocaleString('fr-FR')}
      <span className="text-wetel-orange">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-wetel-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-wetel-orange/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Des résultats qui{' '}
            <span className="text-gradient-orange">parlent d&apos;eux-mêmes</span>
          </h2>
          <p className="text-xl text-wetel-gray-400 max-w-2xl mx-auto">
            WETEL GROUP, c&apos;est une équipe d&apos;experts passionnés au service de votre transition télécom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-glow p-8 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wetel-orange/10 rounded-2xl mb-6 group-hover:bg-wetel-orange/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-wetel-orange" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-wetel-gray-500">{stat.description}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-wetel-orange rounded-full group-hover:w-1/2 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
