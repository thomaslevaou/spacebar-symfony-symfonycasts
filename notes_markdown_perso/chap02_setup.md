# Our Micro-App & PhpStorm Setup

Dans notre projet "the_spacebar", on peut remarque la présence du dossier `public`,
qui va contenir tous les fichiers publiquement accessible, à savoir index.php
uniquement pour le moment. Le fichier index.php ici s'appelle le **front controller** :
c'est le fichier exécuté quand on va sur n'importe quelle URL. En pratique, on ne s'en
servira pratiquement jamais. En fait, le dossier `public` ne nous sera que très peu utile
pour le moment.

Seuls deux dossiers vont nous intéresser pour le moment: **config** et **src**.
Dans config, on mettra, comme son nom l'indique, des fichiers de configuration.
Dans src, on mettra tout notre code PHP.


Dans le répertoire `vendor`, on peut remarquer que Composer a installé toutes les
dépendances liées à Symfony (spécifiées dans le fichier composer.json) dans le dossier
`symfony`.

Pour installer un meilleur serveur Web, on peut exécuter dans le projet les commandes
suivantes :
```
composer require server
./bin/console server:run
```

La page est alors visible, en HTTP cette fois (alors qu'elle était en HTTPS dans le chapitre précédent,
mais au moins maintenant je peux appliquer la même commande que dans le tuto).

Le fichier console du dossier bin/ est appelé avec cette dernière commande.  
Lorsqu'on appelle `./bin/console` sans paramètre, la console retourne une liste
de toutes les possibilités offertes par ce fichier en fonction des paramètres entrés ensuite.
Il y a notamment des aides pour le débogage, dont on parlera plus tard.

Pour poursuivre correctement le tutoriel, j'ai installé une version d'essai de PhpStorm.
Je ne suis pas sûr que je pourrai m'en servir au travail, mais je veux être au moins opérationnel
sur cet IDE d'un point de vue personnel, pour m'adapter rapidement si l'achat de cet IDE 
est validé au taff.  

Une fois cet IDE en place (`alt + F12` permettant d'ailleurs d'afficher la fenêtre de commande), 
j'ai installé Symfony Support, PHP Toolbox et PHP Annotations via File > Settings > Plugins, 
puis redémarré l'IDE.  

Je suis aussi retourné dans Settings, cette fois pour voir la nouvelle section "Symfony" dans
Languages & Frameworks > PHP, et coché "Enable Plugin for this Project", puis cliqué sur "Apply".

Après si ce n'est pas déjà renseigné, je dois renseigner le path de composer.json dans la section
"Composer".  
Grâce à tout ce setup, il devrait être plus simple de créer des classes et sources. 