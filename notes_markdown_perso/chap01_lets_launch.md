# Symfony 4: Let's Launch !

A la différence de ses prédecesseurs, Symfony 4 se présente comme un micro-framework
dont la taille augmente au fur et à mesure que le projet évolue.

## Rappels sur Composer :
Composer est le principal gestionnaire de paquets PHP, à la manière de npm en Node
ou pip en Python.  
Pour l'installer, le meilleur tuto que j'ai trouvé est le suivant: https://linuxize.com/post/how-to-install-and-use-composer-on-debian-10/ <br/>
L'équivalent de npm update est `composer self-update`.  
Pour rendre compatible Composer avec ma version de PHP (7.3), j'ai également rentré la commande `sudo apt-get install php7.3-xml`.  
On peut créer un projet avec Composer via la commande `composer create-project symfony/skeleton the_spacebar '4.4.*'`.  
Plus précisément, cette commande clone le projet symfony/skeleton, puis exécute composer install
pour télécharger ses dépendances.

Ensuite, on peut aller dans le répertoire du projet, soit ici: `cd the_spacebar/`  
Puis on doit initialiser dedans nous-mêmes un repo git : `git init`

Ici, j'ai alors du installer une CLI Symfony en exécutant `wget https://get.symfony.com/cli/installer -O - | bash`

Puis après, j'ai supprimé puis réinstaller le projet : `rm -rf the_spacebar`
`composer create-project symfony/skeleton the_spacebar '4.4.*'`

Puis je suis revenu dans le projet, et mis à jour composer :
```
cd the_spacebar
composer install
```

En tapant la commande `php bin/console about`, j'ai pu vérifier que j'étais bien
en Symfony 4.4 et PHP 7.3.


Comme on est en développement local ici (il faudra repasser ici pour voir comment se débrouiller en prod),
le plus simple pour le moment est d'exécuter la commande suivante :
`symfony server:start`

En précédant la première fois de la commande permettant d'avoir un certificat en local `symfony server:ca:install`

J'ai du un peu bricoler par rapport au tuto, mais le chapitre 2 a rétabli des commandes similaires
à celles du tuto.