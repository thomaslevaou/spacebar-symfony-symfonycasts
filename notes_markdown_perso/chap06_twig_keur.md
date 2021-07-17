# Twig <3

Chaque classe PHP qui doit render des templates Twig doit hériter d'une classe de base.  
C'est pourquoi ici, on va faire hériter ArticleController de la classe AbstractController.  
Cette classe a pour utilité d'ajouter des raccourcis, comme par exemple `$this->render`, qu'on
va utiliser de cette manière dans ArticleController :
```PHP 
$comments = [
    'I ate a normal rock once. It did NOT taste like bacon!',
    'Woohoo! I\'m going on an all-asteroid diet!',
    'I like bacon too! Buy some from my site! bakinsomebacon.com',
];

return $this->render('article/show.html.twig', [
   'title' => ucwords(str_replace('-', ' ', $slug)), 
   'comments' => $comments
]);
```
(ucwords c'est juste "Upper Case Words" pour ajouter une majuscule à la première lettre de chaque mot).

Comme en Yii, les paramètres appelés après le render donnent des infos à la vue.   
Mais pour afficher les infos, au lieu de faire un `echo $title`, en Twig on fera
`{{ title }}`. On peut mettre des chaînes de caractère, des entiers, des expressions ternaires, etc. 
Si on veut faire des conditions ou des boucles, on va alors utiliser `{% %}`.
Pour les commentaires, on utilisera `{# #}`.  

Et donc en réaffichant http://localhost:8000/news/why-asterois-taste-like-bacon, on peut 
bien voir le résultat attendu en Twig.

En allant sur twig.symfony.com, dans la partie "Docs", on peut voir une section appelée 
"Twig Reference". Au sein de celle-ci, on peut y apercevoir une colonne "Tags", dans 
laquelle on peut voir tous les trucs qu'on peut mettre dans un `{% %}` en Twig.  
On peut également voir une colonne "Tests", qui ne permet non pas des tests unitaires, 
mais qui permet de vérifier certaines conditions dans des blocs de conditions telles que 
`{% if foo is defined %}` ou `{% if space is empty %}`.  
La colonne "Filters" permet d'ajouter des filtres comme `length` ou `keys`. Par exemple, 
pour afficher le nombre total de commentaires sur notre page d'exemple, on fera 
`{{ comments|length }}`. Et pour info, c'est possible d'enchaîner les filtres (si un jour 
c'est utile de faire ça).  

Noton qu'il est également possible de mettre en place un **système d'héritage** entre 
templates Twig. Pour le mettre en place ici, on ajoute en première ligne de notre 
template Twig un `{% extends 'base.html.twig' %}`. De plus, on doit également ajouter 
un `{% block body %}` après le extends, et un `{% endblock %}` en bas du fichier Twig. 
Et grâce à ça, le template sera directement inclus dans le `{% block body %}` de `base.html.twig`.

Comme montré dans le title de `base.html.twig`, il est possible de donner des contenus 
par défaut dans les templates, comme par exemple ici `{% block title %}Welcome!{% endblock %}`.
En indiquant dans show.html.twig un `{% block title %} Read {{ title }}{% endblock %}`, 
on a remplacé le titre par défaut.