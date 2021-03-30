# The Twig Recipe


Quand la Response d'une fonction Symfony doit être au format HTML, il peut être assez 
pratique d'utiliser la Recipe **Twig**.  
L'installation de Twig s'effectue via la commande `composer require twig`.  

Notons qu'à partir de maintenant, le front va être un mélange d'HTML classique et de 
d'API avec un front JavaScript.  
On peut noter la présence d'un `Configuring symfony/twig-bundle (>=4.4): From github.com/symfony/recipes:master`
lors du `composer install`, ce qui indique la mise en place de la Recipe lors de
l'installation de Twig.  

En faisant un `git status`, on peut alors remarquer que Twig a ajouté quelques fichiers, 
comme toute Recipe. En particulier, cette Recipe a modifié le contenu de
`config/bundles.php`. Ce fichier correspond un peu au système de plugin de Symfony. 
A chaque ajout de Recipe contenant potentiellement des bundles pouvant être utile ici, 
Flex l'ajoute dans ce fichier pour qu'il soit utilisable automatiquement.  

Notre Recipe a également créé un dossier `templates` dans notre projet, qui va contenir 
comme son nom l'indique : des templates. Avec un fichier base.html.twig qu'on va bientôt
utiliser. La config de Twig a aussi été ajoutée dans un nouveau fichier 
`config/packages/twig.yaml`. Mais même si ce fichier a été ajouté par Flex, on reste 
libre de le modifier quand on veut si besoin. Par exemple, ce fichier permet de ne plus 
être obligé de stocker les twig dans le dossier `templates/`.  
Notons que `%kernel.project_dir%/` est juste une variable d'environnement pour représenter
le dossier racine du projet.
 
On peut donc bien voir que la mentalité de Flex peut se résumer à "install la biblio, 
je m'occupe du reste" : Flex s'assure à la fois de l'installation de la biblio et de 
la config associée. 