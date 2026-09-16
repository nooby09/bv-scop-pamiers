# BV SCOP — Pamiers

Site vitrine de **BV SCOP**, entreprise coopérative (SCOP) créée en 1992 à Pamiers, en Ariège, spécialisée dans l'électricité, les réseaux et les énergies renouvelables.

## Lien du site

https://nooby09.github.io/bv-scop-pamiers/ *(déployé via GitHub Pages)*

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Express (serveur de production pour les fichiers statiques)
- wouter (routage)

## Démarrage

```bash
pnpm install
pnpm dev
```

Le site est servi sur `http://localhost:3000`.

## Scripts

| Commande | Description |
| --- | --- |
| `pnpm dev` | Serveur de développement Vite |
| `pnpm build` | Build de production (`dist/public` + serveur) |
| `pnpm start` | Lance le serveur Express en production |
| `pnpm check` | Vérification TypeScript |
| `pnpm format` | Formatage Prettier |

## Structure

```
client/          Application React (pages, composants, styles)
  src/pages/     Pages (Home, NotFound)
server/          Serveur Express de production
shared/          Constantes partagées
```

## Contenu

Les informations affichées (coordonnées, activités, description) sont publiques et doivent être validées par l'entreprise avant toute mise en ligne définitive.