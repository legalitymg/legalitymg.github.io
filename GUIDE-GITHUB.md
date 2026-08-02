# Mettre Legality Madagascar Firm en ligne

Ce guide accompagne l’archive complète du site. Le projet est déjà configuré
pour être publié automatiquement avec GitHub Pages.

## Résultat recherché

- Organisation GitHub recommandée : `legalitymg`
- Dépôt du site : `legalitymg.github.io`
- Adresse technique GitHub Pages : `https://legalitymg.github.io`
- Adresse publique officielle : `https://legality.mg`
- Publication automatique après chaque mise à jour de la branche `main`

> Si `legalitymg` est déjà pris, choisissez un nom court comme
> `legality-madagascar`. Le dépôt devra alors s’appeler exactement
> `legality-madagascar.github.io`.

## 1. Choisir la bonne propriété GitHub

Il ne faut pas créer un compte collectif avec un mot de passe partagé.

La structure recommandée est :

1. chaque administrateur conserve son propre compte GitHub personnel ;
2. un administrateur crée une organisation GitHub appelée `legalitymg` ;
3. les personnes autorisées peuvent devenir propriétaires de l’organisation ;
5. chacun utilise son propre mot de passe et active l’authentification à deux
   facteurs ;
6. la visibilité de leur appartenance à l’organisation reste **Private**.

L’organisation représente publiquement le cabinet. Les comptes personnels
servent seulement à administrer le site. La propriété du cabinet n’est donc pas
présentée sur le site.

## 2. Créer l’organisation GitHub

