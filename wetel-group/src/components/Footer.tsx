import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'Téléphonie IP', href: '/solutions#telephonie-ip' },
    { name: 'Internet Pro', href: '/solutions#internet-pro' },
    { name: 'Mobile Pro', href: '/solutions#mobile-pro' },
    { name: 'Standard Cloud', href: '/solutions#standard-cloud' },
  ],
  offres: [
    { name: 'Starter Pro', href: '/offres#starter' },
    { name: 'Business Pro', href: '/offres#business' },
    { name: 'Entreprise Pro', href: '/offres#entreprise' },
  ],
  ressources: [
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Fin du RTC', href: '/blog/fin-rtc-guide-complet' },
    { name: 'Guide migration', href: '/blog/migration-fibre-entreprise' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Politique RGPD', href: '/rgpd' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-wetel-surface border-t border-wetel-line">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-wetel-orange rounded-xl flex items-center justify-center">
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
              <div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-wetel-orange">WETEL</span>
                  <span className="text-wetel-ink"> GROUP</span>
                </span>
              </div>
            </Link>

            <p className="text-wetel-muted mb-6 leading-relaxed">
              Intégrateur télécom expert B2B. Nous accompagnons les entreprises dans leur transition vers la téléphonie IP et la fibre professionnelle.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0188812227"
                className="flex items-center gap-3 text-wetel-muted hover:text-wetel-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>01 88 81 22 27</span>
              </a>
              <a
                href="mailto:contact@wetelgroup.com"
                className="flex items-center gap-3 text-wetel-muted hover:text-wetel-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@wetelgroup.com</span>
              </a>
              <div className="flex items-start gap-3 text-wetel-muted">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>25 rue Tronchet<br />75008 Paris</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com/company/wetelgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wetel-surface-soft rounded-lg flex items-center justify-center text-wetel-muted hover:bg-wetel-orange hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/wetelgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wetel-surface-soft rounded-lg flex items-center justify-center text-wetel-muted hover:bg-wetel-orange hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/wetelgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wetel-surface-soft rounded-lg flex items-center justify-center text-wetel-muted hover:bg-wetel-orange hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-wetel-ink font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-wetel-muted hover:text-wetel-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offres */}
          <div>
            <h3 className="text-wetel-ink font-semibold mb-4">Offres</h3>
            <ul className="space-y-3">
              {footerLinks.offres.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-wetel-muted hover:text-wetel-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-wetel-ink font-semibold mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-wetel-muted hover:text-wetel-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-wetel-ink font-semibold mb-4">Informations</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-wetel-muted hover:text-wetel-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-wetel-line">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-wetel-muted">
            <div>
              © {new Date().getFullYear()} WETEL GROUP - SIREN 979 507 639 - Tous droits réservés
            </div>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="hover:text-wetel-orange transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgv" className="hover:text-wetel-orange transition-colors">
                CGV
              </Link>
              <Link href="/rgpd" className="hover:text-wetel-orange transition-colors">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
