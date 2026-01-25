'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Nos Solutions',
    href: '/solutions',
    children: [
      { name: 'Téléphonie IP', href: '/solutions#telephonie-ip', description: 'Solutions de téléphonie moderne sur IP' },
      { name: 'Internet Pro', href: '/solutions#internet-pro', description: 'Connexions fibre et ADSL professionnelles' },
      { name: 'Mobile Pro', href: '/solutions#mobile-pro', description: 'Forfaits mobiles dédiés aux entreprises' },
      { name: 'Standard Cloud', href: '/solutions#standard-cloud', description: 'Gestion centralisée de vos appels' },
    ],
  },
  {
    name: 'Offres & Tarifs',
    href: '/offres',
    children: [
      { name: 'Starter Pro', href: '/offres#starter', description: 'Idéal pour les indépendants' },
      { name: 'Business Pro', href: '/offres#business', description: 'Notre pack le plus populaire', badge: 'Populaire' },
      { name: 'Entreprise Pro', href: '/offres#entreprise', description: 'Pour les équipes en croissance' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-wetel-gray-900 border-b border-wetel-gray-800">
        <div className="container-wide">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:0189293421" className="flex items-center gap-2 text-wetel-gray-400 hover:text-wetel-orange transition-colors">
                <Phone className="w-4 h-4" />
                <span>01 89 29 34 21</span>
              </a>
              <a href="mailto:contact@wetelgroup.com" className="flex items-center gap-2 text-wetel-gray-400 hover:text-wetel-orange transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@wetelgroup.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-wetel-gray-500">Experts télécom B2B depuis 2020</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-wetel-black/95 backdrop-blur-xl border-b border-wetel-gray-800 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-wetel-orange rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-glow-sm">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <circle cx="6" cy="6" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="6" cy="18" r="2" />
                    <circle cx="18" cy="18" r="2" />
                    <circle cx="12" cy="12" r="2.5" />
                    <line x1="6" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="18" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="6" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="18" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-wetel-orange">WETEL</span>
                  <span className="text-white"> GROUP</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeDropdown === item.name
                        ? 'text-wetel-orange bg-wetel-orange/10'
                        : 'text-wetel-gray-300 hover:text-white hover:bg-wetel-gray-800/50'
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="bg-wetel-gray-900 border border-wetel-gray-800 rounded-xl p-2 shadow-2xl min-w-[280px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-wetel-gray-800 group/item"
                          >
                            <div className="w-10 h-10 bg-wetel-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-wetel-orange/20">
                              <div className="w-2 h-2 bg-wetel-orange rounded-full" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white group-hover/item:text-wetel-orange transition-colors">
                                  {child.name}
                                </span>
                                {child.badge && (
                                  <span className="px-2 py-0.5 bg-wetel-orange text-white text-xs font-bold rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-wetel-gray-500">
                                {child.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/33189293421"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-wetel-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link href="/contact" className="btn-primary text-sm !py-3 !px-6">
                Demander un devis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-wetel-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-wetel-gray-900 shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-wetel-gray-800">
              <span className="text-lg font-bold">
                <span className="text-wetel-orange">WETEL</span>
                <span className="text-white"> GROUP</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-wetel-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-white font-medium rounded-lg hover:bg-wetel-gray-800 transition-colors"
                    >
                      {item.name}
                      {item.children && <ChevronDown className="w-4 h-4 text-wetel-gray-500" />}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-wetel-gray-400 rounded-lg hover:text-wetel-orange hover:bg-wetel-gray-800/50 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-wetel-orange/50 rounded-full" />
                            {child.name}
                            {child.badge && (
                              <span className="px-2 py-0.5 bg-wetel-orange text-white text-xs font-bold rounded-full">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-wetel-gray-800 space-y-4">
              <a
                href="tel:0189293421"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-wetel-gray-800 text-white font-medium rounded-xl hover:bg-wetel-gray-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                01 89 29 34 21
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
