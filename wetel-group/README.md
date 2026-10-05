# WETEL GROUP - Site Web Professionnel

Site vitrine B2B pour WETEL GROUP, intégrateur télécom expert spécialisé dans l'accompagnement des entreprises vers la téléphonie IP et la fibre professionnelle.

## 🚀 Technologies

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Animations**: CSS natives + Framer Motion
- **Déploiement**: Vercel-ready

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── layout.tsx            # Layout principal
│   ├── globals.css           # Styles globaux
│   ├── solutions/            # Page solutions
│   ├── offres/               # Page offres & tarifs
│   ├── contact/              # Page contact (formulaire multi-étapes)
│   ├── blog/                 # Blog avec articles
│   ├── mentions-legales/     # Mentions légales
│   ├── cgv/                  # CGV télécom B2B
│   └── rgpd/                 # Politique RGPD
├── components/
│   ├── Header.tsx            # Navigation avec mega-menu
│   ├── Footer.tsx            # Pied de page
│   ├── WhatsAppButton.tsx    # Bouton WhatsApp flottant
│   ├── CookieBanner.tsx      # Bandeau cookies RGPD
│   └── home/
│       ├── Hero.tsx          # Section hero avec parallax
│       ├── EligibilityWidget.tsx  # Widget test éligibilité fibre
│       ├── Stats.tsx         # Chiffres clés animés
│       ├── Comparator.tsx    # Comparateur avant/après
│       ├── PackCalculator.tsx # Calculateur de pack
│       └── FAQ.tsx           # FAQ accordéon
```

## ✨ Fonctionnalités

### Pages principales
- **Accueil**: Hero avec parallax, services, stats, comparateur, calculateur, FAQ
- **Solutions**: Détail des 4 solutions (Téléphonie IP, Internet Pro, Mobile Pro, Standard Cloud)
- **Offres**: 3 packs (Starter 59€, Business 99€, Entreprise 169€)
- **Blog**: 3 articles éducatifs sur la fin du RTC, migration fibre, standard cloud
- **Contact**: Formulaire multi-étapes avec qualification des leads

### Composants interactifs
- Demande d’étude d’éligibilité fibre avec adresse transmise au formulaire
- Calculateur de pack personnalisé
- Comparateur avant/après WETEL
- FAQ accordéon
- Formulaire de contact multi-étapes

### Design
- Palette: Orange terre cuite (#C2410C), blanc et bleu nuit
- Typographie: Outfit (display) + Plus Jakarta Sans (body)
- Animations subtiles sur scroll et hover
- Responsive mobile-first
- Thème clair sur toutes les pages, contrastes lisibles et animations réduites selon les préférences système

### Légal & RGPD
- Bandeau cookies fonctionnel avec stockage préférences
- CGV télécom B2B complètes
- Mentions légales
- Politique RGPD

## 🔧 Configuration

### Variables d'environnement (optionnel)

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API endpoints (si backend)
NEXT_PUBLIC_API_URL=https://api.wetelgroup.com
```

### Personnalisation

Les informations de l'entreprise sont centralisées :
- Logo/branding: `src/components/Header.tsx` et `Footer.tsx`
- Contact: `contact@wetelgroup.com`, `01 88 81 22 27`
- Adresse: 25 rue Tronchet, 75008 Paris
- SIREN: 979 507 639

## 📱 SEO & Performance

- Métadonnées complètes (Open Graph, Twitter Cards)
- Structure sémantique HTML5
- Images optimisées (Next.js Image)
- Code splitting automatique
- Target: Google PageSpeed 95+

## 🚀 Déploiement Vercel

1. Push le code sur GitHub
2. Connecter le repo à Vercel
3. Déployer automatiquement

```bash
# Ou via CLI
npx vercel
```

## 📄 Licence

Propriétaire - WETEL GROUP © 2024
