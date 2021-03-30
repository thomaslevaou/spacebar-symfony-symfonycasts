# Generating URLS

Au lieu de mettre en dur une adresse dans la balise `<href>` du lien de la homepage dans notre template twig, on va
mettre dans celle-ci la Route indiquée dans l'annotation en haut de l'action "homepage" de ArticleController (pour 
des raisons de réutilisabilité évidentes).  
Pour ce faire, on va tout d'abord exécuter debug:router : `./bin/console debug:router`.  
Cette commande affiche une liste de toutes les routes de l'application.  
On peut notamment y voir nos deux routes : `/news/{slug}` et `/`. 