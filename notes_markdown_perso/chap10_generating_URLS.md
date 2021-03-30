# Generating URLS

Au lieu de mettre en dur une adresse dans la balise `<href>` du lien de la homepage dans notre template twig, on va
mettre dans celle-ci la Route indiquée dans l'annotation en haut de l'action "homepage" de ArticleController (pour 
des raisons de réutilisabilité évidentes).  

Pour ce faire, on va tout d'abord exécuter debug:router : `./bin/console debug:router`.  
Cette commande affiche une liste de toutes les routes de l'application.  
On peut notamment y voir nos deux routes : `/news/{slug}` et `/`.    

On pouvait un peu s'en douter en étant attentif sur la Web Debug Toolbar, mais chaque Route a son **nom interne**.  
Par exemple ici, la page avec le slug a pour nom interne `app_article_show`. Lorsqu'on utilise des annotations, 
Symfony crée le nom interne pour nous.  

Pour éviter de mettre un lien en dur, il suffit de coller le nom interne via la fonction path dans le href de l'image 
d'accueil : `href="{{ path('app_article_homepage') }}"`.  
Mais se baser sur le nom interne auto-généré n'est pas optimal, car il peut changer si on renomme certaines parties du code.  
Pour pallier à ce problème, on va explicitement nommer la route dans le deuxième paramètre de l'annotation @Route :
`@Route("/", name="app_homepage")` et appeler le lien href avec ce nouveau nom: `href="{{ path('app_homepage') }}"`.  

Pour les routes avec une slug, on doit préciser la valeur de celle-ci via le deuxième argument de path, qu'on transmet 
d'une manière analogue à ce qu'on pouvait faire avec $t en Vue: 
`href="{{ path('article_show', { slug: 'why-asteroids-taste-like-bacon'}) }}"`