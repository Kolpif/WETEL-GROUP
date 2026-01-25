import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: { default: 'WETEL GROUP | Intégrateur Télécom Expert B2B', template: '%s | WETEL GROUP' },
  description: 'WETEL GROUP accompagne les entreprises dans leur transition vers la téléphonie IP et la fibre professionnelle. Un interlocuteur unique pour tous vos besoins télécoms.',
  keywords: ['téléphonie IP', 'fibre entreprise', 'télécom B2B', 'fin du RTC', 'migration téléphonique', 'standard cloud', 'Paris'],
  metadataBase: new URL('https://www.wetelgroup.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.wetelgroup.com',
    siteName: 'WETEL GROUP',
    title: 'WETEL GROUP | Intégrateur Télécom Expert B2B',
    description: 'Accompagnement dans la transition vers la téléphonie IP et la fibre professionnelle.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