1. Connectez-vous à [GitHub](https://github.com).
2. Cliquez sur la photo du profil, puis **Your organizations**.
3. Cliquez sur **New organization**.
4. Choisissez l’offre **Free**.
5. Entrez `legalitymg` comme nom, si ce nom est disponible.
6. Utilisez une adresse électronique administrative contrôlée par le cabinet.
7. Terminez la création.
8. Dans **People**, invitez le deuxième administrateur.
9. Attribuez le rôle **Owner** uniquement aux personnes qui doivent pouvoir
   gérer toute l’organisation.
10. Dans la liste des membres, vérifiez que la visibilité est **Private**.

Il est préférable d’avoir au moins deux propriétaires afin que le cabinet ne
perde pas l’accès au site si un compte devient indisponible.

## 3. Créer le dépôt du site

Depuis la page de l’organisation :

1. Cliquez sur **Repositories**, puis **New repository**.
2. Owner : sélectionnez `legalitymg`.
3. Repository name : entrez exactement `legalitymg.github.io`.
4. Description : `Site officiel de Legality Madagascar Firm`.
5. Choisissez **Public** pour utiliser gratuitement GitHub Pages.
6. Ne cochez pas **Add a README**, `.gitignore` ou licence : ils sont déjà
   inclus dans le projet.
7. Cliquez sur **Create repository**.

## 4. Décompresser le code

1. Téléchargez l’archive `legality-madagascar-site-v1.0.zip`.
2. Ouvrez le dossier **Téléchargements**.
3. Double-cliquez sur l’archive.
4. Déplacez le dossier obtenu dans **Documents** afin de ne pas le supprimer par
   erreur.

Le dossier contient le site complet, le design, les pages, les textes, le
formulaire, le référencement et la publication automatique.

## 5. Envoyer le code sur GitHub — méthode Terminal

Sur Mac, ouvrez **Terminal**, puis exécutez les commandes suivantes une par une.
Adaptez seulement le chemin si le dossier a été placé ailleurs.

```bash
cd "$HOME/Documents/legality-madagascar-site"
git init
git add .
git commit -m "Mise en ligne initiale du site"
git branch -M main
git remote add origin https://github.com/legalitymg/legalitymg.github.io.git
git push -u origin main
```

Si Git demande votre identité avant le premier commit :

```bash
git config --global user.name "VOTRE-NOM-GITHUB"
git config --global user.email "VOTRE-EMAIL-GITHUB"
```

Puis relancez :

```bash
git commit -m "Mise en ligne initiale du site"
git branch -M main
git remote add origin https://github.com/legalitymg/legalitymg.github.io.git
git push -u origin main
```

GitHub peut demander une connexion dans le navigateur. Utilisez votre propre
compte ; ne communiquez jamais votre mot de passe ou vos codes de connexion.

## 6. Alternative sans Terminal — GitHub Desktop

1. Installez [GitHub Desktop](https://desktop.github.com/download/).
2. Connectez-y votre compte GitHub.
3. Choisissez **File → Add Local Repository**.
4. Sélectionnez le dossier décompressé.
5. Si GitHub Desktop indique qu’il ne s’agit pas encore d’un dépôt, cliquez sur
   le lien proposé pour créer un dépôt dans ce dossier.
6. Effectuez le premier commit avec le message
   `Mise en ligne initiale du site`.
7. Associez le dépôt distant
   `legalitymg/legalitymg.github.io`.
8. Cliquez sur **Push origin**.

La méthode Terminal est plus directe pour le premier envoi ; GitHub Desktop est
ensuite très pratique pour les mises à jour.

## 7. Activer GitHub Pages

Une fois le code visible dans le dépôt :

1. Ouvrez le dépôt `legalitymg.github.io`.
2. Cliquez sur **Settings**.
3. Dans la colonne de gauche, cliquez sur **Pages**.
4. Dans **Build and deployment**, choisissez **GitHub Actions** comme source.
5. Ouvrez ensuite l’onglet **Actions** du dépôt.
6. Cliquez sur le workflow **Publier le site**.
7. Attendez que les étapes `build` et `deploy` affichent une coche verte.
8. Ouvrez `https://legality.mg`.

Chaque nouveau `git push` sur `main` relancera automatiquement la publication.

## 8. Tester le site localement

Installez [Node.js](https://nodejs.org/) version 22 ou plus récente, puis :

```bash
cd "$HOME/Documents/legality-madagascar-site"
npm ci
npx next dev
```

Ouvrez ensuite `http://localhost:3000`. Arrêtez le serveur avec `Control + C`.

Pour tester exactement la version statique destinée à GitHub Pages :

```bash
EXPORT_GITHUB_PAGES=true \
NEXT_PUBLIC_SITE_URL=https://legality.mg \
npx next build
```

## 9. Modifier le site plus tard

Les fichiers principaux sont :

| Contenu | Fichier |
|---|---|
| Page d’accueil | `app/page.tsx` |
| Présentation du cabinet | `app/cabinet/page.tsx` |
| Domaines d’intervention et articles | `components/site-data.ts` |
| Page des expertises | `app/expertises/page.tsx` |
| Coordonnées | `app/contact/page.tsx` et `components/site-shell.tsx` |
| Formulaire de consultation | `components/consultation-form.tsx` |
| Mentions légales | `app/mentions-legales/page.tsx` |
| Politique de confidentialité | `app/confidentialite/page.tsx` |
| Référencement général | `app/layout.tsx` |
| Couleurs, animations et design | `app/globals.css` |
| Publication automatique | `.github/workflows/deploy-pages.yml` |

Après une modification :

```bash
git add .
git commit -m "Mise à jour du site"
git push
```

## 10. Ajouter un nouvel article

1. Ajoutez les informations de l’article dans `components/site-data.ts`.
2. Utilisez un `slug` court, sans espace ni accent, par exemple
   `recouvrement-creances-madagascar`.
3. Vérifiez l’article localement.
4. Effectuez le commit et le push.

La page dynamique `app/actualites/[slug]/page.tsx` génère automatiquement la
page de chaque article.

## 11. Ajouter un domaine professionnel

Un domaine comme `legality.mg` sera plus court et plus professionnel que
`legalitymg.github.io`.

1. Vérifiez et achetez le domaine auprès d’un fournisseur de domaines `.mg`.
2. Dans GitHub, ouvrez **Settings → Pages**.
3. Dans **Custom domain**, entrez le domaine puis cliquez sur **Save**.
4. Configurez ensuite les enregistrements DNS demandés par GitHub chez le
   fournisseur du domaine.
5. Attendez la validation DNS.
6. Activez **Enforce HTTPS**.

Ajoutez d’abord le domaine dans GitHub, puis configurez les DNS. Ne modifiez pas
les DNS au hasard : utilisez les valeurs affichées dans les paramètres GitHub
Pages.

## 12. Améliorer la présence sur Google

La publication du site ne garantit pas immédiatement la première position.
Pour viser la recherche **Cabinet juridique à Madagascar** :

1. validez les mentions légales et les formulations professionnelles ;
2. créez ou revendiquez le Google Business Profile du cabinet ;
3. utilisez exactement les mêmes nom, téléphone, e-mail et adresse partout ;
4. ajoutez le site à Google Search Console ;
5. envoyez `https://legality.mg/sitemap.xml` ;
6. publiez régulièrement des articles utiles, originaux et précis sur le droit
   à Madagascar ;
7. obtenez des liens depuis des annuaires et partenaires professionnels
   légitimes ;
8. ajoutez le domaine professionnel dès qu’il est disponible.

Le référencement se construit progressivement. Il n’est pas possible de
garantir une première position immédiate.

## 13. Vérifications avant ouverture au public

- Faire valider les mentions légales par le cabinet.
- Confirmer les horaires réellement appliqués.
- Confirmer l’orthographe officielle de l’adresse.
- Tester le téléphone, WhatsApp et l’e-mail.
- Vérifier chaque domaine d’intervention.
- Ne publier aucun nom de propriétaire ou de fondatrice.
- Ne déposer aucun document confidentiel dans le dépôt public.
- Activer l’authentification à deux facteurs sur les comptes administrateurs.
- Conserver au moins deux propriétaires de l’organisation.

## 14. En cas de problème

### Le workflow est rouge

Ouvrez **Actions → Publier le site → run en échec**, puis ouvrez l’étape rouge
pour lire le message. Vérifiez d’abord que tous les fichiers de l’archive ont
été envoyés, y compris le dossier caché `.github`.

### La page affiche une erreur 404

Vérifiez que :

- l’organisation s’appelle bien `legalitymg` ;
- le dépôt s’appelle exactement `legalitymg.github.io` ;
- la source choisie dans **Settings → Pages** est **GitHub Actions** ;
- le workflow est terminé avec une coche verte.

### Les modifications n’apparaissent pas

Attendez la fin du nouveau workflow dans **Actions**, puis rechargez la page
avec `Command + Shift + R`.
