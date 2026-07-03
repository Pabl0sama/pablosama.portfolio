# Portfolio — Administrateur Systèmes & Réseaux

Site statique (HTML/CSS/JS pur, aucune dépendance à installer). Prêt à personnaliser puis à mettre en ligne.

## Fichiers

- `index.html` — contenu et structure
- `style.css` — mise en page et thème
- `script.js` — compteur d'uptime, menu mobile, animations au scroll, copie de l'email

## À personnaliser avant publication

Cherchez les crochets `[...]` dans `index.html` et remplacez-les :

- `[Ville, Pays]` — votre localisation (hero)
- `[X années]`, `[X %]`, `[X serveurs]`, `[X sites]` — vos chiffres réels
- `[Nom de l'entreprise]`, `[Ville]` — expériences (section Expérience)
- `[+33 6 00 00 00 00]` — téléphone
- `[votre-profil]` — LinkedIn et GitHub
- `contact@alexmartin.dev` — votre vraie adresse email (2 endroits : lien `mailto:` et texte affiché)
- Le nom "Alex Martin" apparaît dans `<title>`, le logo `AM`, et le footer — remplacez-le par le vôtre
- Ajoutez un fichier `cv.pdf` à la racine (à côté d'`index.html`) pour que le bouton "Télécharger le CV" fonctionne, ou changez le lien

## Personnaliser le style

Toutes les couleurs et polices sont centralisées en haut de `style.css` dans `:root` :

```css
--bg: #f6f7f6;        /* fond de page */
--accent: #2f6f6e;    /* couleur d'accent (teal) */
--ink: #14181b;       /* texte principal */
```

Changez ces variables pour ajuster toute la palette d'un coup.

## Tester en local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

puis rendez-vous sur `http://localhost:8000`.

## Mettre en ligne (gratuit)

**Option 1 — Netlify (le plus simple)**
1. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glissez-déposez le dossier entier
3. Votre site est en ligne en quelques secondes, avec une URL que vous pouvez personnaliser

**Option 2 — GitHub Pages**
1. Créez un dépôt GitHub et poussez ces fichiers à la racine
2. Dans les paramètres du dépôt → *Pages* → *Deploy from branch* → branche `main`, dossier `/root`
3. Votre site sera accessible à `https://votre-pseudo.github.io/nom-du-repo`

**Option 3 — Vercel**
1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Importez le dossier ou le dépôt GitHub, aucune configuration nécessaire (site statique)

Dans tous les cas, aucun build n'est requis : ce sont des fichiers statiques prêts à l'emploi.
