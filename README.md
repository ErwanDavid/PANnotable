# PAN Notables

PAN Notables est un site web simple (HTML, CSS, JavaScript) consacre a l'ufologie.

Le but du projet est de proposer une lecture du phenomene PAN (Phenomenes Aeroatiaux Non identifies) en mettant en avant des cas notables, notamment pour:
- leur forte mediatisation,
- les zones d'incertitude qu'ils ont produites,
- les aleas d'information (versions contradictoires, temporalites differentes, recits incomplets ou reinterpretations).

## Intention editoriale

Le site ne cherche pas a imposer une conclusion unique.
Il sert de trame de consultation pour:
- contextualiser des cas connus,
- rassembler des sources de donnees,
- proposer une bibliographie de depart.

## Structure actuelle

- `index.html` : page d'accueil et presentation generale.
- `cases.html` : section PAN notables (cas listes de facon lisible, un sous l'autre).
- `cas/` : fiches detaillees de cas (Washington, Roswell, Nimitz).
- `sources.html` : references de donnees (GEIPAN, NORAD, GitHub, Kaggle, etc.).
- `bibliographie.html` : exemples d'ouvrages pour approfondir.

## Lancer le site

Ouvrir `index.html` dans un navigateur.

Option recommandee dans VS Code:
- utiliser une extension de serveur local (ex: Live Server) pour une navigation fluide entre pages.

## Contribution

Le site est destine a la consultation.
Il n y a pas d ajout de cas depuis l interface web.
Les nouveaux cas et les mises a jour se font uniquement via GitHub (commit/pull request).

## Evolution prevue

- ajout de nouveaux cas et d'une chronologie plus detaillee,
- enrichissement des sources et de la bibliographie,
- ajout possible d'un format de donnees (JSON) pour maintenir le contenu plus facilement.
