# Web Debug Toolbar & the Profiler! 

On commence par installer profiler (qu'on appelle aussi
parfois Web Debug Toolbar): `composer require profiler --dev`  
Et donc la fameuse barre du bas que je voyais à Label est bien cette fameuse 
**Web Debug Toolbar**.  
Cette toolbar va être automatiquement ajoutée à toute page HTML valide pendant le 
développement (via l'ajout d'un appel AJAX en bas de chaque page qui la charge).  
Sur cette Toolbar, on peut voir notamment :  
- Le Contrôleur associé
- La route associée (générée par Twig ici)
- Le temps d'exécution
- Les détails du cache
- Quelques infos sur les templates

Plus on va installer de bibliothèques, plus on va avoir d'icônes sur la barre.  
En cliquant sur n'importe quelle des icônes, on arrive sur le **Profiler**.  

Sur celui-ci, on peut voir plusieurs liens sur le menu de gauche.  
Le lien "Twig" permet de voir quels templates Twig ont été rendered.  
On peut aussi voir des détails sur le cache, les Events, le routing etc.  

On a également un lien "Performance" permettant d'avoir un compte-rendu détaillé 
du chargement de chacun des éléments PHP. 

Le lien en haut de la page (ici en vert) permet de revenir sur la page de base.  

Le Profiler a aussi installé le component **var-dumper**.  
En gros ce truc permet d'avoir l'équivalent du var_dump utilisé avant,
mais en bien plus classe (coloré, indenté, etc). Surtout concernant les 
tableaux !! De plus, on peut expand certains classes pour en voir leur contenu 
comme pour les objets JavaScript qu'on affichait dans la console du 
navigateur.  
Pour ce faire, on va appliquer la commande `dump($comments, $this);` dans ArticleController dans notre cas. 

On peut également utiliser `dump()` dans un fichier Twig.  
En exécutant `{{ dump() }}` directement dans un fichier 
Twig, on peut également afficher une liste des variables
auxquelles on a accès. Bon le rendu est dégueulasse sur 
mon Firefox local, mais c'est pas grave car on va voir 
un autre truc meilleur après. 