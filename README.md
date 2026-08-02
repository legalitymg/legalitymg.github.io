# Legality Madagascar Firm

Site professionnel en français pour Legality Madagascar Firm, cabinet juridique
implanté à Antananarivo, Madagascar.

## Pages incluses

- accueil ;
- présentation du cabinet ;
- onze domaines d’intervention ;
- formulaire guidé de consultation avec transmission par WhatsApp ;
- conseils et actualités juridiques ;
- contact ;
- mentions légales ;
- politique de confidentialité ;
- plan du site et instructions destinées aux moteurs de recherche.

## Coordonnées publiées

- Téléphone : +261 34 85 510 97
- E-mail : legalitymadagascarfirm@gmail.com
- Adresse : LOT PR II E 67 JC BIS, Tsarahonenana, Antananarivo 101, Madagascar

Le site ne publie aucune information présentant une personne comme propriétaire,
fondatrice ou dirigeante du cabinet.

## Lancer le site localement

Prérequis : Node.js 22 ou plus récent.

```bash
npm ci
npx next dev
```

Puis ouvrir `http://localhost:3000`.

## Tester la version GitHub Pages

```bash
EXPORT_GITHUB_PAGES=true \
NEXT_PUBLIC_SITE_URL=https://legality.mg \
npx next build
```

Les fichiers statiques sont générés dans `out/`.

## Publication

Le workflow `.github/workflows/deploy-pages.yml` construit et publie le site
automatiquement sur GitHub Pages après chaque envoi sur la branche `main`.

Consultez [GUIDE-GITHUB.md](GUIDE-GITHUB.md) pour la procédure complète.

## Contenu et design

- `app/` : pages et référencement ;
- `components/` : navigation, formulaire, icônes et données éditoriales ;
- `public/` : ressources publiques ;
- `app/globals.css` : identité visuelle, responsive design et animations.

## Avant la publication définitive

Les mentions légales, les horaires, l’adresse et les formulations
professionnelles doivent être confirmés par les responsables du cabinet.
