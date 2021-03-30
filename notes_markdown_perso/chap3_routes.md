# Routes, Controllers, Pages, oh my!

On rappelle que :
- Une **Route** est une configuration qui définit l'URL d'une page;
- Un **Controller** est une fonction que nous écrivons pour construire le contenu de cette page. 

Notre application Symfony est principalement un petit système de route-controller.
Plus tard, on installera plus features quand on en aura besoin. 

Notre principal fichier de routing se situe dans `config/routes.yaml`.

Avant de passer à la suite, notons que j'ai du modifier les raccourcis dans PhpStorm pour 
que le commentage de lignes puisse se faire via `Ctrl + Shift + :` ou `Ctrl + :` pour 
un commentage d'une seule ligne (le / était trop souvent confondu avec un : sinon, au vu 
de la disposition de mon clavier).  

Après avoir décommenté le code présent dans routes.yaml, on peut voir que le code de cette page 
est analogue à ce qu'on peut voir en Vue: lorsque l'utilisateur va à la racine du projet,
la méthode appelée doit être la méthode `index` de DefaultController du dossier
`App\Controller\`.

On modifie cette route pour qu'elle soit adaptée à notre projet en `App\Controller\ArticleController::homepage`.
On créé alors notre classe Controller dans `src/Controller`,  via clic droit > New > PHP Class.  

Le namespace proposé par défaut étant pour nous valide, il suffit de remplir comme nom
"ArticleController" et on a bien la classe attendue en validant le formulaire. Notons que
PhpStorm propose directement d'ajouter chaque fichier créé à Git ! 

On peut alors créer la fonction homepage dans cette nouvelle classe. On peut appeler 
cette fonction une "action" (comme en Yii). C'est dans ce genre de fonction qu'on 
peut écrire des requêtes SQL, appels API, ou render un template.  

Néanmoins, une règle doit toujours être respectée: un contrôleur doit toujours retourner 
un **objet de réponse Symfony**.

Notons que lorsqu'on indique à PhpStorm que le retour est de type "Response", ce dernier
s'est occupé automatiquement d'ajouter le `use` nécessaire pour utiliser la classe.

Attention à bien utiliser l'objet Response Symfony ayant pour path `Symfony\Component\HttpFoundation\Response` !

Maintenant qu'une page d'accueil pour notre projet est configurée, il suffit de rafraîchir
la page sur localhost:8000 pour voir notre message dans homepage() affiché à l'écran.

A présent, au lieu de préciser à chaque fois les routes dans le yaml, on va pour ce 
faire utiliser des annotations.  
On a besoin pour cela d'exécuter tout d'abord la commande `composer require annotations`.  
Notons que cette commande a fait installer `sensio/framework-extra-bundle`, dont on reparlera
plus tard.  
On commente ensuite le contenu de routes.yaml, pour à la place ajouter un commentaire 
au-dessus de la fonction homepage() (pré-rempli automatiquement), dont on va remplacer
le pré-remplissage automatique par "Route", en sélectionnant la suggestion PHPStorm 
de `Symfony\Component\Routing`. Le simple fait d'avoir écrit...
```PHP
    /**
     * @Route("/")
     */
```
... au-dessus de la fonction nous évite d'avoir à créer la route dans le yaml.

Notons que pour certaines autres pages, on va noter le nom de l'URL, et la version URL
du titre d'une page s'appelle une **slug**.  

Pour éviter d'avoir à écrire des routes redondantes dans certains cas (par exemple 
dans le tuto, pour éviter d'avoir à écrire une route pour chaque article d'une base
d'articles), on peut générer automatiquement des slugs via la commande {slug} comme ci-dessous:
```PHP
    /**
     * @Route("/news/{slug}")
     */
```

En soi on aurait pu mettre n'importe quelle chaîne de caractères entre les accolades.  
Le fait d'avoir écrit "slug" est juste une convention de nommage.  
Cependant, il est important que cette chaîne de caractères soit la même que celle en 
paramètre de la méthode show() ici.  

Ceci permet d'avoir un affichage de page générique, selon le format suivant :
```PHP
    /**
     * @Route("/news/{slug}")
     */
    public function show($slug)
    {
        return new Response(sprintf(
            'Future page to show one space article: %s',
            $slug
        ));
    }
```

Et en fait, en appelant l'URL `http://localhost:8000/news/why-asterois-taste-like-bacon`,
la chaîne "why-asterois-taste-like-bacon" a été placée dans le slug, ce qui permet de
l'afficher dans le %s visible ici. 

On pourra voir à l'avenir comment faire matcher les routes avec des expressions 
régulières, des méthodes HTTP ou des noms de serveur. 