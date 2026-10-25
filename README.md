# ShowroomAuto — Projet Angular

## Présentation du projet

ShowroomAuto est une application web développée avec Angular dans le cadre du TP2 du cours Angular.

L'objectif de ce projet est de créer un showroom automobile interactif permettant aux utilisateurs de consulter différentes voitures, de rechercher des modèles, de filtrer les résultats et d'afficher les détails de chaque véhicule.

J'ai également essayé d'enrichir l'application de départ en ajoutant de nouvelles fonctionnalités et en améliorant son design avec CSS.

## Fonctionnalités

Voici les principales fonctionnalités de mon application :

- **Recherche :** rechercher des voitures par marque.
- **Filtre par marque :** sélectionner une marque précise.
- **Filtre par prix :** afficher les voitures selon un prix maximum.
- **Tri :** classer les voitures par prix croissant ou décroissant.
- **Disponibilité :** filtrer les voitures disponibles en stock.
- **Favoris :** ajouter ou retirer une voiture des favoris en cliquant sur le cœur.
- **Show Favorites :** afficher uniquement les voitures ajoutées aux favoris.
- **Reset filters :** réinitialiser les filtres en un seul clic.
- **See more :** ouvrir une fenêtre contenant la photo, la description et les informations de la voiture.
- **Compteur :** afficher le nombre de voitures correspondant aux filtres.

## Améliorations du design

J'ai aussi travaillé sur l'apparence de l'application pour rendre son utilisation plus agréable :

- Un en-tête avec une image de voiture et un fond dégradé.
- Un thème violet avec des ombres et des bordures arrondies.
- Des animations sur les cartes des voitures.
- Une barre de recherche et des filtres mieux organisés.
- Une fenêtre pour afficher les détails des voitures.
- Des boutons interactifs et des cœurs pour les favoris.

## Technologies utilisées

- Angular
- TypeScript
- HTML
- CSS
- Font Awesome pour les icônes
- Git et GitHub
- GitHub Pages pour le déploiement

## Concepts Angular utilisés

Ce projet m'a permis de pratiquer plusieurs notions vues en cours :

- La création et l'utilisation des composants Angular.
- `@Input()` pour transmettre des données du composant parent vers le composant enfant.
- `@Output()` et `EventEmitter` pour envoyer des informations du composant enfant vers le parent.
- Les événements `(click)`, `(input)` et `(change)`.
- Les directives `@for` et `@if` pour afficher les données.
- L'interpolation `{{ }}` pour afficher des valeurs dynamiques.
- Les fonctions TypeScript, les tableaux, les conditions, le filtrage et le tri.

Pour la communication entre les composants, j'ai utilisé `@Input()` et `@Output()`, sans utiliser les Signals.

## Exécution du projet

Pour lancer l'application en local :

1. Cloner le dépôt :

   `git clone https://github.com/kmarhammami/showroom-auto.git`

2. Ouvrir le dossier du projet :

   `cd showroom-auto`

3. Installer les dépendances :

   `npm install`

4. Démarrer le serveur Angular :

   `npx ng serve`

5. Ouvrir `http://localhost:4200/` dans le navigateur.

## Liens du projet

**Dépôt GitHub :**  
https://github.com/kmarhammami/showroom-auto

**Application déployée :**  
https://kmarhammami.github.io/showroom-auto/

## Conclusion

Ce projet m'a permis de mieux comprendre le fonctionnement d'Angular et la communication entre les composants.

J'ai appris à relier le HTML au TypeScript, à manipuler des données avec différentes fonctions et à améliorer l'interface avec CSS.

C'était aussi une bonne occasion de pratiquer GitHub et de découvrir comment déployer une application Angular.

---

**Réalisé par : Kmar Hammami**  
**TP2 — Angular | Année universitaire 2026-2027**
