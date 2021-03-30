# Assets: CSS & JavaScript

Histoire d'avoir un peu plus de classe dans notre rendu visuel, on remplace le code 
HTML de `base.html.twig` par celui proposé sur le site.  
Comme en Yii, Symfony a aussi son propre cache, qui est parfois relou car garde en 
mémoire du code CSS supprimé depuis un moment. Pour virer le cache facilement et 
rapidement ici, on va exécuter la commande `rm -rf var/cache/dev`. Mais en général, 
Symfony rebuild son cache automatiquement si nécessaire. C'est juste dans les cas 
où on remplace un fichier par un fichier plus vieux que Symfony commence à ne plus 
mettre à jour son cache. 

On rappelle que les fichiers qui seront accessibles pour le navigateur (notamment le 
fichier CSS) doivent être rangés dans le dossier `public/`. C'est pourquoi on va
placer dans ce dossier les fichiers css, fonts et images.

Notons aussi que Symfony dispose aussi d'un outil appelé **Webpack Encore** qui 
permet de faire des trucs chouettes comme (entre autres) minifier les fichiers 
CSS et JS. On en reparlera plus tard.  

Pour le moment, pour intégrer les styles css, on va ajouter une nouvelle 
balise `<link>` dans le `{% block stylesheets %}` de `base.html.twig`. 
On mets les `<link>` dans ce block pour avoir plus de flexibilité 
si on veut appeler seulement certains styles sur certaines pages 
par exemple. On verra ça plus en détail plus tard.  

En attendant, dans File > Settings de PhpStorm, on peut aller dans 
Languages & Frameworks > PHP > Symfony et remplacer dans "Web Directory" 
le "web" par "public". Puis dans base.html.twig, on va remplacer le lien 
dans le href appelant font-awesome par `href="{{ asset('css/font-awesome.css') }}"`, 
de même pour celui de styles par `href="{{ asset('css/styles.css') }}"`. 
D'une manière générale, il est recommandé d'appeler tous les liens 
statiques css par une fonction `asset()`. Pour le moment cette fonction 
ne change rien au résultat. Mais à terme, cette fonction permettra 
plus de flexibilité pour stocker efficacement nos paths, donc autant 
avoir les bons réflexes dès le début.  
Notons qu'on peut aussi bien entendu appliquer asset() pour le lien
des images.  

Au fait: pour que la fonction asset() marche, on doit d'abord installer 
asset, via la commande `composer require asset`.  
