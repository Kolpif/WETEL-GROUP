'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const timelineEvents = [
  {
    year: '2019',
    title: 'Annonce officielle',
    description: 'Orange annonce la fin progressive du RTC (réseau téléphonique commuté)',
    status: 'completed',
    icon: CheckCircle,
    color: 'green',
  },
  {
    year: '2020-2023',
    title: 'Période de transition',
    description: 'Début de la migration massive des entreprises vers la fibre et l\'IP',
    status: 'completed',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    year: '2024-2025',
    title: 'Phase critique',
    description: 'Accélération de la fermeture du réseau cuivre dans certaines zones',
    status: 'current',
    icon: AlertTriangle,
    color: 'orange',
  },
  {
    year: '2026-2030',
    title: 'Fin du RTC',
    description: 'Extinction définitive du réseau cuivre, migration obligatoire vers IP',
    status: 'upcoming',
    icon: Calendar,
    color: 'purple',
  },
];

const migrationData = [
  { year: '2020', percentage: 15, label: '15%' },
  { year: '2021', percentage: 32, label: '32%' },
  { year: '2022', percentage: 51, label: '51%' },
  { year: '2023', percentage: 68, label: '68%' },
  { year: '2024', percentage: 82, label: '82%' },
  { year: '2025', percentage: 95, label: '95%' },
];

export default function RTCTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-br from-wetel-gray-900 via-wetel-gray-800 to-wetel-gray-900">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Timeline de la{' '}
            <span className="text-gradient-orange">fin du RTC</span>
          </h2>
          <p className="text-xl text-wetel-gray-400 max-w-3xl mx-auto">
            Comprendre les étapes clés de la transition du réseau cuivre vers la téléphonie IP
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-wetel-green via-wetel-blue via-wetel-orange to-wetel-purple rounded-full" />

          {/* Timeline Events */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={event.year}
                  className="relative"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Event Card */}
                  <div
                    className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-br from-wetel-' + event.color + '/20 to-transparent scale-105 shadow-glow-md'
                        : 'bg-wetel-gray-800/50 hover:bg-wetel-gray-800'
                    }`}
                    style={{
                      boxShadow: isActive
                        ? `0 0 30px rgba(${event.color === 'green' ? '0, 217, 163' : event.color === 'blue' ? '0, 168, 232' : event.color === 'orange' ? '255, 107, 53' : '155, 114, 255'}, 0.3)`
                        : 'none',
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                        event.color === 'green'
                          ? 'bg-wetel-green/20'
                          : event.color === 'blue'
                          ? 'bg-wetel-blue/20'
                          : event.color === 'orange'
                          ? 'bg-wetel-orange/20'
                          : 'bg-wetel-purple/20'
                      }`}
                    >
                      <IconComponent
                        className={`w-7 h-7 ${
                          event.color === 'green'
                            ? 'text-wetel-green'
                            : event.color === 'blue'
                            ? 'text-wetel-blue'
                            : event.color === 'orange'
                            ? 'text-wetel-orange'
                            : 'text-wetel-purple'
                        }`}
                      />
                    </div>

                    {/* Year */}
                    <div
                      className={`text-2xl font-bold mb-2 ${
                        event.color === 'green'
                          ? 'text-wetel-green'
                          : event.color === 'blue'
                          ? 'text-wetel-blue'
                          : event.color === 'orange'
                          ? 'text-wetel-orange'
                          : 'text-wetel-purple'
                      }`}
                    >
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-wetel-gray-400">{event.description}</p>

                    {/* Status Badge */}
                    <div className="mt-4">
                      {event.status === 'completed' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-wetel-green/20 text-wetel-green text-xs font-semibold rounded-full">
                          ✓ Complété
                        </span>
                      )}
                      {event.status === 'current' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-wetel-orange/20 text-wetel-orange text-xs font-semibold rounded-full animate-pulse">
                          ⚡ En cours
                        </span>
                      )}
                      {event.status === 'upcoming' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-wetel-purple/20 text-wetel-purple text-xs font-semibold rounded-full">
                          ⏳ À venir
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                      event.color === 'green'
                        ? 'bg-wetel-green border-wetel-gray-900'
                        : event.color === 'blue'
                        ? 'bg-wetel-blue border-wetel-gray-900'
                        : event.color === 'orange'
                        ? 'bg-wetel-orange border-wetel-gray-900'
                        : 'bg-wetel-purple border-wetel-gray-900'
                    } ${isActive ? 'scale-150' : 'scale-100'}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Migration Progress Chart */}
        <div className="bg-wetel-gray-800/50 rounded-3xl p-8 border border-wetel-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Progression de la migration vers l'IP
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {migrationData.map((data, index) => (
              <div key={data.year} className="flex flex-col items-center gap-4">
                {/* Bar */}
                <div className="w-full h-48 bg-wetel-gray-700 rounded-xl overflow-hidden relative">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-wetel-blue via-wetel-green to-wetel-orange transition-all duration-1000 ease-out"
                    style={{
                      height: `${data.percentage}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-3">
                    <span className="text-white font-bold text-lg drop-shadow-lg">
                      {data.label}
                    </span>
                  </div>
                </div>
                {/* Year Label */}
                <span className="text-wetel-gray-400 font-semibold">{data.year}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-wetel-gray-500 mt-6 text-sm">
            Pourcentage d'entreprises ayant migré vers la téléphonie IP
          </p>
        </div>
      </div>
    </section>
  );
}
